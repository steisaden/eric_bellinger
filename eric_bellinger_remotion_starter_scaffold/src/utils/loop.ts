export const loop01 = (frame: number, durationInFrames: number) => {
  return (frame % durationInFrames) / durationInFrames;
};

export const sin01 = (progress: number, frequency = 1, phase = 0) => {
  return Math.sin((progress * Math.PI * 2 * frequency) + phase);
};
