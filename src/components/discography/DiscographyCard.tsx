import { motion } from "motion/react";
import { ArrowUpRight, Guitar, PlayCircle } from "lucide-react";

import type { DiscographyItem } from "@/data/discography";
import { CoverMedia } from "./CoverMedia";

type DiscographyCardProps = {
  item: DiscographyItem;
  onOpen: (id: DiscographyItem["id"]) => void;
  reduceMotion: boolean;
  featured?: boolean;
};

const CARD_TITLE_OVERRIDES: Record<string, string> = {
  "it'll all make sense later": "It'll All Make Sense",
  "it'll all make sense later (deluxe)": "It'll All Make Sense Later",
  "the rebirth 3: the party & the bedroom": "The Rebirth 3: The Party",
  "the rebirth 3: the party & the bedroom (acoustic)": "The Rebirth 3: The Party",
  "the rebirth 3: remixes & more": "The Rebirth 3: Remixes",
};

const normalizeTitle = (value: string) => value.trim().toLowerCase();

const getCardTitle = (item: DiscographyItem) => {
  const normalized = normalizeTitle(item.title);
  const override = CARD_TITLE_OVERRIDES[normalized];
  if (override) {
    return override;
  }

  const acousticSuffixStripped = item.title.replace(/\s*\((?:acoustic(?: version)?|acoustics?)\)$/i, "");
  if (acousticSuffixStripped !== item.title) {
    return acousticSuffixStripped;
  }

  if (item.title.length > 32 && item.title.includes(" & ")) {
    return item.title.split(" & ")[0].trim();
  }

  return item.title;
};

const isAcousticRelease = (item: DiscographyItem) => /acoustic/i.test(item.title) || /acoustic/i.test(item.type);

export function DiscographyCard({ item, onOpen, reduceMotion, featured = false }: DiscographyCardProps) {
  const coverAsset = item.coverAsset ?? { kind: "image", src: item.coverUrl, poster: item.coverUrl };
  const hasMotionCover = coverAsset.kind === "video";
  const displayTitle = getCardTitle(item);
  const acoustic = isAcousticRelease(item);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item.id)}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className={[
        "group flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] text-left transition-colors hover:border-[#ffd36e]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd36e]/70 sm:rounded-[28px]",
        featured ? "md:col-span-2 md:row-span-2" : "",
      ].join(" ")}
      aria-label={`Open discography details for ${item.title}`}
    >
      <motion.div
        animate={reduceMotion || !hasMotionCover ? undefined : { y: [0, -2, 0], scale: [1, 1.01, 1] }}
        transition={reduceMotion || !hasMotionCover ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={[
          "relative overflow-hidden rounded-[20px] border border-white/10 bg-black/30 p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[24px]",
          featured ? "aspect-[4/5]" : "aspect-square",
        ].join(" ")}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[20px]">
          <CoverMedia
            asset={coverAsset}
            alt={item.title}
            loading="lazy"
            reduceMotion={reduceMotion}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),transparent_40%,rgba(0,0,0,0.7))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,157,0,0.08),transparent_28%),linear-gradient(135deg,transparent,rgba(173,70,255,0.08))] opacity-70" />

          <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
            <div className="hidden flex-wrap items-center gap-2 sm:flex">
              <span className="artist-pill-inset inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.32em] text-[#ffd36e]">
                {acoustic ? <Guitar className="h-3.5 w-3.5" /> : null}
                {acoustic ? "Acoustic" : item.type}
              </span>
              <span className="artist-pill-inset inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.32em] text-white/62">
                {item.year}
              </span>
              {featured ? (
                <span className="artist-pill-inset inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.32em] text-white/82">
                  Latest era
                </span>
              ) : null}
            </div>

            <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <h3
                  className={[
                    "title-clamp-2 min-w-0 font-display font-light tracking-tighter text-white",
                    featured ? "text-2xl leading-[0.98] md:text-4xl" : "text-[clamp(1rem,4.8vw,1.15rem)] leading-[1.04] md:text-[1.2rem]",
                  ].join(" ")}
                >
                  {displayTitle}
                </h3>
                {featured ? (
                  <p className="copy-clamp-2 mt-2 max-w-lg text-sm leading-6 text-white/72">
                    A curated entry point into Eric’s current run—cover art, tracklist, credits, and video details are inside.
                  </p>
                ) : null}
              </div>

              <div className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-white/88 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-black transition-colors group-hover:bg-[#ffd36e] sm:self-end">
                <PlayCircle className="h-4 w-4" />
                View
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={featured ? "flex min-w-0 flex-1 flex-col gap-2 p-5 md:p-6" : "flex min-w-0 flex-1 flex-col gap-1.5 p-3 sm:p-4 md:p-[18px]"}>
        <div className="flex items-center justify-between gap-3">
          <p className="safe-text min-w-0 truncate font-mono text-[9px] uppercase tracking-[0.25em] text-white/42 md:text-[10px]">{item.releaseDate ?? String(item.year)}</p>
          <span className="inline-flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#ffd36e]/84 sm:tracking-[0.3em]">
            Details <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className={featured ? "copy-clamp-2 max-w-2xl text-sm leading-6 text-white/68" : "copy-clamp-2 mt-1 text-[12px] leading-5 text-white/60 md:text-[13px]"}>
          {featured ? item.sourcePage : "Tap for the tracklist, credits, and embedded video details."}
        </p>
      </div>
    </motion.button>
  );
}
