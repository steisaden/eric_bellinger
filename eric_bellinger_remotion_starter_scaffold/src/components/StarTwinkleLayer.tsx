import React, {useMemo} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {MotionInstruction} from '../types/motion';

type Props = {motion: MotionInstruction; maskSrc?: string | null; count?: number};

export const StarTwinkleLayer: React.FC<Props> = ({motion, maskSrc, count = 14}) => {
  const frame = useCurrentFrame();
  const {durationInFrames, width, height} = useVideoConfig();
  const stars = useMemo(
    () => Array.from({length: count}).map((_, i) => ({
      x: (i * 101) % width,
      y: (i * 79) % height,
      phase: i * 0.8,
      size: 2 + (i % 2),
    })),
    [count, width, height]
  );
  const progress = frame / durationInFrames;

  return (
    <AbsoluteFill
      style={{
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
      {stars.map((s, i) => {
        const pulse = 0.72 + Math.sin(progress * Math.PI * 2 + s.phase) * 0.15;
        const size = s.size * (1 + Math.sin(progress * Math.PI * 2 + s.phase) * 0.05);
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: s.x,
              top: s.y,
              width: size,
              height: size,
              borderRadius: '50%',
              background: `rgba(255,255,255,${pulse})`,
              boxShadow: `0 0 8px rgba(255,255,255,${pulse})`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
