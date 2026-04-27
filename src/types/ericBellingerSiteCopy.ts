export type ManifestLink = {
  label: string;
  href: string;
};

export type SourceRegistryEntry = {
  label: string;
  url?: string;
  type?: string;
  notes?: string;
  factsUsed?: string[];
};

export type TourDateCopy = {
  id: string;
  date: string;
  displayDate: string;
  time: string;
  city: string;
  venue: string;
  address: string | null;
  status: string;
  ticketsUrl: string;
  sourceKey: string;
  sourceConfidence: string;
  isActive: boolean;
  archive: boolean;
};

export type HeroLatestProjectCopy = {
  title: string;
  type: string;
  releaseDate: string;
  genre: string;
  length: string;
  labelCopy: string;
  description: string;
  coverUrl: string | null;
  coverStatus: string;
  listenUrl: string | null;
  videoUrl: string | null;
  links: {
    appleMusic: string | null;
    shazam: string | null;
    youtube: string | null;
    spotify: string | null;
    youtubeMusic: string | null;
  };
  credits: {
    performingArtists: string[];
    writers: string[];
    producers: string[];
    executiveProducers: string[];
    mixingEngineers: string[];
    masteringEngineer: string | null;
    assistantProducer: string | null;
  };
  sourceKeys: string[];
  sourceConfidence: string;
};

export type DiscographyReleaseCopy = {
  id: string;
  title: string;
  artists: string[];
  project_type: string;
  release_date: string | null;
  year: number;
  catalog_ids?: string[];
  urls?: Record<string, string | null | undefined>;
  tracklist_status?: string;
  track_count_expected?: number | null;
  tracks?: Array<Record<string, unknown>>;
  credits_scope?: string;
  implementation?: string;
  source_notes?: string[];
  siteCopy?: {
    cardKicker?: string;
    detailHeadline?: string;
    projectContext?: string;
    featuredArtistLine?: string;
    tracklistLabel?: string;
    dataQualityNote?: string;
  };
};

export type FeatureSongCopy = {
  id: string;
  title: string;
  artist: string;
  coverUrl: string | null;
  note: string;
  source: string;
};

export type CreditCopy = {
  year: number;
  title: string;
  primary_artist: string;
  featured_artists: string[];
  role: string;
  parent_project: string | null;
  known_co_writers: string[];
  certifications: Array<string | Record<string, unknown>>;
  awards_or_notable_notes: string[];
  source_keys: string[];
  confidence: string;
  notes: string;
  readable_format: string;
  platform_search_links_unverified?: Record<string, string>;
};

export type InterviewCopy = {
  id: string;
  title: string;
  platform: string;
  year: number;
  thumbnail: string;
  videoId: string;
  url: string;
  isPlayable: boolean;
  embedId: string | null;
  target: string | null;
};

export type CopyManifest = {
  navigation: {
    brand: string;
    links: ManifestLink[];
    cta: {
      text: string;
      href: string;
      replacementStatus: string;
    };
  };
  hero: {
    id: string;
    component: string;
    eyebrow: string;
    headline: string;
    summary: string;
    primaryAction: string;
    secondaryAction: string;
    archiveAction: string;
    latestProject: HeroLatestProjectCopy;
    tourSpotlight: TourDateCopy[];
    achievementStrip: Array<{ label: string; value: string; source?: string; sourceKey?: string }>;
  };
  tour: {
    id: string;
    component: string;
    heading: string;
    subheading: string;
    intro: string;
    archiveToggle: string;
    allDatesLink: string;
    emptyStateTitle: string;
    emptyStateCopy: string;
    archiveHeading: string;
    activeTourDates: TourDateCopy[];
    archivedTourDates: TourDateCopy[];
    allTourDates: TourDateCopy[];
    dataQualityNote: string;
  };
  discography: {
    id: string;
    component: string;
    heading: string;
    subheading: string;
    countPill: string;
    detailsSheetTitle: string;
    contextLabel: string;
    streamingLabel: string;
    featuredArtistsLabel: string;
    tracklistLabel: string;
    videoLabel: string;
    introCopy: string;
    releaseDataSource: string;
    releases: DiscographyReleaseCopy[];
    dataQualityNote: string;
  };
  features: {
    id: string;
    component: string;
    heading: string;
    subheading: string;
    countPill: string;
    cardFallback: string;
    sheetFallback: string;
    contextLabel: string;
    introCopy: string;
    featuredSongs: FeatureSongCopy[];
    dataQualityNote: string;
  };
  credits: {
    id: string;
    component: string;
    heading: string;
    subheading: string;
    copy: string;
    countPill: string;
    credits: CreditCopy[];
    achievementHighlights: Array<Record<string, unknown>>;
    dataQualityNote: string;
  };
  interviews: {
    id: string;
    component: string;
    heading: string;
    subheading: string;
    playingLabel: string;
    externalCta: string;
    playableCta: string;
    interviews: InterviewCopy[];
    dataQualityNote: string;
  };
  footer: {
    id: string;
    component: string;
    heading: string;
    subheading: string;
    emailPlaceholder: string;
    submitButton: string;
    bookingHeading: string;
    bookingEmail: string;
    copyright: string;
    socialLinks: Array<{ label: string; href: string; icon: string }>;
    dataQualityNote: string;
  };
};
