import { motion } from "motion/react";
import { ExternalLink, Headphones, Music2, X } from "lucide-react";

import { getFeaturedSongListenLinks } from "@/data/featuredSongLinks";

import type { FeaturedSong } from "./useFeaturedSongs";

type FeaturedSongDetailsSheetProps = {
  song: FeaturedSong;
  onClose: () => void;
  reduceMotion: boolean;
};

function PlaceholderCover({ title, source }: { title: string; source: string }) {
  return (
    <div className="flex h-full min-h-[18rem] w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%),linear-gradient(135deg,rgba(124,58,237,0.25),rgba(17,24,39,0.95))] p-8 text-center">
      <div className="mb-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-slate-600">
        Cover art pending verification
      </div>
      <p className="max-w-[12rem] text-balance text-lg font-light text-slate-900/85">{title}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">{source}</p>
    </div>
  );
}

const listenOrder = [
  { key: "appleMusic", label: "Apple Music" },
  { key: "spotify", label: "Spotify" },
  { key: "youtubeMusic", label: "YouTube Music" },
  { key: "youtube", label: "YouTube" },
  { key: "tidal", label: "TIDAL" },
  { key: "amazonMusic", label: "Amazon Music" },
  { key: "deezer", label: "Deezer" },
] as const;

export function FeaturedSongDetailsSheet({ song, onClose, reduceMotion }: FeaturedSongDetailsSheetProps) {
  const hasCover = Boolean(song.coverUrl);
  const listenLinks = getFeaturedSongListenLinks(song);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`featured-song-title-${song.id}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-white/70 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-md md:items-center md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={reduceMotion ? false : { y: 48, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={reduceMotion ? undefined : { y: 48, scale: 0.98 }}
        transition={{ type: "spring", damping: 28, stiffness: 240 }}
        className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl min-w-0 flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-[#fffdf8] shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 px-4 py-4 md:gap-4 md:px-6">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-eb-accent">Feature detail</p>
            <h3 id={`featured-song-title-${song.id}`} className="title-clamp-2 mt-2 font-display text-[clamp(1.45rem,7vw,1.9rem)] font-light leading-tight md:text-3xl">
              {song.title}
            </h3>
            <p className="copy-clamp-2 mt-1 text-sm leading-5 text-slate-600">{song.artist}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="touch-target-44 inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:bg-slate-100/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
            aria-label={`Close details for ${song.title}`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5 md:px-6 md:py-6">
          <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white/80">
              {hasCover ? (
                <img
                  src={song.coverUrl ?? undefined}
                  alt={song.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <PlaceholderCover title={song.title} source={song.source} />
              )}
            </div>

            <div className="min-w-0 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Credits</p>
                <p className="safe-text mt-2 text-sm leading-6 text-slate-700 md:text-base">{song.artist}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-eb-accent" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Listen</p>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {listenOrder.map((platform) => {
                    const link = listenLinks[platform.key];
                    const isVerified = link.status === "verified";
                    return (
                      <a
                        key={platform.key}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="touch-target-44 flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition-colors hover:border-eb-accent/30 hover:bg-slate-50"
                      >
                        <span className="truncate">{isVerified ? `Listen on ${platform.label}` : `Search ${platform.label}`}</span>
                        <ExternalLink className="h-4 w-4 text-slate-400" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Artwork note</p>
                <p className="safe-text mt-2 text-sm leading-6 text-slate-900">{song.note}</p>
                <div className="safe-text mt-3 flex min-w-0 items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500">
                  <Music2 className="h-4 w-4 text-eb-accent" />
                  Source: {song.source}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
