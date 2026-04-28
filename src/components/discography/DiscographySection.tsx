import { useEffect, useMemo, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, Disc3, Layers3, Sparkles } from "lucide-react";
import { AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";
import { DISCOGRAPHY_COPY } from "@/data";

import { DiscographyCard } from "./DiscographyCard";
import { DiscographyDetailsSheet } from "./DiscographyDetailsSheet";
import { useDiscography } from "./useDiscography";

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
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pages = useMemo(() => chunkAlbums(albums, isMobile ? 4 : PAGE_SIZE), [albums, isMobile]);
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

  const goToPage = (direction: "next" | "prev") => {
    if (!pages.length) return;
    const nextPage =
      direction === "next" ? (activePage + 1) % pages.length : (activePage - 1 + pages.length) % pages.length;
    const pageEl = pageRefs.current[nextPage];
    if (pageEl && trackRef.current) {
      trackRef.current.scrollTo({
        left: pageEl.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  useEffect(() => {
    if (reduceMotion || isCarouselPaused || pages.length <= 1 || activeAlbum) return;

    const timer = window.setInterval(() => {
      const nextPage = (activePage + 1) % pages.length;
      const pageEl = pageRefs.current[nextPage];
      if (pageEl && trackRef.current) {
        trackRef.current.scrollTo({ left: pageEl.offsetLeft, behavior: "smooth" });
      }
    }, 6500);

    return () => window.clearInterval(timer);
  }, [activeAlbum, activePage, isCarouselPaused, pages.length, reduceMotion]);

  const latestItem = albums[0];
  const modernCount = albums.filter((album) => album.year >= 2020).length;
  const albumCount = albums.filter((album) => album.type.toLowerCase().includes("album")).length;
  const collaborativeCount = Math.max(albums.length - albumCount - 1, 0);

  return (
    <section id="discography" className="relative overflow-hidden py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="artist-eyebrow mb-4 text-[#ffd36e]">CURATED CATALOG</p>
            <h2 className="safe-text text-balance font-display text-[clamp(2.45rem,12vw,3rem)] font-light uppercase tracking-tighter text-white md:text-7xl lg:text-[5.5rem]">
              Discography
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/68 md:text-xl">
              From The Rebirth to It All Makes Sense, explore the albums, eras, and records that built Eric Bellinger’s R&B world.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="artist-pill-inset inline-flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-white/76">
              <Sparkles className="h-4 w-4 text-[#ffd36e]" />
              {DISCOGRAPHY_COPY.countPill}
            </div>
            <div className="artist-pill-inset inline-flex items-center gap-2 rounded-full px-3 py-2 text-white/76">
              <Disc3 className="h-4 w-4 text-[#ffd36e]" />
              {albums.length} releases
            </div>
            <div className="artist-pill-inset inline-flex items-center gap-2 rounded-full px-3 py-2 text-white/76">
              <Layers3 className="h-4 w-4 text-[#ffd36e]" />
              {modernCount} recent-era
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-white/46">
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-white/72">Latest Era</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2">Essential Albums</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2">Deep Cuts</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2">Collaborative Projects</span>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="editorial-panel overflow-hidden p-5 md:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="artist-eyebrow text-[#ffd36e]">Latest highlight</p>
                <h3 className="mt-2 font-display text-3xl font-light tracking-tighter text-white md:text-4xl">
                  {latestItem?.title ?? "Latest release"}
                </h3>
              </div>
              <p className="text-right text-[10px] uppercase tracking-[0.32em] text-white/42">
                Visual-first
                <br />
                archive
              </p>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/64">
              The newest era carries the biggest visual scale while the rest of the archive stays intact for deep listening and discovery.
            </p>
            <div className="mt-5 rounded-[24px] border border-white/10 bg-black/26 p-4 text-sm text-white/66">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/42">Curatorial note</p>
              <p className="mt-2 leading-6">
                Essential albums sit beside collaborative projects, but the latest record gets the strongest visual weight so the page reads like an artist destination—not a spreadsheet.
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            <div className="editorial-panel p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Essentials</p>
              <p className="mt-3 text-3xl font-light text-white">{albumCount}</p>
              <p className="mt-2 text-sm text-white/56">Core album projects in the catalog.</p>
            </div>
            <div className="editorial-panel p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Collaborations</p>
              <p className="mt-3 text-3xl font-light text-white">{collaborativeCount}</p>
              <p className="mt-2 text-sm text-white/56">Shared-era releases and adjacent projects.</p>
            </div>
          </div>
        </div>

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
                key={`discography-page-${pageIndex}`}
                data-page-index={pageIndex}
                ref={(node) => {
                  pageRefs.current[pageIndex] = node;
                }}
                className="w-full flex-none snap-start px-1"
              >
                <div className="mobile-carousel-grid grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4">
                  {page.map((item, index) => (
                    <DiscographyCard
                      key={item.id}
                      item={item}
                      onOpen={openAlbum}
                      reduceMotion={reduceMotion}
                      featured={!isMobile && pageIndex === 0 && index === 0}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-1 flex flex-col items-end justify-between gap-1 sm:flex-row sm:items-center sm:gap-4">
          <p className="order-2 text-right text-[10px] uppercase tracking-[0.32em] text-white/42 sm:order-1 sm:text-left">
            {DISCOGRAPHY_COPY.introCopy}
          </p>
          <div className="order-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/26 p-1 text-white/72 sm:order-2">
            <button
              type="button"
              onClick={() => goToPage("prev")}
              className="touch-target-44 inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd36e]/70"
              aria-label="Previous carousel page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-20 px-2 text-center text-[10px] font-bold uppercase tracking-widest text-white/55">
              {activePage + 1}/{Math.max(pages.length, 1)}
            </span>
            <button
              type="button"
              onClick={() => goToPage("next")}
              className="touch-target-44 inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd36e]/70"
              aria-label="Next carousel page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
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
