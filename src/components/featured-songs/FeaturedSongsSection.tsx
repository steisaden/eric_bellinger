import { useEffect, useMemo, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { AnimatePresence } from "motion/react";

import { FEATURES_COPY } from "@/data";

import { FeaturedSongCard } from "./FeaturedSongCard";
import { FeaturedSongDetailsSheet } from "./FeaturedSongDetailsSheet";
import { useFeaturedSongs } from "./useFeaturedSongs";

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
  const [touchLike, setTouchLike] = useState(false);
  const [expandedSongId, setExpandedSongId] = useState<string | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const updateTouchLike = () => setTouchLike(mediaQuery.matches);
    updateTouchLike();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateTouchLike);
      return () => mediaQuery.removeEventListener("change", updateTouchLike);
    }

    mediaQuery.addListener(updateTouchLike);
    return () => mediaQuery.removeListener(updateTouchLike);
  }, []);

  useEffect(() => {
    if (!activeSong) {
      return;
    }

    setExpandedSongId(null);
  }, [activeSong]);

  useEffect(() => {
    if (!touchLike || !expandedSongId) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (sectionRef.current && target && !target.closest("[data-feature-card]")) {
        setExpandedSongId(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [touchLike, expandedSongId]);

  const pages = useMemo(() => chunkSongs(songs, isMobile ? 4 : PAGE_SIZE), [songs, isMobile]);
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
            if (!Number.isNaN(index)) {
              setActivePage(index);
            }
          }
        });
      },
      {
        root: track,
        threshold: 0.5,
      },
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

  useEffect(() => {
    if (reduceMotion || isCarouselPaused || pages.length <= 1 || activeSong) return;

    const timer = window.setInterval(() => {
      goToPage(activePage + 1);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [activePage, activeSong, isCarouselPaused, pages.length, reduceMotion]);

  const handleCardActivate = (id: string) => {
    setExpandedSongId(id);
  };

  const handleCardOpen = (id: string) => {
    setExpandedSongId(null);
    openSong(id);
  };

  const featuredCount = songs.length;
  const newestSong = songs[0];

  return (
    <section ref={sectionRef} id="features" className="relative overflow-hidden py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="artist-eyebrow mb-4 text-[#ffd36e]">FEATURES &amp; GUEST APPEARANCES</p>
            <h2 className="safe-text text-balance font-display text-[clamp(2.45rem,12vw,3rem)] font-light uppercase tracking-tighter text-white md:text-7xl lg:text-[5.5rem]">
              {FEATURES_COPY.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/68 md:text-xl">
              Collaborations, guest vocals, and cross-catalog appearances from Eric Bellinger’s career.
            </p>
          </div>

          <div className="artist-pill-inset inline-flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-white/76">
            <Sparkles className="h-4 w-4 text-[#ffd36e]" />
            {FEATURES_COPY.countPill}
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="editorial-panel overflow-hidden p-5 md:p-6">
            <p className="artist-eyebrow text-[#ffd36e]">VOICE ACROSS THE INDUSTRY</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-tighter text-white md:text-4xl">
              Eric’s voice across the industry
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/64 md:text-base">
              This shelf gathers collaborations and guest appearances into a more editorial view, so the page reads like a living record instead of a table.
            </p>
            {newestSong ? (
              <div className="mt-5 rounded-[24px] border border-white/10 bg-black/26 p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/42">Featured record</p>
                <p className="mt-2 text-xl font-light text-white">{newestSong.title}</p>
                <p className="mt-1 text-sm text-white/56">{newestSong.artist}</p>
              </div>
            ) : null}
          </article>

          <div className="grid gap-4">
            <div className="editorial-panel p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Total features</p>
              <p className="mt-3 text-3xl font-light text-white">{featuredCount}</p>
              <p className="mt-2 text-sm text-white/56">Verified guest records in the archive.</p>
            </div>
            <div className="editorial-panel p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Presentation</p>
              <p className="mt-3 text-3xl font-light text-white">Curated</p>
              <p className="mt-2 text-sm text-white/56">Cover art when verified, tasteful fallback when not.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_18px_80px_rgba(0,0,0,0.22)] md:p-4"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onFocusCapture={() => setIsCarouselPaused(true)}
            onBlurCapture={() => setIsCarouselPaused(false)}
            onPointerDown={() => setIsCarouselPaused(true)}
          >
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth overscroll-x-contain"
              style={{ scrollbarWidth: "none" }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  key={`feature-page-${pageIndex}`}
                  data-page-index={pageIndex}
                  ref={(node) => {
                    pageRefs.current[pageIndex] = node;
                  }}
                  className="w-full flex-none snap-start px-1"
                >
                  <div className="mobile-carousel-grid grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4">
                    {page.map((song, index) => (
                      <FeaturedSongCard
                        key={song.id}
                        song={song}
                        index={pageIndex * PAGE_SIZE + index}
                        reduceMotion={reduceMotion}
                        expanded={expandedSongId === song.id}
                        touchLike={touchLike}
                        onActivate={handleCardActivate}
                        onOpen={handleCardOpen}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-1 flex flex-col items-end justify-between gap-1 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/42">
              Voice-led guest records, collaborations, and cross-catalog appearances.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/26 p-1 text-white/72">
              <button
                type="button"
                onClick={() => goToPage(activePage - 1)}
                className="touch-target-44 inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd36e]/70"
                aria-label="Previous carousel page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-20 px-2 text-center text-[10px] font-bold uppercase tracking-widest text-white/55">
                {Math.min(activePage + 1, Math.max(pages.length, 1))}/{Math.max(pages.length, 1)}
              </span>
              <button
                type="button"
                onClick={() => goToPage(activePage + 1)}
                className="touch-target-44 inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd36e]/70"
                aria-label="Next carousel page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>{activeSong && <FeaturedSongDetailsSheet song={activeSong} onClose={closeSong} reduceMotion={reduceMotion} />}</AnimatePresence>
    </section>
  );
}
