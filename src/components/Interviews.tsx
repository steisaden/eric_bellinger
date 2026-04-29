import { useEffect, useMemo, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";

import { INTERVIEWS, INTERVIEWS_COPY, REQUESTED_INTERVIEWS_META } from "@/data";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { chunkArray } from "@/lib/array";

import { useInterviews } from "./interviews/useInterviews";
import { InterviewCard } from "./interviews/InterviewCard";
import { InterviewPlayer } from "./interviews/InterviewPlayer";

const PAGE_SIZE = 8;

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

  const pages = useMemo(() => chunkArray(INTERVIEWS, isMobile ? 4 : PAGE_SIZE), [isMobile]);
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
                  {page.map((item, index) => (
                    <InterviewCard
                      key={item.id}
                      item={item}
                      index={index}
                      reduceMotion={reduceMotion}
                      openPlayable={openPlayable}
                    />
                  ))}
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
          <InterviewPlayer
            activeVideo={activeVideo}
            activeInterview={activeInterview}
            isMinimized={isMinimized}
            togglePlayerSize={togglePlayerSize}
            closePlayer={closePlayer}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
