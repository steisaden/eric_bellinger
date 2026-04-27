import React, {useMemo} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {MotionInstruction} from '../types/motion';

type Props = {motion: MotionInstruction; maskSrc?: string | null; color?: string; count?: number};

export const ParticleLayer: React.FC<Props> = ({motion, maskSrc, color = 'rgba(255,255,255,0.7)', count = 18}) => {
  const frame = useCurrentFrame();
  const {durationInFrames, width, height} = useVideoConfig();
  const particles = useMemo(
    () => Array.from({length: count}).map((_, i) => ({
      x: (i * 57) % width,
      y: (i * 83) % height,
      size: 2 + ((i * 7) % 4),
      speed: 0.3 + ((i * 13) % 10) / 20,
      drift: -0.2 + ((i * 11) % 10) / 25,
      phase: i * 0.7,
    })),
    [count, width, height]
  );

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
      {particles.map((p, i) => {
        const t = (frame / durationInFrames) * p.speed;
        const y = (p.y + t * height) % height;
        const x = p.x + Math.sin(t * Math.PI * 2 + p.phase) * 8 * p.drift;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: color,
              filter: 'blur(1px)',
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
