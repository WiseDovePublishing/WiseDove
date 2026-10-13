import React, { useState } from 'react';
import { CharacterPortrait } from './CharacterPortrait';
import { CharacterId } from '../types/game';
import { BookOpen, X, Sparkles, AlertCircle } from 'lucide-react';

interface CharacterHandbookModalProps {
  onClose: () => void;
}

interface CharacterEntry {
  id: CharacterId;
  name: string;
  role: string;
  bio: string;
  catchphrase: string;
  moralLesson: string;
}

const ENTRIES: CharacterEntry[] = [
  {
    id: 'johnny',
    name: "Good Ol' Johnny",
    role: "The Wholesome Protagonist",
    bio: "An impossibly wholesome, clean-cut American boy in a red sweater who believes in honesty, thrift, hard work, good manners, and the American Dream. He is never cynical or deliberately rebellious. His innocent questions just accidentally expose structural economic collapse.",
    catchphrase: '"Gee whiz!", "Golly!", "Gosh! What do I say yes to?"',
    moralLesson: "Good manners and clean shirts are completely immune to inflation.",
  },
  {
    id: 'narrator',
    name: "Mr. Narrator",
    role: "Host & Educational Moral Arbiter",
    bio: "An impossibly enthusiastic host of a 1994 multimedia CD-ROM. Insists everything is wonderful, every problem is an individual moral failing, and every responsible decision guarantees a brighter future. Becomes frantic and glitchy when asked why milk costs nine dollars.",
    catchphrase: '"WHAT A SILLY QUESTION, JOHNNY! LET\'S DISCUSS CHARACTER!"',
    moralLesson: "If the economy does not make sense, please adjust your positive attitude.",
  },
  {
    id: 'billy',
    name: "Billy",
    role: "The Demoralized Best Friend",
    bio: "Used to play Galaga and skate at the roller rink. Now watches Turkish badminton odds because literally every youth recreation center in town was demolished or leased to sports betting conglomerates.",
    catchphrase: '"Rink closed, Johnny. Hobby shop closed. Now it\'s a parlay depot."',
    moralLesson: "Skipping stones across a polluted creek builds twice as much character as video games.",
  },
  {
    id: 'mrs_dobbins',
    name: "Mrs. Dobbins",
    role: "Church Choir Elder & Scratch-Off Regular",
    bio: "Taught third grade for forty-five years. Her modest pension hasn't budged since 2002 while her heating oil went up 300%. Buys $50 CrownDraft neon scratchers in hopes of paying for a knee replacement.",
    catchphrase: '"Three cherries and I can afford my blood pressure medication, dearie!"',
    moralLesson: "A penny saved is 0.05% interest in an insured checking account.",
  },
  {
    id: 'dad',
    name: "Johnny's Dad",
    role: "The Micro-Wagering Football Fan",
    bio: "Attends the high school homecoming game with a FanFortune foam finger and an eye twitch. Rooting for the visiting team's punter to shank the ball by three inches so his 12-leg boosted prop bet covers the family dental deductible.",
    catchphrase: '"Quiet Johnny, Daddy needs a false start in the 2nd quarter to pay the water bill!"',
    moralLesson: "High school football is strictly about sportsmanship, except for the in-play odds ticker.",
  },
  {
    id: 'ricky',
    name: "Cousin Ricky",
    role: "The Starter-Home Hopeful",
    bio: "Saved $15,000 for six years while starter homes skyrocketed to $790,000. Tried to bridge the gap with a 14-leg parlay on Romanian darts. Now owes $28,000 to Big Sal.",
    catchphrase: '"Thirteen of the legs hit, Johnny! Then Pieter sneezed in the 94th minute!"',
    moralLesson: "Good things come to those who wait until age 84 to buy a 900-sq-ft ranch.",
  },
  {
    id: 'big_sal',
    name: "Big Sal",
    role: "Friendly Financial Associates LLC",
    bio: "An absurdly polite 1990s educational-game mobster in a pastel pinstripe suit. Hands out butterscotch candies while offering non-traditional liquidity at 45% weekly vigorish.",
    catchphrase: '"We believe in family, community, and non-denominational debt amortization, kid."',
    moralLesson: "Always check the APR before signing agreements on the front porch.",
  },
];

export const CharacterHandbookModal: React.FC<CharacterHandbookModalProps> = ({ onClose }) => {
  const [selectedEntry, setSelectedEntry] = useState<CharacterEntry>(ENTRIES[0]);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#C0C0C0] border-4 border-gray-100 border-r-gray-800 border-b-gray-800 max-w-2xl w-full p-3 sm:p-4 shadow-[6px_6px_0px_#000] text-black">
        {/* Retro Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 font-bold text-xs sm:text-sm flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-yellow-300" />
            <span className="font-['Press_Start_2P',monospace] text-[10px] sm:text-[11px]">
              Pleasantville Citizen Handbook (1994)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#C0C0C0] text-black px-1.5 font-bold border border-white border-r-gray-800 border-b-gray-800 hover:bg-red-400 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Two-Column CD-ROM Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Character Selector List */}
          <div className="bg-white border-2 border-gray-600 p-2 overflow-y-auto max-h-[360px] shadow-inner space-y-1">
            <div className="text-[10px] font-bold text-gray-500 uppercase font-mono mb-1">
              Select Character:
            </div>
            {ENTRIES.map(entry => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setSelectedEntry(entry)}
                className={`w-full text-left px-2 py-1.5 text-xs font-medium border flex items-center gap-2 cursor-pointer transition-colors ${
                  selectedEntry.id === entry.id
                    ? 'bg-[#000080] text-white border-blue-900 font-bold'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="truncate">{entry.name}</span>
              </button>
            ))}
          </div>

          {/* Character Dossier View */}
          <div className="md:col-span-2 bg-white border-2 border-gray-600 p-3 shadow-inner flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 mb-3 border-b pb-2">
                <CharacterPortrait characterId={selectedEntry.id} mood="happy" className="w-20 h-20 sm:w-24 sm:h-24" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-blue-900 leading-tight">
                    {selectedEntry.name}
                  </h3>
                  <div className="text-xs text-amber-700 font-bold font-mono">
                    {selectedEntry.role}
                  </div>
                  <div className="text-[11px] text-gray-600 mt-1 italic">
                    {selectedEntry.catchphrase}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-800 leading-relaxed">
                <p>{selectedEntry.bio}</p>
                <div className="bg-amber-50 border border-amber-300 p-2 rounded text-[11px]">
                  <strong className="text-red-700 block mb-0.5">Official Moral Takeaway:</strong>
                  {selectedEntry.moralLesson}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-gray-300 text-[10px] text-gray-500 font-mono flex items-center justify-between">
              <span>The American Values Software Co.</span>
              <span>Pleasantville, USA</span>
            </div>
          </div>
        </div>

        {/* Footer OK Button */}
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#008080] hover:bg-[#009999] text-white px-4 py-1.5 text-xs font-bold border-2 border-white border-r-gray-900 border-b-gray-900 shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            OK, Return to Game
          </button>
        </div>
      </div>
    </div>
  );
};
