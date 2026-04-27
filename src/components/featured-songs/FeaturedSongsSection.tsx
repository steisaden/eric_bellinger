import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";

import { FeaturedSongCard } from "./FeaturedSongCard";
import { FeaturedSongDetailsSheet } from "./FeaturedSongDetailsSheet";
import { useFeaturedSongs } from "./useFeaturedSongs";
import { FEATURES_COPY } from "@/data";

const PAGE_SIZE = 10;

const chunkSongs = <T,>(items: T[], size: number) => {
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
};

export function FeaturedSongsSection() {
  const { songs, activeSong, closeSong, openSong, reduceMotion } = useFeaturedSongs();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pages = useMemo(() => chunkSongs(songs, isMobile ? 4 : 10), [songs, isMobile]);
  const [activePage, setActivePage] = useState(0);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (activePage >= pages.length) {
      setActivePage(0);
    }
  }, [activePage, pages.length]);

  const trackRef = useRef<HTMLDivElement | null>(null);

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

  const goToPage = (pageIndex: number) => {
    if (!pages.length) return;
    const nextPage = ((pageIndex % pages.length) + pages.length) % pages.length;
    const pageEl = pageRefs.current[nextPage];
    if (pageEl && trackRef.current) {
      trackRef.current.scrollTo({
        left: pageEl.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section id="features" className="relative overflow-hidden bg-[#fffdf8] py-32">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-balance font-display font-light text-5xl md:text-7xl uppercase tracking-tighter mb-4 text-glow italic">
            {FEATURES_COPY.heading}
          </h2>
          <p className="mt-32 font-mono text-[#ff9d00] text-[35px] md:text-5xl tracking-widest uppercase opacity-60">
            {FEATURES_COPY.subheading}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-slate-700/55">
            {FEATURES_COPY.countPill}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 text-slate-800/70">
            <button
              type="button"
              onClick={() => goToPage(activePage - 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-slate-100/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
              aria-label="Previous carousel page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-20 px-2 text-center text-[10px] font-bold uppercase tracking-widest text-slate-700/55">
              {Math.min(activePage + 1, Math.max(pages.length, 1))}/{Math.max(pages.length, 1)}
            </span>
            <button
              type="button"
              onClick={() => goToPage(activePage + 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-slate-100/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
              aria-label="Next carousel page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="overflow-hidden overflow-y-hidden rounded-[36px] border border-slate-200 bg-white/[0.02] p-4 shadow-[0_18px_80px_rgba(0,0,0,0.22)]">
          <div ref={trackRef} className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth overscroll-x-contain" style={{ scrollbarWidth: "none" }}>
            {pages.map((page, pageIndex) => (
              <div
                key={`feature-page-${pageIndex}`}
                data-page-index={pageIndex}
                ref={(node) => { pageRefs.current[pageIndex] = node; }}
                className="w-full flex-none snap-start px-2"
              >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                  {page.map((song, index) => (
                    <FeaturedSongCard
                      key={song.id}
                      song={song}
                      index={pageIndex * PAGE_SIZE + index}
                      reduceMotion={reduceMotion}
                      onOpen={openSong}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeSong && <FeaturedSongDetailsSheet song={activeSong} onClose={closeSong} reduceMotion={reduceMotion} />}
      </AnimatePresence>
    </section>
  );
}
