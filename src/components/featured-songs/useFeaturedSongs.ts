import { useEffect, useMemo, useState } from "react";

import { FEATURED_SONGS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type FeaturedSong = (typeof FEATURED_SONGS)[number];

export function useFeaturedSongs() {
  const [activeSongId, setActiveSongId] = useState<FeaturedSong["id"] | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const songs = useMemo(() => FEATURED_SONGS, []);

  const activeSong = useMemo(
    () => songs.find((song) => song.id === activeSongId) ?? null,
    [activeSongId, songs],
  );

  useEffect(() => {
    if (!activeSongId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSongId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSongId]);

  return {
    songs,
    activeSong,
    reduceMotion,
    openSong: setActiveSongId,
    closeSong: () => setActiveSongId(null),
  };
}
