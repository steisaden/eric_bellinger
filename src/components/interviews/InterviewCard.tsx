import { ExternalLink, Play } from "lucide-react";
import { motion } from "motion/react";
import type { Interview } from "@/types";
import { formatDate } from "@/lib/formatters";

interface InterviewCardProps {
  key?: string | number;
  item: Interview;
  index: number;
  reduceMotion: boolean;
  openPlayable: (videoId: string) => void;
}

export function InterviewCard({ item, index, reduceMotion, openPlayable }: InterviewCardProps) {
  const canWatch = item.isPlayable && item.videoId;
  const date = formatDate(item.publishedDate);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="group flex min-w-0 flex-col gap-3 rounded-2xl bg-white/95 p-3 py-4 md:grid md:grid-cols-[160px_1fr_auto] md:gap-6 md:rounded-none md:bg-transparent md:p-0 md:py-5"
    >
      {/* Thumbnail */}
      <div className="relative w-full shrink-0 overflow-hidden rounded-xl md:w-40">
        <div className="aspect-video w-full bg-slate-100">
          {item.thumbnailUrl ? (
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-amber-100">
              <span className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500 px-2">
                {item.typeLabel}
              </span>
            </div>
          )}
        </div>
        {canWatch && (
          <button
            type="button"
            onClick={() => openPlayable(item.videoId ?? "")}
            aria-label={`Play: ${item.title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <Play className="ml-0.5 h-4 w-4 fill-black text-black" />
            </span>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0">
        {/* Source + date */}
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 md:gap-x-3">
          <span className="max-w-full truncate font-mono text-[9px] uppercase tracking-widest text-slate-500 md:text-[10px]">
            {item.sourceHost}
          </span>
          {item.year && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              {item.year}
            </span>
          )}
          {date && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              {date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="title-clamp-2 mt-2 font-display text-[clamp(1rem,5vw,1.125rem)] font-light uppercase tracking-tight text-slate-900 md:text-xl">
          {item.title}
        </h3>

        {/* Publisher */}
        <p className="copy-clamp-2 mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500 md:text-xs md:tracking-[0.24em]">
          {item.showOrPublisher}
        </p>

        {/* Keywords */}
        {item.topics.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.topics.slice(0, 4).map((topic) => (
              <span
                key={`${item.id}-${topic}`}
                className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600"
              >
                {topic}
              </span>
            ))}
            {item.topics.length > 4 && (
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                +{item.topics.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Alt URLs — shown inline below keywords on mobile */}
        {item.alternateUrls.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2 md:hidden">
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Also at:</span>
            {item.alternateUrls.slice(0, 2).map((url, i) => (
              <a
                key={`${item.id}-alt-m-${i}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={url}
                className="max-w-full truncate font-mono text-[9px] uppercase tracking-widest text-slate-500 underline underline-offset-2 hover:text-slate-900"
              >
                Alt {i + 1}
              </a>
            ))}
            {item.alternateUrls.length > 2 && (
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">+{item.alternateUrls.length - 2}</span>
            )}
          </div>
        )}
      </div>

      {/* Right column — actions + alt URLs (desktop) */}
      <div className="hidden shrink-0 flex-col items-end justify-between gap-3 md:flex">
        <div className="flex flex-col items-end gap-2">
          {canWatch && (
            <button
              type="button"
              onClick={() => openPlayable(item.videoId ?? "")}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-slate-700 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
            >
              <Play className="h-3 w-3 fill-current" />
              Watch
            </button>
          )}
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          >
            <ExternalLink className="h-3 w-3" />
            Source
          </a>
        </div>

        {/* Alt URLs */}
        {item.alternateUrls.length > 0 && (
          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Also at</span>
            <div className="flex flex-wrap justify-end gap-1.5">
              {item.alternateUrls.slice(0, 2).map((url, i) => (
                <a
                  key={`${item.id}-alt-${i}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={url}
                  className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  Alt {i + 1}
                </a>
              ))}
              {item.alternateUrls.length > 2 && (
                <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-400">
                  +{item.alternateUrls.length - 2}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
