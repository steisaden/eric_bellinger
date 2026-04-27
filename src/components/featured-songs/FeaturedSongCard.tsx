import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

import type { FeaturedSong } from "./useFeaturedSongs";

type FeaturedSongCardProps = {
  key?: string | number;
  song: FeaturedSong;
  index: number;
  reduceMotion: boolean;
  onOpen: (id: FeaturedSong["id"]) => void;
};

function PlaceholderCover({ title, source }: { title: string; source: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%),linear-gradient(135deg,rgba(124,58,237,0.25),rgba(17,24,39,0.95))] p-8 text-center">
      <div className="mb-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-slate-600">
        Cover art pending verification
      </div>
      <p className="max-w-[12rem] text-balance text-lg font-light text-slate-900/85">{title}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">{source}</p>
    </div>
  );
}

export function FeaturedSongCard({ song, index, reduceMotion, onOpen }: FeaturedSongCardProps) {
  const hasCover = Boolean(song.coverUrl);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(song.id)}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.6, delay: index * 0.02 }}
      className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70 rounded-[32px]"
      aria-label={`Open feature details for ${song.title}`}
    >
      <div className="relative aspect-square w-full rounded-full overflow-hidden mb-8 border border-slate-200 group-hover:border-eb-accent/50 transition-colors duration-500 shadow-2xl">
        {hasCover ? (
          <motion.img
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: reduceMotion ? 0.01 : 20, repeat: reduceMotion ? 0 : Infinity, ease: "linear" }}
            src={song.coverUrl ?? undefined}
            alt={song.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-none opacity-80 group-hover:opacity-100"
          />
        ) : (
          <PlaceholderCover title={song.title} source={song.source} />
        )}
        <div className="absolute inset-0 border-[20px] rounded-full border-black/40 pointer-events-none" />
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#fffdf8] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
          <PlayCircle className="w-8 h-8 text-eb-accent" />
        </div>
      </div>

      <div className="text-center px-2">
        <h3 className="font-display font-light text-xl mb-2 group-hover:text-purple-700 transition-colors truncate">
          {song.title}
        </h3>
        <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest leading-relaxed">
          {song.artist}
        </p>
        <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-[0.3em]">{song.source}</p>
      </div>
    </motion.button>
  );
}
