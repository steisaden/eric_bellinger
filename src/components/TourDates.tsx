import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { TOUR_COPY } from "@/data";

import { useTourLogic } from "./tour/useTourLogic";

export function TourDates() {
  const { archivedTours, upcomingTours, showArchive, toggleArchive } = useTourLogic();

  return (
    <section id="tour" className="relative bg-[#fffdf8] py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-balance font-display text-5xl font-semibold uppercase tracking-tighter text-glow md:text-7xl">
              {TOUR_COPY.heading}
            </h2>
            <p className="mt-4 text-lg uppercase tracking-widest text-[#ff9d00] md:text-base">
              {TOUR_COPY.subheading}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {archivedTours.length > 0 && (
              <button
                type="button"
                onClick={toggleArchive}
                aria-expanded={showArchive}
                aria-controls="tour-archive"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-700 transition-colors hover:border-slate-200/80 hover:text-slate-900"
              >
                {TOUR_COPY.archiveToggle.split("•")[0].trim()} {showArchive ? "• Hide" : `• ${archivedTours.length}`}
              </button>
            )}
            <a href="https://citywinery.com/pages/genre/eric-bellinger-philadelphia-multishow" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-700 transition-colors hover:text-slate-900">
              {TOUR_COPY.allDatesLink} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {upcomingTours.length > 0 ? (
          <div className="flex flex-col gap-4">
            {upcomingTours.map((tour, i) => {
              const d = new Date(tour.date);
              const month = d.toLocaleString("en-US", { month: "short" });
              const day = d.getDate();
              const time = d.toLocaleString("en-US", { hour: "numeric", minute: "2-digit" });

              return (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-200/80 md:flex-row md:items-center md:p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-eb-accent/0 via-eb-accent/5 to-eb-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center gap-2 rounded-2xl border border-purple-500/20 bg-purple-600/20 font-mono md:h-20 md:w-20 md:flex-col md:gap-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest md:text-xs">{month}</span>
                      <span className="text-xl font-bold md:text-2xl">{day}</span>
                    </div>

                    <div className="grid flex-grow items-center gap-2 md:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-bold md:text-xl">{tour.venue}</h3>
                        <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-600">{tour.city}</p>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                          {tour.isActive ? "Upcoming shows" : "Past shows archive"}
                        </p>
                      </div>
                      <div className="text-left md:text-center">
                        <span className="rounded-xl border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                          {time}
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      {tour.status === "Sold Out" ? (
                        <span className="rounded-xl border border-slate-200/80 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
                          Sold Out
                        </span>
                      ) : (
                        <a
                          href={tour.ticketsUrl}
                          className={cn(
                            "inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-black transition-colors hover:bg-purple-100 md:w-auto",
                            tour.status === "Low Tickets" && "bg-eb-accent text-slate-900 hover:bg-purple-400",
                          )}
                        >
                          Tickets
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="glass-card border-dashed py-24 text-center">
            <h3 className="font-display text-2xl text-slate-600">{TOUR_COPY.emptyStateTitle}</h3>
            <p className="mt-2 text-slate-600">{TOUR_COPY.emptyStateCopy}</p>
          </div>
        )}

        {showArchive && archivedTours.length > 0 && (
          <div id="tour-archive" className="mt-16 border-t border-slate-200 pt-10">
            <h3 className="mb-6 font-display text-3xl italic text-slate-900/80">Past Shows</h3>
            <div className="grid gap-3 opacity-80">
              {archivedTours.map((tour) => (
                <div key={tour.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800/70">
                  <div>
                    <p className="font-semibold text-slate-900">{tour.venue}</p>
                    <p className="text-xs uppercase tracking-widest text-slate-500">{tour.city}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500">Archived {tour.date.slice(0, 10)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
