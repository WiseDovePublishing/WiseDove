import React from 'react';
import { soundEngine } from '../audio/soundEngine';
import { Clover, Sparkles, RefreshCw } from 'lucide-react';

interface LuckMeterProps {
  luckValue: number;
  onJiggleLuck?: () => void;
  narratorComment?: string;
}

export const LuckMeter: React.FC<LuckMeterProps> = ({
  luckValue,
  onJiggleLuck,
  narratorComment,
}) => {
  // Clamped for gauge needle display (0 to 100, centered around 50)
  const clamped = Math.max(0, Math.min(100, luckValue));
  // Needle angle from -60deg (at 0) to +60deg (at 100)
  const needleAngle = -60 + (clamped / 100) * 120;

  const handleTestLuck = () => {
    soundEngine.playLuckDing();
    if (onJiggleLuck) {
      onJiggleLuck();
    }
  };

  return (
    <div className="bg-[#C0C0C0] border-3 border-gray-100 border-r-gray-800 border-b-gray-800 p-2 shadow-[2px_2px_0px_#000] text-black">
      {/* 90s Title Plate */}
      <div className="bg-[#000080] text-yellow-300 font-bold px-2 py-0.5 text-[11px] sm:text-xs flex items-center justify-between shadow-[inset_1px_1px_0px_#fff]">
        <div className="flex items-center gap-1">
          <Clover className="w-3.5 h-3.5 text-green-400 fill-green-400" />
          <span className="font-['Press_Start_2P',monospace] text-[9px] sm:text-[10px]">
            LUCK METER™
          </span>
        </div>
        <span className="text-[10px] text-cyan-200 font-mono tracking-widest">
          SYS.V1.94
        </span>
      </div>

      <div className="mt-1.5 flex flex-col sm:flex-row items-center gap-2">
        {/* Retro Analog Needle Dial */}
        <div className="relative w-32 h-16 bg-amber-50 border-2 border-gray-600 rounded-t-full overflow-hidden flex items-end justify-center shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] shrink-0">
          {/* Tick marks on arc */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Color zones: Red, Yellow, Green, Yellow, Red */}
            <div className="absolute top-1 left-2 text-[7px] font-bold text-red-600">POOR</div>
            <div className="absolute top-0.5 text-[7px] font-bold text-green-600">FAIR</div>
            <div className="absolute top-1 right-2 text-[7px] font-bold text-blue-600">SWELL</div>
          </div>

          {/* Pivot point */}
          <div className="absolute bottom-0 w-4 h-4 bg-gray-800 rounded-full border border-yellow-400 z-10" />

          {/* Needle with smooth transition */}
          <div
            className="absolute bottom-1 w-0.5 h-12 bg-red-600 origin-bottom transition-transform duration-700 ease-out z-10 shadow-sm"
            style={{ transform: `rotate(${needleAngle}deg)` }}
          >
            <div className="w-1.5 h-1.5 -ml-0.5 bg-red-600 rotate-45" />
          </div>
        </div>

        {/* Digital Readout & Description */}
        <div className="flex-1 w-full text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="bg-black text-green-400 font-mono px-2 py-0.5 text-base sm:text-lg font-bold border border-gray-700 shadow-inner inline-block">
              {luckValue} <span className="text-[10px] text-gray-400">/ 100</span>
            </div>

            <button
              type="button"
              onClick={handleTestLuck}
              className="bg-[#D4D0C8] hover:bg-white text-gray-800 text-[10px] font-bold px-1.5 py-1 border border-white border-r-gray-800 border-b-gray-800 active:translate-y-0.5 shadow-sm flex items-center gap-1 cursor-pointer"
              title="Calibrate Christian Fortitude"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>Recalibrate</span>
            </button>
          </div>

          <div className="text-[10px] text-gray-700 mt-1 leading-tight font-serif italic">
            {narratorComment || (
              luckValue >= 50
                ? "Looking good, Johnny! Stay positive in your heart!"
                : "Uh-oh! Down a pinch! Remember to whistle a happy tune!"
            )}
          </div>
        </div>
      </div>

      {/* 90s CD-ROM Disclaimer Note */}
      <div className="mt-1 text-[8.5px] text-gray-500 text-center font-mono border-t border-gray-400 pt-0.5">
        * Statistically guaranteed to have 0% influence on outcomes. American Values Software Co.
      </div>
    </div>
  );
};
