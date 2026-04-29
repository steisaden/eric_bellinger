import { songwritingCredits347Snapshot } from "./songwritingCredits347.generated";
import type { SongwritingCredit } from "@/types";

export type SpotifyTopVisibleSong = (typeof songwritingCredits347Snapshot.spotifyTopVisibleSongs)[number];
export type NotableSong = (typeof songwritingCredits347Snapshot.notableSongs)[number];
export type VerifiedPublicCredit = SongwritingCredit;
export type CreditsSectionCopy = typeof songwritingCredits347Snapshot.sectionCopy;
export type CreditsSummary = typeof songwritingCredits347Snapshot.summary;

export const CREDITS_SECTION_COPY: CreditsSectionCopy = songwritingCredits347Snapshot.sectionCopy;
export const CREDITS_SUMMARY: CreditsSummary = songwritingCredits347Snapshot.summary;
export const SPOTIFY_TOP_VISIBLE_SONGS: SpotifyTopVisibleSong[] = [...songwritingCredits347Snapshot.spotifyTopVisibleSongs];
export const NOTABLE_SONGS: NotableSong[] = [...songwritingCredits347Snapshot.notableSongs];
export const VERIFIED_PUBLIC_CREDITS: VerifiedPublicCredit[] = [...songwritingCredits347Snapshot.verifiedPublicCredits];
export const CREDITS: VerifiedPublicCredit[] = VERIFIED_PUBLIC_CREDITS;

export const formatCreditArtist = (credit: VerifiedPublicCredit) =>
  credit.featuredArtists.length > 0 ? `${credit.primaryArtist} ft. ${credit.featuredArtists.join(", ")}` : credit.primaryArtist;

export const getParentProjectLabel = (credit: VerifiedPublicCredit) => credit.parentProject ?? "Needs verification";

export const getCreditSearchTerms = (credit: VerifiedPublicCredit) =>
  [
    credit.title,
    credit.artist,
    credit.primaryArtist,
    credit.featuredArtists.join(" "),
    credit.role,
    credit.parentProject ?? "",
    credit.notableAchievement,
    credit.notes,
    credit.sourceKeys.join(" "),
  ]
    .join(" ")
    .toLowerCase();
