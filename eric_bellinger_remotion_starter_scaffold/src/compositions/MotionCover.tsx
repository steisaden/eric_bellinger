import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {albums} from '../config/albums';
import {WaterLayer} from '../components/WaterLayer';
import {SmokeLayer} from '../components/SmokeLayer';
import {FoliageLayer} from '../components/FoliageLayer';
import {ParticleLayer} from '../components/ParticleLayer';
import {StarTwinkleLayer} from '../components/StarTwinkleLayer';
import {SnowLayer} from '../components/SnowLayer';
import {GlowLayer} from '../components/GlowLayer';

type Props = {albumId: string};

export const MotionCover: React.FC<Props> = ({albumId}) => {
  const album = albums.find((a) => a.id === albumId);
  if (!album) {
    return (
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white'}}>
        Unknown album: {albumId}
      </AbsoluteFill>
    );
  }

  const coverSrc = staticFile(album.sourceCover.replace(/^assets\//, ''));

  return (
    <AbsoluteFill style={{backgroundColor: 'black'}}>
      <Img src={coverSrc} style={{width: '100%', height: '100%', objectFit: 'cover'}} />

      {album.motions.map((motion, idx) => {
        const maskSrc = motion.maskPath ? staticFile(motion.maskPath.replace(/^assets\//, '')) : null;
        switch (motion.type) {
          case 'water':
            return <WaterLayer key={idx} coverSrc={coverSrc} maskSrc={maskSrc} motion={motion} />;
          case 'smoke':
          case 'clouds':
          case 'sun_twinkle':
            return <SmokeLayer key={idx} coverSrc={coverSrc} maskSrc={maskSrc} motion={motion} />;
          case 'foliage':
            return <FoliageLayer key={idx} coverSrc={coverSrc} maskSrc={maskSrc} motion={motion} />;
          case 'particles':
            return <ParticleLayer key={idx} motion={motion} maskSrc={maskSrc} />;
          case 'stars':
            return <StarTwinkleLayer key={idx} motion={motion} maskSrc={maskSrc} />;
          case 'snow':
            return <SnowLayer key={idx} motion={motion} maskSrc={maskSrc} />;
          case 'glow':
            return <GlowLayer key={idx} motion={motion} maskSrc={maskSrc} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};
