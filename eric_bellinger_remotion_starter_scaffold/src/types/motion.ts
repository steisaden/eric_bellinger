export type MotionType =
  | 'water'
  | 'smoke'
  | 'foliage'
  | 'particles'
  | 'stars'
  | 'snow'
  | 'glow'
  | 'sun_twinkle'
  | 'clouds';

export type MotionInstruction = {
  type: MotionType;
  target: string;
  maskPath: string | null;
  intensity: number;
  speed: number;
  direction: string;
  blendMode: string | null;
  opacity: number;
  notes: string;
};

export type AlbumConfig = {
  id: string;
  title: string;
  sourceCover: string;
  motions: MotionInstruction[];
  notes: string[];
  avoid: string[];
};
