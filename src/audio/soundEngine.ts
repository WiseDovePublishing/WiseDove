// Web Audio API Synthesizer for 1990s Multimedia CD-ROM & Sound Blaster 16 style sounds
class RetroAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private currentMusicLoopTimer: number | null = null;
  private isMusicPlaying: boolean = false;
  private currentTrack: string | null = null;

  constructor() {
    // AudioContext will initialize on first user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.musicGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();

      this.musicGain.gain.value = 0.22;
      this.sfxGain.gain.value = 0.35;
      this.masterGain.gain.value = this.isMuted ? 0 : 1;

      this.musicGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 1, this.ctx.currentTime);
    }
  }

  public getMuted() {
    return this.isMuted;
  }

  // --- SOUND EFFECTS ---
  public playClick() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.05);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 0.05);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.05);
  }

  public playStarJingle() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + i * 0.09;

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.2, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(noteTime);
      osc.stop(noteTime + 0.28);
    });
  }

  public playLuckDing() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(784, t); // G5
    osc.frequency.setValueAtTime(1174, t + 0.08); // D6

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.45);
  }

  public playGlitchStatic() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    // White noise burst for awkward glitch
    const bufferSize = this.ctx.sampleRate * 0.18;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.6;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(t);
    noise.stop(t + 0.2);

    // Awkward tape scratch tone
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.15);
    oscGain.gain.setValueAtTime(0.3, t);
    oscGain.gain.linearRampToValueAtTime(0.001, t + 0.15);
    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.16);
  }

  public playCdSpin() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.linearRampToValueAtTime(450, t + 0.2);
    osc.frequency.linearRampToValueAtTime(300, t + 0.35);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.36);
  }

  public playCasinoFanfare() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const t = this.ctx.currentTime;
    const chords = [
      { notes: [261.63, 329.63, 392.0], delay: 0 },
      { notes: [293.66, 369.99, 440.0], delay: 0.12 },
      { notes: [349.23, 440.0, 523.25], delay: 0.24 },
      { notes: [392.0, 493.88, 587.33, 783.99], delay: 0.38 },
    ];
    chords.forEach(c => {
      c.notes.forEach(f => {
        if (!this.ctx || !this.sfxGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(f, t + c.delay);
        gain.gain.setValueAtTime(0.12, t + c.delay);
        gain.gain.exponentialRampToValueAtTime(0.001, t + c.delay + 0.3);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t + c.delay);
        osc.stop(t + c.delay + 0.35);
      });
    });
  }

  // --- SYNTHESIZED BGM LOOPS ---
  public playMusic(track: 'cheerful' | 'stadium' | 'dramatic' | 'silence') {
    this.initContext();
    if (this.currentTrack === track && this.isMusicPlaying) return;
    this.stopMusic();

    if (track === 'silence') {
      this.currentTrack = 'silence';
      return;
    }

    this.currentTrack = track;
    this.isMusicPlaying = true;

    if (track === 'cheerful') {
      this.startCheerfulLoop();
    } else if (track === 'stadium') {
      this.startStadiumLoop();
    } else if (track === 'dramatic') {
      this.startDramaticLoop();
    }
  }

  public stopMusic() {
    this.isMusicPlaying = false;
    this.currentTrack = null;
    if (this.currentMusicLoopTimer !== null) {
      window.clearTimeout(this.currentMusicLoopTimer);
      this.currentMusicLoopTimer = null;
    }
  }

  private startCheerfulLoop() {
    if (!this.isMusicPlaying || !this.ctx || !this.musicGain) return;

    // Cheerful 1994 Christian Educational MIDI Polka/Ragtime (C Major / G Major bouncy tune)
    const bpm = 128;
    const beat = 60 / bpm;
    const t = this.ctx.currentTime + 0.05;

    // Bassline (triangle) & Melody (pulse/square)
    const melodyNotes: [number, number, number][] = [
      // freq, startBeat, duration
      // Measure 1
      [523.25, 0, 0.4], // C5
      [659.25, 0.5, 0.4], // E5
      [783.99, 1.0, 0.7], // G5
      [880.0, 2.0, 0.4], // A5
      [783.99, 2.5, 0.4], // G5
      [659.25, 3.0, 0.8], // E5
      // Measure 2
      [587.33, 4.0, 0.4], // D5
      [659.25, 4.5, 0.4], // E5
      [587.33, 5.0, 0.7], // D5
      [523.25, 6.0, 0.9], // C5
      // Measure 3
      [659.25, 8.0, 0.4], // E5
      [783.99, 8.5, 0.4], // G5
      [1046.5, 9.0, 0.8], // C6
      [987.77, 10.0, 0.4], // B5
      [880.0, 10.5, 0.4], // A5
      [783.99, 11.0, 0.8], // G5
      // Measure 4 (Resolution)
      [880.0, 12.0, 0.4], // A5
      [783.99, 12.5, 0.4], // G5
      [659.25, 13.0, 0.4], // E5
      [587.33, 13.5, 0.4], // D5
      [523.25, 14.0, 1.4], // C5
    ];

    const bassNotes: [number, number, number][] = [
      // C - G oom-pah
      [130.81, 0, 0.3], [196.0, 1, 0.3], [130.81, 2, 0.3], [196.0, 3, 0.3],
      [146.83, 4, 0.3], [196.0, 5, 0.3], [130.81, 6, 0.3], [196.0, 7, 0.3],
      [130.81, 8, 0.3], [196.0, 9, 0.3], [174.61, 10, 0.3], [196.0, 11, 0.3],
      [174.61, 12, 0.3], [196.0, 13, 0.3], [130.81, 14, 0.7], [130.81, 15, 0.3],
    ];

    melodyNotes.forEach(([freq, startBeat, dur]) => {
      if (!this.ctx || !this.musicGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + startBeat * beat;
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.08, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur * beat * 0.95);

      osc.connect(gain);
      gain.connect(this.musicGain);
      osc.start(noteTime);
      osc.stop(noteTime + dur * beat);
    });

    bassNotes.forEach(([freq, startBeat, dur]) => {
      if (!this.ctx || !this.musicGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + startBeat * beat;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.14, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.01, noteTime + dur * beat * 0.9);

      osc.connect(gain);
      gain.connect(this.musicGain);
      osc.start(noteTime);
      osc.stop(noteTime + dur * beat);
    });

    const loopDurationMs = 16 * beat * 1000;
    this.currentMusicLoopTimer = window.setTimeout(() => {
      if (this.isMusicPlaying && this.currentTrack === 'cheerful') {
        this.startCheerfulLoop();
      }
    }, loopDurationMs - 50);
  }

  private startStadiumLoop() {
    if (!this.isMusicPlaying || !this.ctx || !this.musicGain) return;
    const bpm = 135;
    const beat = 60 / bpm;
    const t = this.ctx.currentTime + 0.05;

    // Organ-style stadium fanfare chords
    const stadiumRiffs: [number[], number, number][] = [
      [[261.63, 329.63, 392.0], 0, 0.3], // C
      [[261.63, 329.63, 392.0], 0.5, 0.3],
      [[261.63, 329.63, 392.0], 1.0, 0.3],
      [[349.23, 440.0, 523.25], 1.5, 0.8], // F
      [[392.0, 493.88, 587.33], 2.5, 1.2], // G
      // Charge fanfare!
      [[261.63, 329.63, 392.0], 4.0, 0.3],
      [[329.63, 392.0, 523.25], 4.5, 0.3],
      [[392.0, 523.25, 659.25], 5.0, 0.3],
      [[523.25, 659.25, 783.99], 5.5, 1.8], // High C
    ];

    stadiumRiffs.forEach(([notes, startBeat, dur]) => {
      notes.forEach(f => {
        if (!this.ctx || !this.musicGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = t + startBeat * beat;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, noteTime);
        gain.gain.setValueAtTime(0.06, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur * beat * 0.95);
        osc.connect(gain);
        gain.connect(this.musicGain);
        osc.start(noteTime);
        osc.stop(noteTime + dur * beat);
      });
    });

    const loopDurationMs = 8 * beat * 1000;
    this.currentMusicLoopTimer = window.setTimeout(() => {
      if (this.isMusicPlaying && this.currentTrack === 'stadium') {
        this.startStadiumLoop();
      }
    }, loopDurationMs - 50);
  }

  private startDramaticLoop() {
    if (!this.isMusicPlaying || !this.ctx || !this.musicGain) return;
    const bpm = 100;
    const beat = 60 / bpm;
    const t = this.ctx.currentTime + 0.05;

    // Minor key detective / loan shark suspense
    const notes: [number, number, number][] = [
      [110, 0, 0.8], // A2
      [164.81, 1, 0.8], // E3
      [155.56, 2, 0.8], // Eb3
      [146.83, 3, 0.8], // D3
      [130.81, 4, 0.8], // C3
      [123.47, 5, 0.8], // B2
      [116.54, 6, 0.8], // Bb2
      [110, 7, 0.8], // A2
    ];

    notes.forEach(([f, sb, dur]) => {
      if (!this.ctx || !this.musicGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + sb * beat;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, noteTime);
      gain.gain.setValueAtTime(0.09, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur * beat * 0.9);
      osc.connect(gain);
      gain.connect(this.musicGain);
      osc.start(noteTime);
      osc.stop(noteTime + dur * beat);
    });

    const loopDurationMs = 8 * beat * 1000;
    this.currentMusicLoopTimer = window.setTimeout(() => {
      if (this.isMusicPlaying && this.currentTrack === 'dramatic') {
        this.startDramaticLoop();
      }
    }, loopDurationMs - 50);
  }
}

export const soundEngine = new RetroAudioEngine();
