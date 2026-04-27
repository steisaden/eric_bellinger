import {staticFile} from 'remotion';

export const toStatic = (path: string) => {
  // Assumes files are copied into the public/static serving context if needed.
  // Hermes can adapt this if using a different asset strategy.
  return staticFile(path.replace(/^assets\//, ''));
};
