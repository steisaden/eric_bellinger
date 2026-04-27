const RESPONSIVE_WIDTHS = [480, 800, 1200] as const;

const withWidth = (src: string, width: number) => {
  try {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  } catch {
    return src;
  }
};

export function buildResponsiveSrcSet(src: string) {
  if (!src || src === "#") {
    return undefined;
  }

  return RESPONSIVE_WIDTHS.map((width) => `${withWidth(src, width)} ${width}w`).join(", ");
}
