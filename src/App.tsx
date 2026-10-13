/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { TitleScreen } from './components/TitleScreen';
import { SceneIllustration } from './components/SceneIllustration';
import { DialogueBox } from './components/DialogueBox';
import { LuckMeter } from './components/LuckMeter';
import { CertificateModal } from './components/CertificateModal';
import { CharacterHandbookModal } from './components/CharacterHandbookModal';
import { DIALOGUE_SCRIPT, LESSON_SCENES } from './data/storyData';
import { DialogueChoice, DialogueStep } from './types/game';
import { soundEngine } from './audio/soundEngine';
import {
  Volume2,
  VolumeX,
  RotateCcw,
  BookOpen,
  Monitor,
  HelpCircle,
  Sparkles,
  Info,
} from 'lucide-react';

export default function App() {
  const [inGame, setInGame] = useState<boolean>(false);
  const [currentStepId, setCurrentStepId] = useState<string>('l1_step1');
  const [luckValue, setLuckValue] = useState<number>(52);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [showHandbook, setShowHandbook] = useState<boolean>(false);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [crtFilter, setCrtFilter] = useState<boolean>(true);
  const [luckComment, setLuckComment] = useState<string>('Looking good, Johnny! Your luck is 52 today!');

  const currentStep: DialogueStep = useMemo(() => {
    return DIALOGUE_SCRIPT[currentStepId] || DIALOGUE_SCRIPT['l1_step1'];
  }, [currentStepId]);

  // Determine which background scene to display based on step ID
  const currentSceneId: 'arcade' | 'store' | 'stadium' | 'ricky' = useMemo(() => {
    if (currentStepId.startsWith('l1_')) return 'arcade';
    if (currentStepId.startsWith('l2_')) return 'store';
    if (currentStepId.startsWith('l3_')) return 'stadium';
    if (currentStepId.startsWith('l4_') || currentStepId.startsWith('finale_')) return 'ricky';
    return 'arcade';
  }, [currentStepId]);

  // Manage synthesized BGM changes depending on narrative beats
  useEffect(() => {
    if (!inGame) return;

    if (currentStepId === 'finale_awkward_silence' || currentStepId === 'finale_the_question') {
      // Abrupt silence for comic effect
      soundEngine.playMusic('silence');
    } else if (currentStepId === 'finale_abrupt_banner') {
      soundEngine.playCasinoFanfare();
    } else if (currentStepId.startsWith('l3_')) {
      soundEngine.playMusic('stadium');
    } else if (currentStepId.startsWith('l4_step6') || currentStepId.startsWith('l4_inconvenient_sal')) {
      soundEngine.playMusic('dramatic');
    } else {
      soundEngine.playMusic('cheerful');
    }
  }, [currentStepId, inGame]);

  const handleStartGame = () => {
    setInGame(true);
    setCurrentStepId('l1_step1');
    const startingLuck = Math.floor(Math.random() * 11) + 48; // 48 - 58
    setLuckValue(startingLuck);
    setLuckComment(`Looking good, Johnny! Your luck is ${startingLuck} today!`);
    setShowCertificate(false);
  };

  const handleRestart = () => {
    soundEngine.playClick();
    handleStartGame();
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundEngine.setMuted(nextMuted);
  };

  const handleJiggleLuck = () => {
    // Cosmetic fluctuation between 41 and 59
    const delta = Math.floor(Math.random() * 7) - 3;
    const newVal = Math.min(60, Math.max(40, luckValue + (delta === 0 ? 1 : delta)));
    setLuckValue(newVal);
    if (newVal > 52) {
      setLuckComment(`Golly! Luck shifted to ${newVal}! A bright attitude pays off!`);
    } else {
      setLuckComment(`Uh-oh! Down to ${newVal}! Stay morally vigilant!`);
    }
  };

  const handleSelectChoice = (choice: DialogueChoice) => {
    // Handle special finish step
    if (choice.nextStepId === 'show_certificate') {
      setShowCertificate(true);
      return;
    }

    // Occasional random luck wobble
    if (choice.luckDelta !== undefined) {
      const nextLuck = Math.min(60, Math.max(40, luckValue + choice.luckDelta));
      setLuckValue(nextLuck);
    } else if (Math.random() > 0.5) {
      const randomShift = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3 + 1);
      const nextLuck = Math.min(60, Math.max(40, luckValue + randomShift));
      setLuckValue(nextLuck);
    }

    if (DIALOGUE_SCRIPT[choice.nextStepId]?.luckComment) {
      setLuckComment(DIALOGUE_SCRIPT[choice.nextStepId].luckComment || '');
    }

    // Check if moving to an educational conclusion step -> play star jingle
    if (DIALOGUE_SCRIPT[choice.nextStepId]?.lessonCard) {
      soundEngine.playStarJingle();
    }

    setCurrentStepId(choice.nextStepId);
  };

  // Quick jump for testing / player convenience
  const handleJumpToLesson = (lessonNum: number) => {
    soundEngine.playClick();
    if (lessonNum === 1) setCurrentStepId('l1_step1');
    if (lessonNum === 2) setCurrentStepId('l2_step1');
    if (lessonNum === 3) setCurrentStepId('l3_step1');
    if (lessonNum === 4) setCurrentStepId('l4_step1');
  };

  return (
    <div className="min-h-screen bg-[#008080] p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center font-sans">
      {/* 1994 WINDOWS 3.1 / CD-ROM WINDOW FRAME */}
      <div className="w-full max-w-4xl bg-[#C0C0C0] border-4 border-gray-100 border-r-gray-900 border-b-gray-900 shadow-[8px_8px_0px_#000] flex flex-col overflow-hidden relative">
        {/* Optional Retro Scanline CRT Overlay */}
        {crtFilter && (
          <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_1px,transparent_1px,transparent_3px)] z-40" />
        )}

        {/* WINDOW TITLE BAR */}
        <div className="bg-[#000080] text-white px-2 py-1.5 flex items-center justify-between font-bold text-xs sm:text-sm select-none border-b-2 border-gray-700 shadow-[inset_1px_1px_0px_#fff]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-yellow-400 border border-black inline-block text-[9px] text-center text-black font-black leading-3">
              ★
            </span>
            <span className="font-['Press_Start_2P',monospace] text-[9px] sm:text-[11px] truncate tracking-wider">
              JUST SAY NO TO THE JACKPOT! (1994 CD-ROM)
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={handleToggleMute}
              className="bg-[#C0C0C0] text-black px-1.5 py-0.5 border border-white border-r-gray-800 border-b-gray-800 hover:bg-gray-200 cursor-pointer flex items-center gap-0.5"
              title={isMuted ? 'Unmute MIDI Synth' : 'Mute MIDI Synth'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-700" /> : <Volume2 className="w-3.5 h-3.5 text-green-800" />}
            </button>

            {/* CRT Toggle */}
            <button
              type="button"
              onClick={() => setCrtFilter(!crtFilter)}
              className={`px-1.5 py-0.5 border border-white border-r-gray-800 border-b-gray-800 text-[10px] font-mono cursor-pointer ${
                crtFilter ? 'bg-[#000080] text-yellow-300' : 'bg-[#C0C0C0] text-black'
              }`}
              title="Toggle CRT Scanline Effect"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>

            {/* Standard Window Buttons */}
            <button
              type="button"
              onClick={handleRestart}
              className="bg-[#C0C0C0] text-black px-1.5 py-0.5 font-bold border border-white border-r-gray-800 border-b-gray-800 hover:bg-gray-200 cursor-pointer text-xs"
              title="Restart"
            >
              _
            </button>
            <button
              type="button"
              onClick={() => setInGame(false)}
              className="bg-[#C0C0C0] text-black px-1.5 py-0.5 font-bold border border-white border-r-gray-800 border-b-gray-800 hover:bg-red-400 cursor-pointer text-xs"
              title="Return to Title"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 1994 MENU BAR */}
        <div className="bg-[#C0C0C0] border-b-2 border-gray-400 px-2 py-1 flex flex-wrap items-center gap-3 text-xs text-black font-medium select-none shadow-[inset_1px_1px_0px_#fff]">
          <button
            type="button"
            onClick={() => setInGame(false)}
            className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer rounded-xs"
          >
            <u>F</u>ile
          </button>

          <button
            type="button"
            onClick={() => setShowHandbook(true)}
            className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer rounded-xs flex items-center gap-1"
          >
            <BookOpen className="w-3 h-3 text-blue-800" />
            <span><u>C</u>itizen Handbook</span>
          </button>

          {/* Jump to Lessons dropdown / shortcuts */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-gray-700 border-l border-gray-400 pl-2">
            <span className="font-mono text-gray-500">Jump:</span>
            <button
              type="button"
              onClick={() => handleJumpToLesson(1)}
              className="hover:underline px-1 hover:text-blue-900 cursor-pointer"
            >
              L1:Arcade
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleJumpToLesson(2)}
              className="hover:underline px-1 hover:text-blue-900 cursor-pointer"
            >
              L2:Store
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleJumpToLesson(3)}
              className="hover:underline px-1 hover:text-blue-900 cursor-pointer"
            >
              L3:Stadium
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleJumpToLesson(4)}
              className="hover:underline px-1 hover:text-blue-900 cursor-pointer"
            >
              L4:Ricky
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowAboutModal(true)}
            className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer rounded-xs ml-auto flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3 text-gray-700" />
            <span><u>H</u>elp / About</span>
          </button>
        </div>

        {/* MAIN CD-ROM VIEWPORT */}
        <div className="p-2 sm:p-4 bg-linear-to-b from-[#2d3436] to-[#1e272e] flex flex-col gap-3">
          {!inGame ? (
            /* Title Screen */
            <TitleScreen
              onStartGame={handleStartGame}
              onOpenHandbook={() => setShowHandbook(true)}
            />
          ) : (
            /* Active Game Screen */
            <>
              {/* Top Row: Scene Illustration + Luck Meter */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                <div className="md:col-span-2">
                  <SceneIllustration sceneId={currentSceneId} />
                </div>
                <div className="flex flex-col justify-between">
                  <LuckMeter
                    luckValue={luckValue}
                    onJiggleLuck={handleJiggleLuck}
                    narratorComment={luckComment}
                  />

                  {/* 1994 Christian Values Software Company Badge */}
                  <div className="mt-2 bg-[#D4D0C8] border-2 border-white border-r-gray-800 border-b-gray-800 p-2 text-center shadow-xs">
                    <div className="text-[10px] font-bold text-blue-900 font-mono uppercase">
                      The American Values Software Co.
                    </div>
                    <div className="text-[9px] text-gray-600 font-serif italic">
                      &quot;Building Tomorrow&apos;s Character, Today!&quot;
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1 text-[9px] text-red-700 font-bold">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>Pleasantville Moral Curriculum</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Illustrated Dialogue Box with Choices */}
              <DialogueBox
                speakerId={currentStep.speaker}
                speakerName={currentStep.speakerName}
                mood={currentStep.mood}
                text={currentStep.text}
                subtext={currentStep.subtext}
                lessonCard={currentStep.lessonCard}
                isGlitching={currentStep.isNarratorGlitch}
                choices={currentStep.choices}
                onSelectChoice={handleSelectChoice}
              />
            </>
          )}
        </div>

        {/* 1994 STATUS BAR */}
        <div className="bg-[#C0C0C0] border-t-2 border-gray-400 px-3 py-1 flex items-center justify-between text-[10px] text-gray-800 font-mono select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-ping" />
            <span>CD-ROM READY [DRIVE D:\VALUES94.EXE]</span>
          </div>
          <div className="flex items-center gap-3">
            <span>SOUND BLASTER 16: ACTIVE</span>
            <span>MEM: 580K CONV</span>
          </div>
        </div>
      </div>

      {/* CERTIFICATE MODAL (GRADUATION) */}
      {showCertificate && (
        <CertificateModal
          onRestart={handleRestart}
          luckValue={luckValue}
        />
      )}

      {/* CHARACTER HANDBOOK MODAL */}
      {showHandbook && (
        <CharacterHandbookModal
          onClose={() => setShowHandbook(false)}
        />
      )}

      {/* ABOUT / HELP MODAL */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#C0C0C0] border-4 border-gray-100 border-r-gray-800 border-b-gray-800 max-w-md w-full p-4 shadow-[6px_6px_0px_#000] text-black">
            <div className="bg-[#000080] text-white px-2 py-1 font-bold text-xs flex justify-between items-center mb-2">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-yellow-300" />
                About: Just Say No to the Jackpot!
              </span>
              <button
                type="button"
                onClick={() => setShowAboutModal(false)}
                className="bg-[#C0C0C0] text-black px-1.5 font-bold border border-white border-r-gray-800 border-b-gray-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-2 text-gray-800 leading-relaxed font-sans">
              <p>
                <strong>Just Say No to the Jackpot!</strong> is a satirical 1990s Christian educational CD-ROM adventure inspired by classic moral instruction games.
              </p>
              <p>
                Take the role of Good Ol&apos; Johnny in Pleasantville, USA. The game insists that gambling is purely a matter of personal moral fortitude, even as predatory corporations FanFortune and CrownDraft swallow every business in town.
              </p>
              <div className="bg-yellow-100 border border-yellow-400 p-2 text-[11px]">
                <strong>The Luck Meter:</strong> Prominent, cheerful, and 100% useless! Just like the illusion of control in modern sports wagering apps.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAboutModal(false)}
              className="mt-3 w-full bg-[#008080] text-white font-bold py-1 text-xs border-2 border-white border-r-gray-800 border-b-gray-800 cursor-pointer"
            >
              Back to Moral Instruction
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
