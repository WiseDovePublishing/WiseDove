import { DialogueStep, LessonScene } from '../types/game';

export interface SceneVisualDescription {
  id: 'arcade' | 'store' | 'stadium' | 'ricky';
  title: string;
  settingName: string;
  yearAesthetic: string;
  visualSummary: string;
  cdRomDetails: string[];
  corporateSatireDetails: string[];
}

export const SCENE_DESCRIPTIONS: Record<'arcade' | 'store' | 'stadium' | 'ricky', SceneVisualDescription> = {
  arcade: {
    id: 'arcade',
    title: 'Lesson 1: The Closed Arcade (Pleasantville Main Street)',
    settingName: 'Pleasantville Town Square & Main Street',
    yearAesthetic: '1994 Christian Educational CD-ROM (Windows 3.1 256-Color SVGA)',
    visualSummary:
      'An impossibly cheerful, sun-drenched suburban street with bright cyan skies, a cartoon sun wearing oversized sunglasses, blooming marigolds, and white picket fences. Right in the center sits the beloved 1982 Pleasantville Video Arcade, completely shuttered with yellow cautionary tape and replaced by a towering neon marquee for FanFortune FunZone 24/7 Sports Lounge.',
    cdRomDetails: [
      'Relentlessly smiling yellow sun with warm ray strokes in the top corner',
      'Pristine emerald grass with dithered gradient textures and white picket fence',
      'Wholesome retro soda fountain mural faded behind foreclosure boards',
      'Dithered 90s educational title banner with gold stars bouncing on the edges',
    ],
    corporateSatireDetails: [
      'Giant magenta-and-gold LED billboard: "COMING SOON: FANFORTUNE FUNZONE SPORTS LOUNGE & LIVE PARLAY SUITE"',
      'Cardboard cutout of an NFL quarterback shouting: "BET ON THE 2ND QUARTER PUNT OR YOU DON\'T LOVE AMERICA"',
      'Neighboring Roller Rink has a shuttered banner reading: "Seized for CrownDraft Off-Track Betting Center"',
      'Hobby Shop storefront displaying: "Rent increased by 400% — Try our Scratch-Off Dispensary inside!"',
    ],
  },
  store: {
    id: 'store',
    title: "Lesson 2: Mrs. Dobbins' Lucky Numbers (Miller's Corner Sundries)",
    settingName: "Miller's Corner Grocery & CrownDraft Wagering Terminal",
    yearAesthetic: '1994 Christian Educational CD-ROM (256-Color Hand-Drawn Cartoon Art)',
    visualSummary:
      "A picturesque, storybook red-brick corner bodega under a smiling puffy cloud. The vintage striped canvas awning advertises 'Fresh Bread & 5¢ Bubblegum', but every single windowpane is papered over with garish, fluorescent scratch-off lottery posters promising miraculous retirement escape hatches.",
    cdRomDetails: [
      'Charming hand-drawn brick textures and an antique red bicycle leaned on a lamp post',
      'Chirping bluebirds perched innocently on top of a scratch-and-win neon sign',
      'Wholesome pastel wooden benches where cheerful senior citizens usually feed pigeons',
      'Bright golden sunflower planters flanking the front door step',
    ],
    corporateSatireDetails: [
      'Fluorescent posters reading: "CROWNDRAFT TRIPLE-7 MEGA MULTIPLIER: ONLY $50 PER TICKET! RETIRE THIS TUESDAY!"',
      'A massive black outdoor ATM blinking: "ATM CONVENIENCE FEE: $14.50 — SPONSORED BY FANFORTUNE INSTANT CASHOUT"',
      'Cardboard display on the sidewalk: "Trade Your Social Security Check for 40 Golden Cherry Scratchers!"',
      'Town bus stop shelter bench branded: "CrownDraft: Your Grandkids Won\'t Visit, But Lady Luck Always Does!"',
    ],
  },
  stadium: {
    id: 'stadium',
    title: 'Lesson 3: Dad at the Big Game (FanFortune Memorial Coliseum)',
    settingName: 'The Pleasantville High / Municipal Stadium',
    yearAesthetic: '1994 Multimedia CD-ROM (Pixelated Sports Stadium with Animated LED Panels)',
    visualSummary:
      'A sprawling green football field on a crisp autumn Saturday afternoon, framed by majestic American flags and high school bleachers that have been swallowed whole by corporate sports-betting sponsorship banners from goalpost to goalpost.',
    cdRomDetails: [
      'Classic 1994 marching band uniforms with pixelated brass tubas and cheerful pom-poms',
      'Fluffy cartoon cumulus clouds shaped like football helmets in a radiant blue sky',
      'Wholesome autumn maple trees shedding orange leaves along the concession walk',
      'Traditional wooden scoreboard with painted wooden numbers, now dwarfed by a high-tech screen',
    ],
    corporateSatireDetails: [
      'A four-story Jumbotron flashing: "LIVE PROP BET: WILL BACKUP PUNTER DROP THE BALL? ODDS +450 — SCAN QR CODE TO PARLAY YOUR MORTGAGE!"',
      'Both end-zone pylons wrapped in FanFortune neon yellow foam padding',
      'Hot dog vendor wearing a striped CrownDraft referee jersey offering "Hot Dog + $10 Same-Game Parlay Voucher"',
      'Public service banner on the bleachers: "CHARACTER, PURITY & TEAMWORK — PROUDLY SPONSORED BY BETCROWN OFFSHORE HOLDINGS PLC"',
    ],
  },
  ricky: {
    id: 'ricky',
    title: 'Lesson 4: Cousin Ricky and the American Dream (Starter Home Ambitions)',
    settingName: "Ricky and Linda's Cramped Rental Flat / The Suburban Dream",
    yearAesthetic: '1994 Educational CD-ROM (Cozy Storybook Framing with Comedic Realism)',
    visualSummary:
      'A tiny 600-square-foot beige duplex with peeling white paint, encircled by an immaculate miniature white picket fence that ends abruptly at the neighbor\'s concrete wall. In the yard sits a weathered "FOR SALE" sign with six price-increase stickers slapped on top, while an immaculate black Cadillac sits in the driveway.',
    cdRomDetails: [
      'Cozy hand-painted suburban sidewalk with hopscotch chalk outlines',
      'A wooden porch swing holding an adorable potted geranium in a ceramic duck planter',
      'Warm golden sunlight streaming through 1990s lace curtains',
      'Wholesome welcome mat that reads: "BLESS THIS HOUSE (AND OUR DEPOSIT)"',
    ],
    corporateSatireDetails: [
      'The "FOR SALE" sign displays stacked price stickers: "$140,000 → $320,000 → $590,000 → $850,000 CASH ONLY / NO INSPECTION / AS-IS"',
      'Ricky sitting in a folding lawn chair holding a crumpled 14-leg parlay ticket from Romanian Third-Division Darts',
      'Immaculate black Cadillac in the driveway with vanity plate "BIG-SAL" and a bumper sticker: "Ask Me About Flexible Amortization"',
      'Fiancée Linda looking through the window holding a pamphlet: "How to Build Character on Instant Ramen"',
    ],
  },
};

export const LESSON_SCENES: LessonScene[] = [
  {
    lessonNumber: 1,
    title: 'LESSON 1: BILLY AND THE CLOSED ARCADE',
    subtitle: 'Having Fun Without Wagering Your Bicycle!',
    moralLesson: 'You don’t need gambling to have fun!',
    locationName: 'Pleasantville Town Square (Main St.)',
    sceneId: 'arcade',
    description:
      'Johnny visits his favorite arcade to play Galaxy Ranger, but finds it replaced by a 24/7 sports betting terminal.',
    bgAtmosphere: 'Relentlessly cheerful 90s suburban morning, interrupted by fluorescent casino banners.',
    initialStepId: 'l1_step1',
  },
  {
    lessonNumber: 2,
    title: "LESSON 2: MRS. DOBBINS' LUCKY NUMBERS",
    subtitle: 'The Virtues of Thrift, Coupons, and Faith!',
    moralLesson: 'A penny saved is a penny earned!',
    locationName: "Miller's Corner Bodega & CrownDraft Kiosk",
    sceneId: 'store',
    description:
      'Johnny drops by the corner store to buy a 5-cent peppermint and finds sweet old Mrs. Dobbins with a stack of scratchers.',
    bgAtmosphere: 'Chirping cartoon birds, smells of apple pie, and an outdoor ATM charging $14.50 convenience fees.',
    initialStepId: 'l2_step1',
  },
  {
    lessonNumber: 3,
    title: 'LESSON 3: DAD AT THE BIG GAME',
    subtitle: 'Sportsmanship, Team Spirit, and Micro-Wagering!',
    moralLesson: 'Sports are about teamwork, not money!',
    locationName: 'Pleasantville Memorial Stadium (FanFortune Coliseum)',
    sceneId: 'stadium',
    description:
      'Johnny goes to the high school homecoming game with his dad, surrounded by non-stop live in-play betting odds.',
    bgAtmosphere: 'Crisp autumn breeze, marching bands, and Jumbotrons urging fathers to parlay their children’s college funds.',
    initialStepId: 'l3_step1',
  },
  {
    lessonNumber: 4,
    title: 'LESSON 4: COUSIN RICKY AND THE AMERICAN DREAM',
    subtitle: 'Patience, Modest Living, and Friendly Associates!',
    moralLesson: 'Good things come to those who wait!',
    locationName: "Cousin Ricky's Rental Porch",
    sceneId: 'ricky',
    description:
      'Johnny checks in on his favorite older cousin, who needed a down payment for a modest starter house.',
    bgAtmosphere: 'A charming duplex with a 14-leg parlay stub on the porch and Big Sal checking his watch politely.',
    initialStepId: 'l4_step1',
  },
];

export const DIALOGUE_SCRIPT: Record<string, DialogueStep> = {
  // ==========================================
  // LESSON 1: BILLY AND THE CLOSED ARCADE
  // ==========================================
  l1_step1: {
    id: 'l1_step1',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    text: "WELCOME TO PLEASANTVILLE, BOYS AND GIRLS! A sun-kissed American paradise where every morning smells like fresh pancakes and good old-fashioned character! Today, our wholesome pal Johnny is heading down to the local video arcade for some clean, innocent fun!",
    subtext: 'Lesson 1 of 4: The Closed Arcade',
    luckComment: "Looking good, Johnny! Your luck is 52 today! Remember to smile at neighbors!",
    choices: [
      {
        text: "Golly! I can't wait to play Galaga for a shiny quarter!",
        nextStepId: 'l1_step2',
        luckDelta: 1,
      },
      {
        text: "Gee whiz, Mr. Narrator! Pleasantville sure is swell!",
        nextStepId: 'l1_step2',
        luckDelta: 0,
      },
      {
        text: "I wonder if my best pal Billy wants to play two-player!",
        nextStepId: 'l1_step2',
        luckDelta: -1,
      },
    ],
  },
  l1_step2: {
    id: 'l1_step2',
    speaker: 'johnny',
    speakerName: "GOOD OL' JOHNNY",
    mood: 'puzzled',
    text: "Golly Moses! What happened to the Pleasantville Video Arcade?! The doors are locked with heavy chains, and there's a big glowing sign that says: 'FANFORTUNE FUNZONE SPORTS LOUNGE & VIP MICRO-BETTING PARLOR'!",
    choices: [
      {
        text: "Look, there's my pal Billy sitting on the curb!",
        nextStepId: 'l1_step3',
      },
      {
        text: "Maybe they just added a new pinball machine?",
        nextStepId: 'l1_step3',
      },
      {
        text: "Gee, Mr. Narrator, what is 'micro-betting'?",
        nextStepId: 'l1_step3',
        narratorIntervention: "Don't you worry your clean-cut head about that, Johnny!",
      },
    ],
  },
  l1_step3: {
    id: 'l1_step3',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'sad',
    text: "Hey Johnny. The arcade got shut down last Tuesday. The landlord doubled the rent to lease it to FanFortune. Now all the guys hang out here watching live Turkish badminton odds on thirty flat-screens.",
    choices: [
      {
        text: "Gee, Billy! Why don't you try roller skating?",
        nextStepId: 'l1_step4_skating',
      },
      {
        text: "How about building model airplanes at the hobby shop?",
        nextStepId: 'l1_step4_airplanes',
      },
      {
        text: "What about a wholesome round of mini-golf?",
        nextStepId: 'l1_step4_minigolf',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Say Billy, why did every single fun place in town disappear?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_step4_skating: {
    id: 'l1_step4_skating',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'defeated',
    text: "Rink closed in March, Johnny. CrownDraft bought the building and turned it into an automated parlay fulfillment depot. They took out the disco ball.",
    choices: [
      {
        text: "Model airplanes, then! Wholesome glue and balsa wood!",
        nextStepId: 'l1_step4_airplanes',
      },
      {
        text: "What about a friendly game of touch football in the park?",
        nextStepId: 'l1_step5_touchfootball',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] If all the kids are bored, why does only gambling make money?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_step4_airplanes: {
    id: 'l1_step4_airplanes',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'defeated',
    text: "Hobby shop closed, Johnny. Old Mr. Henderson couldn't pay the commercial property tax. Now it's a kiosk where you bet on whether the weather in Detroit will be cloudy.",
    choices: [
      {
        text: "Mini-golf, Billy! Pure, clean miniature golf!",
        nextStepId: 'l1_step4_minigolf',
      },
      {
        text: "We could read classic literature at the public library!",
        nextStepId: 'l1_step5_library',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Billy, why are all the small businesses closing while betting apps thrive?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_step4_minigolf: {
    id: 'l1_step4_minigolf',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'defeated',
    text: "The windmill was demolished, Johnny. Now it's a CrownDraft live odds center with drive-thru same-game parlays. You can't even get soft-serve ice cream.",
    choices: [
      {
        text: "We can do yard work for our parents! Chores are free fun!",
        nextStepId: 'l1_step5_chores',
      },
      {
        text: "Let's visit the library for some moral enrichment!",
        nextStepId: 'l1_step5_library',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Is it possible that young people gamble because there is literally nowhere else to go?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_step5_touchfootball: {
    id: 'l1_step5_touchfootball',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'sad',
    text: "The municipal park was leased to FanFortune for their Annual High-Stakes Cornhole Invitational. If you step on the grass without a betting badge, security escorts you to the perimeter.",
    choices: [
      {
        text: "Golly, Billy! We can still skip stones across the creek!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "A clean conscience is the best playground of all!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Gee, Mr. Narrator, did our town sell our playground to pay for sports-betting tax subsidies?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_step5_library: {
    id: 'l1_step5_library',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'sad',
    text: "The library cut their hours to two days a month after the county budget shortfall. Plus CrownDraft sponsored the reading room and replaced the encyclopedia with daily betting sheets.",
    choices: [
      {
        text: "A true American boy carries his own library in his heart!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "Cheer up, Billy! Wholesome imagination costs zero dollars!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why did the library run out of money if the betting apps pay so much tax revenue?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_step5_chores: {
    id: 'l1_step5_chores',
    speaker: 'billy',
    speakerName: 'BILLY',
    mood: 'defeated',
    text: "Johnny, my dad hasn't mowed the lawn in three weeks. He's been staring at Finnish ice hockey totals on his iPad since breakfast.",
    choices: [
      {
        text: "Then we shall mow it for him with a cheerful song!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "Hard physical labor builds moral fiber and sturdy wrists!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Is Billy's dad staring at hockey because his wages haven't gone up since 2004?",
        isInconvenient: true,
        nextStepId: 'l1_inconvenient',
      },
    ],
  },
  l1_inconvenient: {
    id: 'l1_inconvenient',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "*BZZT!* HA HA HA! WHAT A SILLY, CONFUSED QUESTION, JOHNNY! Let's not get bogged down in complicated municipal zoning ordinances, commercial real estate private equity consolidations, or the total collapse of non-commercial third spaces! BILLY JUST NEEDS A POSITIVE ATTITUDE!",
    luckComment: "Whoops! Luck adjusted to 49! Remember, character is free!",
    choices: [
      {
        text: "Gee, Mr. Narrator, I'm sorry! Let's help Billy find a hobby!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "You're right! A cheerful smile beats a video game any day!",
        nextStepId: 'l1_narrator_conclusion',
      },
      {
        text: "Billy can count pebbles by the curb! That builds character!",
        nextStepId: 'l1_narrator_conclusion',
      },
    ],
  },
  l1_narrator_conclusion: {
    id: 'l1_narrator_conclusion',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    lessonCard: 'MORAL LESSON #1: YOU DON’T NEED GAMBLING TO HAVE FUN!',
    text: "SPLENDID ADVICE, JOHNNY! See, boys and girls? When the arcade closes, the roller rink closes, and the parks are monetized by international wagering syndicates, an upright American youth doesn't gamble—he whistles a patriotic hymn and cleans his room! GOLD STAR EARNED!",
    choices: [
      {
        text: "Hooray! Let's walk over to Mrs. Dobbins' corner store next door!",
        nextStepId: 'l2_step1', // Seamless immediate transition to Lesson 2!
        luckDelta: 3,
      },
      {
        text: "Gee, I feel morally invigorated! Onward to Lesson Two!",
        nextStepId: 'l2_step1',
        luckDelta: 1,
      },
    ],
  },

  // ==========================================
  // LESSON 2: MRS. DOBBINS' LUCKY NUMBERS
  // ==========================================
  l2_step1: {
    id: 'l2_step1',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    text: "LESSON TWO: MRS. DOBBINS' LUCKY NUMBERS! Next door at Miller's Corner Sundries, Johnny meets sweet elderly Mrs. Dobbins! She's been a pillar of the Pleasantville Baptist Choir for forty-two glorious years! But uh-oh... what is she holding at the cash register?!",
    subtext: 'Lesson 2 of 4: The Corner Store Scratchers',
    luckComment: "Luck check! A brisk 54! Looking mighty bright, Johnny!",
    choices: [
      {
        text: "Good morning, Mrs. Dobbins! Buying some fresh peaches?",
        nextStepId: 'l2_step2',
      },
      {
        text: "Golly, Mrs. Dobbins! Is that a peppermint stick in your pocket?",
        nextStepId: 'l2_step2',
      },
      {
        text: "Gosh, that's a whole rainbow of colorful shiny foil cards!",
        nextStepId: 'l2_step2',
      },
    ],
  },
  l2_step2: {
    id: 'l2_step2',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "Oh hello, little Johnny dear! No, not peaches today. Peaches are $4.80 a pound now. I'm just buying twenty of these 'CrownDraft Neon Lucky Horseshoe Super-Multiplier' scratch-off tickets. If I get three golden cherries, I can pay my property tax assessment!",
    choices: [
      {
        text: "Golly, Mrs. Dobbins! Have you tried clipping grocery coupons?",
        nextStepId: 'l2_step3_coupons',
      },
      {
        text: "My Sunday School teacher says a penny saved is a penny earned!",
        nextStepId: 'l2_step3_penny',
      },
      {
        text: "You should put ten percent into a high-yield savings bond!",
        nextStepId: 'l2_step3_savings',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Mrs. Dobbins, didn't you teach third grade for forty-five years? What happened to your pension?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_pension',
      },
    ],
  },
  l2_step3_coupons: {
    id: 'l2_step3_coupons',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "I do clip coupons, Johnny sweetheart! Yesterday I saved forty cents on kidney beans. But my heating oil went up $380 this month, and my blood pressure medication isn't covered by the supplementary formulary anymore. Coupons only go so far on a fixed income, dearie.",
    choices: [
      {
        text: "You can knit a warm wool sweater instead of turning on the heat!",
        nextStepId: 'l2_step4_sweater',
      },
      {
        text: "A penny saved is still a penny earned, Mrs. Dobbins!",
        nextStepId: 'l2_step3_penny',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why does an 81-year-old retired schoolteacher need a 500-to-1 scratcher to heat her bedroom?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_heat',
      },
    ],
  },
  l2_step3_penny: {
    id: 'l2_step3_penny',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "That was very true when Benjamin Franklin said it, Johnny! But back then, a gallon of milk didn't cost seven dollars, and the bank actually gave you interest instead of charging you a monthly maintenance fee for having less than fifteen hundred dollars in checking.",
    choices: [
      {
        text: "Just brew your coffee at home instead of dining lavishly!",
        nextStepId: 'l2_step4_coffee',
      },
      {
        text: "Thrift is its own reward, Mrs. Dobbins! Clean and pure!",
        nextStepId: 'l2_step4_thrift',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Gee, if a penny saved loses 4% purchasing power every year, isn't a penny saved losing money?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_inflation',
      },
    ],
  },
  l2_step3_savings: {
    id: 'l2_step3_savings',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "Bless your heart, Johnny! My savings account pays 0.05% interest. My pharmacist charges $310 for asthma inhalers. At that interest rate, I will break even when I am three hundred and forty-two years old!",
    choices: [
      {
        text: "Breathing fresh country air is completely free!",
        nextStepId: 'l2_step4_thrift',
      },
      {
        text: "Have you considered turning your front porch into a lemonade stand?",
        nextStepId: 'l2_step4_coffee',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why are pharmaceutical companies charging $300 while state lotteries target seniors?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_pension',
      },
    ],
  },
  l2_step4_sweater: {
    id: 'l2_step4_sweater',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "I do wear three sweaters, sweet boy! But the landlord at Shady Pines Manor said the rent is going up another 22% because an investment trust from Boston bought the complex. If I don't scratch off this $5,000 jackpot, I might have to move in with my nephew in Toledo.",
    choices: [
      {
        text: "Toledo is famous for its splendid character and glass museum!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "Faith and frugal budgeting will conquer all obstacles!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why did an out-of-state private equity trust buy senior housing in Pleasantville?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_inflation',
      },
    ],
  },
  l2_step4_coffee: {
    id: 'l2_step4_coffee',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "I haven't had store coffee since 1998, Johnny! I drink hot tap water with a lemon wedge. But the store clerk here says if I buy the $50 'CrownDraft Titanium Parlay Ticket', my odds of paying off my knee replacement jump to one in ninety thousand! That's better odds than my pension cost-of-living adjustment!",
    choices: [
      {
        text: "Just say NO to the ticket, Mrs. Dobbins! Put that $50 in a piggy bank!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "A cheerful heart does good like medicine!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Gee, Mr. Narrator, why does the state lottery advertise higher odds than Medicare?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_pension',
      },
    ],
  },
  l2_step4_thrift: {
    id: 'l2_step4_thrift',
    speaker: 'mrs_dobbins',
    speakerName: 'MRS. DOBBINS',
    mood: 'sweet',
    text: "You are such an angel, Johnny. But my sweet friend Gladys tried pure thrift, and now she eats cold beans by candlelight. Meanwhile, the television says CrownDraft gives out $100,000 every Saturday! It's hard not to dream a little when you're eighty-one.",
    choices: [
      {
        text: "Dreams are free, but lottery tickets are foolish! Say NO!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "A good boy always reminds elders of the value of hard work!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Is the lottery just a tax on desperate people who have no other hope?",
        isInconvenient: true,
        nextStepId: 'l2_inconvenient_inflation',
      },
    ],
  },
  l2_inconvenient_pension: {
    id: 'l2_inconvenient_pension',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'nervous',
    isNarratorGlitch: true,
    text: "*STATIC SQUEAL* AHEM! G-GOODNESS ME, JOHNNY! Let's not interrogate municipal pension underfunding ratios or state revenue reliance on regressive sin taxes! Mrs. Dobbins simply needs to balance her checkbook with a sharpened pencil and bake more shortbread!",
    luckComment: "Whoa there! Luck dipped to 47! Keep your chin up!",
    choices: [
      {
        text: "Gee, Mr. Narrator, my mistake! Thrift solves everything!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "Yes! A penny saved is indeed a penny earned!",
        nextStepId: 'l2_narrator_wrap',
      },
    ],
  },
  l2_inconvenient_heat: {
    id: 'l2_inconvenient_heat',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'nervous',
    isNarratorGlitch: true,
    text: "*BUZZ-CLICK* NOW LOOK HERE, LITTLE FELLA! The American Values Software Company curriculum strictly specifies that heating costs are a matter of personal fortitude! Cold temperatures build Christian perseverance and rosier cheeks! NEXT TOPIC!",
    choices: [
      {
        text: "Understood, Mr. Narrator! Rosy cheeks are patriotic!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "I shall turn down my own thermostat to 45 degrees tonight!",
        nextStepId: 'l2_narrator_wrap',
      },
    ],
  },
  l2_inconvenient_inflation: {
    id: 'l2_inconvenient_inflation',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "*BZZZZZT! CRACKLE!* INFLATION DOES NOT EXIST IN THE HEARTS OF TRUE PATRIOTS! A dollar is worth exactly one hundred cents of pure moral fiber! Now Johnny, deliver the official educational moral lesson before we violate our educational software distribution guidelines!",
    choices: [
      {
        text: "Mrs. Dobbins, please just put that quarter in your church purse!",
        nextStepId: 'l2_narrator_wrap',
      },
      {
        text: "We love you, Mrs. Dobbins! Hard work will save the day!",
        nextStepId: 'l2_narrator_wrap',
      },
    ],
  },
  l2_narrator_wrap: {
    id: 'l2_narrator_wrap',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    lessonCard: 'MORAL LESSON #2: A PENNY SAVED IS A PENNY EARNED!',
    text: "OUTSTANDING CITIZENSHIP, JOHNNY! Mrs. Dobbins has put away her scratch-off coin and will instead rely entirely on warm tea and frugal faith! Isn't personal responsibility marvelous?! Now grab your foam finger, because Dad is taking us to the Big Game!",
    choices: [
      {
        text: "Yippee! Off to the Pleasantville Memorial Stadium!",
        nextStepId: 'l3_step1', // Seamless immediate transition to Lesson 3!
        luckDelta: 2,
      },
      {
        text: "Gee whiz! I sure love wholesome high school football!",
        nextStepId: 'l3_step1',
        luckDelta: -1,
      },
    ],
  },

  // ==========================================
  // LESSON 3: DAD AT THE BIG GAME
  // ==========================================
  l3_step1: {
    id: 'l3_step1',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    text: "LESSON THREE: DAD AT THE BIG GAME! Ah, the roar of the crowd! The crisp autumn leaves! The noble spirit of sportsmanship! Today, Johnny and his wonderful father are attending the Pleasantville Panthers clash against the Oak Creek Beavers!",
    subtext: 'Lesson 3 of 4: The Heavily Sponsored Stadium',
    luckComment: "Luck meter check: 58! A field goal of fortune, Johnny!",
    choices: [
      {
        text: "Gee, Dad! Smell those grilled hot dogs and team spirit!",
        nextStepId: 'l3_step2',
      },
      {
        text: "Look at the cheerleaders doing backflips, Dad!",
        nextStepId: 'l3_step2',
      },
      {
        text: "Dad, why are you staring into your smartphone so intensely?",
        nextStepId: 'l3_step2',
      },
    ],
  },
  l3_step2: {
    id: 'l3_step2',
    speaker: 'dad',
    speakerName: 'DAD',
    mood: 'intense',
    text: "Quiet for a second, Johnny! The FanFortune boosted-parlay window closes in forty seconds! If the Panthers' backup left tackle commits a false start in the second quarter, Daddy wins eight hundred and forty dollars to cover our deductible!",
    choices: [
      {
        text: "Gee, Dad! Who are we rooting for to win?",
        nextStepId: 'l3_step3_rooting',
      },
      {
        text: "Isn't football about teamwork and character, Dad?",
        nextStepId: 'l3_step3_teamwork',
      },
      {
        text: "Look at the giant Jumbotron! It has neon odds flashing everywhere!",
        nextStepId: 'l3_step3_jumbotron',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Gee, Mr. Narrator! If gambling is so bad, how come the whole stadium is named after FanFortune?",
        isInconvenient: true,
        nextStepId: 'l3_inconvenient_stadium_name',
      },
    ],
  },
  l3_step3_rooting: {
    id: 'l3_step3_rooting',
    speaker: 'dad',
    speakerName: 'DAD',
    mood: 'intense',
    text: "I don't care who wins, Johnny! Winning doesn't pay the propane bill! I'm rooting for the visiting punter to average under 38.5 yards and for exactly two yellow flags before halftime! Look at the referee—his jersey has a CrownDraft patch on both sleeves!",
    choices: [
      {
        text: "Dad, let's just sing the high school fight song together!",
        nextStepId: 'l3_step4_fightsong',
      },
      {
        text: "Can we get a hot dog from the snack stand?",
        nextStepId: 'l3_step4_hotdog',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Dad, if nobody cares who wins, did sports just become roulette with grass?",
        isInconvenient: true,
        nextStepId: 'l3_inconvenient_sportsmanship',
      },
    ],
  },
  l3_step3_teamwork: {
    id: 'l3_step3_teamwork',
    speaker: 'dad',
    speakerName: 'DAD',
    mood: 'intense',
    text: "Teamwork is great, son, but FanFortune just offered a 30% profit boost on first-down holding calls. Look at the cheerleaders! Their megaphones say 'SCAN HERE TO LIVE-BET 3RD DOWN'. It's synergistic entertainment!",
    choices: [
      {
        text: "Golly, Dad! The quarterback is trying his very best!",
        nextStepId: 'l3_step4_fightsong',
      },
      {
        text: "Mr. Narrator, tell Dad about the beauty of clean amateur athletics!",
        nextStepId: 'l3_step4_narrator_plea',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why are seventeen-year-old high school students on live wagering apps?",
        isInconvenient: true,
        nextStepId: 'l3_inconvenient_kids',
      },
    ],
  },
  l3_step3_jumbotron: {
    id: 'l3_step3_jumbotron',
    speaker: 'dad',
    speakerName: 'DAD',
    mood: 'intense',
    text: "That Jumbotron was donated by CrownDraft, Johnny! The school board had to eliminate art classes and bus routes, but CrownDraft gave the school a 4K screen with real-time prop bet odds and a mascot named 'Odds-O the Lucky Leprechaun'!",
    choices: [
      {
        text: "Gee whiz! Odds-O is doing a silly tap-dance on the 50-yard line!",
        nextStepId: 'l3_step4_fightsong',
      },
      {
        text: "Art class was fun, but I can draw pictures in my mind for free!",
        nextStepId: 'l3_step4_narrator_plea',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why did the high school need gambling sponsors to pay for teacher health insurance?",
        isInconvenient: true,
        nextStepId: 'l3_inconvenient_kids',
      },
    ],
  },
  l3_step4_fightsong: {
    id: 'l3_step4_fightsong',
    speaker: 'dad',
    speakerName: 'DAD',
    mood: 'desperate',
    text: "NOT NOW, JOHNNY! The kicker just missed! MY 7-LEG CROSS-SPORT PARLAY IS RUINED! That kicker cost me four hundred bucks! He's just a junior, how could he miss a 22-yard chip shot?! I'm downloading CrownDraft right now to chase my losses on Brazilian volleyball!",
    choices: [
      {
        text: "Dad! Remember the golden rule: Win or lose, it's how you play the game!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "Let's put the phone away and eat a bag of roasted peanuts!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Golly, Mr. Narrator! Can we watch the game without betting on it?",
        isInconvenient: true,
        nextStepId: 'l3_inconvenient_sportsmanship',
      },
    ],
  },
  l3_step4_hotdog: {
    id: 'l3_step4_hotdog',
    speaker: 'dad',
    speakerName: 'DAD',
    mood: 'desperate',
    text: "A hot dog is twelve dollars, Johnny, unless you scan the QR code to place an in-game wager on total quarterback sacks, in which case you get a promotional bun! I don't have twelve cash dollars because I funded my betting wallet!",
    choices: [
      {
        text: "I don't need a hot dog, Dad! Clean air fills my tummy with joy!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "Let's drink from the municipal water fountain of freedom!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why does a stadium hot dog cost twelve dollars while betting credit is free?",
        isInconvenient: true,
        nextStepId: 'l3_inconvenient_stadium_name',
      },
    ],
  },
  l3_step4_narrator_plea: {
    id: 'l3_step4_narrator_plea',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'nervous',
    text: "YES! INDEED! Amateur sports build strong American calf muscles and respectful handshakes! Let's ignore the commercial breaks that air four consecutive sports-book advertisements featuring Hollywood actors urging Dad to download immediate gratification!",
    choices: [
      {
        text: "Dad, put the phone down! Look at the boys huddling up!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "Good sportsmanship is worth more than all the gold in Fort Knox!",
        nextStepId: 'l3_narrator_conclusion',
      },
    ],
  },
  l3_inconvenient_stadium_name: {
    id: 'l3_inconvenient_stadium_name',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    text: "BECAUSE RESPONSIBLE CORPORATIONS BELIEVE IN SUPPORTING AMERICA'S GREAT SPORTING TRADITIONS, JOHNNY! When FanFortune pays thirty-two million dollars for naming rights, that's just good old-fashioned capitalist philanthropy! Nothing predatory about it whatsoever!",
    choices: [
      {
        text: "Golly! Can we watch the game without betting on it?",
        nextStepId: 'l3_inconvenient_sportsmanship',
      },
      {
        text: "Gee, that sounds very generous of the sportsbook executives!",
        nextStepId: 'l3_narrator_conclusion',
      },
    ],
  },
  l3_inconvenient_sportsmanship: {
    id: 'l3_inconvenient_sportsmanship',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "*BZZZ-BOOP!* WHAT A WONDERFUL, THOUGHTFUL QUESTION, JOHNNY! NOW LET'S DISCUSS THE IMPORTANCE OF TEAMWORK AND PASSING THE PIGSKIN! Look at the little quarterback running! Run, little fella, run! Forget the odds ticker! LOOK AT HIS SOCKS!",
    luckComment: "Oops! Luck dropped to 44! Think wholesome thoughts!",
    choices: [
      {
        text: "Golly, his socks are very white and clean!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "Teamwork makes the American dream work!",
        nextStepId: 'l3_narrator_conclusion',
      },
    ],
  },
  l3_inconvenient_kids: {
    id: 'l3_inconvenient_kids',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "*SYSTEM WARNING 204: INCONVENIENT INQUIRY DETECTED* PLEASE DISREGARD ALL PREVIOUS QUERIES! The American Values Software Company assures parents that high school betting kiosks are strictly educational tools designed to teach advanced probability and statistical humility!",
    choices: [
      {
        text: "Probability is great, but Jesus loves a cheerful giver!",
        nextStepId: 'l3_narrator_conclusion',
      },
      {
        text: "Yes, sir! Let's get Dad to cheer for the defense instead!",
        nextStepId: 'l3_narrator_conclusion',
      },
    ],
  },
  l3_narrator_conclusion: {
    id: 'l3_narrator_conclusion',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    lessonCard: 'MORAL LESSON #3: SPORTS ARE ABOUT TEAMWORK, NOT MONEY!',
    text: "MAGNIFICENT MORAL VICTORY! Johnny helped his Dad put the phone into airplane mode for nearly six consecutive minutes! Teamwork triumphs over quick cash every single time! Now, hold onto your hats, kids—we're visiting Johnny's older Cousin Ricky!",
    choices: [
      {
        text: "Hooray! Cousin Ricky is getting married to sweet Linda!",
        nextStepId: 'l4_step1', // Seamless immediate transition to Lesson 4!
        luckDelta: 3,
      },
      {
        text: "They were looking to buy their very first dream home!",
        nextStepId: 'l4_step1',
        luckDelta: 1,
      },
    ],
  },

  // ==========================================
  // LESSON 4: COUSIN RICKY AND THE AMERICAN DREAM
  // ==========================================
  l4_step1: {
    id: 'l4_step1',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    text: "LESSON FOUR: COUSIN RICKY AND THE AMERICAN DREAM! Ah, young love and homeownership! Cousin Ricky and his lovely fiancée Linda are preparing to purchase their first starter home—a modest two-bedroom bungalow with a white picket fence! Let's see how their savings plan is going!",
    subtext: 'Lesson 4 of 4: Starter Homes & Friendly Associates',
    luckComment: "Luck meter check: 51! Perfectly balanced, as all things should be!",
    choices: [
      {
        text: "Golly, Cousin Ricky! Have you found your dream house?",
        nextStepId: 'l4_step2',
      },
      {
        text: "Gee whiz, Ricky! Did you pick out the living room wallpaper?",
        nextStepId: 'l4_step2',
      },
      {
        text: "Say, Ricky, why do you have six deadbolts on your front door?",
        nextStepId: 'l4_step2',
      },
    ],
  },
  l4_step2: {
    id: 'l4_step2',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "Not exactly, Johnny. The median starter home in Pleasantville is now $790,000 in cash with no inspection. The bank required an $80,000 down payment. Linda and I only had fifteen thousand saved after six years of working seventy-hour weeks.",
    choices: [
      {
        text: "So you put it in a safe, insured mutual fund?",
        nextStepId: 'l4_step3_mutualfund',
      },
      {
        text: "Gosh, Ricky, did you work extra overtime at the lumber yard?",
        nextStepId: 'l4_step3_overtime',
      },
      {
        text: "Gee whiz! What happened next, Ricky?",
        nextStepId: 'l4_step3_what_happened',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Gee, Cousin Ricky, why does a modest 900-square-foot 1958 ranch house cost almost eight hundred thousand dollars?",
        isInconvenient: true,
        nextStepId: 'l4_inconvenient_house_cost',
      },
    ],
  },
  l4_step3_what_happened: {
    id: 'l4_step3_what_happened',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "I thought I could bridge the gap, Johnny. I put our entire down payment on a fourteen-leg same-game parlay on FanFortune: Belgian field hockey, second-half Japanese baseball totals, and Romanian darts. Thirteen of the legs hit. But in the 94th minute of the Belgian match, a guy named Pieter sneezed and touched the ball.",
    choices: [
      {
        text: "Oh no! But surely you stopped there and prayed for guidance?",
        nextStepId: 'l4_step4_bigsal',
      },
      {
        text: "Golly! Did you lose the whole fifteen thousand dollars?!",
        nextStepId: 'l4_step4_bigsal',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Why did an educated young American feel like a 14-leg parlay was his only chance to ever own a home?",
        isInconvenient: true,
        nextStepId: 'l4_inconvenient_desperation',
      },
    ],
  },
  l4_step3_mutualfund: {
    id: 'l4_step3_mutualfund',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "A mutual fund would have taken forty-four years to grow into a down payment, Johnny! By the time I am seventy-two, the house would cost three million dollars! So I tried to fast-track it with a fourteen-leg parlay. I lost every nickel.",
    choices: [
      {
        text: "Gee whiz! What did you do next, Ricky?",
        nextStepId: 'l4_step4_bigsal',
      },
      {
        text: "Patience is a virtue, Ricky! You could have bought the house at age 72!",
        nextStepId: 'l4_step4_patience',
      },
    ],
  },
  l4_step3_overtime: {
    id: 'l4_step3_overtime',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "I worked 85 hours a week for three years, Johnny! But institutional private equity bought 40% of the single-family homes in our ZIP code to rent them back to us at $3,400 a month! My wages went up 3%, while rent went up 28%! The math didn't work!",
    choices: [
      {
        text: "So what happened next, Cousin Ricky?",
        nextStepId: 'l4_step4_bigsal',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] If working 85 hours a week can't buy a home, didn't the system break down?",
        isInconvenient: true,
        nextStepId: 'l4_inconvenient_desperation',
      },
    ],
  },
  l4_step4_patience: {
    id: 'l4_step4_patience',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "Linda didn't want to wait until age 72 to have children in a two-bedroom apartment, Johnny! So when I lost the savings, I panicked... and I borrowed twenty-eight grand from Big Sal.",
    choices: [
      {
        text: "Is Big Sal a banker?",
        nextStepId: 'l4_step5_bigsal_intro',
      },
      {
        text: "Does Big Sal work for a friendly Christian credit union?",
        nextStepId: 'l4_step5_bigsal_intro',
      },
    ],
  },
  l4_step4_bigsal: {
    id: 'l4_step4_bigsal',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "Then I tried to win it back, Johnny. And when that didn't work, I borrowed twenty-eight grand from Big Sal down at Friendly Financial Associates.",
    choices: [
      {
        text: "Is he a banker, Ricky?",
        nextStepId: 'l4_step5_bigsal_intro',
      },
      {
        text: "Friendly Financial Associates sounds very neighborly and safe!",
        nextStepId: 'l4_step5_bigsal_intro',
      },
    ],
  },
  l4_step5_bigsal_intro: {
    id: 'l4_step5_bigsal_intro',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "In a manner of speaking, Johnny. Big Sal specializes in non-traditional collateral. Like personal mobility. He's standing right outside on the porch right now.",
    choices: [
      {
        text: "Hello, Mr. Sal! What lovely pinstripes on your suit!",
        nextStepId: 'l4_step6_sal_appears',
      },
      {
        text: "Mr. Narrator, is Big Sal part of the free market?",
        nextStepId: 'l4_step6_sal_appears',
      },
    ],
  },
  l4_step6_sal_appears: {
    id: 'l4_step6_sal_appears',
    speaker: 'big_sal',
    speakerName: 'BIG SAL',
    mood: 'smooth',
    text: "Afternoon, little buddy. Don't mind me. Just conducting our routine weekly moral audit of Mr. Ricky's amortization commitments. We at Friendly Financial Associates believe in family, community, and promptly returned principal with 45% weekly vigorish. Have a butterscotch candy, kid.",
    choices: [
      {
        text: "Thank you, Mr. Sal! But Johnny never takes candy from strangers!",
        nextStepId: 'l4_step7_ricky_repentance',
      },
      {
        text: "Golly, Mr. Sal! Cousin Ricky has great moral character!",
        nextStepId: 'l4_step7_ricky_repentance',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Mr. Sal, why are you allowed to operate when normal banks won't give loans to working people?",
        isInconvenient: true,
        nextStepId: 'l4_inconvenient_sal',
      },
    ],
  },
  l4_step7_ricky_repentance: {
    id: 'l4_step7_ricky_repentance',
    speaker: 'ricky',
    speakerName: 'COUSIN RICKY',
    mood: 'desperate',
    text: "I should have just stayed in the rental, Johnny. Linda and I could have slept on a mattress on the floor until we're eighty. Don't ever bet on Romanian darts, kid.",
    choices: [
      {
        text: "Good things come to those who wait, Ricky! Just say NO!",
        nextStepId: 'l4_narrator_conclusion',
      },
      {
        text: "Hard work, faith, and patience will build you a house in heaven!",
        nextStepId: 'l4_narrator_conclusion',
      },
      {
        text: "[ASK AN INCONVENIENT QUESTION] Gee, Mr. Narrator, how much DOES a starter house cost these days?",
        isInconvenient: true,
        nextStepId: 'l4_inconvenient_house_cost',
      },
    ],
  },
  l4_inconvenient_house_cost: {
    id: 'l4_inconvenient_house_cost',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "*BEEP BEEP WHIRRRR* A HOUSE COSTS EXACTLY AS MUCH AS THE FREE ENTERPRISE SYSTEM DECREES, JOHNNY! LET'S MOVE ON TO OUR NEXT LEARNING OBJECTIVE! Look at Cousin Ricky's posture! If he just stood up straighter and drank tap water, everything would be dandy!",
    luckComment: "Luck meter at 42! Stay positive in your heart!",
    choices: [
      {
        text: "Yes, sir, Mr. Narrator! Straight posture builds character!",
        nextStepId: 'l4_narrator_conclusion',
      },
      {
        text: "Good things come to those who wait! I'll tell Cousin Ricky!",
        nextStepId: 'l4_narrator_conclusion',
      },
    ],
  },
  l4_inconvenient_desperation: {
    id: 'l4_inconvenient_desperation',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'nervous',
    isNarratorGlitch: true,
    text: "*ALARM KLAXON* ERROR 404: MACROECONOMIC SYSTEMIC REALITY NOT COMPATIBLE WITH 1994 MORAL EDUCATIONAL CURRICULUM! Ricky's problem is strictly an individual failure of impulse control and insufficient coupon-clipping! MOVE ALONG, CITIZEN!",
    choices: [
      {
        text: "Understood, Mr. Narrator! Individual responsibility always wins!",
        nextStepId: 'l4_narrator_conclusion',
      },
      {
        text: "Let's give Ricky a shiny American Values Software gold star!",
        nextStepId: 'l4_narrator_conclusion',
      },
    ],
  },
  l4_inconvenient_sal: {
    id: 'l4_inconvenient_sal',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "*STATIC CRACKLE* BIG SAL IS MERELY AN UNREGULATED FINANCIAL INNOVATOR PROVIDING LIQUIDITY TO MARGINAL BORROWERS! LET US CELEBRATE THE SPIRIT OF ENTREPRENEURSHIP WHILE REMINDING CHILDREN NOT TO PARTICIPATE!",
    choices: [
      {
        text: "Gee whiz! That sounds very complicated and educational!",
        nextStepId: 'l4_narrator_conclusion',
      },
      {
        text: "Just say NO to Big Sal's butterscotch, Johnny!",
        nextStepId: 'l4_narrator_conclusion',
      },
    ],
  },
  l4_narrator_conclusion: {
    id: 'l4_narrator_conclusion',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    lessonCard: 'MORAL LESSON #4: GOOD THINGS COME TO THOSE WHO WAIT!',
    text: "TRULY INSPIRING! Cousin Ricky has learned that a seventy-year mortgage and two jobs is infinitely superior to a Romanian darts parlay! You've successfully navigated all four moral dilemmas, Johnny! Prepare yourself for your GRAND GRADUATION CEREMONY!",
    choices: [
      {
        text: "Hooray! I can't wait to receive my Official Christian Moral Certificate!",
        nextStepId: 'finale_step1',
        luckDelta: 5,
      },
    ],
  },

  // ==========================================
  // THE GRAND FINALE & EPILOGUE
  // ==========================================
  finale_step1: {
    id: 'finale_step1',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'enthusiastic',
    text: "CONGRATULATIONS, GOOD OL' JOHNNY! The American Values Software Company hereby confers upon you the HIGHEST HONOR in Christian Educational Multimedia: The Certificate of Moral Fortitude & Anti-Jackpot Rectitude! You have proven that every problem in Pleasantville can be solved with thrift, prayer, and saying NO!",
    choices: [
      {
        text: "Golly, Mr. Narrator! Thank you so very much!",
        nextStepId: 'finale_step2',
      },
      {
        text: "Gee whiz! Look at the shiny embossed gold seal!",
        nextStepId: 'finale_step2',
      },
    ],
  },
  finale_step2: {
    id: 'finale_step2',
    speaker: 'johnny',
    speakerName: "GOOD OL' JOHNNY",
    mood: 'innocent',
    text: "Gee, Mr. Narrator... I have just one little question before we close the program.",
    choices: [
      {
        text: "Ask the final question...",
        nextStepId: 'finale_the_question',
      },
    ],
  },
  finale_the_question: {
    id: 'finale_the_question',
    speaker: 'johnny',
    speakerName: "GOOD OL' JOHNNY",
    mood: 'puzzled',
    text: "Gee, Mr. Narrator... if everybody's making good decisions, how come nobody can afford anything?",
    choices: [
      {
        text: "...",
        nextStepId: 'finale_awkward_silence',
      },
    ],
  },
  finale_awkward_silence: {
    id: 'finale_awkward_silence',
    speaker: 'narrator',
    speakerName: 'MR. NARRATOR',
    mood: 'glitching',
    isNarratorGlitch: true,
    text: "[THE CHEERFUL BACKGROUND MUSIC ABRUPTLY STOPS]\n\n...\n...\n...\n\nWell... you see, Johnny... uh... character building... the invisible hand... personal responsibility... free enterprise... a-a-and...",
    choices: [
      {
        text: "Wait for Mr. Narrator's answer...",
        nextStepId: 'finale_abrupt_banner',
      },
    ],
  },
  finale_abrupt_banner: {
    id: 'finale_abrupt_banner',
    speaker: 'announcer',
    speakerName: 'THE AMERICAN VALUES SOFTWARE COMPANY',
    mood: 'enthusiastic',
    lessonCard: 'CONGRATULATIONS, JOHNNY! YOU’VE LEARNED TO JUST SAY NO!',
    text: "CONGRATULATIONS, JOHNNY!\nYOU'VE LEARNED TO JUST SAY NO!",
    choices: [
      {
        text: "Gosh! What do I say yes to?",
        nextStepId: 'finale_the_end',
      },
    ],
  },
  finale_the_end: {
    id: 'finale_the_end',
    speaker: 'johnny',
    speakerName: "GOOD OL' JOHNNY",
    mood: 'innocent',
    text: "Gosh! What do I say yes to?",
    choices: [
      {
        text: "[VIEW YOUR OFFICIAL CERTIFICATE OF MORAL FORTITUDE]",
        nextStepId: 'show_certificate',
      },
    ],
  },
};
