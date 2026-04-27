import { useEffect, useMemo, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";

import { DiscographyCard } from "./DiscographyCard";
import { DiscographyDetailsSheet } from "./DiscographyDetailsSheet";
import { useDiscography } from "./useDiscography";
import { DISCOGRAPHY_COPY } from "@/data";

const PAGE_SIZE = 10;

const chunkAlbums = <T,>(items: T[], size: number) => {
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
};

export function DiscographySection() {
  const { albums, activeAlbum, activeLinks, reduceMotion, openAlbum, closeAlbum } = useDiscography();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pages = useMemo(() => chunkAlbums(albums, isMobile ? 4 : 10), [albums, isMobile]);
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
    if (track) {
      // Calculate scroll position based on full width of container, 
      // adding a small buffer to account for padding/gaps
      track.scrollTo({
        left: activePage * track.offsetWidth,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  }, [activePage, reduceMotion]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const width = track.offsetWidth;
    if (width === 0) return;
    
    // Use a threshold to avoid jittery page updates
    const newPage = Math.round(scrollLeft / width);
    if (newPage !== activePage && newPage >= 0 && newPage < pages.length) {
      setActivePage(newPage);
    }
  };
  const goToPage = (pageIndex: number) => {
    if (!pages.length) {
      return;
    }

    const nextPage = ((pageIndex % pages.length) + pages.length) % pages.length;
    setActivePage(nextPage);
  };

  return (
    <section id="discography" className="relative overflow-hidden bg-[#faf7f0] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-1/2 rounded-full bg-purple-500/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-balance font-display text-4xl font-light uppercase tracking-tighter text-glow italic md:text-6xl lg:text-7xl">
              Discography
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-[10px] uppercase tracking-widest text-[#ff9d00] md:text-xs">
              {DISCOGRAPHY_COPY.introCopy}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-700/60">
              {DISCOGRAPHY_COPY.countPill}
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

        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white/[0.02] p-3 shadow-[0_18px_80px_rgba(0,0,0,0.22)] md:p-4">
          <div ref={trackRef} onScroll={handleScroll} className="flex snap-x snap-mandatory overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {pages.map((page, pageIndex) => (
              <div
                key={`discography-page-${pageIndex}`}
                ref={(node) => {
                  pageRefs.current[pageIndex] = node;
                }}
                className="w-full flex-none snap-center px-1"
              >
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4">
                  {page.map((item) => (
                    <DiscographyCard key={item.id} item={item} onOpen={openAlbum} reduceMotion={reduceMotion} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeAlbum ? (
          <DiscographyDetailsSheet album={activeAlbum} links={activeLinks} onClose={closeAlbum} reduceMotion={reduceMotion} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
