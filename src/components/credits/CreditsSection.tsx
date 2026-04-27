import { useMemo, useState } from "react";
import { PenTool, Search, Sparkles } from "lucide-react";

import { CreditRow } from "./CreditRow";
import { useCredits } from "./useCredits";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "notable", label: "Notable" },
  { id: "2000s", label: "2000s" },
  { id: "2010s", label: "2010s" },
  { id: "2020s", label: "2020s" },
] as const;

export function CreditsSection() {
  const { credits, sectionCopy, summary, spotifyTopVisibleSongs, notableSongs, latestYear } = useCredits();
  const reduceMotion = usePrefersReducedMotion();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]["id"]>("all");

  const filteredCredits = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return credits.filter((credit) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [credit.title, credit.artist, credit.primaryArtist, credit.role, credit.parentProject ?? "", credit.notes, credit.notableAchievement]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesFilter =
        activeFilter === "all"
          ? true
          : activeFilter === "notable"
            ? credit.isNotable
            : activeFilter === "2000s"
              ? credit.year < 2010
              : activeFilter === "2010s"
                ? credit.year >= 2010 && credit.year < 2020
                : credit.year >= 2020;

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, credits, query]);

  return (
    <section id="credits" className="relative bg-[#faf7f0] py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-1/2 rounded-full bg-eb-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center md:mb-16">
          <PenTool className="mx-auto mb-6 h-12 w-12 text-eb-accent opacity-50" />
          <h2 className="text-balance font-display text-4xl font-light uppercase tracking-tighter text-glow italic md:text-6xl">{sectionCopy.heading}</h2>
          <p className="mx-auto mt-4 max-w-3xl font-mono text-[10px] uppercase tracking-widest text-[#ff9d00] md:text-xs">
            {sectionCopy.subheading}
            {latestYear ? ` · Latest credit year ${latestYear}` : ""}
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-pretty text-sm leading-relaxed text-[#ff9d00] md:text-base">{sectionCopy.lede}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Spotify songwriter page", value: summary.spotifyReportedSongsWritten.toString(), caption: "songs written reported publicly" },
            { label: "Verified public credits", value: summary.verifiedPublicCreditsInThisFile.toString(), caption: "rows safe for the public table" },
            { label: "Notable highlights", value: summary.notableHighlightsCount.toString(), caption: "featured records and anchors" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white/95 p-6 backdrop-blur-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ff9d00]">{stat.label}</div>
              <div className="mt-3 text-4xl font-light text-slate-900 md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.caption}</div>
            </div>
          ))}        </div>

        <div className="mt-10 rounded-[32px] border border-slate-200 bg-gradient-to-br from-white/[0.05] to-transparent p-6 backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff9d00]">Spotify top visible songs</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700/60 md:text-base">
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-700/60">
              <Sparkles className="h-3.5 w-3.5 text-eb-accent" />
              {spotifyTopVisibleSongs.length} visible public snapshot rows
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {spotifyTopVisibleSongs.map((song) => (
              <article key={`${song.rank}-${song.title}`} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">#{song.rank}</div>
                    <h3 className="mt-2 text-base font-medium text-slate-900">{song.title}</h3>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                    Spotify
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-800/68">{song.artist}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{song.notabilityReason}</p>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  {song.spotifyStreamsSnapshot.toLocaleString()} streams
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-slate-200 bg-white/95 p-6 backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff9d00]">{sectionCopy.notableHeading}</div>              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700/60 md:text-base">
                {summary.publicSiteDisplayRecommendation}
              </p>
            </div>
            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
              {notableSongs.length} notable records
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {notableSongs.map((song) => (
              <article key={`${song.title}-${song.year}`} className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">{song.year}</div>
                    <h3 className="mt-2 text-lg font-medium text-slate-900">{song.title}</h3>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                    {song.role}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-800/70">{song.artist}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{song.whyItMatters}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(110deg,#fef3c7,45%,#fbbf24,55%,#fef3c7)] bg-[length:200%_100%] backdrop-blur-sm animate-shimmer">
          <div className="border-b border-slate-200 px-4 py-5 md:px-6 md:py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff9d00]">{sectionCopy.tableHeading}</div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700/60 md:text-base">
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
                <Search className="h-4 w-4 text-eb-accent/80" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search songs, artists, roles..."
                  className="w-full min-w-[220px] bg-transparent text-sm text-slate-900 placeholder:text-slate-500/30 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {filterOptions.map((option) => {
                const active = option.id === activeFilter;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActiveFilter(option.id)}
                    className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                      active
                        ? "border-eb-accent/40 bg-eb-accent/15 text-slate-900"
                        : "border-slate-200 bg-white/95 text-slate-600 hover:border-slate-200/80 hover:bg-white/[0.06] hover:text-slate-900"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
              <div className="ml-auto font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Showing {filteredCredits.length} of {credits.length}
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="hidden grid-cols-12 gap-4 border-b border-slate-200 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ff9d00] md:grid">
              <div className="col-span-1">Year</div>
              <div className="col-span-3">Song</div>
              <div className="col-span-3">Artist</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Parent Project</div>
              <div className="col-span-1 text-right">Notes</div>
            </div>

            <div className="max-h-[760px] overflow-y-auto scrollbar-hide bg-white/80">
              {filteredCredits.length > 0 ? (
                filteredCredits.map((credit, index) => (
                  <CreditRow key={credit.id} credit={credit} index={index} reduceMotion={reduceMotion} />
                ))
              ) : (
                <div className="px-6 py-12 text-center text-sm text-slate-600">
                  No public songwriting credits match your search yet.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 text-sm leading-relaxed text-slate-700">
            {sectionCopy.unresolvedNote}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 text-sm leading-relaxed text-slate-600">
            Spotify reports 347 songs written on Eric Bellinger’s songwriter page; the public archive shown here only lists the verified rows and notable highlights that are safe to display.
          </div>
        </div>
      </div>
    </section>
  );
}
