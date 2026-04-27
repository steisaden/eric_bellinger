import React from 'react';

type Props = {
  src: string;
  maskSrc?: string | null;
  style?: React.CSSProperties;
  opacity?: number;
  blendMode?: React.CSSProperties['mixBlendMode'];
  children?: React.ReactNode;
};

export const MaskedImage: React.FC<Props> = ({src, maskSrc, style, opacity = 1, blendMode, children}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        mixBlendMode: blendMode,
        WebkitMaskImage: maskSrc ? `url(${maskSrc})` : undefined,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskImage: maskSrc ? `url(${maskSrc})` : undefined,
        maskRepeat: 'no-repeat',
        maskSize: '100% 100%',
        overflow: 'hidden',
        ...style,
      }}
    >
      <img src={src} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      {children}
    </div>
  );
};
