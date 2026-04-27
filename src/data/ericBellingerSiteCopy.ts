import rawCopyManifest from "./ericBellingerSiteCopy.generated";

import type { CopyManifest, TourDateCopy, FeatureSongCopy, CreditCopy, InterviewCopy } from "../types/ericBellingerSiteCopy";

export const copyManifest = rawCopyManifest as unknown as CopyManifest;

export const NAVIGATION_COPY = copyManifest.navigation;
export const HERO_COPY = copyManifest.hero;
export const TOUR_COPY = copyManifest.tour;
export const DISCOGRAPHY_COPY = copyManifest.discography;
export const FEATURES_COPY = copyManifest.features;
export const CREDITS_COPY = copyManifest.credits;
export const INTERVIEWS_COPY = copyManifest.interviews;
export const FOOTER_COPY = copyManifest.footer;

export type { TourDateCopy, FeatureSongCopy, CreditCopy, InterviewCopy };
