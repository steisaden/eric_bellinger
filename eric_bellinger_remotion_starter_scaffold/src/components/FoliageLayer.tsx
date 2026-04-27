import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {MotionInstruction} from '../types/motion';
import {loop01} from '../utils/loop';
import {getSwayOffset, getSwayRotation} from '../utils/effects';

type Props = {coverSrc: string; maskSrc?: string | null; motion: MotionInstruction};

export const FoliageLayer: React.FC<Props> = ({coverSrc, maskSrc, motion}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = loop01(frame, durationInFrames);
  const x = getSwayOffset(progress, 2 * motion.intensity, 1);
  const r = getSwayRotation(progress, 1.2 * motion.intensity, 1);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: motion.opacity,
        transformOrigin: 'center center',
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
          transform: `translateX(${x}px) rotate(${r}deg) scale(1.002)`,
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
};
