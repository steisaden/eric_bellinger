/**
 * Formats a date string into a more readable format.
 */
export const formatDate = (raw: string | null) => {
  if (!raw) return null;
  const d = new Date(`${raw}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return raw;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
};

/**
 * Normalizes a title for comparison or lookup.
 */
export const normalizeTitle = (value: string) => value.trim().toLowerCase();

/**
 * Splits a title into a base title and a featured artist line if present.
 */
export function splitFeaturedTitle(title: string) {
  const match = title.match(/^(.*?)(?:\s*\((?:feat\.?|ft\.?|featuring)\s*(.+)\))$/i);

  if (!match) {
    return { baseTitle: title, featureText: null };
  }

  return {
    baseTitle: match[1].trim(),
    featureText: `feat. ${match[2].trim()}`,
  };
}

const CARD_TITLE_OVERRIDES: Record<string, string> = {
  "it'll all make sense later": "It'll All Make Sense",
  "it'll all make sense later (deluxe)": "It'll All Make Sense Later",
  "the rebirth 3: the party & the bedroom": "The Rebirth 3: The Party",
  "the rebirth 3: the party & the bedroom (acoustic)": "The Rebirth 3: The Party",
  "the rebirth 3: remixes & more": "The Rebirth 3: Remixes",
};

/**
 * Gets a display-friendly title for discography cards.
 */
export const getAlbumCardTitle = (title: string) => {
  const normalized = normalizeTitle(title);
  const override = CARD_TITLE_OVERRIDES[normalized];
  if (override) {
    return override;
  }

  const acousticSuffixStripped = title.replace(/\s*\((?:acoustic(?: version)?|acoustics?)\)$/i, "");
  if (acousticSuffixStripped !== title) {
    return acousticSuffixStripped;
  }

  if (title.length > 32 && title.includes(" & ")) {
    return title.split(" & ")[0].trim();
  }

  return title;
};

/**
 * Checks if a release is likely an acoustic version.
 */
export const isAcousticRelease = (title: string, type: string) =>
  /acoustic/i.test(title) || /acoustic/i.test(type);
