import { useEffect, useMemo, useState } from "react";

import { DISCOGRAPHY } from "@/data/discography";
import type { DiscographyItem } from "@/types";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type DiscographyLink = {
  label: string;
  href: string;
};

export function useDiscography() {
  const [activeAlbumId, setActiveAlbumId] = useState<DiscographyItem["id"] | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const albums = useMemo(() => DISCOGRAPHY, []);

  const activeAlbum = useMemo(
    () => albums.find((item) => item.id === activeAlbumId) ?? null,
    [activeAlbumId, albums],
  );

  const activeLinks = useMemo<DiscographyLink[]>(() => {
    if (!activeAlbum) {
      return [];
    }

    return [
      { label: "Spotify", href: activeAlbum.platformLinks.spotify.value, valid: activeAlbum.platformLinks.spotify.valid },
      { label: "Apple Music", href: activeAlbum.platformLinks.appleMusic.value, valid: activeAlbum.platformLinks.appleMusic.valid },
      { label: "YouTube", href: activeAlbum.platformLinks.youtube.value, valid: activeAlbum.platformLinks.youtube.valid },
    ]
      .filter((link) => link.valid)
      .map(({ label, href }) => ({ label, href }));
  }, [activeAlbum]);

  useEffect(() => {
    if (!activeAlbumId) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveAlbumId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeAlbumId]);

  return {
    albums,
    activeAlbum,
    activeLinks,
    activeAlbumId,
    reduceMotion,
    openAlbum: setActiveAlbumId,
    closeAlbum: () => setActiveAlbumId(null),
  };
}
