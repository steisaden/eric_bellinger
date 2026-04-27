import { ALBUM_STREAMING_ROUTES, ALBUM_STREAMING_ROUTES_BY_TITLE } from "./albumStreamingRoutes";
import { CREDITS, CREDITS_SECTION_COPY, CREDITS_SUMMARY, NOTABLE_SONGS, SPOTIFY_TOP_VISIBLE_SONGS, VERIFIED_PUBLIC_CREDITS } from "./credits";
import { DISCOGRAPHY, DISCOGRAPHY_VIDEO_EMBEDS, RAW_DISCOGRAPHY_RELEASES } from "./discography";
import { REQUESTED_ALBUM_TRACKLISTS } from "./albumTracklistsRequested";
import { FEATURED_APPEARANCES } from "./featuredAppearances";
import { FEATURED_SONGS } from "./featuredSongs";
import { FEATURED_MUSIC_VIDEO_CARDS, MUSIC_VIDEOS } from "./musicVideos";
import { copyManifest, CREDITS_COPY, DISCOGRAPHY_COPY, FEATURES_COPY, FOOTER_COPY, HERO_COPY, INTERVIEWS_COPY, NAVIGATION_COPY, TOUR_COPY } from "./ericBellingerSiteCopy";
import { REQUESTED_INTERVIEWS, REQUESTED_INTERVIEWS_META } from "./interviewsRequested";

export { copyManifest, NAVIGATION_COPY, HERO_COPY, TOUR_COPY, DISCOGRAPHY_COPY, FEATURES_COPY, CREDITS_COPY, INTERVIEWS_COPY, FOOTER_COPY, CREDITS_SECTION_COPY, CREDITS_SUMMARY, SPOTIFY_TOP_VISIBLE_SONGS, NOTABLE_SONGS, VERIFIED_PUBLIC_CREDITS, REQUESTED_INTERVIEWS_META };

export const LATEST_PROJECT = copyManifest.hero?.latestProject;

export const HERO_STATE = {
  marketingFocus: [HERO_COPY?.eyebrow || "", copyManifest.hero?.latestProject?.title || ""],
  latestSingle: {
    title: copyManifest.hero?.latestProject?.title || "",
    type: copyManifest.hero?.latestProject?.type || "",
    releaseDate: copyManifest.hero?.latestProject?.releaseDate || "",
    deepLink: copyManifest.hero?.latestProject?.listenUrl || "",
    primaryAction: HERO_COPY?.primaryAction || "",
  },
  tourSpotlight: HERO_COPY?.tourSpotlight || [],
};

export const TOUR_DATES = TOUR_COPY.allTourDates;
export const ACTIVE_TOUR_DATES = TOUR_COPY.activeTourDates;
export const ARCHIVED_TOUR_DATES = TOUR_COPY.archivedTourDates;

export { CREDITS } from "./credits";
export { ALBUM_STREAMING_ROUTES, ALBUM_STREAMING_ROUTES_BY_TITLE } from "./albumStreamingRoutes";
export { FEATURED_APPEARANCES } from "./featuredAppearances";
export { FEATURED_SONGS } from "./featuredSongs";
export { MUSIC_VIDEOS, FEATURED_MUSIC_VIDEO_CARDS } from "./musicVideos";
export { DISCOGRAPHY, DISCOGRAPHY_VIDEO_EMBEDS, RAW_DISCOGRAPHY_RELEASES } from "./discography";
export { REQUESTED_ALBUM_TRACKLISTS } from "./albumTracklistsRequested";

export const INTERVIEWS = REQUESTED_INTERVIEWS;
