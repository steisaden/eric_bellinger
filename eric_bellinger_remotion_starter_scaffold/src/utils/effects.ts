import {interpolate} from 'remotion';
import {sin01} from './loop';

export const getPulseOpacity = (progress: number, base = 0.5, amplitude = 0.065, frequency = 1) => {
  return base + sin01(progress, frequency) * amplitude;
};

export const getSwayRotation = (progress: number, maxDeg = 1.0, frequency = 1, phase = 0) => {
  return sin01(progress, frequency, phase) * maxDeg;
};

export const getSwayOffset = (progress: number, maxPx = 1.6, frequency = 1, phase = 0) => {
  return sin01(progress, frequency, phase) * maxPx;
};

export const getWaterOffset = (progress: number, intensity = 1) => {
  return {
    x: sin01(progress, 1) * 4.5 * intensity,
    y: sin01(progress, 2) * 1.1 * intensity,
  };
};

export const remapIntensity = (value: number, low = 0.5, high = 1.5) =>
  interpolate(value, [0, 1], [low, high]);
