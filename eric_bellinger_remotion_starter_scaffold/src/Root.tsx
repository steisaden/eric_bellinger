import React from 'react';
import {Composition} from 'remotion';
import {albums} from './config/albums';
import {globalConfig} from './config/global';
import {MotionCover} from './compositions/MotionCover';

export const Root: React.FC = () => {
  return (
    <>
      {albums.map((album) => (
        <Composition
          key={album.id}
          id={album.id}
          component={MotionCover}
          durationInFrames={globalConfig.durationInFrames}
          fps={globalConfig.fps}
          width={globalConfig.width}
          height={globalConfig.height}
          defaultProps={{albumId: album.id}}
        />
      ))}
    </>
  );
};
