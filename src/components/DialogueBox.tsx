import React from 'react';
import { CharacterId, CharacterMood, DialogueChoice } from '../types/game';
import { CharacterPortrait } from './CharacterPortrait';
import { soundEngine } from '../audio/soundEngine';
import { Award, AlertOctagon, HelpCircle } from 'lucide-react';

interface DialogueBoxProps {
  speakerId: CharacterId;
  speakerName: string;
  mood: CharacterMood;
  text: string;
  subtext?: string;
  lessonCard?: string;
  isGlitching?: boolean;
  choices?: DialogueChoice[];
  onSelectChoice: (choice: DialogueChoice) => void;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  speakerId,
  speakerName,
  mood,
  text,
  subtext,
  lessonCard,
  isGlitching = false,
  choices = [],
  onSelectChoice,
}) => {
  const handleChoiceClick = (choice: DialogueChoice) => {
    if (choice.isInconvenient) {
      soundEngine.playGlitchStatic();
    } else {
      soundEngine.playClick();
    }
    onSelectChoice(choice);
  };

  return (
    <div className="bg-[#C0C0C0] border-4 border-gray-100 border-r-gray-800 border-b-gray-800 p-2 sm:p-3 shadow-[4px_4px_0px_#000] text-black">
      {/* Educational Moral Ribbon / Award Card (if present) */}
      {lessonCard && (
        <div className="mb-2 bg-linear-to-r from-yellow-300 via-amber-200 to-yellow-300 border-2 border-black p-2 shadow-[2px_2px_0px_#000] flex items-center justify-center gap-2 animate-bounce">
          <Award className="w-5 h-5 text-red-600 fill-yellow-400" />
          <span className="font-['Press_Start_2P',monospace] text-[10px] sm:text-[11px] text-red-800 text-center uppercase tracking-wide">
            {lessonCard}
          </span>
          <Award className="w-5 h-5 text-red-600 fill-yellow-400" />
        </div>
      )}

      {/* Main Dialogue Panel: Portrait + Speech Bubble */}
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        {/* Character Portrait */}
        <div className="self-center sm:self-start">
          <CharacterPortrait characterId={speakerId} mood={mood} isGlitching={isGlitching} />
        </div>

        {/* Speech Balloon */}
        <div className="flex-1 w-full flex flex-col justify-between min-h-[110px] bg-white border-3 border-gray-700 p-3 shadow-[inset_2px_2px_0px_#ccc,2px_2px_0px_#000]">
          {/* Header with Speaker Name */}
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-1 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="font-['Press_Start_2P',monospace] text-[11px] sm:text-xs text-blue-900 font-bold tracking-tight">
                {speakerName}
              </span>
              {isGlitching && (
                <span className="bg-red-600 text-white font-mono text-[9px] px-1 animate-pulse uppercase">
                  NARRATOR DESYNC!
                </span>
              )}
            </div>
            {subtext && (
              <span className="text-[10px] text-gray-500 font-mono italic">
                {subtext}
              </span>
            )}
          </div>

          {/* Dialogue Text */}
          <div className="text-gray-900 text-sm sm:text-base font-sans font-medium leading-relaxed whitespace-pre-line">
            {text}
          </div>
        </div>
      </div>

      {/* CHOICES SECTION: Oversized Colorful 1990s CD-ROM Buttons */}
      {choices.length > 0 && (
        <div className="mt-3 pt-2 border-t-2 border-gray-400">
          <div className="text-[10px] font-bold text-gray-700 mb-1.5 uppercase font-mono flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>Select Johnny&apos;s Wholesome Response:</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {choices.map((choice, idx) => {
              const isInc = choice.isInconvenient;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChoiceClick(choice)}
                  className={`group relative text-left p-2.5 sm:p-3 border-3 font-medium text-xs sm:text-sm transition-all cursor-pointer shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] ${
                    isInc
                      ? 'bg-linear-to-r from-red-600 to-amber-600 text-white border-yellow-300 hover:from-red-500 hover:to-amber-500 hover:border-white ring-2 ring-red-800'
                      : idx % 3 === 0
                      ? 'bg-[#008080] text-white border-white border-r-gray-900 border-b-gray-900 hover:bg-[#009999]'
                      : idx % 3 === 1
                      ? 'bg-[#1E3799] text-white border-white border-r-gray-900 border-b-gray-900 hover:bg-[#273c75]'
                      : 'bg-[#6F1E51] text-white border-white border-r-gray-900 border-b-gray-900 hover:bg-[#833471]'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="font-['Press_Start_2P',monospace] text-[10px] mt-0.5 shrink-0 opacity-80">
                      {isInc ? '⚠' : `[${idx + 1}]`}
                    </span>
                    <span className="flex-1 font-sans leading-snug">
                      {choice.text}
                    </span>
                    {isInc && (
                      <span className="hidden sm:inline bg-yellow-400 text-black text-[9px] font-bold px-1 py-0.5 border border-black uppercase shrink-0">
                        INCONVENIENT!
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
