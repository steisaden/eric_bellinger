import { useMemo } from "react";

import {
  CREDITS_SECTION_COPY,
  CREDITS_SUMMARY,
  NOTABLE_SONGS,
  SPOTIFY_TOP_VISIBLE_SONGS,
  VERIFIED_PUBLIC_CREDITS,
} from "@/data";

export function useCredits() {
  const credits = useMemo(() => [...VERIFIED_PUBLIC_CREDITS].sort((left, right) => right.year - left.year), []);

  return {
    credits,
    sectionCopy: CREDITS_SECTION_COPY,
    summary: CREDITS_SUMMARY,
    spotifyTopVisibleSongs: SPOTIFY_TOP_VISIBLE_SONGS,
    notableSongs: NOTABLE_SONGS,
    latestYear: credits[0]?.year ?? null,
  };
}
