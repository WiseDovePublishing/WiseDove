export type CharacterId =
  | 'johnny'
  | 'narrator'
  | 'billy'
  | 'mrs_dobbins'
  | 'dad'
  | 'ricky'
  | 'big_sal'
  | 'announcer';

export type CharacterMood =
  | 'happy'
  | 'innocent'
  | 'puzzled'
  | 'enthusiastic'
  | 'nervous'
  | 'glitching'
  | 'sad'
  | 'defeated'
  | 'sweet'
  | 'intense'
  | 'desperate'
  | 'smooth';

export interface DialogueChoice {
  text: string;
  isInconvenient?: boolean;
  nextStepId: string;
  narratorIntervention?: string;
  luckDelta?: number; // purely cosmetic fluctuation!
}

export interface DialogueStep {
  id: string;
  speaker: CharacterId;
  speakerName: string;
  mood: CharacterMood;
  text: string;
  subtext?: string;
  lessonCard?: string;
  isNarratorGlitch?: boolean;
  choices?: DialogueChoice[];
  autoNextStepId?: string;
  autoNextDelay?: number;
  luckComment?: string;
}

export interface LessonScene {
  lessonNumber: number;
  title: string;
  subtitle: string;
  moralLesson: string;
  locationName: string;
  sceneId: 'arcade' | 'store' | 'stadium' | 'ricky';
  description: string;
  bgAtmosphere: string;
  initialStepId: string;
}
