import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

import type { DiscographyItem } from "@/data/discography";
import { CoverMedia } from "./CoverMedia";

type DiscographyCardProps = {
  item: DiscographyItem;
  onOpen: (id: DiscographyItem["id"]) => void;
  reduceMotion: boolean;
};

export function DiscographyCard({ item, onOpen, reduceMotion }: DiscographyCardProps) {
  const coverAsset = item.coverAsset ?? { kind: "image", src: item.coverUrl, poster: item.coverUrl };
  const hasMotionCover = coverAsset.kind === "video";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item.id)}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 text-left transition-colors hover:border-slate-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
      aria-label={`Open discography details for ${item.title}`}
    >
      <motion.div
        animate={reduceMotion || !hasMotionCover ? undefined : { y: [0, -2, 0], scale: [1, 1.01, 1] }}
        transition={reduceMotion || !hasMotionCover ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-square overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[20px]">
          <CoverMedia
            asset={coverAsset}
            alt={item.title}
            loading="lazy"
            reduceMotion={reduceMotion}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-white/65 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-eb-accent md:text-[10px]">
                {item.type} • {item.year}
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-900 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black">
                  <PlayCircle className="h-4 w-4" />
                  View details
                </span>
                <span className="hidden rounded-full border border-slate-200/70 bg-white/80 px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-800/70 md:inline-flex">
                  Tap or click
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-1 flex-col gap-1.5 p-4 md:p-[18px]">
        <h3 className="truncate font-display text-xl font-light transition-colors group-hover:text-purple-400 md:text-[1.35rem]">
          {item.title}
        </h3>
        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 md:text-[10px]">{item.year}</p>
        <p className="mt-1 h-10 overflow-hidden text-[12px] leading-5 text-slate-600 md:text-[13px]">Touch-friendly card with a details drawer for mobile users.</p>
      </div>
    </motion.button>
  );
}
