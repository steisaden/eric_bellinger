import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {MotionInstruction} from '../types/motion';
import {loop01} from '../utils/loop';
import {getPulseOpacity, getSwayOffset} from '../utils/effects';

type Props = {coverSrc: string; maskSrc?: string | null; motion: MotionInstruction};

export const SmokeLayer: React.FC<Props> = ({coverSrc, maskSrc, motion}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = loop01(frame, durationInFrames);
  const x = getSwayOffset(progress, 8 * motion.intensity, 1);
  const opacity = getPulseOpacity(progress, motion.opacity, 0.04, 1);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity,
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
          transform: `translateX(${x}px) scale(1.02)`,
          filter: 'blur(0.3px)',
        }}
      />
    </div>
  );
};
