import { motion } from "motion/react";

import { formatCreditArtist, getCreditSearchTerms, type VerifiedPublicCredit } from "@/data/credits";

type CreditRowProps = {
  credit: VerifiedPublicCredit;
  index: number;
  reduceMotion: boolean;
};

export function CreditRow({ credit, index, reduceMotion }: CreditRowProps) {
  const artist = formatCreditArtist(credit);
  const hasNotes = Boolean(credit.notes?.trim());
  const searchTerms = getCreditSearchTerms(credit);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.015, duration: reduceMotion ? 0.01 : 0.28 }}
      className="group grid grid-cols-1 gap-3 border-b border-white/8 px-4 py-4 transition-colors hover:bg-white/[0.04] md:grid-cols-12 md:items-start md:gap-4 md:px-6 md:py-4"
      data-search={searchTerms}
    >
      <div className="md:col-span-1">
        <div className="text-[10px] uppercase tracking-[0.32em] text-white/42 md:text-xs">{credit.year ?? "—"}</div>
      </div>

      <div className="md:col-span-3 min-w-0">
        <div className="title-clamp-2 font-medium text-white transition-colors group-hover:text-[#ffd36e]">{credit.title ?? "Untitled"}</div>
        <div className="mt-1 text-sm text-white/60">{artist}</div>
      </div>

      <div className="md:col-span-3 min-w-0">
        <div className="title-clamp-2 text-sm text-white/72">{credit.artist}</div>
      </div>

      <div className="md:col-span-2">
        <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/72">
          {credit.role}
        </div>
        {credit.isNotable ? (
          <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#ffd36e]">Notable</div>
        ) : null}
      </div>

      <div className="md:col-span-2 min-w-0">
        <div className="title-clamp-2 text-sm text-white/72">{credit.parentProject ?? "—"}</div>
        <div className="copy-clamp-2 mt-2 text-sm leading-relaxed text-white/56">{credit.notableAchievement}</div>
        {hasNotes ? <div className="copy-clamp-2 mt-2 text-xs leading-relaxed text-white/40">{credit.notes}</div> : null}
      </div>
    </motion.article>
  );
}
