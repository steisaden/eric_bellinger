export interface PlatformLink {
  value: string;
  valid: boolean;
}

export interface PlatformLinks {
  spotify: PlatformLink;
  appleMusic: PlatformLink;
  youtube: PlatformLink;
}

export interface CoverAsset {
  kind: "image" | "gif" | "video";
  src: string;
  poster?: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface TrackMusicVideo {
  has_music_video: boolean;
  youtube_url: string | null;
  youtube_video_id: string | null;
  youtube_status: string;
  video_type: string | null;
  confidence: string;
  notes?: string;
  non_youtube_evidence?: unknown;
}

export interface DiscographyTrack {
  num: number;
  title: string;
  duration: string;
  credits: Credit[];
  musicVideoUrl?: string | null;
  videoEmbed?: string | null;
  hasVideo: boolean;
  disc_number?: number;
  track_number?: number;
  display_title?: string;
  primary_artists?: string[];
  featured_artists?: string[];
  credits_status?: string;
  music_video?: TrackMusicVideo | null;
  track_source?: string;
  track_confidence?: string;
}

export interface StreamingStats {
  source: string;
  status: string;
  date: string;
}

export interface DiscographyItem {
  id: string;
  title: string;
  year: number;
  type: string;
  releaseDate: string | null;
  sourcePage: string;
  sourceRefs: string[];
  sourceConfidence: string;
  coverUrl: string;
  coverAsset: CoverAsset;
  platformLinks: PlatformLinks;
  streamingStats: StreamingStats | null;
  credits: Credit[];
  tracklist: DiscographyTrack[];
  videoEmbed: string | null;
}

export interface FeaturedSong {
  id: string;
  title: string;
  artist: string;
  year: number;
  role: string;
  coverUrl: string;
  links: PlatformLinks;
  isVerified: boolean;
  description?: string;
  source: string;
}

export interface SongwritingCredit {
  id: string;
  title: string;
  artist: string;
  year: number | null;
  role: string;
  parentProject?: string;
  isNotable: boolean;
  notabilityReason?: string;
  notes?: string | null;
  rank?: number;
  spotifyStreamsSnapshot?: number;
  primaryArtist?: string;
  featuredArtists?: readonly string[];
  notableAchievement?: string;
  sourceKeys?: readonly string[];
}

export interface Interview {
  id: string;
  title: string;
  sourceHost: string;
  showOrPublisher: string;
  publishedDate: string | null;
  year: number | null;
  typeLabel: string;
  sourceUrl: string;
  videoId?: string | null;
  embedId?: string | null;
  thumbnailUrl: string | null;
  isPlayable: boolean;
  topics: readonly string[];
  alternateUrls: readonly string[];
}

export interface TourDate {
  id: string;
  date: string;
  city: string;
  venue: string;
  status: string;
  ticketsUrl?: string;
  isActive: boolean;
}
