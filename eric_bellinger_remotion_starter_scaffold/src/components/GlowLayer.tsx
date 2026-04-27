import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {MotionInstruction} from '../types/motion';
import {loop01} from '../utils/loop';
import {getPulseOpacity} from '../utils/effects';

type Props = {maskSrc?: string | null; motion: MotionInstruction; color?: string};

export const GlowLayer: React.FC<Props> = ({maskSrc, motion, color = 'rgba(130,255,120,0.9)'}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = loop01(frame, durationInFrames);
  const opacity = getPulseOpacity(progress, motion.opacity, 0.045 * motion.intensity, 1);

  return (
    <AbsoluteFill
      style={{
        opacity,
        WebkitMaskImage: maskSrc ? `url(${maskSrc})` : undefined,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskImage: maskSrc ? `url(${maskSrc})` : undefined,
        maskRepeat: 'no-repeat',
        maskSize: '100% 100%',
        background: `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,0) 70%)`,
        filter: 'blur(16px)',
        mixBlendMode: 'screen',
      }}
    />
  );
};
