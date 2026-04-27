import React from 'react';
import {ParticleLayer} from './ParticleLayer';
import {MotionInstruction} from '../types/motion';

type Props = {motion: MotionInstruction; maskSrc?: string | null};

export const SnowLayer: React.FC<Props> = ({motion, maskSrc}) => {
  return <ParticleLayer motion={motion} maskSrc={maskSrc} color="rgba(255,255,255,0.8)" count={24} />;
};
