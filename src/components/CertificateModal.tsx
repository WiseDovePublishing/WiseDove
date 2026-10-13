import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../audio/soundEngine';
import { Award, RotateCcw, Printer, Sparkles, Star } from 'lucide-react';

interface CertificateModalProps {
  onRestart: () => void;
  luckValue: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ onRestart, luckValue }) => {
  useEffect(() => {
    // Blast 90s celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F1C40F', '#E74C3C', '#3498DB', '#2ECC71', '#9B59B6'],
      });
    } catch {
      // ignore in non-browser or mock
    }
    soundEngine.playCasinoFanfare();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FFFFEE] border-8 border-[#B8860B] max-w-2xl w-full p-4 sm:p-8 text-black shadow-[8px_8px_0px_#000] relative my-auto">
        {/* Certificate Outer Filigree Frame */}
        <div className="border-4 border-dashed border-[#8B4513] p-4 sm:p-6 relative bg-linear-to-b from-[#FFFDF0] to-[#FFF9E6]">
          {/* Corner Rosettes */}
          <div className="absolute top-2 left-2 text-[#B8860B]"><Star className="w-6 h-6 fill-[#F1C40F]" /></div>
          <div className="absolute top-2 right-2 text-[#B8860B]"><Star className="w-6 h-6 fill-[#F1C40F]" /></div>
          <div className="absolute bottom-2 left-2 text-[#B8860B]"><Star className="w-6 h-6 fill-[#F1C40F]" /></div>
          <div className="absolute bottom-2 right-2 text-[#B8860B]"><Star className="w-6 h-6 fill-[#F1C40F]" /></div>

          {/* Header Organization */}
          <div className="text-center mb-4">
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8B4513] font-mono uppercase">
              The American Values Software Company
            </div>
            <div className="text-[10px] text-gray-600 font-serif italic mb-1">
              &quot;Building Tomorrow&apos;s Character, Today!&quot; • Pleasantville, USA
            </div>
            <div className="h-0.5 bg-[#B8860B] w-3/4 mx-auto my-2" />
            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#78281F] uppercase tracking-wide">
              Certificate of Moral Fortitude
            </h1>
            <div className="text-xs sm:text-sm font-serif italic text-gray-700 mt-1">
              and Unyielding Anti-Jackpot Rectitude
            </div>
          </div>

          {/* Recipient */}
          <div className="text-center my-4">
            <div className="text-xs text-gray-600 font-serif">This is proudly bestowed upon</div>
            <div className="text-2xl sm:text-3xl font-serif font-black text-blue-900 underline decoration-wavy decoration-amber-500 my-1">
              GOOD OL&apos; JOHNNY (AND YOU!)
            </div>
            <div className="text-xs sm:text-sm text-gray-700 font-serif max-w-lg mx-auto leading-relaxed mt-2">
              For completing all four character modules in Pleasantville, USA, resisting the urge to parlay Romanian sports, and firmly understanding that economic precarity is strictly a personal failure of budgeting.
            </div>
          </div>

          {/* Final Scripted Joke Box */}
          <div className="bg-amber-100 border-2 border-amber-400 p-3 my-4 rounded text-center">
            <div className="text-xs font-mono font-bold text-red-800">
              JOHNNY&apos;S FINAL GRADUATION INQUIRY:
            </div>
            <div className="text-sm font-serif italic text-gray-800 mt-1">
              &quot;Gee, Mr. Narrator... if everybody&apos;s making good decisions, how come nobody can afford anything?&quot;
            </div>
            <div className="text-xs font-mono text-gray-600 mt-2 border-t border-amber-300 pt-1">
              MR. NARRATOR&apos;S RESPONSE:
              <span className="font-bold text-blue-900 block mt-0.5">
                &quot;CONGRATULATIONS, JOHNNY! YOU&apos;VE LEARNED TO JUST SAY NO!&quot;
              </span>
              <span className="text-[11px] text-gray-500 italic block mt-0.5">
                (Johnny: &quot;Gosh! What do I say yes to?&quot;)
              </span>
            </div>
          </div>

          {/* Seals and Signatures */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-[#B8860B] mt-4">
            {/* Signature 1 */}
            <div className="text-center">
              <div className="font-serif italic text-base sm:text-lg text-blue-900 border-b border-gray-600 px-4">
                Mr. Narrator
              </div>
              <div className="text-[9px] uppercase font-mono text-gray-600">
                Host of Wholesome CD-ROMs
              </div>
            </div>

            {/* Embossed Golden Seal */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-tr from-amber-600 via-yellow-400 to-amber-500 border-2 border-amber-800 flex items-center justify-center shadow-md">
                <Award className="w-10 h-10 text-amber-900 fill-amber-200" />
              </div>
              <div className="text-[9px] font-bold text-amber-900 uppercase mt-1">
                Luck Score: {luckValue}/100
              </div>
            </div>

            {/* Signature 2 */}
            <div className="text-center">
              <div className="font-serif italic text-base sm:text-lg text-blue-900 border-b border-gray-600 px-4">
                The American Values Board
              </div>
              <div className="text-[9px] uppercase font-mono text-gray-600">
                Department of Character 1994
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-[#008080] hover:bg-[#009999] text-white px-3 py-2 text-xs font-bold border-2 border-white border-r-gray-900 border-b-gray-900 flex items-center gap-1.5 shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Print Certificate
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="bg-[#D63031] hover:bg-[#E17055] text-white px-4 py-2 text-xs font-bold border-2 border-white border-r-gray-900 border-b-gray-900 flex items-center gap-1.5 shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Play Again from Beginning
          </button>
        </div>
      </div>
    </div>
  );
};
