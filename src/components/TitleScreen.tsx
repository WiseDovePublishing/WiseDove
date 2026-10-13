import React from 'react';
import { soundEngine } from '../audio/soundEngine';
import { Sparkles, BookOpen, Volume2, Star, ShieldCheck, Play } from 'lucide-react';

interface TitleScreenProps {
  onStartGame: () => void;
  onOpenHandbook: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  onStartGame,
  onOpenHandbook,
}) => {
  const handleStart = () => {
    soundEngine.playCdSpin();
    soundEngine.playMusic('cheerful');
    onStartGame();
  };

  const handleHandbook = () => {
    soundEngine.playClick();
    onOpenHandbook();
  };

  return (
    <div className="relative w-full bg-linear-to-b from-[#38ada9] via-[#079992] to-[#0a3d62] text-white p-4 sm:p-6 flex flex-col items-center justify-between min-h-[520px] sm:min-h-[560px] border-4 border-gray-100 border-r-gray-900 border-b-gray-900 shadow-[6px_6px_0px_#000]">
      {/* 90s Dither / Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_3px)]" />

      {/* Top Banner / Corporate Sponsor */}
      <div className="text-center z-10 w-full">
        <div className="inline-block bg-[#F8EFBA] text-[#B33939] border-2 border-black px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#000] mb-2 font-mono">
          Presented by The American Values Software Company
        </div>
        <div className="text-[10px] sm:text-[11px] text-cyan-200 font-serif italic">
          &quot;Building Tomorrow&apos;s Character, Today!&quot; • Windows 3.1 &amp; Macintosh CD-ROM
        </div>
      </div>

      {/* Main Title Badge */}
      <div className="relative my-4 z-10 text-center max-w-xl">
        {/* Floating Stars */}
        <div className="absolute -top-6 -left-4 text-yellow-300 animate-spin">
          <Star className="w-8 h-8 fill-yellow-400" />
        </div>
        <div className="absolute -top-6 -right-4 text-yellow-300 animate-spin">
          <Star className="w-8 h-8 fill-yellow-400" />
        </div>

        <div className="bg-linear-to-b from-yellow-300 via-amber-300 to-yellow-500 border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0px_#000] rotate-[-1deg]">
          <div className="text-red-700 font-extrabold text-xs sm:text-sm tracking-widest font-mono uppercase">
            ★ AN INTERACTIVE MORAL LESSON ★
          </div>
          <h1 className="font-['Fredoka',sans-serif] text-3xl sm:text-5xl font-black text-blue-900 tracking-tight leading-none drop-shadow-[2px_2px_0px_#FFF] my-1">
            JUST SAY NO TO THE JACKPOT!
          </h1>
          <div className="text-base sm:text-lg font-bold text-red-800 font-serif italic mt-1">
            A Christian Moral Adventure for Today&apos;s Youth!
          </div>
        </div>

        {/* Setting Description */}
        <div className="mt-3 bg-black/60 border border-yellow-300 p-2 text-xs text-yellow-200 font-mono shadow-md">
          FEATURING: Good Ol&apos; Johnny in Pleasantville, USA! (Where sports betting apps have replaced literally everything fun).
        </div>
      </div>

      {/* Good Ol' Johnny Teaser Art & Luck Disclaimer */}
      <div className="z-10 flex flex-col items-center gap-2 max-w-md w-full">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-2 border border-white/30 rounded">
          <div className="w-12 h-12 bg-amber-100 rounded-full border-2 border-black flex items-center justify-center shrink-0">
            <span className="text-2xl">👦</span>
          </div>
          <div className="text-left text-xs text-white">
            <span className="font-bold text-yellow-300 block font-mono">Good Ol&apos; Johnny Says:</span>
            &quot;Gee whiz! Follow me through four moral dilemmas in Pleasantville!&quot;
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
          <button
            type="button"
            onClick={handleStart}
            className="flex-1 bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-['Press_Start_2P',monospace] text-xs sm:text-sm py-3 px-4 border-4 border-white border-r-gray-950 border-b-gray-950 shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>START ADVENTURE</span>
          </button>

          <button
            type="button"
            onClick={handleHandbook}
            className="bg-[#2C3E50] hover:bg-[#34495E] text-white font-bold text-xs py-3 px-4 border-4 border-white border-r-gray-950 border-b-gray-950 shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000] flex items-center justify-center gap-2 cursor-pointer font-mono"
          >
            <BookOpen className="w-4 h-4 text-yellow-400" />
            <span>CITIZEN HANDBOOK</span>
          </button>
        </div>
      </div>

      {/* 90s CD-ROM System Requirements Footer */}
      <div className="z-10 text-[9px] text-cyan-200 font-mono text-center border-t border-cyan-400/40 pt-2 w-full mt-3">
        SYSTEM REQUIREMENTS: 486 DX2-66 • 8MB RAM • 2x CD-ROM DRIVE • SOUND BLASTER 16 • COLOR SVGA MONITOR
        <div className="text-[8px] text-cyan-300/80 mt-0.5">
          © 1994 The American Values Software Company. All Rights Reserved. Not Affiliated with FanFortune or CrownDraft Holdings.
        </div>
      </div>
    </div>
  );
};
