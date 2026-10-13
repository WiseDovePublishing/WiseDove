import React from 'react';
import { CharacterId, CharacterMood } from '../types/game';

interface CharacterPortraitProps {
  characterId: CharacterId;
  mood: CharacterMood;
  isGlitching?: boolean;
  className?: string;
}

export const CharacterPortrait: React.FC<CharacterPortraitProps> = ({
  characterId,
  mood,
  isGlitching = false,
  className = '',
}) => {
  return (
    <div
      className={`relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 border-4 border-gray-700 bg-linear-to-b from-amber-100 to-amber-200 shadow-[inset_2px_2px_0px_#fff,inset_-2px_-2px_0px_#888,3px_3px_0px_#000] overflow-hidden ${
        isGlitching ? 'animate-pulse' : ''
      } ${className}`}
    >
      {/* 90s CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.12)_3px)] z-20" />

      {/* Glitch Static Bars */}
      {isGlitching && (
        <div className="absolute inset-0 bg-red-500/20 mix-blend-color-dodge z-30 pointer-events-none">
          <div className="w-full h-2 bg-yellow-300/60 my-1 animate-bounce" />
          <div className="w-full h-1 bg-cyan-400/80 my-3" />
        </div>
      )}

      {/* Render Character SVG */}
      {characterId === 'johnny' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Background aura */}
          <circle cx="60" cy="60" r="55" fill="#FFEAA7" />

          {/* Red Sweater */}
          <path d="M 20 120 Q 30 85 60 85 Q 90 85 100 120 Z" fill="#D63031" stroke="#2D3436" strokeWidth="3" />
          {/* White Shirt Collar */}
          <polygon points="48,85 60,98 72,85 60,88" fill="#FFFFFF" stroke="#2D3436" strokeWidth="2" />
          <polygon points="40,85 52,90 48,85" fill="#F1F2F6" stroke="#2D3436" strokeWidth="1.5" />
          <polygon points="80,85 68,90 72,85" fill="#F1F2F6" stroke="#2D3436" strokeWidth="1.5" />

          {/* Neck */}
          <rect x="52" y="70" width="16" height="18" fill="#FAD390" stroke="#2D3436" strokeWidth="2.5" />

          {/* Head */}
          <ellipse cx="60" cy="52" rx="26" ry="28" fill="#FAD390" stroke="#2D3436" strokeWidth="3" />

          {/* Ears */}
          <circle cx="34" cy="54" r="7" fill="#FAD390" stroke="#2D3436" strokeWidth="2.5" />
          <circle cx="86" cy="54" r="7" fill="#FAD390" stroke="#2D3436" strokeWidth="2.5" />

          {/* 1990s Clean-Cut Neat Hair */}
          <path
            d="M 33 46 Q 35 22 60 22 Q 85 22 87 46 Q 78 30 60 30 Q 42 30 33 46 Z"
            fill="#6D4C41"
            stroke="#2D3436"
            strokeWidth="3"
          />
          {/* Parted hair wave */}
          <path d="M 40 32 Q 52 28 64 36" fill="none" stroke="#4E342E" strokeWidth="2" />

          {/* Cheeks */}
          <circle cx="44" cy="58" r="5" fill="#FF7675" opacity="0.6" />
          <circle cx="76" cy="58" r="5" fill="#FF7675" opacity="0.6" />

          {/* Eyes */}
          {mood === 'puzzled' ? (
            <>
              {/* Puzzled eyebrow */}
              <path d="M 40 39 Q 47 37 52 42" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 68 44 Q 74 41 80 43" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Left eye normal, right eye squinting */}
              <ellipse cx="46" cy="48" rx="4.5" ry="6" fill="#2D3436" />
              <circle cx="45" cy="46" r="1.5" fill="#FFFFFF" />
              <ellipse cx="74" cy="49" rx="3.5" ry="4" fill="#2D3436" />
              <circle cx="73" cy="48" r="1" fill="#FFFFFF" />
              {/* Puzzled mouth */}
              <path d="M 52 66 Q 60 62 68 65" fill="none" stroke="#2D3436" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Wholesome happy eyebrows */}
              <path d="M 40 40 Q 46 36 52 40" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 68 40 Q 74 36 80 40" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Bright innocent shiny eyes */}
              <ellipse cx="46" cy="48" rx="5" ry="6.5" fill="#2D3436" />
              <circle cx="44.5" cy="45.5" r="2" fill="#FFFFFF" />
              <circle cx="48" cy="51" r="1" fill="#FFFFFF" />

              <ellipse cx="74" cy="48" rx="5" ry="6.5" fill="#2D3436" />
              <circle cx="72.5" cy="45.5" r="2" fill="#FFFFFF" />
              <circle cx="76" cy="51" r="1" fill="#FFFFFF" />

              {/* Big wholesome open smile */}
              <path d="M 48 62 Q 60 76 72 62 Z" fill="#D63031" stroke="#2D3436" strokeWidth="2.5" />
              <path d="M 52 63 Q 60 68 68 63" fill="#FFFFFF" />
            </>
          )}

          {/* Button Nose */}
          <path d="M 58 54 Q 60 57 62 54" fill="none" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {characterId === 'narrator' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Golden TV / Retro Screen Host */}
          <circle cx="60" cy="60" r="56" fill="#F9CA24" />
          {/* Sunbeams */}
          <g stroke="#F0932B" strokeWidth="3" opacity="0.6">
            <line x1="60" y1="2" x2="60" y2="12" />
            <line x1="60" y1="108" x2="60" y2="118" />
            <line x1="2" y1="60" x2="12" y2="60" />
            <line x1="108" y1="60" x2="118" y2="60" />
            <line x1="18" y1="18" x2="26" y2="26" />
            <line x1="102" y1="102" x2="94" y2="94" />
            <line x1="102" y1="18" x2="94" y2="26" />
            <line x1="18" y1="102" x2="26" y2="94" />
          </g>

          {/* Retro Golden CRT Monitor / Microphone Body */}
          <rect
            x="24"
            y="24"
            width="72"
            height="62"
            rx="12"
            fill="#FFF"
            stroke="#2D3436"
            strokeWidth="3.5"
          />
          <rect
            x="30"
            y="30"
            width="60"
            height="50"
            rx="8"
            fill={isGlitching ? '#FF7675' : '#74B9FF'}
            stroke="#2D3436"
            strokeWidth="2"
          />

          {/* Antenna */}
          <line x1="45" y1="24" x2="35" y2="8" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
          <circle cx="34" cy="7" r="4" fill="#E84118" stroke="#2D3436" strokeWidth="2" />
          <line x1="75" y1="24" x2="85" y2="8" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
          <circle cx="86" cy="7" r="4" fill="#E84118" stroke="#2D3436" strokeWidth="2" />

          {/* Educational Bowtie */}
          <polygon points="50,90 60,95 50,100" fill="#E84118" stroke="#2D3436" strokeWidth="2" />
          <polygon points="70,90 60,95 70,100" fill="#E84118" stroke="#2D3436" strokeWidth="2" />
          <circle cx="60" cy="95" r="4" fill="#F1C40F" stroke="#2D3436" strokeWidth="2" />

          {/* Face on Screen */}
          {isGlitching || mood === 'nervous' || mood === 'glitching' ? (
            <>
              {/* Sweating, panicked eyes */}
              <ellipse cx="45" cy="50" rx="6" ry="6" fill="#2D3436" />
              <ellipse cx="75" cy="50" rx="6" ry="6" fill="#2D3436" />
              <circle cx="43" cy="48" r="2" fill="#FFF" />
              <circle cx="73" cy="48" r="2" fill="#FFF" />
              {/* Nervous sweat drops */}
              <path d="M 88 38 Q 93 45 88 48 Q 83 45 88 38" fill="#00CEC9" stroke="#2D3436" strokeWidth="1.5" />
              <path d="M 28 42 Q 24 48 28 51 Q 32 48 28 42" fill="#00CEC9" stroke="#2D3436" strokeWidth="1.5" />
              {/* Wavy nervous mouth */}
              <path d="M 42 66 Q 50 72 58 64 Q 66 72 76 65" fill="none" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Cheerful wide-eyed educational host */}
              <ellipse cx="46" cy="48" rx="6" ry="7" fill="#2D3436" />
              <circle cx="44" cy="45" r="2.5" fill="#FFF" />
              <ellipse cx="74" cy="48" rx="6" ry="7" fill="#2D3436" />
              <circle cx="72" cy="45" r="2.5" fill="#FFF" />
              {/* Gigantic radio-host grin */}
              <path d="M 42 60 Q 60 76 78 60 Z" fill="#D63031" stroke="#2D3436" strokeWidth="2.5" />
              <rect x="47" y="61" width="26" height="5" rx="2" fill="#FFF" />
            </>
          )}

          {/* Golden star badge in corner */}
          <polygon
            points="60,103 62,108 67,108 63,111 65,116 60,113 55,116 57,111 53,108 58,108"
            fill="#F1C40F"
            stroke="#2D3436"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {characterId === 'billy' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Billy: 90s kid, backwards cap, blue denim, depressed arcade regular */}
          <rect width="120" height="120" fill="#DFE6E9" />
          {/* Blue Denim Jacket */}
          <path d="M 20 120 Q 30 85 60 85 Q 90 85 100 120 Z" fill="#0984E3" stroke="#2D3436" strokeWidth="3" />
          {/* Striped T-Shirt */}
          <path d="M 45 85 L 75 85 L 60 110 Z" fill="#FAB1A0" stroke="#2D3436" strokeWidth="2" />
          <line x1="48" y1="92" x2="72" y2="92" stroke="#D63031" strokeWidth="2" />
          <line x1="52" y1="99" x2="68" y2="99" stroke="#D63031" strokeWidth="2" />

          {/* Neck */}
          <rect x="52" y="72" width="16" height="15" fill="#FAD390" stroke="#2D3436" strokeWidth="2.5" />

          {/* Head */}
          <ellipse cx="60" cy="54" rx="25" ry="27" fill="#FAD390" stroke="#2D3436" strokeWidth="3" />

          {/* Backwards Neon Green Baseball Cap */}
          <path d="M 33 46 Q 60 22 87 46 Z" fill="#00B894" stroke="#2D3436" strokeWidth="3" />
          {/* Cap backwards brim flipped up */}
          <path d="M 30 46 Q 20 40 26 34 Q 35 38 36 46 Z" fill="#55EFC4" stroke="#2D3436" strokeWidth="2.5" />
          <circle cx="60" cy="30" r="3" fill="#FFEAA7" stroke="#2D3436" strokeWidth="1.5" />

          {/* Messy blonde bangs peeking out */}
          <path d="M 36 46 Q 44 54 48 48 Q 54 55 60 49 Q 66 54 74 47" fill="none" stroke="#F1C40F" strokeWidth="3" />

          {/* Sad tired eyes */}
          <path d="M 40 44 Q 46 47 52 45" stroke="#2D3436" strokeWidth="2.5" fill="none" />
          <path d="M 68 45 Q 74 47 80 44" stroke="#2D3436" strokeWidth="2.5" fill="none" />
          <ellipse cx="46" cy="52" rx="4" ry="4" fill="#2D3436" />
          <ellipse cx="74" cy="52" rx="4" ry="4" fill="#2D3436" />
          {/* Under-eye tired shadows */}
          <path d="M 42 58 Q 46 61 50 58" stroke="#B2BEC3" strokeWidth="1.5" fill="none" />
          <path d="M 70 58 Q 74 61 78 58" stroke="#B2BEC3" strokeWidth="1.5" fill="none" />

          {/* Sad frown */}
          <path d="M 48 72 Q 60 62 72 72" fill="none" stroke="#2D3436" strokeWidth="2.5" strokeLinecap="round" />

          {/* Unplugged 90s Joystick Cord dangling */}
          <path d="M 24 100 Q 15 110 20 120" stroke="#2D3436" strokeWidth="3" fill="none" />
          <rect x="20" y="112" width="6" height="8" fill="#636E72" stroke="#2D3436" strokeWidth="1.5" />
        </svg>
      )}

      {characterId === 'mrs_dobbins' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Mrs. Dobbins: Sweet grandma, floral cardigan, reading glasses on chain, holding scratchers */}
          <rect width="120" height="120" fill="#FD79A8" opacity="0.3" />
          {/* Purple Floral Cardigan */}
          <path d="M 18 120 Q 30 85 60 85 Q 90 85 102 120 Z" fill="#6C5CE7" stroke="#2D3436" strokeWidth="3" />
          <circle cx="35" cy="105" r="3" fill="#FDCB6E" />
          <circle cx="85" cy="105" r="3" fill="#FDCB6E" />
          {/* Pearl necklace */}
          <path d="M 48 88 Q 60 98 72 88" stroke="#FFF" strokeWidth="4" strokeDasharray="3,3" fill="none" />

          {/* Neck */}
          <rect x="52" y="70" width="16" height="16" fill="#FFEAA7" stroke="#2D3436" strokeWidth="2" />

          {/* Grandma Head */}
          <ellipse cx="60" cy="52" rx="25" ry="26" fill="#FFEAA7" stroke="#2D3436" strokeWidth="3" />

          {/* Fluffy Lavender/Grey Hair Perm */}
          <path
            d="M 30 52 C 20 30 35 15 60 15 C 85 15 100 30 90 52 C 95 62 85 66 85 52 C 85 28 35 28 35 52 Z"
            fill="#DCDDE1"
            stroke="#2D3436"
            strokeWidth="3"
          />

          {/* Reading glasses on chain */}
          <circle cx="45" cy="50" r="9" fill="none" stroke="#E17055" strokeWidth="2.5" />
          <circle cx="75" cy="50" r="9" fill="none" stroke="#E17055" strokeWidth="2.5" />
          <line x1="54" y1="50" x2="66" y2="50" stroke="#E17055" strokeWidth="2.5" />
          {/* Eyeglass chains */}
          <path d="M 36 50 Q 32 68 38 80" stroke="#E17055" strokeWidth="1.5" strokeDasharray="2,2" fill="none" />
          <path d="M 84 50 Q 88 68 82 80" stroke="#E17055" strokeWidth="1.5" strokeDasharray="2,2" fill="none" />

          {/* Eyes behind lenses */}
          <ellipse cx="45" cy="50" rx="3.5" ry="4" fill="#2D3436" />
          <ellipse cx="75" cy="50" rx="3.5" ry="4" fill="#2D3436" />

          {/* Kind smile with faint wrinkles */}
          <path d="M 48 66 Q 60 74 72 66" fill="none" stroke="#2D3436" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 38 48 Q 36 52 38 56" stroke="#B2BEC3" strokeWidth="1.5" fill="none" />
          <path d="M 82 48 Q 84 52 82 56" stroke="#B2BEC3" strokeWidth="1.5" fill="none" />

          {/* Golden Scratch-Off ticket in hand at bottom */}
          <rect x="75" y="85" width="22" height="30" rx="2" fill="#F1C40F" stroke="#2D3436" strokeWidth="2" transform="rotate(-15 75 85)" />
          <text x="80" y="102" fontSize="6" fontWeight="bold" fill="#D63031" transform="rotate(-15 75 85)">777</text>
        </svg>
      )}

      {characterId === 'dad' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Dad: Polo shirt, sweat bead, phone with betting odds, FanFortune foam finger */}
          <rect width="120" height="120" fill="#74B9FF" opacity="0.3" />
          {/* Green Polo Shirt */}
          <path d="M 18 120 Q 30 85 60 85 Q 90 85 102 120 Z" fill="#27AE60" stroke="#2D3436" strokeWidth="3" />
          <polygon points="50,85 60,96 70,85" fill="#2ECC71" stroke="#2D3436" strokeWidth="2" />

          {/* Neck */}
          <rect x="50" y="70" width="20" height="18" fill="#F5CD79" stroke="#2D3436" strokeWidth="2.5" />

          {/* Head & 90s Dad Mustache */}
          <ellipse cx="60" cy="50" rx="27" ry="28" fill="#F5CD79" stroke="#2D3436" strokeWidth="3" />
          {/* Dad hair with slight receding hairline */}
          <path d="M 33 46 Q 40 22 60 22 Q 80 22 87 46 Q 78 30 60 32 Q 42 30 33 46 Z" fill="#795548" stroke="#2D3436" strokeWidth="3" />

          {/* Intense, desperate, screen-reflecting eyes */}
          <ellipse cx="46" cy="45" rx="5.5" ry="6" fill="#2D3436" />
          <ellipse cx="74" cy="45" rx="5.5" ry="6" fill="#2D3436" />
          {/* Glow reflection from betting app */}
          <circle cx="45" cy="44" r="2" fill="#00CEC9" />
          <circle cx="73" cy="44" r="2" fill="#00CEC9" />

          {/* Furrowed worried dad brows */}
          <path d="M 38 38 L 52 42" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
          <path d="M 82 38 L 68 42" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />

          {/* Glorious 90s Dad Mustache */}
          <path d="M 46 60 Q 60 56 74 60 Q 68 66 60 63 Q 52 66 46 60 Z" fill="#5D4037" stroke="#2D3436" strokeWidth="2" />
          {/* Strained grimace mouth */}
          <path d="M 50 67 Q 60 70 70 67" stroke="#2D3436" strokeWidth="2" fill="none" />

          {/* Big Sweat Drop */}
          <path d="M 86 35 Q 92 42 86 46 Q 80 42 86 35" fill="#0984E3" stroke="#2D3436" strokeWidth="1.5" />

          {/* Foam Finger with FanFortune text */}
          <g transform="translate(5, 70) rotate(-10)">
            <path d="M 5 25 L 12 5 L 18 5 L 18 20 L 25 22 L 25 35 L 5 35 Z" fill="#F1C40F" stroke="#2D3436" strokeWidth="2" />
            <text x="7" y="32" fontSize="5" fontWeight="bold" fill="#D63031">#1 BET</text>
          </g>
        </svg>
      )}

      {characterId === 'ricky' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Cousin Ricky: 5 o'clock shadow, loose tie, torn parlay ticket, extreme panic */}
          <rect width="120" height="120" fill="#FAB1A0" opacity="0.3" />
          {/* Disheveled White Shirt & Crooked Tie */}
          <path d="M 18 120 Q 30 85 60 85 Q 90 85 102 120 Z" fill="#F5F6FA" stroke="#2D3436" strokeWidth="3" />
          <polygon points="58,88 64,88 62,118 56,118" fill="#E84118" stroke="#2D3436" strokeWidth="2" transform="rotate(8 58 88)" />

          {/* Neck */}
          <rect x="52" y="70" width="16" height="18" fill="#F5CD79" stroke="#2D3436" strokeWidth="2" />

          {/* Head */}
          <ellipse cx="60" cy="50" rx="26" ry="27" fill="#F5CD79" stroke="#2D3436" strokeWidth="3" />
          {/* Messy unbrushed hair */}
          <path d="M 32 44 Q 30 18 60 20 Q 90 18 88 44 Q 75 25 60 28 Q 45 25 32 44 Z" fill="#2C3E50" stroke="#2D3436" strokeWidth="3" />

          {/* Heavy 5 o'clock shadow stubble */}
          <path d="M 42 56 Q 60 78 78 56 C 80 76 40 76 42 56" fill="#7F8C8D" opacity="0.4" />

          {/* Panicked wide bug-eyes */}
          <circle cx="44" cy="46" r="7" fill="#FFF" stroke="#2D3436" strokeWidth="2.5" />
          <circle cx="44" cy="46" r="2.5" fill="#2D3436" />
          <circle cx="76" cy="46" r="7" fill="#FFF" stroke="#2D3436" strokeWidth="2.5" />
          <circle cx="76" cy="46" r="2.5" fill="#2D3436" />

          {/* Wide open screaming/pleading mouth */}
          <ellipse cx="60" cy="65" rx="8" ry="6" fill="#D63031" stroke="#2D3436" strokeWidth="2" />

          {/* Giant sweat drops flying off */}
          <circle cx="26" cy="40" r="3" fill="#00CEC9" />
          <circle cx="94" cy="42" r="3.5" fill="#00CEC9" />
        </svg>
      )}

      {characterId === 'big_sal' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Big Sal: 1994 cartoon educational mobster in pastel pinstripe suit, fedora, warm friendly smile */}
          <rect width="120" height="120" fill="#A29BFE" opacity="0.3" />
          {/* Pinstripe Suit */}
          <path d="M 14 120 Q 25 80 60 80 Q 95 80 106 120 Z" fill="#2D3436" stroke="#2D3436" strokeWidth="3" />
          {/* Pinstripes */}
          <line x1="28" y1="90" x2="28" y2="120" stroke="#636E72" strokeWidth="1.5" />
          <line x1="42" y1="85" x2="42" y2="120" stroke="#636E72" strokeWidth="1.5" />
          <line x1="78" y1="85" x2="78" y2="120" stroke="#636E72" strokeWidth="1.5" />
          <line x1="92" y1="90" x2="92" y2="120" stroke="#636E72" strokeWidth="1.5" />

          {/* Pastel Pink Silk Tie with Gold Tie Clip */}
          <polygon points="56,84 64,84 62,118 58,118" fill="#FD79A8" stroke="#2D3436" strokeWidth="2" />
          <rect x="57" y="98" width="6" height="2" fill="#F1C40F" />

          {/* Wide Jowly Mobster Face */}
          <ellipse cx="60" cy="56" rx="30" ry="26" fill="#F5CD79" stroke="#2D3436" strokeWidth="3" />
          {/* Fedora Hat */}
          <ellipse cx="60" cy="36" rx="36" ry="8" fill="#636E72" stroke="#2D3436" strokeWidth="3" />
          <path d="M 34 36 Q 36 14 60 14 Q 84 14 86 36 Z" fill="#2D3436" stroke="#2D3436" strokeWidth="3" />
          <rect x="36" y="32" width="48" height="5" fill="#FD79A8" />
          {/* Feather in hat */}
          <polygon points="76,32 86,16 80,32" fill="#F1C40F" />

          {/* Friendly Smooth Smile with Gold Tooth */}
          <ellipse cx="47" cy="52" rx="4" ry="4" fill="#2D3436" />
          <ellipse cx="73" cy="52" rx="4" ry="4" fill="#2D3436" />
          <path d="M 46 66 Q 60 76 74 66 Z" fill="#FFF" stroke="#2D3436" strokeWidth="2" />
          <rect x="62" y="66" width="4" height="4" fill="#F1C40F" /> {/* Gold tooth */}

          {/* Clipboard: Friendly Financial Associates */}
          <g transform="translate(8, 75) rotate(-15)">
            <rect x="0" y="0" width="26" height="36" rx="3" fill="#D6A2E8" stroke="#2D3436" strokeWidth="2" />
            <rect x="6" y="-3" width="14" height="6" rx="2" fill="#BDC581" stroke="#2D3436" strokeWidth="1" />
            <line x1="4" y1="8" x2="22" y2="8" stroke="#2D3436" strokeWidth="1.5" />
            <line x1="4" y1="14" x2="18" y2="14" stroke="#2D3436" strokeWidth="1" />
            <line x1="4" y1="20" x2="22" y2="20" stroke="#2D3436" strokeWidth="1" />
          </g>
        </svg>
      )}

      {characterId === 'announcer' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* The American Values Software Company Golden Seal */}
          <circle cx="60" cy="60" r="54" fill="#F1C40F" stroke="#2D3436" strokeWidth="3" />
          <circle cx="60" cy="60" r="46" fill="#3498DB" stroke="#2D3436" strokeWidth="2" />
          <polygon
            points="60,24 64,36 76,36 66,44 70,56 60,48 50,56 54,44 44,36 56,36"
            fill="#FFF"
            stroke="#2D3436"
            strokeWidth="1.5"
          />
          {/* Red, White, Blue Ribbon Tails */}
          <polygon points="46,80 34,115 48,105 56,115 54,80" fill="#E74C3C" stroke="#2D3436" strokeWidth="1.5" />
          <polygon points="74,80 66,115 74,105 86,115 76,80" fill="#2980B9" stroke="#2D3436" strokeWidth="1.5" />
          <text x="60" y="74" fontSize="7" fontWeight="bold" fill="#FFF" textAnchor="middle">USA 1994</text>
        </svg>
      )}
    </div>
  );
};
