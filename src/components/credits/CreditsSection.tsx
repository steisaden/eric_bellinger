import { useMemo, useState } from "react";

import { PenTool, Search, Sparkles } from "lucide-react";

import { SongwritingCredit } from "@/types";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { CreditRow } from "./CreditRow";
import { useCredits } from "./useCredits";
import { CreditStatCard } from "./CreditStatCard";
import { NotableRecordCard } from "./NotableRecordCard";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "notable", label: "Notable" },
  { id: "2000s", label: "2000s" },
  { id: "2010s", label: "2010s" },
  { id: "2020s", label: "2020s" },
] as const;

export function CreditsSection() {
  const { credits, sectionCopy, summary, spotifyTopVisibleSongs, latestYear } = useCredits();
  const reduceMotion = usePrefersReducedMotion();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]["id"]>("all");

  const filteredCredits = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return credits.filter((credit) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [credit.title, credit.artist, credit.primaryArtist, credit.role, credit.parentProject ?? "", credit.notes, credit.notabilityReason]
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
    <section id="credits" className="relative overflow-hidden py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="artist-eyebrow mb-4 text-[#ffd36e]">THE PEN</p>
            <h2 className="safe-text text-balance font-display text-[clamp(2.45rem,12vw,3rem)] font-light uppercase tracking-tighter text-white md:text-7xl lg:text-[5.5rem]">
              You’ve heard the pen, even when you didn’t know it was his.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-7 text-white/68 md:text-xl">
              Eric Bellinger’s songwriting credits stretch across modern R&amp;B and pop, with records performed by artists including Chris Brown, Usher, Justin Bieber, Wale, Brandy, and more.
              {latestYear ? ` Latest credit year ${latestYear}.` : ""}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="artist-pill-inset inline-flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-white/76">
              <PenTool className="h-4 w-4 text-[#ffd36e]" />
              {sectionCopy.heading}
            </div>
            <div className="artist-pill-inset inline-flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-white/76">
              <Sparkles className="h-4 w-4 text-[#ffd36e]" />
              Spotify lists {summary.spotifyReportedSongsWritten} songs
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <CreditStatCard
            label="Spotify songwriter page"
            value={summary.spotifyReportedSongsWritten.toString()}
            caption="songs written reported publicly"
          />
          <CreditStatCard
            label="Verified public credits"
            value={summary.verifiedPublicCreditsInThisFile.toString()}
            caption="rows safe for the public table"
          />
          <CreditStatCard
            label="Notable highlights"
            value={summary.notableHighlightsCount.toString()}
            caption="featured records and anchors"
          />
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.22)] backdrop-blur-[12px] md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="artist-eyebrow text-[#ffd36e]">PUBLIC NOTE</p>
              <p className="mt-3 text-sm leading-relaxed text-white/62 md:text-base">
                Spotify currently lists hundreds of songs written by Eric Bellinger. This archive shows verified public rows and notable highlights only.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <div className="artist-pill-inset rounded-full px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">
                {summary.spotifyReportedSongsWritten} songs written
              </div>
              <div className="artist-pill-inset rounded-full px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">
                {summary.verifiedPublicCreditsInThisFile} verified rows
              </div>
              <div className="artist-pill-inset rounded-full px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">
                {summary.notableHighlightsCount} notable highlights
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <div className="border-b border-white/8 px-4 py-5 md:px-6 md:py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="artist-eyebrow text-[#ffd36e]">{sectionCopy.notableHeading}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">{sectionCopy.lede}</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <Search className="h-4 w-4 text-[#ffd36e]/80" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search songs, artists, roles..."
                  className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
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
                        ? "border-[#ffd36e]/30 bg-[#ffd36e]/12 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/56 hover:border-white/16 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
              <div className="ml-auto font-mono text-[10px] uppercase tracking-[0.25em] text-white/42">
                Showing {filteredCredits.length} of {credits.length}
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="hidden grid-cols-12 gap-4 border-b border-white/8 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ffd36e] md:grid">
              <div className="col-span-1">Year</div>
              <div className="col-span-3">Song</div>
              <div className="col-span-3">Artist</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Parent Project</div>
              <div className="col-span-1 text-right">Notes</div>
            </div>

            <div className="max-h-[760px] overflow-y-auto scrollbar-hide bg-black/20">
              {filteredCredits.length > 0 ? (
                filteredCredits.map((credit, index) => (
                  <CreditRow
                    key={credit.id}
                    credit={credit as SongwritingCredit}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))
              ) : (
                <div className="px-6 py-12 text-center text-sm text-white/58">
                  No public songwriting credits match your search yet.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/58">
          {sectionCopy.unresolvedNote}
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <p className="artist-eyebrow text-[#ffd36e]">NOTABLE RECORDS</p>
          <div className="mt-3 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {spotifyTopVisibleSongs.map((song) => (
              <NotableRecordCard
                key={`${song.rank}-${song.title}`}
                song={song as unknown as SongwritingCredit}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
