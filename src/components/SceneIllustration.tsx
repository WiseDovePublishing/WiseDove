import React, { useState } from 'react';
import { SCENE_DESCRIPTIONS, SceneVisualDescription } from '../data/storyData';
import { Info, Sparkles, AlertTriangle, Eye } from 'lucide-react';

interface SceneIllustrationProps {
  sceneId: 'arcade' | 'store' | 'stadium' | 'ricky';
  className?: string;
}

export const SceneIllustration: React.FC<SceneIllustrationProps> = ({ sceneId, className = '' }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const desc: SceneVisualDescription = SCENE_DESCRIPTIONS[sceneId];

  return (
    <div className={`relative w-full aspect-16/9 max-h-[340px] sm:max-h-[380px] bg-slate-900 overflow-hidden border-4 border-gray-800 shadow-[inset_3px_3px_0px_#fff,inset_-3px_-3px_0px_#555,4px_4px_0px_#000] ${className}`}>
      {/* 90s Dither / Scanline Texture */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_2px,transparent_2px,transparent_4px)] z-20" />

      {/* RENDER THE 4 DISTINCT 1994 CD-ROM SCENES */}
      {sceneId === 'arcade' && (
        <svg viewBox="0 0 640 360" className="w-full h-full select-none">
          {/* Radiant Cheerful 90s Blue Sky */}
          <rect width="640" height="240" fill="#48DBFB" />

          {/* Smiling Cartoon Sunshine with 90s Sunglasses */}
          <g transform="translate(560, 65)">
            <circle cx="0" cy="0" r="42" fill="#F1C40F" stroke="#E67E22" strokeWidth="3" />
            {/* Sun Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <line
                key={i}
                x1="0"
                y1="-48"
                x2="0"
                y2="-62"
                stroke="#F39C12"
                strokeWidth="4"
                strokeLinecap="round"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* 1990s Cool Guy Sunglasses */}
            <path d="M -24 -8 L -4 -8 L -8 6 L -20 6 Z" fill="#2C3E50" stroke="#1A252F" strokeWidth="2" />
            <path d="M 4 -8 L 24 -8 L 20 6 L 8 6 Z" fill="#2C3E50" stroke="#1A252F" strokeWidth="2" />
            <line x1="-4" y1="-5" x2="4" y2="-5" stroke="#1A252F" strokeWidth="2.5" />
            {/* Cheerful Sun Smile */}
            <path d="M -14 16 Q 0 28 14 16" fill="none" stroke="#D35400" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-16" cy="18" r="3" fill="#E74C3C" opacity="0.6" />
            <circle cx="16" cy="18" r="3" fill="#E74C3C" opacity="0.6" />
          </g>

          {/* Cheerful Cartoon Clouds */}
          <g fill="#FFFFFF" opacity="0.95">
            <ellipse cx="110" cy="50" rx="35" ry="18" />
            <ellipse cx="140" cy="42" rx="25" ry="20" />
            <ellipse cx="85" cy="55" rx="20" ry="14" />

            <ellipse cx="320" cy="70" rx="40" ry="16" />
            <ellipse cx="350" cy="62" rx="26" ry="18" />
          </g>

          {/* Distant Suburban Hills */}
          <path d="M 0 240 Q 180 180 380 240 Q 520 200 640 240 L 640 360 L 0 360 Z" fill="#2ECC71" />
          <path d="M 0 250 Q 220 215 480 250 L 640 250 L 640 360 L 0 360 Z" fill="#27AE60" />

          {/* Neighboring Shuttered Businesses (Roller Rink & Hobby Shop) */}
          {/* Shuttered Roller Rink on Left */}
          <rect x="20" y="150" width="130" height="95" fill="#E056FD" stroke="#2C3E50" strokeWidth="2.5" />
          <polygon points="15,150 85,115 155,150" fill="#BE2EDD" stroke="#2C3E50" strokeWidth="2.5" />
          <text x="85" y="142" fontSize="9" fontWeight="bold" fill="#FFF" textAnchor="middle">ROLLER RINK</text>
          {/* CrownDraft Seizure Banner */}
          <rect x="25" y="175" width="120" height="30" fill="#F1C40F" stroke="#C0392B" strokeWidth="2" />
          <text x="85" y="188" fontSize="7.5" fontWeight="bold" fill="#C0392B" textAnchor="middle">SEIZED FOR CROWNDRAFT</text>
          <text x="85" y="198" fontSize="6.5" fill="#000" textAnchor="middle">OFF-TRACK BETTING CENTER</text>

          {/* Shuttered Hobby Shop on Right */}
          <rect x="490" y="150" width="130" height="95" fill="#F0932B" stroke="#2C3E50" strokeWidth="2.5" />
          <polygon points="485,150 555,115 625,150" fill="#E67E22" stroke="#2C3E50" strokeWidth="2.5" />
          <text x="555" y="142" fontSize="9" fontWeight="bold" fill="#FFF" textAnchor="middle">HOBBY SHOP</text>
          {/* Rent Hike & Scratchers Sign */}
          <rect x="495" y="175" width="120" height="30" fill="#FFFFFF" stroke="#D35400" strokeWidth="2" />
          <text x="555" y="188" fontSize="7" fontWeight="bold" fill="#D35400" textAnchor="middle">RENT UP 400% — CLOSED</text>
          <text x="555" y="198" fontSize="6.5" fill="#27AE60" textAnchor="middle">SCRATCH-OFFS SOLD INSIDE!</text>

          {/* MAIN BUILDING: THE CLOSED PLEASANTVILLE ARCADE */}
          <rect x="175" y="110" width="290" height="150" fill="#2C3E50" stroke="#1A252F" strokeWidth="4" />
          {/* Boarded up windows */}
          <rect x="195" y="180" width="60" height="65" fill="#1E272E" stroke="#718093" strokeWidth="2" />
          <line x1="190" y1="180" x2="260" y2="245" stroke="#D35400" strokeWidth="4" />
          <line x1="190" y1="245" x2="260" y2="180" stroke="#D35400" strokeWidth="4" />

          {/* Boarded Entrance Door with Yellow Caution Tape */}
          <rect x="290" y="175" width="60" height="85" fill="#34495E" stroke="#1A252F" strokeWidth="3" />
          <line x1="280" y1="190" x2="360" y2="205" stroke="#F1C40F" strokeWidth="6" />
          <line x1="280" y1="230" x2="360" y2="245" stroke="#F1C40F" strokeWidth="6" />
          <text x="320" y="220" fontSize="8" fontWeight="bold" fill="#E74C3C" textAnchor="middle">CLOSED</text>

          {/* Faded Vintage Arcade Sign (1982) */}
          <rect x="200" y="118" width="240" height="20" fill="#8854D0" stroke="#FFF" strokeWidth="1.5" />
          <text x="320" y="132" fontSize="9" fontWeight="bold" fill="#FFEAA7" textAnchor="middle">
            PLEASANTVILLE VIDEO ARCADE (EST. 1982)
          </text>

          {/* TOWERING NEON MARQUEE: FANFORTUNE FUNZONE SPORTS LOUNGE */}
          <rect x="165" y="65" width="310" height="52" fill="#E84393" stroke="#F368E0" strokeWidth="3" rx="6" />
          <rect x="170" y="70" width="300" height="42" fill="#2C2C54" rx="4" />
          <text x="320" y="88" fontSize="13" fontWeight="900" fill="#FF9FF3" textAnchor="middle" letterSpacing="1">
            FANFORTUNE FUNZONE
          </text>
          <text x="320" y="104" fontSize="8.5" fontWeight="bold" fill="#00D2D3" textAnchor="middle">
            ★ 24/7 SPORTS LOUNGE &amp; LIVE MICRO-WAGERING ★
          </text>

          {/* Cardboard Cutout: NFL Quarterback */}
          <g transform="translate(385, 170)">
            <rect x="0" y="0" width="55" height="90" fill="#00CEC9" stroke="#0984E3" strokeWidth="2" />
            <circle cx="27" cy="18" r="12" fill="#FFEAA7" stroke="#000" strokeWidth="1" />
            <rect x="12" y="30" width="30" height="35" fill="#0984E3" />
            <text x="27" y="48" fontSize="12" fontWeight="bold" fill="#FFF" textAnchor="middle">#7</text>
            <rect x="-15" y="-12" width="85" height="16" fill="#F1C40F" stroke="#000" strokeWidth="1" />
            <text x="27" y="-2" fontSize="5.5" fontWeight="bold" fill="#D63031" textAnchor="middle">
              BET ON 2ND QTR PUNT!
            </text>
          </g>

          {/* Pleasantville Sidewalk & Pristine White Picket Fence */}
          <rect x="0" y="260" width="640" height="30" fill="#BDC581" stroke="#2C3E50" strokeWidth="1.5" />
          <rect x="0" y="290" width="640" height="70" fill="#27AE60" />

          {/* White Picket Fence along sidewalk */}
          {Array.from({ length: 26 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 25 + 5}, 275)`}>
              <polygon points="0,0 4,-6 8,0 8,32 0,32" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="1" />
            </g>
          ))}
          <line x1="0" y1="285" x2="640" y2="285" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="0" y1="298" x2="640" y2="298" stroke="#FFFFFF" strokeWidth="3" />

          {/* Cheerful Flowers by Fence */}
          {[40, 110, 230, 420, 530, 600].map((x, i) => (
            <g key={i} transform={`translate(${x}, 325)`}>
              <line x1="0" y1="0" x2="0" y2="18" stroke="#009432" strokeWidth="3" />
              <circle cx="0" cy="0" r="7" fill={i % 2 === 0 ? '#FFC312' : '#EA2027'} />
              <circle cx="0" cy="0" r="3" fill="#FFF" />
            </g>
          ))}
        </svg>
      )}

      {sceneId === 'store' && (
        <svg viewBox="0 0 640 360" className="w-full h-full select-none">
          {/* Sunny Sky with Friendly Clouds */}
          <rect width="640" height="230" fill="#54A0FF" />
          <g fill="#FFFFFF" opacity="0.9">
            <ellipse cx="140" cy="50" rx="45" ry="20" />
            <ellipse cx="180" cy="40" rx="30" ry="22" />
            <ellipse cx="480" cy="55" rx="50" ry="22" />
            <ellipse cx="525" cy="45" rx="35" ry="24" />
          </g>

          {/* Background Pleasantville Homes */}
          <polygon points="20,170 80,120 140,170" fill="#EE5253" stroke="#222f3e" strokeWidth="2" />
          <rect x="35" y="170" width="90" height="70" fill="#FF9FF3" stroke="#222f3e" strokeWidth="2" />

          {/* MILLER'S CORNER BODEGA - Classic Red Brick Grocery */}
          <rect x="160" y="100" width="360" height="160" fill="#C0392B" stroke="#2C3E50" strokeWidth="3" />
          {/* Brick mortar lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="160" y1={110 + i * 12} x2="520" y2={110 + i * 12} stroke="#962D22" strokeWidth="1" />
          ))}

          {/* Vintage Striped Canvas Awning */}
          <polygon points="140,140 160,110 520,110 540,140" fill="#F1C40F" stroke="#2C3E50" strokeWidth="2" />
          {[160, 200, 240, 280, 320, 360, 400, 440, 480, 520].map((x, i) => (
            <polygon
              key={i}
              points={`${x - 20},140 ${x - 15},110 ${x},110 ${x},140`}
              fill={i % 2 === 0 ? '#E74C3C' : '#FFFFFF'}
            />
          ))}

          {/* Store Name Sign */}
          <rect x="210" y="80" width="260" height="28" fill="#2C3E50" stroke="#F1C40F" strokeWidth="2" rx="4" />
          <text x="340" y="99" fontSize="11" fontWeight="bold" fill="#FFEAA7" textAnchor="middle">
            MILLER'S GROCERY &amp; CROWNDRAFT HUB
          </text>

          {/* Corner Store Windows - Plastered with Fluorescent Scratchers */}
          {/* Left Window */}
          <rect x="180" y="150" width="105" height="85" fill="#1E272E" stroke="#2C3E50" strokeWidth="2" />
          <rect x="185" y="155" width="95" height="36" fill="#F368E0" stroke="#FFF" strokeWidth="1" />
          <text x="232" y="170" fontSize="7" fontWeight="bold" fill="#FFF" textAnchor="middle">CROWNDRAFT TRIPLE-7</text>
          <text x="232" y="182" fontSize="6.5" fontWeight="bold" fill="#FFEAA7" textAnchor="middle">ONLY $50 / TICKET!</text>

          <rect x="185" y="195" width="95" height="35" fill="#10AC84" stroke="#FFF" strokeWidth="1" />
          <text x="232" y="210" fontSize="7" fontWeight="bold" fill="#FFF" textAnchor="middle">RETIRE THIS TUESDAY!</text>
          <text x="232" y="222" fontSize="5.5" fill="#FFF" textAnchor="middle">1 in 4,800,000 ODDS!</text>

          {/* Right Window */}
          <rect x="375" y="150" width="105" height="85" fill="#1E272E" stroke="#2C3E50" strokeWidth="2" />
          <rect x="380" y="155" width="95" height="36" fill="#FF9F43" stroke="#FFF" strokeWidth="1" />
          <text x="427" y="170" fontSize="7" fontWeight="bold" fill="#000" textAnchor="middle">MEGA CASHOUT 2026</text>
          <text x="427" y="182" fontSize="6.5" fontWeight="bold" fill="#D63031" textAnchor="middle">PENSION MULTIPLIER!</text>

          <rect x="380" y="195" width="95" height="35" fill="#EE5253" stroke="#FFF" strokeWidth="1" />
          <text x="427" y="209" fontSize="6.5" fontWeight="bold" fill="#FFF" textAnchor="middle">DON'T DIE BROKE!</text>
          <text x="427" y="221" fontSize="5.5" fill="#FFEAA7" textAnchor="middle">TRY GOLDEN CHERRY</text>

          {/* Center Glass Door */}
          <rect x="300" y="150" width="60" height="110" fill="#576574" stroke="#2C3E50" strokeWidth="2.5" />
          <rect x="306" y="156" width="48" height="60" fill="#8395A7" />
          <text x="330" y="185" fontSize="7" fontWeight="bold" fill="#FFEAA7" textAnchor="middle">OPEN</text>

          {/* Black High-Tech Outdoor ATM Machine with $14.50 Fee */}
          <rect x="80" y="185" width="55" height="95" fill="#2D3436" stroke="#000" strokeWidth="2" rx="3" />
          <rect x="85" y="195" width="45" height="22" fill="#00CEC9" />
          <text x="107" y="205" fontSize="6" fontWeight="bold" fill="#000" textAnchor="middle">ATM 24HR</text>
          <text x="107" y="213" fontSize="5" fill="#D63031" textAnchor="middle">FEE: $14.50</text>
          <rect x="85" y="225" width="45" height="15" fill="#636E72" />
          <text x="107" y="235" fontSize="4.5" fill="#FFF" textAnchor="middle">FANFORTUNE CASHOUT</text>

          {/* Sidewalk & Bus Stop Bench */}
          <rect x="0" y="260" width="640" height="40" fill="#BDC581" stroke="#2C3E50" strokeWidth="1.5" />
          <rect x="0" y="300" width="640" height="60" fill="#10AC84" />

          {/* Bus Stop Bench Branded by CrownDraft */}
          <rect x="495" y="245" width="130" height="25" fill="#2C3E50" stroke="#000" strokeWidth="1.5" />
          <line x1="505" y1="270" x2="505" y2="285" stroke="#000" strokeWidth="3" />
          <line x1="615" y1="270" x2="615" y2="285" stroke="#000" strokeWidth="3" />
          <text x="560" y="256" fontSize="5.5" fontWeight="bold" fill="#F1C40F" textAnchor="middle">
            CROWNDRAFT BENCH:
          </text>
          <text x="560" y="265" fontSize="5" fill="#FFF" textAnchor="middle">
            GRANDKIDS WON'T VISIT, BUT LUCK DOES!
          </text>

          {/* Sweet Grandma Flower Planters */}
          <rect x="290" y="250" width="20" height="14" fill="#D35400" />
          <circle cx="300" cy="245" r="7" fill="#F1C40F" />
          <circle cx="300" cy="245" r="3" fill="#962D22" />

          <rect x="350" y="250" width="20" height="14" fill="#D35400" />
          <circle cx="360" cy="245" r="7" fill="#F1C40F" />
          <circle cx="360" cy="245" r="3" fill="#962D22" />

          {/* Bluebird perched on sign */}
          <ellipse cx="215" cy="76" rx="6" ry="4" fill="#0984E3" />
          <circle cx="219" cy="74" r="3" fill="#0984E3" />
          <polygon points="222,74 226,75 222,77" fill="#F39C12" />
        </svg>
      )}

      {sceneId === 'stadium' && (
        <svg viewBox="0 0 640 360" className="w-full h-full select-none">
          {/* Autumn Saturday Afternoon Sky */}
          <rect width="640" height="200" fill="#74B9FF" />

          {/* Autumn Stadium Trees with Orange Leaves */}
          {[30, 80, 560, 610].map((x, i) => (
            <g key={i} transform={`translate(${x}, 120)`}>
              <rect x="-4" y="0" width="8" height="35" fill="#795548" />
              <ellipse cx="0" cy="-15" rx="26" ry="24" fill={i % 2 === 0 ? '#E67E22' : '#D35400'} />
            </g>
          ))}

          {/* Massive Stadium Bleachers */}
          <polygon points="60,200 120,90 520,90 580,200" fill="#7F8C8D" stroke="#2C3E50" strokeWidth="2" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={70 + i * 10} y1={180 - i * 15} x2={570 - i * 10} y2={180 - i * 15} stroke="#BDC3C7" strokeWidth="2" />
          ))}

          {/* Crowds in bleachers (pixel dots) */}
          {Array.from({ length: 24 }).map((_, i) => (
            <circle
              key={i}
              cx={130 + (i % 12) * 32}
              cy={110 + Math.floor(i / 12) * 20}
              r="4"
              fill={i % 3 === 0 ? '#E74C3C' : i % 3 === 1 ? '#F1C40F' : '#3498DB'}
            />
          ))}

          {/* GIGANTIC 4-STORY JUMBOTRON WITH LIVE PROP BETS */}
          <rect x="180" y="15" width="280" height="85" fill="#1E272E" stroke="#F1C40F" strokeWidth="3" rx="4" />
          <rect x="186" y="20" width="268" height="75" fill="#000000" rx="2" />

          {/* Jumbotron Flashing Content */}
          <rect x="190" y="24" width="260" height="18" fill="#E84118" />
          <text x="320" y="37" fontSize="10" fontWeight="900" fill="#FFF" textAnchor="middle" letterSpacing="1">
            FANFORTUNE LIVE IN-PLAY ODDS
          </text>

          <text x="320" y="55" fontSize="8" fontWeight="bold" fill="#00CEC9" textAnchor="middle">
            WILL 2ND HALF PUNTER SNEEZE? ODDS: +450
          </text>
          <text x="320" y="69" fontSize="7.5" fontWeight="bold" fill="#F1C40F" textAnchor="middle">
            ★ PARLAY YOUR MORTGAGE TODAY — SCAN APP ★
          </text>
          <text x="320" y="83" fontSize="6.5" fill="#E056FD" textAnchor="middle">
            SAME GAME CASH-OUT ACTIVE (30% BOOST)
          </text>

          {/* Corporate Public Service Banner on Bleachers */}
          <rect x="120" y="180" width="400" height="24" fill="#FFFFFF" stroke="#0984E3" strokeWidth="2" />
          <text x="320" y="192" fontSize="7.5" fontWeight="bold" fill="#2C3E50" textAnchor="middle">
            CHARACTER, TEAMWORK &amp; CHRISTIAN FELLOWSHIP
          </text>
          <text x="320" y="201" fontSize="6" fontWeight="bold" fill="#D63031" textAnchor="middle">
            SPONSORED BY BETCROWN GLOBAL GAMING N.V., CURAÇAO
          </text>

          {/* Football Field Turf */}
          <rect x="0" y="200" width="640" height="160" fill="#27AE60" />
          {/* Yard lines */}
          {[100, 200, 320, 440, 540].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="200" x2={x} y2="360" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6,4" />
              <text x={x + 5} y="220" fontSize="10" fontWeight="bold" fill="#FFFFFF">{i * 10 + 10}</text>
            </g>
          ))}

          {/* End Zone Goalpost wrapped in FanFortune Yellow Foam */}
          <line x1="320" y1="260" x2="320" y2="295" stroke="#F1C40F" strokeWidth="8" />
          <line x1="280" y1="260" x2="360" y2="260" stroke="#F1C40F" strokeWidth="5" />
          <line x1="280" y1="225" x2="280" y2="260" stroke="#F1C40F" strokeWidth="5" />
          <line x1="360" y1="225" x2="360" y2="260" stroke="#F1C40F" strokeWidth="5" />
          <rect x="305" y="270" width="30" height="20" fill="#E84118" />
          <text x="320" y="283" fontSize="5" fontWeight="bold" fill="#FFF" textAnchor="middle">FANFORTUNE</text>

          {/* Hot Dog Vendor in CrownDraft Referee Stripes */}
          <g transform="translate(60, 240)">
            <rect x="0" y="0" width="40" height="30" fill="#C0392B" stroke="#000" strokeWidth="1" />
            <circle cx="8" cy="30" r="5" fill="#000" />
            <circle cx="32" cy="30" r="5" fill="#000" />
            <text x="20" y="15" fontSize="5" fontWeight="bold" fill="#FFF" textAnchor="middle">HOT DOGS</text>
            <text x="20" y="23" fontSize="4.5" fill="#F1C40F" textAnchor="middle">$12 CASH</text>
            <rect x="-8" y="-14" width="56" height="10" fill="#F1C40F" stroke="#000" strokeWidth="0.5" />
            <text x="20" y="-7" fontSize="4.5" fontWeight="bold" fill="#000" textAnchor="middle">OR 1 PARLAY BET</text>
          </g>

          {/* American Flag fluttering */}
          <g transform="translate(560, 40)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="#BDC3C7" strokeWidth="3" />
            <rect x="0" y="0" width="32" height="20" fill="#D63031" />
            <rect x="0" y="5" width="32" height="4" fill="#FFF" />
            <rect x="0" y="13" width="32" height="4" fill="#FFF" />
            <rect x="0" y="0" width="14" height="12" fill="#0984E3" />
          </g>
        </svg>
      )}

      {sceneId === 'ricky' && (
        <svg viewBox="0 0 640 360" className="w-full h-full select-none">
          {/* Cheerful Golden Suburban Sunlight */}
          <rect width="640" height="220" fill="#74B9FF" />

          {/* Cheerful suburban morning sun */}
          <circle cx="80" cy="55" r="30" fill="#F1C40F" opacity="0.9" />

          {/* Distant Picket Fence Neighbors */}
          <polygon points="450,150 510,110 570,150" fill="#2C3E50" stroke="#1A252F" strokeWidth="2" />
          <rect x="465" y="150" width="90" height="60" fill="#BDC581" stroke="#1A252F" strokeWidth="2" />

          {/* RICKY'S CRAMPED 600 SQ FT BEIGE DUPLEX */}
          <rect x="180" y="110" width="280" height="130" fill="#E0D68A" stroke="#2C3E50" strokeWidth="3" />
          <polygon points="160,110 320,60 480,110" fill="#A55EEA" stroke="#2C3E50" strokeWidth="3" />

          {/* Peeling Paint Stains on Wall */}
          <path d="M 200 130 Q 215 145 205 160" stroke="#C7B264" strokeWidth="3" fill="none" />
          <path d="M 390 140 Q 405 155 395 170" stroke="#C7B264" strokeWidth="3" fill="none" />

          {/* Small Window with Linda Holding Ramen Guide */}
          <rect x="210" y="130" width="55" height="50" fill="#81ECEC" stroke="#2C3E50" strokeWidth="2.5" />
          <line x1="237" y1="130" x2="237" y2="180" stroke="#2C3E50" strokeWidth="2" />
          <line x1="210" y1="155" x2="265" y2="155" stroke="#2C3E50" strokeWidth="2" />
          {/* Linda's cartoon silhouette */}
          <ellipse cx="230" cy="150" rx="8" ry="10" fill="#FD79A8" />
          <circle cx="230" cy="142" r="5" fill="#FFEAA7" />

          {/* Front Door with Multiple Deadbolts */}
          <rect x="300" y="130" width="45" height="110" fill="#8854D0" stroke="#2C3E50" strokeWidth="2.5" />
          <circle cx="335" cy="175" r="3" fill="#F1C40F" />
          {/* Deadbolt locks */}
          <rect x="332" y="150" width="7" height="4" fill="#2C3E50" />
          <rect x="332" y="160" width="7" height="4" fill="#2C3E50" />
          <rect x="332" y="190" width="7" height="4" fill="#2C3E50" />

          {/* Potted Geranium in duck planter on stoop */}
          <rect x="280" y="225" width="16" height="15" fill="#E67E22" />
          <circle cx="288" cy="220" r="8" fill="#E74C3C" />

          {/* Weathered "FOR SALE" Sign with Stacked Price Hikes */}
          <g transform="translate(110, 160)">
            <line x1="0" y1="0" x2="0" y2="100" stroke="#2C3E50" strokeWidth="4" />
            <rect x="-35" y="0" width="70" height="30" fill="#E74C3C" stroke="#2C3E50" strokeWidth="2" />
            <text x="0" y="16" fontSize="10" fontWeight="900" fill="#FFF" textAnchor="middle">FOR SALE</text>
            <text x="0" y="26" fontSize="6" fill="#FFEAA7" textAnchor="middle">1958 AS-IS BUNGALOW</text>

            {/* Stacked Price Increase Stickers */}
            <rect x="-32" y="32" width="64" height="11" fill="#FFFFFF" stroke="#000" strokeWidth="0.5" />
            <text x="0" y="40" fontSize="5.5" textDecoration="line-through" fill="#636E72" textAnchor="middle">$140,000 (1998)</text>

            <rect x="-32" y="44" width="64" height="11" fill="#FFFFFF" stroke="#000" strokeWidth="0.5" />
            <text x="0" y="52" fontSize="5.5" textDecoration="line-through" fill="#636E72" textAnchor="middle">$450,000 (2019)</text>

            <rect x="-34" y="56" width="68" height="16" fill="#F1C40F" stroke="#D63031" strokeWidth="1.5" />
            <text x="0" y="66" fontSize="7" fontWeight="bold" fill="#D63031" textAnchor="middle">$850,000 CASH</text>
            <text x="0" y="71" fontSize="4.5" fontWeight="bold" fill="#000" textAnchor="middle">NO INSPECTION / AS-IS</text>
          </g>

          {/* Big Sal's Immaculate Black Cadillac in Driveway */}
          <g transform="translate(470, 200)">
            {/* Car body */}
            <path d="M 0 35 L 20 18 L 90 18 L 120 28 L 145 35 L 140 52 L 5 52 Z" fill="#2C3E50" stroke="#000" strokeWidth="2.5" />
            <rect x="25" y="20" width="60" height="12" fill="#74B9FF" opacity="0.8" />
            {/* Wheels */}
            <circle cx="30" cy="52" r="12" fill="#1E272E" stroke="#BDC3C7" strokeWidth="3" />
            <circle cx="115" cy="52" r="12" fill="#1E272E" stroke="#BDC3C7" strokeWidth="3" />
            {/* Vanity License Plate: BIG-SAL */}
            <rect x="125" y="40" width="22" height="9" fill="#F1C40F" stroke="#000" strokeWidth="1" />
            <text x="136" y="47" fontSize="5.5" fontWeight="bold" fill="#000" textAnchor="middle">BIG-SAL</text>
            {/* Bumper Sticker */}
            <rect x="40" y="46" width="60" height="6" fill="#FFF" />
            <text x="70" y="51" fontSize="4" fill="#C0392B" textAnchor="middle">Ask Me About Flexible Amortization</text>
          </g>

          {/* Front Yard Lawn & White Picket Fence That Ends Abruptly */}
          <rect x="0" y="240" width="640" height="120" fill="#2ECC71" />

          {/* Picket fence on left that ends abruptly */}
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 22 + 10}, 245)`}>
              <polygon points="0,0 4,-5 8,0 8,30 0,30" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="1" />
            </g>
          ))}
          <line x1="10" y1="255" x2="185" y2="255" stroke="#FFF" strokeWidth="2.5" />

          {/* Lawn chair with crumpled parlay ticket */}
          <g transform="translate(365, 230)">
            <path d="M 0 30 L 15 0 L 30 30 Z" stroke="#3498DB" strokeWidth="3" fill="none" />
            <rect x="5" y="5" width="20" height="18" fill="#E74C3C" />
            {/* Crumpled ticket */}
            <rect x="10" y="28" width="12" height="14" fill="#FFF" stroke="#000" strokeWidth="0.5" transform="rotate(20 10 28)" />
            <text x="15" y="36" fontSize="3.5" fill="#D63031" transform="rotate(20 10 28)">14-LEG PARLAY</text>
          </g>
        </svg>
      )}

      {/* Top Banner: Location Name & Lesson Title */}
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-30 pointer-events-none">
        <div className="bg-yellow-300/95 border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-red-600 animate-spin" />
          <span className="font-['Press_Start_2P',monospace] text-[9px] sm:text-[10px] text-black uppercase tracking-wider">
            {desc.settingName}
          </span>
        </div>

        {/* Scene Info Button */}
        <button
          type="button"
          onClick={() => setShowDetailsModal(true)}
          className="pointer-events-auto bg-blue-600 hover:bg-blue-700 text-white border-2 border-black px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_#000] flex items-center gap-1 active:translate-y-0.5 cursor-pointer"
          title="Inspect 1994 CD-ROM Scene"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Inspect Scene</span>
        </button>
      </div>

      {/* Corporate Marquee Bottom Ribbon */}
      <div className="absolute bottom-1.5 left-2 right-2 z-30 pointer-events-none">
        <div className="bg-black/85 text-yellow-300 border border-yellow-400 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono flex items-center justify-between shadow-[2px_2px_0px_#000]">
          <span className="truncate">
            {sceneId === 'arcade' && 'SPONSOR ALERT: FanFortune FunZone™ Grand Opening 24/7'}
            {sceneId === 'store' && 'RETIREMENT NOTICE: CrownDraft Scratchers 777 - Cash Out Today'}
            {sceneId === 'stadium' && 'PROP ODDS TICKER: High School Kickoff - Over/Under 38.5 Punts'}
            {sceneId === 'ricky' && 'FRIENDLY FINANCIAL ASSOCIATES LLC: Non-traditional Loans Available'}
          </span>
          <span className="text-red-400 font-bold ml-2 shrink-0">WGR-2026</span>
        </div>
      </div>

      {/* INSPECT SCENE MODAL (1994 Multimedia Guide) */}
      {showDetailsModal && (
        <div className="absolute inset-0 z-40 bg-black/75 flex items-center justify-center p-3">
          <div className="bg-[#C0C0C0] border-4 border-gray-200 border-r-gray-700 border-b-gray-700 p-3 max-w-md w-full shadow-[4px_4px_0px_#000] text-black">
            <div className="bg-[#000080] text-white px-2 py-1 font-bold text-xs flex justify-between items-center mb-2">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-yellow-300" />
                Scene Lore: {desc.settingName}
              </span>
              <button
                type="button"
                onClick={() => setShowDetailsModal(false)}
                className="bg-[#C0C0C0] text-black px-1 text-xs font-bold border border-white border-r-gray-800 border-b-gray-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-800 mb-2 leading-relaxed">
              {desc.visualSummary}
            </p>

            <div className="space-y-1.5 text-[11px] mb-3">
              <div className="font-bold text-blue-900 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600" /> 1994 CD-ROM Wholesome Aesthetic:
              </div>
              <ul className="list-disc list-inside text-gray-700 pl-1 space-y-0.5">
                {desc.cdRomDetails.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="font-bold text-red-900 flex items-center gap-1 mt-2">
                <AlertTriangle className="w-3 h-3 text-red-600" /> 2026 Sports-Betting Satire:
              </div>
              <ul className="list-disc list-inside text-gray-700 pl-1 space-y-0.5">
                {desc.corporateSatireDetails.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setShowDetailsModal(false)}
              className="w-full bg-[#008080] text-white font-bold py-1 text-xs border-2 border-white border-r-gray-800 border-b-gray-800 active:translate-y-0.5 cursor-pointer"
            >
              Return to Adventure
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
