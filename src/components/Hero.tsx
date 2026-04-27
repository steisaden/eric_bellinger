import { motion } from "motion/react";
import { Calendar, ExternalLink, Play } from "lucide-react";

import { HERO_COPY, LATEST_PROJECT } from "@/data";

function HeroCover() {
  if (LATEST_PROJECT.coverUrl) {
    return (
      <motion.img
        whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
        src={LATEST_PROJECT.coverUrl}
        alt={LATEST_PROJECT.title}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="relative z-10 h-full w-full rounded-3xl border border-slate-200 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 will-change-transform"
      />
    );
  }

  return (
      <div className="relative z-10 flex h-full w-full flex-col justify-between rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,233,254,0.96),rgba(250,204,21,0.16))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
      <div className="space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-700/45">{HERO_COPY.eyebrow}</p>
        <div>
          <p className="text-3xl font-display font-light tracking-tighter text-slate-900">{LATEST_PROJECT.title}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-800/70">{LATEST_PROJECT.description}</p>
        </div>
      </div>

      <div className="grid gap-3 rounded-[24px] border border-slate-200 bg-white/85 p-4 text-sm text-slate-800/75 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-slate-600/40">{LATEST_PROJECT.type}</span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-slate-600/40">{LATEST_PROJECT.releaseDate}</span>
        </div>
        <p>{LATEST_PROJECT.genre} • {LATEST_PROJECT.length}</p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-600/35">{LATEST_PROJECT.coverStatus}</p>
      </div>
    </div>
  );
}

export function Hero() {
  const spotlight = HERO_COPY.tourSpotlight;

  return (
    <section id="project" className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24">
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] -top-[20%] h-[60%] w-[60%] rounded-full bg-eb-accent/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-[0%] top-[40%] h-[50%] w-[50%] rounded-full bg-purple-900/20 blur-[140px]"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="grid items-center gap-12 rounded-[40px] border border-slate-200 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col items-start"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/20 px-3 py-1 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-300">
              <span>{HERO_COPY.eyebrow}</span>
            </div>

            <h1 className="mb-6 font-display text-5xl font-light leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
              {HERO_COPY.headline}
            </h1>

            <p className="mb-6 max-w-xl text-lg font-light leading-relaxed text-slate-700/55 mix-blend-screen md:text-xl">
              {HERO_COPY.summary}
            </p>

            <div className="mb-8 grid w-full max-w-xl gap-3">
              {spotlight.map((date) => (
                <div key={date.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-300">{date.venue}</p>
                    <p className="text-sm text-slate-800/70">{date.city}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-700/50">{date.displayDate}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a href={LATEST_PROJECT.listenUrl ?? LATEST_PROJECT.links.appleMusic ?? LATEST_PROJECT.links.spotify ?? "#discography"} className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-black transition-colors hover:bg-purple-100">
                <Play className="h-5 w-5 fill-current" />
                {HERO_COPY.primaryAction}
              </a>
              <a href="#tour" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-100/80 px-8 py-4 text-sm font-bold transition-colors hover:bg-slate-100/90">
                <Calendar className="h-5 w-5" />
                {HERO_COPY.secondaryAction}
              </a>
              <a href="#discography" className="inline-flex items-center gap-2 px-5 py-4 text-sm font-bold uppercase tracking-widest text-slate-700/50 transition-colors hover:text-slate-900">
                <ExternalLink className="h-4 w-4" />
                {HERO_COPY.archiveAction}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="order-1 lg:order-2 relative perspective-1000"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto group">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,#fef3c7,45%,#fbbf24,55%,#fef3c7)] bg-[length:200%_100%] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
              <HeroCover />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
