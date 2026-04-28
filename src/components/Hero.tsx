import { motion } from "motion/react";
import { ArrowUpRight, Calendar, ExternalLink, Play } from "lucide-react";

import { HERO_COPY, LATEST_PROJECT, TOUR_COPY } from "@/data";

function HeroCover() {
  return (
    <motion.img
      whileHover={{ scale: 1.02 }}
      src="/cry_in_front_of_you_hero.jpg"
      alt="Eric Bellinger"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="relative z-10 h-full w-full rounded-[28px] border border-white/10 object-cover shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition-transform duration-500 will-change-transform"
    />
  );
}

export function Hero() {
  const spotlight = HERO_COPY.tourSpotlight?.slice(0, 3) ?? [];
  const primaryTicketUrl = TOUR_COPY.activeTourDates.find((date) => Boolean(date.ticketsUrl))?.ticketsUrl ?? "#tour";
  const listenUrl = LATEST_PROJECT.listenUrl ?? LATEST_PROJECT.links?.appleMusic ?? LATEST_PROJECT.links?.spotify ?? "#discography";

  return (
    <section id="project" className="relative overflow-hidden pb-14 pt-24 md:pb-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-10 h-[28rem] w-[28rem] rounded-full bg-[#ff9d00]/12 blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.28, 0.1], scale: [1, 1.12, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-[#ad46ff]/14 blur-[160px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.35))]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="hero-billboard relative overflow-hidden rounded-[40px] p-5 md:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-60 grain-overlay" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffd36e]/60 to-transparent" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="order-2 lg:order-1 flex flex-col items-start"
            >
              <p className="artist-eyebrow mb-4 text-[#ffd36e]">{HERO_COPY.eyebrow}</p>

              <h1 className="text-balance font-display text-5xl font-light leading-[0.92] tracking-tighter text-white md:text-7xl lg:text-[7.5rem]">
                Eric Bellinger
              </h1>

              <div className="mt-5 space-y-3 max-w-2xl">
                <p className="text-pretty text-lg font-light leading-relaxed text-white/78 md:text-xl">
                  The voice, pen, and catalog behind a generation of R&B.
                </p>
                <p className="text-pretty text-base leading-7 text-white/66 md:text-lg">
                  New single: <span className="text-white">Cry In Front Of You</span>. 2026 live dates now available.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                <a href={primaryTicketUrl} className="artist-button-primary inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.3em] transition-transform hover:-translate-y-0.5">
                  <Calendar className="h-4 w-4" />
                  Get Tickets
                </a>
                <a href={listenUrl} className="artist-button-secondary inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.3em] transition-colors hover:border-white/20 hover:bg-white/8">
                  <Play className="h-4 w-4 fill-current" />
                  Listen Now
                </a>
                <a href="#discography" className="artist-button-tertiary inline-flex items-center gap-2 rounded-full px-2 py-4 text-sm font-bold uppercase tracking-[0.3em] transition-colors hover:text-[#ffd36e]">
                  <ExternalLink className="h-4 w-4" />
                  Explore the Archive
                </a>
              </div>

              <div className="mt-9 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
                {spotlight.map((date) => (
                  <div key={date.id} className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[#ffd36e]/78">{date.venue}</p>
                    <p className="mt-2 text-sm text-white/72">{date.city}</p>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-white/46">{date.displayDate}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.15 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 -m-6 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.2),transparent_50%)] blur-2xl" />
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[36rem] overflow-hidden rounded-[34px] border border-white/10 bg-black/30 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.52)]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_28%,rgba(0,0,0,0.36))] pointer-events-none" />
                <HeroCover />
                <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Campaign line</p>
                      <p className="mt-2 text-sm text-white/88">{HERO_COPY.summary}</p>
                    </div>
                    <span className="rounded-full border border-[#ffd36e]/18 bg-[#ffd36e]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffd36e]">
                      2026
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
