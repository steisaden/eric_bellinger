import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {MotionInstruction} from '../types/motion';
import {loop01} from '../utils/loop';
import {getWaterOffset} from '../utils/effects';

type Props = {coverSrc: string; maskSrc?: string | null; motion: MotionInstruction};

export const WaterLayer: React.FC<Props> = ({coverSrc, maskSrc, motion}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = loop01(frame, durationInFrames);
  const offset = getWaterOffset(progress, motion.intensity);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: motion.opacity,
        WebkitMaskImage: maskSrc ? `url(${maskSrc})` : undefined,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskImage: maskSrc ? `url(${maskSrc})` : undefined,
        maskRepeat: 'no-repeat',
        maskSize: '100% 100%',
      }}
    >
      <img
        src={coverSrc}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `translate(${offset.x}px, ${offset.y}px) scale(1.01)`,
          filter: 'saturate(1.02)',
        }}
      />
    </div>
  );
};
