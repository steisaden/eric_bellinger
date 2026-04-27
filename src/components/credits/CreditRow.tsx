import { motion } from "motion/react";

import { formatCreditArtist, getCreditSearchTerms, type VerifiedPublicCredit } from "@/data/credits";

type CreditRowProps = {
  credit: VerifiedPublicCredit;
  index: number;
  reduceMotion: boolean;
};

const confidenceLabel: Record<string, string> = {
  verified_public: "Verified public",
  medium: "Public / needs review",
  low: "Needs review",
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
      className="group grid grid-cols-1 gap-3 border-b border-slate-100 px-4 py-3 transition-colors hover:bg-white/95 md:grid-cols-12 md:items-start md:gap-4 md:px-6 md:py-4"
      data-search={searchTerms}
    >
      <div className="flex items-center justify-between gap-3 md:col-span-1 md:block">
        <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 md:text-xs">{credit.year ?? "—"}</div>
      </div>

      <div className="md:col-span-3">
        <div className="font-semibold text-slate-900 transition-colors group-hover:text-purple-700">{credit.title ?? "Untitled"}</div>
        <div className="mt-1 text-sm text-slate-700">{artist}</div>
      </div>

      <div className="hidden md:block md:col-span-3">
        <div className="text-sm text-slate-800/75">{artist}</div>
      </div>

      <div className="md:col-span-2">
        <div className="inline-flex rounded-xl border border-slate-200 bg-white/80 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-600 group-hover:border-purple-500/30 group-hover:text-purple-700">
          {credit.role}
        </div>
        {credit.isNotable ? (
          <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-purple-700">Notable</div>
        ) : null}
      </div>

      <div className="md:col-span-2">
        <div className="text-sm text-slate-900">{credit.parentProject ?? "—"}</div>
      </div>

      <div className="md:col-span-2">
        <div className="text-sm leading-relaxed text-slate-700">{credit.notableAchievement}</div>
        {hasNotes ? <div className="mt-2 text-xs leading-relaxed text-slate-500">{credit.notes}</div> : null}
      </div>
    </motion.article>
  );
}
