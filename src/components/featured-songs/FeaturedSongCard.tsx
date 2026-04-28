import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Guitar, PlayCircle } from "lucide-react";

import type { FeaturedSong } from "./useFeaturedSongs";

type FeaturedSongCardProps = {
  song: FeaturedSong;
  index: number;
  reduceMotion: boolean;
  expanded: boolean;
  touchLike: boolean;
  onActivate: (id: FeaturedSong["id"]) => void;
  onOpen: (id: FeaturedSong["id"]) => void;
};

function PlaceholderCover({ title, source }: { title: string; source: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,157,0,0.16),transparent_42%),linear-gradient(135deg,rgba(173,70,255,0.18),rgba(9,9,14,0.96))] p-6 text-center text-white">
      <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/78">
        Visual pending
      </div>
      <p className="mt-4 max-w-[12rem] text-balance text-xl font-light text-white">{title}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/46">{source}</p>
    </div>
  );
}

function useDisplaySongTitle(title: string) {
  const normalized = title.trim().toLowerCase();

  if (normalized === "it'll all make sense later") {
    return "It'll All Make Sense";
  }

  if (normalized === "it'll all make sense later (deluxe)") {
    return "It'll All Make Sense Later";
  }

  if (normalized === "the rebirth 3: the party & the bedroom") {
    return "The Rebirth 3: The Party";
  }

  if (normalized === "the rebirth 3: the party & the bedroom (acoustic)") {
    return "The Rebirth 3: The Party";
  }

  if (normalized === "the rebirth 3: remixes & more") {
    return "The Rebirth 3: Remixes";
  }

  return title;
}

function isAcousticRelease(song: FeaturedSong) {
  return /acoustic/i.test(song.title) || /acoustic/i.test(song.source);
}

function buildShortArtistLine(artist: string) {
  const normalized = artist.replace(/\s+/g, " ").trim();
  const commaParts = normalized.split(/,\s*/).filter(Boolean);

  if (commaParts.length > 3) {
    return `${commaParts.slice(0, 3).join(", ")} + more`;
  }

  const ampParts = normalized.split(/\s*&\s*/).filter(Boolean);
  if (normalized.length > 80 && ampParts.length > 3) {
    return `${ampParts.slice(0, 3).join(" & ")} + more`;
  }

  if (normalized.length > 88) {
    return `${normalized.slice(0, 84).trimEnd()}…`;
  }

  return normalized;
}

export function FeaturedSongCard({ song, index, reduceMotion, expanded, touchLike, onActivate, onOpen }: FeaturedSongCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasCover = Boolean(song.coverUrl) && !imageFailed;
  const displayTitle = useDisplaySongTitle(song.title);
  const displayArtistLine = buildShortArtistLine(song.artist);
  const acoustic = isAcousticRelease(song);

  const handleClick = () => {
    if (touchLike) {
      if (expanded) {
        onOpen(song.id);
      } else {
        onActivate(song.id);
      }
      return;
    }

    onOpen(song.id);
  };

  const overlayTranslateClass = touchLike
    ? expanded
      ? "translate-y-0"
      : "translate-y-[58%]"
    : "translate-y-[58%] group-hover:translate-y-0 group-focus-within:translate-y-0";

  const metaRevealClass = touchLike
    ? expanded
      ? "opacity-100"
      : "opacity-0"
    : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: index * 0.02 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className="group w-full min-w-0 max-w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd36e]/70"
      aria-label={`Open feature details for ${song.title}`}
      aria-expanded={touchLike ? expanded : undefined}
      data-feature-card={song.id}
    >
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition-colors group-hover:border-[#ffd36e]/20 sm:rounded-[28px]">
        <div className="relative aspect-[4/5] overflow-hidden">
          {hasCover ? (
            <motion.img
              animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              src={song.coverUrl ?? undefined}
              alt={song.title}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <PlaceholderCover title={song.title} source={song.source} />
          )}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,157,0,0.1),transparent_26%)]" />
          <div
            className={`absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,transparent_0%,rgba(4,6,12,0.04)_28%,rgba(4,6,12,0.72)_100%)] transition-all duration-300 ease-out ${touchLike ? (expanded ? "h-[58%]" : "") : "group-hover:h-[58%]"}`}
          />

          <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 md:p-4">
            <div className={`rounded-[18px] border border-white/8 bg-[rgba(8,10,16,0.28)] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-transform duration-[260ms] ease-out sm:rounded-[22px] sm:p-4 ${overlayTranslateClass}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8px] font-bold uppercase tracking-[0.24em] text-[#ffd36e]/88 sm:text-[9px] sm:tracking-[0.32em]">{acoustic ? "Acoustic" : "Guest record"}</p>
                  <h3 className="title-clamp-2 mt-1.5 max-w-full font-display text-[clamp(1rem,5vw,1.25rem)] font-light leading-[1.02] tracking-tighter text-white md:text-[1.55rem]">
                    {displayTitle}
                  </h3>
                </div>
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/86 transition-colors group-hover:bg-[#ffd36e] group-hover:text-black">
                  {acoustic ? <Guitar className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
                </div>
              </div>

              <div className={`mt-2 flex min-w-0 flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2 ${metaRevealClass}`}>
                <span className="artist-pill-inset max-w-full rounded-full px-2 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm sm:px-2.5 sm:text-[9px] sm:tracking-[0.28em]">
                  <span className="copy-clamp-2 block max-w-full break-words sm:max-w-[14rem]">{displayArtistLine}</span>
                </span>
                <span className="artist-pill-inset max-w-full rounded-full px-2 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-white/58 backdrop-blur-sm sm:px-2.5 sm:text-[9px] sm:tracking-[0.28em]">
                  <span className="block max-w-[8rem] truncate sm:max-w-[10rem]">{song.source}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex min-w-0 items-center justify-between gap-2 px-1 text-[10px] uppercase tracking-[0.22em] text-white/42 sm:tracking-[0.3em]">
        <span>Open record</span>
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </motion.button>
  );
}
