import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { TOUR_COPY } from "@/data";

import { useTourLogic } from "./tour/useTourLogic";

export function TourDates() {
  const { archivedTours, upcomingTours, showArchive, toggleArchive } = useTourLogic();
  const activeCount = upcomingTours.length;

  return (
    <section id="tour" className="relative overflow-hidden py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="artist-eyebrow mb-4 text-[#ffd36e]">LIVE DATES</p>
            <h2 className="text-balance font-display text-5xl font-light uppercase tracking-tighter text-white md:text-7xl lg:text-[5.5rem]">
              Catch Eric Live
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/68 md:text-xl">
              Upcoming shows, venue dates, and ticket links for the current run.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {archivedTours.length > 0 && (
              <button
                type="button"
                onClick={toggleArchive}
                aria-expanded={showArchive}
                aria-controls="tour-archive"
                className="artist-pill-inset inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/76 transition-colors hover:border-white/18 hover:bg-white/10 hover:text-white"
              >
                {showArchive ? "Hide Archive" : `View Archive • ${archivedTours.length}`}
              </button>
            )}
            <a
              href="https://citywinery.com/pages/genre/eric-bellinger-philadelphia-multishow"
              className="inline-flex items-center gap-2 rounded-full border border-[#ffd36e]/20 bg-[#ffd36e]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffd36e] transition-colors hover:bg-[#ffd36e]/14"
            >
              All 2026 Dates <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {upcomingTours.length > 0 ? (
          <div className="grid gap-4">
            {upcomingTours.map((tour, i) => {
              const d = new Date(tour.date);
              const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase();
              const day = d.getUTCDate();
              const time = d.toLocaleString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              });
              const isPrimary = i === 0;

              return (
                <motion.article
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={cn("group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 md:p-6", isPrimary && "bg-white/[0.06]")}
                >
                  <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4 md:gap-5">
                      <div className="flex h-18 w-18 shrink-0 flex-col items-center justify-center rounded-[24px] border border-white/10 bg-black/30 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:h-20 md:w-20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffd36e]">{month}</span>
                        <span className="mt-1 text-2xl font-light leading-none text-white md:text-[2rem]">{day}</span>
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          {isPrimary && (
                            <span className="artist-pill-inset rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#ffd36e]">
                              Next up
                            </span>
                          )}
                          <span className="artist-pill-inset rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-white/60">
                            {tour.isActive ? "Live run" : "Archive"}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-semibold text-white md:text-[1.65rem]">{tour.venue}</h3>
                        <p className="mt-1 text-sm uppercase tracking-[0.28em] text-white/58 md:text-[0.8rem]">{tour.city}</p>
                        <p className="mt-2 text-sm text-white/56">{tour.status}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                      <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-left">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-white/42">Time</p>
                        <p className="mt-2 text-sm text-white/85">{time}</p>
                      </div>
                      {tour.status === "Sold Out" ? (
                        <span className="artist-pill-inset inline-flex items-center justify-center rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                          Sold Out
                        </span>
                      ) : (
                        <a
                          href={tour.ticketsUrl}
                          className={cn(
                            "inline-flex items-center justify-center rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[0.32em] transition-transform hover:-translate-y-0.5",
                            tour.status === "Low Tickets"
                              ? "bg-gradient-to-r from-[#ff9d00] via-[#ffd36e] to-[#f7b72d] text-black shadow-[0_12px_30px_rgba(255,157,0,0.2)]"
                              : "border border-white/10 bg-white/8 text-white hover:bg-white/12",
                          )}
                        >
                          {tour.status === "Low Tickets" ? "Last Tickets" : "Get Tickets"}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] py-24 text-center text-white/72 backdrop-blur-sm">
            <h3 className="font-display text-2xl">{TOUR_COPY.emptyStateTitle}</h3>
            <p className="mt-2 text-white/56">{TOUR_COPY.emptyStateCopy}</p>
          </div>
        )}

        {showArchive && archivedTours.length > 0 && (
          <div id="tour-archive" className="mt-16 border-t border-white/10 pt-10">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h3 className="font-display text-3xl italic text-white/86">Past Shows</h3>
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/42">Verified archive</span>
            </div>
            <div className="grid gap-3 opacity-86 md:grid-cols-2 xl:grid-cols-3">
              {archivedTours.map((tour) => (
                <div key={tour.id} className="rounded-2xl border border-white/10 bg-black/26 px-4 py-4 text-sm text-white/72">
                  <p className="font-semibold text-white">{tour.venue}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/48">{tour.city}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/40">Archived {tour.date.slice(0, 10)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
