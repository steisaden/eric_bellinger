import type { CoverAsset } from "@/types";
import { buildResponsiveSrcSet } from "@/lib/image";

type CoverMediaProps = {
  asset: CoverAsset;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  reduceMotion?: boolean;
};

export function CoverMedia({
  asset,
  alt,
  className = "",
  loading = "lazy",
  decoding = "async",
  reduceMotion = false,
}: CoverMediaProps) {
  const poster = asset.poster ?? asset.src;
  const videoClasses = className || "h-full w-full object-cover";
  const imageClasses = className || "h-full w-full object-cover";
  const isVideoLike = asset.kind === "video" || /\.(mp4|webm|mov|m3u8)(\?|$)/i.test(asset.src);
  const canUseResponsiveImage = asset.kind === "image" && !/\.(gif|mp4|webm|mov|m3u8)(\?|$)/i.test(asset.src);
  const imageSrc = asset.kind === "gif" ? asset.src : poster;

  if (isVideoLike && !reduceMotion) {
    return (
      <video
        src={asset.src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className={videoClasses}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      srcSet={canUseResponsiveImage ? buildResponsiveSrcSet(asset.src) : undefined}
      sizes={canUseResponsiveImage ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" : undefined}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={imageClasses}
    />
  );
}
