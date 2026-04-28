import { useEffect, useMemo, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, Minimize2, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { INTERVIEWS, INTERVIEWS_COPY, REQUESTED_INTERVIEWS_META } from "@/data";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { useInterviews } from "./interviews/useInterviews";

const PAGE_SIZE = 8;

const chunkItems = <T,>(items: T[], size: number) => {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
};

const formatDate = (raw: string | null) => {
  if (!raw) return null;
  const d = new Date(`${raw}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return raw;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(d);
};

export function Interviews() {
  const { activeVideo, closePlayer, isMinimized, openPlayable, togglePlayerSize } = useInterviews();
  const reduceMotion = usePrefersReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pages = useMemo(() => chunkItems(INTERVIEWS, isMobile ? 4 : PAGE_SIZE), [isMobile]);
  const [activePage, setActivePage] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (activePage >= pages.length) setActivePage(0);
  }, [activePage, pages.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-page-index"));
            if (!isNaN(index)) {
              setActivePage(index);
            }
          }
        });
      },
      {
        root: track,
        threshold: 0.5,
      }
    );

    const els = track.querySelectorAll("[data-page-index]");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pages]);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closePlayer(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideo, closePlayer]);

  const goToPage = (i: number) => {
    if (!pages.length) return;
    const nextPage = ((i % pages.length) + pages.length) % pages.length;
    const pageEl = pageRefs.current[nextPage];
    if (pageEl && trackRef.current) {
      trackRef.current.scrollTo({ left: pageEl.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  const activeInterview = activeVideo
    ? INTERVIEWS.find((item) => item.embedId === activeVideo || item.videoId === activeVideo) ?? null
    : null;

  return (
    <section id="interviews" className="relative border-t border-white/10 bg-transparent py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="safe-text font-display text-[clamp(2.35rem,11vw,3rem)] font-light uppercase tracking-tighter italic text-glow md:text-7xl">
              {INTERVIEWS_COPY.heading}
            </h2>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[#ff9d00]">
              {REQUESTED_INTERVIEWS_META.purpose}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              {REQUESTED_INTERVIEWS_META.total_items} entries
            </span>
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1">
              <button
                type="button"
                onClick={() => goToPage(activePage - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="w-14 text-center font-mono text-[10px] uppercase tracking-widest text-slate-500">
                {Math.min(activePage + 1, Math.max(pages.length, 1))}/{Math.max(pages.length, 1)}
              </span>
              <button
                type="button"
                onClick={() => goToPage(activePage + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* List carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth overscroll-x-contain scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {pages.map((page, pageIndex) => (
              <div
                key={`page-${pageIndex}`}
                data-page-index={pageIndex}
                ref={(node) => { pageRefs.current[pageIndex] = node; }}
                className="w-full flex-none snap-start"
              >
                <div className="mobile-carousel-grid grid gap-3 md:block md:divide-y md:divide-slate-100">
                  {page.map((item, index) => {
                    const canWatch = item.isPlayable && item.videoId;
                    const date = formatDate(item.publishedDate);

                    return (
                      <motion.article
                        key={item.id}
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
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page dots */}
        {pages.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === activePage ? "w-6 bg-slate-900" : "w-1.5 bg-slate-300 hover:bg-slate-400",
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="interview-player-title"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              width: isMinimized ? "90%" : "95%",
              height: isMinimized ? 200 : "auto",
              left: isMinimized ? "5%" : "50%",
              bottom: isMinimized ? "24px" : "50%",
              x: "-50%",
              translateY: isMinimized ? 0 : "50%",
            }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", damping: 26, stiffness: 210 }}
            className={cn(
              "fixed z-[100] flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.4)]",
              !isMinimized && "max-w-3xl aspect-video w-[95vw]",
            )}
            style={{ position: "fixed" }}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4 py-2.5">
              <span id="interview-player-title" className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                {activeInterview?.title ?? INTERVIEWS_COPY.playingLabel}
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); togglePlayerSize(); }}
                  aria-label={isMinimized ? "Expand player" : "Minimize player"}
                  className="touch-target-44 inline-flex items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={closePlayer}
                  aria-label="Close player"
                  className="touch-target-44 inline-flex items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="relative flex-grow bg-black">
              <div className="absolute inset-0">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}`}
                  title={activeInterview?.title ?? "Interview"}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
