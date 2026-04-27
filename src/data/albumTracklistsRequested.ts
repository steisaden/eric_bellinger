export type TrackCredit = {
  role: string;
  name: string;
  source?: string;
};

export type TrackMusicVideo = {
  has_music_video: boolean;
  youtube_url: string | null;
  youtube_video_id: string | null;
  youtube_status: string;
  video_type: string | null;
  confidence: string;
  notes?: string;
  non_youtube_evidence?: unknown;
};

export type RequestedAlbumTrack = {
  disc_number: number;
  track_number: number;
  title: string;
  display_title?: string;
  duration: string;
  primary_artists: string[];
  featured_artists: string[];
  credits: TrackCredit[];
  credits_status: string;
  music_video: TrackMusicVideo;
  track_source?: string;
  track_confidence?: string;
};

export type RequestedAlbumTracklist = {
  id: string;
  title: string;
  artists: string[];
  project_type: string;
  release_date: string;
  year: number;
  track_count: number;
  official_track_count: number;
  label?: string;
  copyright?: string;
  urls?: {
    primary_router?: string;
    official_smart_link?: string;
    universal_smart_link_generated_from_apple_id?: string;
    direct?: Record<string, string | null>;
    fallback_search?: Record<string, string | null>;
  };
  source_urls: string[];
  verification_status: string;
  credits_scope_note?: string;
  tracks: RequestedAlbumTrack[];
  album_notes?: string[];
};

type RequestedAlbumTracklistsData = {
  meta: Record<string, unknown>;
  source_registry: Record<string, unknown>;
  albums: RequestedAlbumTracklist[];
};

export const REQUESTED_ALBUM_TRACKLISTS: RequestedAlbumTracklistsData = {
  "meta": {
    "project": "Eric Bellinger website",
    "file_purpose": "Requested album tracklists with public-visible song credits/features and YouTube URLs for tracks with verified music videos.",
    "generated_at": "2026-04-27T08:55:25Z",
    "requested_albums": [
      "It'll All Make Sense Later",
      "The Rebirth 3: The Party & The Bedroom",
      "The Rebirth 3: Remixes & More",
      "1(800)HIT-EAZY: Line 2",
      "1-800-HIT-EAZY",
      "Eazy Call",
      "In the Meantime, Pt. 2"
    ],
    "data_quality_note": "Best-effort public-source dataset. Full liner-note credits are not available for every song from public sources; unknown writer/producer/personnel fields are intentionally omitted instead of guessed.",
    "intended_target_path": "/eric-bellinger/src/data/albumTracklistsRequested.ts or /eric-bellinger/src/data/albumTracklistsRequested.json"
  },
  "source_registry": {
    "apple_music": [
      "https://music.apple.com/us/album/itll-all-make-sense-later/1777146974",
      "https://music.apple.com/us/album/the-rebirth-3-the-party-the-bedroom/1730460638",
      "https://music.apple.com/us/album/the-rebirth-3-remixes-more/1760819971",
      "https://music.apple.com/us/album/1-800-hit-eazy-line-2/1667711335",
      "https://music.apple.com/us/album/1-800-hit-eazy/1550219088",
      "https://music.apple.com/us/album/eazy-call/1353237181"
    ],
    "tracklist_cross_checks": [
      "https://music.amazon.com/tracks/B08WTP47GM",
      "https://www.beatsource.com/release/the-rebirth-3-remixes-more/2153041",
      "https://hiphop-n-more.com/2018/03/eric-bellinger-reveals-eazy-call-album-tracklist/",
      "https://jazz-jazz.com/2021/02/12/eric-bellinger-1-800-hit-eazy-2021.html"
    ],
    "credit_cross_checks": [
      "https://www.shazam.com/song/1777146976/pure",
      "https://www.shazam.com/track/718031488/feelings-never-die",
      "https://www.youtube.com/watch?v=b5uhHO5aOUs",
      "https://www.youtube.com/watch?v=ZbJT1CzqY1U"
    ],
    "video_cross_checks": [
      "https://tidal.com/browse/video/173338498"
    ]
  },
  "albums": [
    {
      "id": "itll-all-make-sense-later",
      "title": "It'll All Make Sense Later",
      "artists": [
        "Eric Bellinger"
      ],
      "project_type": "Studio album",
      "release_date": "2024-11-22",
      "year": 2024,
      "track_count": 15,
      "official_track_count": 15,
      "label": "All Wins Ent./ FTS Global Management",
      "copyright": "℗ 2024 All Wins Ent./ FTS Global Management",
      "urls": {
        "primary_router": "https://ericbellinger.lnk.to/IAMSL",
        "official_smart_link": "https://ericbellinger.lnk.to/IAMSL",
        "universal_smart_link_generated_from_apple_id": "https://album.link/i/1777146974",
        "direct": {
          "apple_music": "https://music.apple.com/us/album/itll-all-make-sense-later/1777146974",
          "spotify": "https://open.spotify.com/album/7tvdxqWOmWKZfNtoq1Twje",
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": null,
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/It%27ll%20All%20Make%20Sense%20Later%20Eric%20Bellinger/albums",
          "apple_music": "https://music.apple.com/us/search?term=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
          "youtube_music": "https://music.youtube.com/search?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
          "tidal": "https://listen.tidal.com/search?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
          "amazon_music": "https://music.amazon.com/search/It%27ll+All+Make+Sense+Later+Eric+Bellinger",
          "deezer": "https://www.deezer.com/search/It%27ll%20All%20Make%20Sense%20Later%20Eric%20Bellinger/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
          "audiomack": "https://audiomack.com/search?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
          "pandora": "https://www.pandora.com/search/It%27ll%20All%20Make%20Sense%20Later%20Eric%20Bellinger/all"
        }
      },
      "source_urls": [
        "https://music.apple.com/us/album/itll-all-make-sense-later/1777146974"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "Pure",
          "display_title": "Pure",
          "duration": "02:40",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "performer",
              "name": "Eric Bellinger",
              "source": "Shazam"
            },
            {
              "role": "composer",
              "name": "Eric Bellinger",
              "source": "Shazam"
            },
            {
              "role": "composer",
              "name": "Andre Graham",
              "source": "Shazam"
            },
            {
              "role": "composer",
              "name": "John Andrews Peters",
              "source": "Shazam"
            },
            {
              "role": "composer",
              "name": "Kesler Kuffman",
              "source": "Shazam"
            },
            {
              "role": "composer",
              "name": "Vscript",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "John Andrews Peters",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Kesler Kuffman",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Darren Peterson",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Luke Goliath",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Benjamin Bryant",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Robin A. Williamson",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Tahj \"Slim\" Davis",
              "source": "Shazam"
            }
          ],
          "credits_status": "full_public_visible_for_this_pass",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "Special",
          "display_title": "Special (feat. Konshens)",
          "duration": "03:18",
          "primary_artists": [
            "Eric Bellinger",
            "Konshens"
          ],
          "featured_artists": [
            "Konshens"
          ],
          "credits": [
            {
              "role": "featured artist",
              "name": "Konshens"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=GaMJ_Yq4fCU",
            "youtube_video_id": "GaMJ_Yq4fCU",
            "youtube_status": "verified_best_effort",
            "video_type": "music_video",
            "confidence": "high",
            "notes": "Matched from the existing site/copy structure's musicVideoUrl field."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Feelings Never Die",
          "display_title": "Feelings Never Die",
          "duration": "03:42",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "vocals",
              "name": "Eric Bellinger",
              "source": "Shazam"
            },
            {
              "role": "songwriter",
              "name": "Eric Bellinger",
              "source": "Shazam"
            },
            {
              "role": "songwriter",
              "name": "John Andrews Peters",
              "source": "Shazam"
            },
            {
              "role": "songwriter",
              "name": "Kesler Kuffman",
              "source": "Shazam"
            },
            {
              "role": "songwriter",
              "name": "Luciano Layne",
              "source": "Shazam"
            },
            {
              "role": "songwriter",
              "name": "Telli",
              "source": "Shazam"
            },
            {
              "role": "songwriter",
              "name": "Vscript",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "John Andrews Peters",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Kesler Kuffman",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Luciano Layne",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Keyz Bridgez",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Luke Goliath",
              "source": "Shazam"
            },
            {
              "role": "producer",
              "name": "Matthew Ceena",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Benjamin Bryant",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Dominique \"@Cookisdope\" Cook",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Robin A. Williamson",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Shawn \"Source\" Jarrett",
              "source": "Shazam"
            },
            {
              "role": "engineer",
              "name": "Tahj \"Slim\" Davis",
              "source": "Shazam"
            }
          ],
          "credits_status": "full_public_visible_for_this_pass",
          "music_video": {
            "has_music_video": true,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "NEEDS_RESEARCH",
            "video_type": "music_video",
            "confidence": "medium",
            "notes": "A music video is listed by public DSP/video sources, but an official YouTube URL was not verified in this pass.",
            "non_youtube_evidence": [
              {
                "source": "Apple Music",
                "url": "https://music.apple.com/us/album/itll-all-make-sense-later/1777146974",
                "note": "Apple Music lists Feelings Never Die under Music Videos for the album."
              },
              {
                "source": "TIDAL",
                "url": "https://tidal.com/browse/video/173338498",
                "note": "TIDAL Other Videos list includes Feelings Never Die."
              }
            ]
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 4,
          "title": "Shooting Star",
          "display_title": "Shooting Star (feat. Oxlade)",
          "duration": "03:14",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Oxlade"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Oxlade"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 5,
          "title": "Precision",
          "display_title": "Precision (feat. Reekado Banks)",
          "duration": "02:45",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Reekado Banks"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Reekado Banks"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 6,
          "title": "Backtrack",
          "display_title": "Backtrack (feat. Taves)",
          "duration": "02:40",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Taves"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Taves"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=XhQo8SVCVkQ",
            "youtube_video_id": "XhQo8SVCVkQ",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 7,
          "title": "Don't Shut Off The Lights",
          "display_title": "Don't Shut Off The Lights (feat. Tempoe)",
          "duration": "03:34",
          "primary_artists": [
            "Eric Bellinger",
            "Tempoe"
          ],
          "featured_artists": [
            "Tempoe"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "primary artist",
              "name": "Tempoe"
            },
            {
              "role": "featured artist",
              "name": "Tempoe"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 8,
          "title": "For The Evening",
          "display_title": "For The Evening",
          "duration": "01:46",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 9,
          "title": "Ms. Africa",
          "display_title": "Ms. Africa (feat. Gyakie)",
          "duration": "03:06",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Gyakie"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Gyakie"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 10,
          "title": "Desire",
          "display_title": "Desire",
          "duration": "02:35",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 11,
          "title": "Follow Her Lead",
          "display_title": "Follow Her Lead",
          "duration": "01:56",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 12,
          "title": "No Coincidence",
          "display_title": "No Coincidence (feat. Geko)",
          "duration": "03:37",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Geko"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Geko"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 13,
          "title": "Top Dolla",
          "display_title": "Top Dolla (feat. Vscript)",
          "duration": "03:32",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Vscript"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Vscript"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 14,
          "title": "Don't Leave",
          "display_title": "Don't Leave",
          "duration": "03:22",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 15,
          "title": "Unfinished Business",
          "display_title": "Unfinished Business",
          "duration": "02:27",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Shazam + Hiphopde + Apple Music",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    },
    {
      "id": "the-rebirth-3-the-party-and-the-bedroom",
      "title": "The Rebirth 3: The Party & The Bedroom",
      "artists": [
        "Eric Bellinger"
      ],
      "project_type": "Studio album",
      "release_date": "2024-03-01",
      "year": 2024,
      "track_count": 24,
      "official_track_count": 24,
      "label": "All Wins Ent. / Compound Interest",
      "copyright": "℗ 2024 All Wins Ent. / Compound Interest",
      "urls": {
        "primary_router": "https://album.link/i/1730460638",
        "official_smart_link": null,
        "universal_smart_link_generated_from_apple_id": "https://album.link/i/1730460638",
        "direct": {
          "apple_music": "https://music.apple.com/us/album/the-rebirth-3-the-party-and-the-bedroom/1730460638",
          "spotify": "https://open.spotify.com/album/01bHZLLEGrQkliJecHJTmS",
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": null,
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20Eric%20Bellinger/albums",
          "apple_music": "https://music.apple.com/us/search?term=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
          "youtube_music": "https://music.youtube.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
          "tidal": "https://listen.tidal.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
          "amazon_music": "https://music.amazon.com/search/The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
          "deezer": "https://www.deezer.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20Eric%20Bellinger/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
          "audiomack": "https://audiomack.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
          "pandora": "https://www.pandora.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20Eric%20Bellinger/all"
        }
      },
      "source_urls": [
        "https://music.apple.com/us/album/the-rebirth-3-the-party-the-bedroom/1730460638"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "TR3 Intro",
          "display_title": "TR3 Intro",
          "duration": "02:29",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "All For Me",
          "display_title": "All For Me",
          "duration": "03:00",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=ixfDV7TmL-A",
            "youtube_video_id": "ixfDV7TmL-A",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Gang Slide",
          "display_title": "Gang Slide (feat. Mozzy)",
          "duration": "02:32",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Mozzy"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Mozzy"
            },
            {
              "role": "performer",
              "name": "Eric Bellinger",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "performer",
              "name": "Mozzy",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr.",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "writer",
              "name": "Timothy Cornell Patterson",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "writer",
              "name": "Dave O",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "writer",
              "name": "Tariq Beats",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "writer",
              "name": "Dylan Graham",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "writer",
              "name": "Sonny Bishop",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "producer",
              "name": "Dave O",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "producer",
              "name": "Tariq",
              "source": "YouTube auto-generated metadata"
            },
            {
              "role": "producer",
              "name": "Dylan Graham",
              "source": "YouTube auto-generated metadata"
            }
          ],
          "credits_status": "full_public_visible_for_this_pass",
          "music_video": {
            "has_music_video": true,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "NEEDS_RESEARCH",
            "video_type": "music_video",
            "confidence": "medium",
            "notes": "A music video is listed by public DSP/video sources, but an official YouTube URL was not verified in this pass.",
            "non_youtube_evidence": [
              {
                "source": "Apple Music",
                "url": "https://music.apple.com/us/album/the-rebirth-3-the-party-the-bedroom/1730460638",
                "note": "Apple Music lists Gang Slide under Music Videos for the album."
              },
              {
                "source": "TIDAL",
                "url": "https://tidal.com/browse/video/173338498",
                "note": "TIDAL Other Videos list includes Gang Slide by Eric Bellinger and Mozzy."
              }
            ]
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 4,
          "title": "Drop",
          "display_title": "Drop (feat. Sevyn Streeter)",
          "duration": "02:48",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Sevyn Streeter"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Sevyn Streeter"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=aqSwQHs94-c",
            "youtube_video_id": "aqSwQHs94-c",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 5,
          "title": "Alla Dat",
          "display_title": "Alla Dat",
          "duration": "02:39",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 6,
          "title": "Don't Play Wit It",
          "display_title": "Don't Play Wit It",
          "duration": "03:12",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 7,
          "title": "La Perla",
          "display_title": "La Perla",
          "duration": "02:42",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=hXjPf0Q9hNQ",
            "youtube_video_id": "hXjPf0Q9hNQ",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 8,
          "title": "Body On Mine",
          "display_title": "Body On Mine",
          "duration": "03:00",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 9,
          "title": "Inside My Bed",
          "display_title": "Inside My Bed",
          "duration": "02:56",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 10,
          "title": "Run That Back",
          "display_title": "Run That Back (feat. K Camp)",
          "duration": "03:38",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "K Camp"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "K Camp"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 11,
          "title": "Perfect Picture",
          "display_title": "Perfect Picture",
          "duration": "03:01",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 12,
          "title": "Writer's Block",
          "display_title": "Writer's Block",
          "duration": "03:09",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 13,
          "title": "Find Someone",
          "display_title": "Find Someone",
          "duration": "02:50",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=wLYgozMywyY",
            "youtube_video_id": "wLYgozMywyY",
            "youtube_status": "verified_best_effort",
            "video_type": "music_video",
            "confidence": "high",
            "notes": "Matched from the existing site/copy structure's musicVideoUrl field."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 14,
          "title": "Mutual Agreement",
          "display_title": "Mutual Agreement (feat. Queen Naija)",
          "duration": "03:12",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Queen Naija"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Queen Naija"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 15,
          "title": "Sage",
          "display_title": "Sage (feat. Ne-Yo)",
          "duration": "03:35",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Ne-Yo"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Ne-Yo"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 16,
          "title": "Pheenin",
          "display_title": "Pheenin (feat. BJRNCK)",
          "duration": "02:57",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "BJRNCK"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "BJRNCK"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 17,
          "title": "Nasty",
          "display_title": "Nasty (feat. Evoni)",
          "duration": "03:36",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Evoni"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Evoni"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 18,
          "title": "Your Mind (Interlude)",
          "display_title": "Your Mind (Interlude)",
          "duration": "01:44",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 19,
          "title": "Top Tier",
          "display_title": "Top Tier (feat. Tone Stith)",
          "duration": "05:07",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Tone Stith"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Tone Stith"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 20,
          "title": "D.Y.T",
          "display_title": "D.Y.T",
          "duration": "03:21",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 21,
          "title": "Reciprocate",
          "display_title": "Reciprocate",
          "duration": "02:54",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 22,
          "title": "Backstage",
          "display_title": "Backstage (feat. Zae France)",
          "duration": "02:56",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Zae France"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Zae France"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 23,
          "title": "Finders Keepers",
          "display_title": "Finders Keepers",
          "duration": "03:16",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 2,
          "track_number": 24,
          "title": "Anyway",
          "display_title": "Anyway",
          "duration": "02:44",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Shazam + intmusic.net",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    },
    {
      "id": "the-rebirth-3-remixes-and-more",
      "title": "The Rebirth 3: Remixes & More",
      "artists": [
        "Eric Bellinger"
      ],
      "project_type": "Remix album",
      "release_date": "2024-08-30",
      "year": 2024,
      "track_count": 9,
      "official_track_count": 9,
      "label": "All Wins Ent. / Compound Interest",
      "copyright": "℗ 2024 All Wins Ent. / Compound Interest",
      "urls": {
        "primary_router": "https://album.link/i/1760819971",
        "official_smart_link": null,
        "universal_smart_link_generated_from_apple_id": "https://album.link/i/1760819971",
        "direct": {
          "apple_music": "https://music.apple.com/us/album/the-rebirth-3-remixes-and-more/1760819971",
          "spotify": "https://open.spotify.com/album/08v5H0ZZKd7AhNpZNIBcRy",
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": null,
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/The%20Rebirth%203%3A%20Remixes%20%26%20More%20Eric%20Bellinger/albums",
          "apple_music": "https://music.apple.com/us/search?term=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
          "youtube_music": "https://music.youtube.com/search?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
          "tidal": "https://listen.tidal.com/search?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
          "amazon_music": "https://music.amazon.com/search/The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
          "deezer": "https://www.deezer.com/search/The%20Rebirth%203%3A%20Remixes%20%26%20More%20Eric%20Bellinger/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
          "audiomack": "https://audiomack.com/search?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
          "pandora": "https://www.pandora.com/search/The%20Rebirth%203%3A%20Remixes%20%26%20More%20Eric%20Bellinger/all"
        }
      },
      "source_urls": [
        "https://music.apple.com/us/album/the-rebirth-3-remixes-more/1760819971",
        "https://www.beatsource.com/release/the-rebirth-3-remixes-more/2153041"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "Round 3 [Intro]",
          "display_title": "Round 3 [Intro]",
          "duration": "03:08",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "Chase",
          "display_title": "Chase",
          "duration": "02:27",
          "primary_artists": [
            "Eric Bellinger",
            "Jastin Martin"
          ],
          "featured_artists": [
            "Jastin Martin"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Jastin Martin"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger, Jr"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=VLWkPIEkbuQ",
            "youtube_video_id": "VLWkPIEkbuQ",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Don't Say A Word",
          "display_title": "Don't Say A Word",
          "duration": "02:56",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 4,
          "title": "Drop (Remix)",
          "display_title": "Drop (Remix)",
          "duration": "02:47",
          "primary_artists": [
            "Eric Bellinger",
            "Sevyn Streeter"
          ],
          "featured_artists": [
            "Sevyn Streeter"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Sevyn Streeter"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            },
            {
              "role": "writer",
              "name": "Amber Streeter"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 5,
          "title": "La Perla (Remix)",
          "display_title": "La Perla (Remix)",
          "duration": "02:42",
          "primary_artists": [
            "Eric Bellinger",
            "VEDO"
          ],
          "featured_artists": [
            "VEDO"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Wilbert “Vedo” McCocy III"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Brandon Hamlin"
            },
            {
              "role": "writer",
              "name": "Kenneth Dickerson Taylor, Jr."
            },
            {
              "role": "writer",
              "name": "Fallon King"
            },
            {
              "role": "writer",
              "name": "Daniel Church"
            },
            {
              "role": "writer",
              "name": "Sela Vave"
            },
            {
              "role": "writer",
              "name": "Corey Cooper"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 6,
          "title": "Muse (Writer's Block Remix)",
          "display_title": "Muse (Writer's Block Remix) (feat. Ty Dolla $ign)",
          "duration": "03:08",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Ty Dolla $ign"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 7,
          "title": "Your Mind (Remix)",
          "display_title": "Your Mind (Remix)",
          "duration": "03:14",
          "primary_artists": [
            "Eric Bellinger",
            "Ye Ali"
          ],
          "featured_artists": [
            "Ye Ali"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Ye Ali"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            },
            {
              "role": "writer",
              "name": "Yusuf Ali II"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 8,
          "title": "Backstage (Remix)",
          "display_title": "Backstage (Remix)",
          "duration": "02:59",
          "primary_artists": [
            "Eric Bellinger",
            "J. Valentine"
          ],
          "featured_artists": [
            "J. Valentine"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "J. Valentine"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            },
            {
              "role": "writer",
              "name": "Johnnie Valentine Newt"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 9,
          "title": "Run That Back (Remix)",
          "display_title": "Run That Back (Remix)",
          "duration": "03:38",
          "primary_artists": [
            "Eric Bellinger",
            "Steven G"
          ],
          "featured_artists": [
            "Steven G"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Steven G"
            },
            {
              "role": "writer",
              "name": "Eric Aldwin Bellinger Jr."
            },
            {
              "role": "writer",
              "name": "Kristopher Thomas Campbell"
            },
            {
              "role": "writer",
              "name": "Joshua Joseph"
            },
            {
              "role": "writer",
              "name": "Haben"
            },
            {
              "role": "writer",
              "name": "J.B.O."
            },
            {
              "role": "writer",
              "name": "Ashton Combs"
            },
            {
              "role": "writer",
              "name": "Xeryus"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + Audiomack + Beatsource",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    },
    {
      "id": "1-800-hit-eazy-line-2",
      "title": "1(800)HIT-EAZY: Line 2",
      "artists": [
        "Eric Bellinger",
        "Hitmaka"
      ],
      "project_type": "Collaborative album",
      "release_date": "2023-02-10",
      "year": 2023,
      "track_count": 14,
      "official_track_count": 14,
      "label": "All Wins Ent. / EMPIRE",
      "copyright": "℗ 2023 All Wins Ent. / EMPIRE",
      "urls": {
        "primary_router": "https://music.empi.re/hiteazy2",
        "official_smart_link": "https://music.empi.re/hiteazy2",
        "universal_smart_link_generated_from_apple_id": "https://album.link/i/1667711335",
        "direct": {
          "apple_music": "https://music.apple.com/us/album/1-800-hit-eazy-line-2/1667711335",
          "spotify": "https://open.spotify.com/album/6KIxdiACBAewmOLM1YBPYJ",
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": null,
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20Eric%20Bellinger%20Hitmaka/albums",
          "apple_music": "https://music.apple.com/us/search?term=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
          "youtube_music": "https://music.youtube.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
          "tidal": "https://listen.tidal.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
          "amazon_music": "https://music.amazon.com/search/1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
          "deezer": "https://www.deezer.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20Eric%20Bellinger%20Hitmaka/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
          "audiomack": "https://audiomack.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
          "pandora": "https://www.pandora.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20Eric%20Bellinger%20Hitmaka/all"
        }
      },
      "source_urls": [
        "https://music.apple.com/us/album/1-800-hit-eazy-line-2/1667711335"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "Replay This",
          "display_title": "Replay This",
          "duration": "01:56",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "Night Time Fantasies",
          "display_title": "Night Time Fantasies",
          "duration": "02:07",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Curious",
          "display_title": "Curious (feat. Cordae & Fabolous)",
          "duration": "03:45",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Cordae",
            "Fabolous"
          ],
          "credits": [
            {
              "role": "featured artist",
              "name": "Fabolous"
            },
            {
              "role": "featured artist",
              "name": "Cordae"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=3zCb_VCpz74",
            "youtube_video_id": "3zCb_VCpz74",
            "youtube_status": "verified_best_effort",
            "video_type": "music_video",
            "confidence": "high",
            "notes": "Matched from the existing site/copy structure's musicVideoUrl field."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 4,
          "title": "BNB",
          "display_title": "BNB",
          "duration": "02:54",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=fKoPzdnHYfU",
            "youtube_video_id": "fKoPzdnHYfU",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 5,
          "title": "Way You Move",
          "display_title": "Way You Move",
          "duration": "02:18",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 6,
          "title": "2 Bad",
          "display_title": "2 Bad (feat. Kalan.FrFr)",
          "duration": "02:23",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Kalan.FrFr"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Kalan.FrFr"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 7,
          "title": "Obsession",
          "display_title": "Obsession",
          "duration": "03:21",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=Gn5CgzSevdU",
            "youtube_video_id": "Gn5CgzSevdU",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 8,
          "title": "Sum 2 See",
          "display_title": "Sum 2 See (feat. Blxst)",
          "duration": "02:48",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Blxst"
          ],
          "credits": [
            {
              "role": "featured artist",
              "name": "Blxst"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=jrFV07PFoQE",
            "youtube_video_id": "jrFV07PFoQE",
            "youtube_status": "verified_best_effort",
            "video_type": "music_video",
            "confidence": "high",
            "notes": "Matched from the existing site/copy structure's musicVideoUrl field."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 9,
          "title": "IYKYK",
          "display_title": "IYKYK",
          "duration": "02:44",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 10,
          "title": "I'm Tryin",
          "display_title": "I'm Tryin (feat. Tink)",
          "duration": "03:49",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Tink"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Tink"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 11,
          "title": "Decide",
          "display_title": "Decide",
          "duration": "02:38",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 12,
          "title": "Patterns",
          "display_title": "Patterns",
          "duration": "02:58",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 13,
          "title": "Keep Me In Mind",
          "display_title": "Keep Me In Mind",
          "duration": "03:21",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 14,
          "title": "Obsession (Remix)",
          "display_title": "Obsession (Remix) (feat. Muni Long)",
          "duration": "03:21",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Muni Long"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Muni Long"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Best Buy/Golden Apple/Muziker vinyl metadata",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    },
    {
      "id": "1-800-hit-eazy",
      "title": "1-800-HIT-EAZY",
      "artists": [
        "Eric Bellinger",
        "Hitmaka"
      ],
      "project_type": "Collaborative album",
      "release_date": "2021-02-12",
      "year": 2021,
      "track_count": 14,
      "official_track_count": 14,
      "label": "YFS (Your Favorite Song) / EMPIRE",
      "copyright": "℗ 2021 YFS (Your Favorite Song) / EMPIRE",
      "urls": {
        "primary_router": "https://album.link/i/1550219088",
        "official_smart_link": null,
        "universal_smart_link_generated_from_apple_id": "https://album.link/i/1550219088",
        "direct": {
          "apple_music": "https://music.apple.com/us/album/1-800-hit-eazy/1550219088",
          "spotify": "https://open.spotify.com/album/49sZjOYtCwxpOhbwDXmaUi",
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": null,
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/1-800-HIT-EAZY%20Eric%20Bellinger%20Hitmaka/albums",
          "apple_music": "https://music.apple.com/us/search?term=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
          "youtube_music": "https://music.youtube.com/search?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
          "tidal": "https://listen.tidal.com/search?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
          "amazon_music": "https://music.amazon.com/search/1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
          "deezer": "https://www.deezer.com/search/1-800-HIT-EAZY%20Eric%20Bellinger%20Hitmaka/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
          "audiomack": "https://audiomack.com/search?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
          "pandora": "https://www.pandora.com/search/1-800-HIT-EAZY%20Eric%20Bellinger%20Hitmaka/all"
        }
      },
      "source_urls": [
        "https://music.apple.com/us/album/1-800-hit-eazy/1550219088",
        "https://music.amazon.com/tracks/B08WTP47GM"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "Hit Eazy",
          "display_title": "Hit Eazy",
          "duration": "01:52",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=fA1zvTsQw28",
            "youtube_video_id": "fA1zvTsQw28",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "Only You",
          "display_title": "Only You",
          "duration": "02:30",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=D3tEDg3uqmg",
            "youtube_video_id": "D3tEDg3uqmg",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Truth Hurts",
          "display_title": "Truth Hurts",
          "duration": "03:02",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=2gNxRymJp5g",
            "youtube_video_id": "2gNxRymJp5g",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 4,
          "title": "Serious",
          "display_title": "Serious",
          "duration": "02:27",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=svAk28GsFck",
            "youtube_video_id": "svAk28GsFck",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 5,
          "title": "Hype Beast",
          "display_title": "Hype Beast",
          "duration": "02:41",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=coPAyD_WBqE",
            "youtube_video_id": "coPAyD_WBqE",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 6,
          "title": "Star Projectors",
          "display_title": "Star Projectors",
          "duration": "03:15",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=Wb2ObQcxZAg",
            "youtube_video_id": "Wb2ObQcxZAg",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 7,
          "title": "Not Like That",
          "display_title": "Not Like That",
          "duration": "02:40",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 8,
          "title": "After Midnight",
          "display_title": "After Midnight (feat. Chrishan)",
          "duration": "02:46",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [
            "Chrishan"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            },
            {
              "role": "featured artist",
              "name": "Chrishan"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 9,
          "title": "Breakfast In Bed",
          "display_title": "Breakfast In Bed",
          "duration": "03:01",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 10,
          "title": "Passionate",
          "display_title": "Passionate",
          "duration": "02:36",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 11,
          "title": "Then What",
          "display_title": "Then What",
          "duration": "02:30",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 12,
          "title": "Little Bit",
          "display_title": "Little Bit (feat. Rahky)",
          "duration": "02:48",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [
            "Rahky"
          ],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            },
            {
              "role": "featured artist",
              "name": "Rahky"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 13,
          "title": "I Got It",
          "display_title": "I Got It",
          "duration": "02:14",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 14,
          "title": "Do Me Good",
          "display_title": "Do Me Good",
          "duration": "03:26",
          "primary_artists": [
            "Eric Bellinger",
            "Hitmaka"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "singer",
              "name": "Eric Bellinger"
            },
            {
              "role": "writer",
              "name": "Eric Bellinger"
            },
            {
              "role": "singer",
              "name": "Hitmaka"
            },
            {
              "role": "writer",
              "name": "Hitmaka"
            },
            {
              "role": "producer",
              "name": "Hitmaka"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "Amazon Music + HotNewHipHop + jazz-jazz",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    },
    {
      "id": "eazy-call",
      "title": "Eazy Call",
      "artists": [
        "Eric Bellinger"
      ],
      "project_type": "Studio album",
      "release_date": "2018-04-06",
      "year": 2018,
      "track_count": 15,
      "official_track_count": 15,
      "label": "YFS (Your Favorite Song) / EMPIRE",
      "copyright": "℗ 2018 YFS (Your Favorite Song) / EMPIRE",
      "urls": {
        "primary_router": "https://ericbellinger.lnk.to/eazycall",
        "official_smart_link": "https://ericbellinger.lnk.to/eazycall",
        "universal_smart_link_generated_from_apple_id": null,
        "direct": {
          "apple_music": null,
          "spotify": "https://open.spotify.com/album/39hTPLiFQUdyVCgmz8kYgG",
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": null,
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/Eazy%20Call%20Eric%20Bellinger/albums",
          "apple_music": "https://music.apple.com/us/search?term=Eazy+Call+Eric+Bellinger",
          "youtube_music": "https://music.youtube.com/search?q=Eazy+Call+Eric+Bellinger",
          "tidal": "https://listen.tidal.com/search?q=Eazy+Call+Eric+Bellinger",
          "amazon_music": "https://music.amazon.com/search/Eazy+Call+Eric+Bellinger",
          "deezer": "https://www.deezer.com/search/Eazy%20Call%20Eric%20Bellinger/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=Eazy+Call+Eric+Bellinger",
          "audiomack": "https://audiomack.com/search?q=Eazy+Call+Eric+Bellinger",
          "pandora": "https://www.pandora.com/search/Eazy%20Call%20Eric%20Bellinger/all"
        }
      },
      "source_urls": [
        "https://music.apple.com/us/album/eazy-call/1353237181",
        "https://hiphop-n-more.com/2018/03/eric-bellinger-reveals-eazy-call-album-tracklist/"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "Legs",
          "display_title": "Legs",
          "duration": "03:53",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "Not a Love Song",
          "display_title": "Not a Love Song (feat. Ma$e)",
          "duration": "03:33",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Ma$e"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Ma$e"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Main Thang",
          "display_title": "Main Thang (feat. Dom Kennedy)",
          "duration": "03:28",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Dom Kennedy"
          ],
          "credits": [
            {
              "role": "featured artist",
              "name": "Dom Kennedy"
            }
          ],
          "credits_status": "partial_public_visible",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=ZewQB2xLqXI",
            "youtube_video_id": "ZewQB2xLqXI",
            "youtube_status": "verified_best_effort",
            "video_type": "music_video",
            "confidence": "high",
            "notes": "Matched from the existing site/copy structure's musicVideoUrl field."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 4,
          "title": "She",
          "display_title": "She (feat. AD)",
          "duration": "03:13",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "AD"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "AD"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 5,
          "title": "Role Play",
          "display_title": "Role Play (feat. Scootie)",
          "duration": "03:01",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Scootie"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Scootie"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 6,
          "title": "Silent Treatment",
          "display_title": "Silent Treatment",
          "duration": "03:36",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 7,
          "title": "Goat 2.0",
          "display_title": "Goat 2.0 (feat. Wale)",
          "duration": "03:08",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Wale"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Wale"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=pvDiPzJV9d0",
            "youtube_video_id": "pvDiPzJV9d0",
            "youtube_status": "verified_best_effort",
            "video_type": "official_music_video",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 8,
          "title": "Dirty Dancin'",
          "display_title": "Dirty Dancin' (feat. Ne-Yo)",
          "duration": "03:23",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Ne-Yo"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Ne-Yo"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 9,
          "title": "Y.A.K.",
          "display_title": "Y.A.K. (feat. Sammie & Chevy Woods)",
          "duration": "03:43",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Sammie",
            "Chevy Woods"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Sammie"
            },
            {
              "role": "featured artist",
              "name": "Chevy Woods"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 10,
          "title": "Ain't Ya Ex",
          "display_title": "Ain't Ya Ex (feat. Mila J & Tink)",
          "duration": "05:20",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Mila J",
            "Tink"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Mila J"
            },
            {
              "role": "featured artist",
              "name": "Tink"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 11,
          "title": "Money Float",
          "display_title": "Money Float",
          "duration": "03:19",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 12,
          "title": "By Now",
          "display_title": "By Now",
          "duration": "03:25",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 13,
          "title": "Luck",
          "display_title": "Luck",
          "duration": "03:16",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 14,
          "title": "Bagged",
          "display_title": "Bagged",
          "duration": "03:13",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 15,
          "title": "Eric Bellinger",
          "display_title": "Eric Bellinger",
          "duration": "03:12",
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "XXL + volt.fm + intmusic.net",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    },
    {
      "id": "in-the-meantime-pt-2",
      "title": "In the Meantime, Pt. 2",
      "artists": [
        "Eric Bellinger"
      ],
      "project_type": "EP",
      "release_date": "2015-09-04",
      "year": 2015,
      "track_count": 3,
      "official_track_count": 3,
      "label": null,
      "copyright": null,
      "urls": {
        "primary_router": "https://soundcloud.com/ericbellinger/sets/eric-bellinger-in-the-meantime",
        "official_smart_link": null,
        "universal_smart_link_generated_from_apple_id": null,
        "direct": {
          "apple_music": null,
          "spotify": null,
          "youtube_music": null,
          "tidal": null,
          "amazon_music": null,
          "deezer": null,
          "soundcloud": "https://soundcloud.com/ericbellinger/sets/eric-bellinger-in-the-meantime",
          "audiomack": null,
          "pandora": null
        },
        "fallback_search": {
          "spotify": "https://open.spotify.com/search/In%20the%20Meantime%2C%20Pt.%202%20Eric%20Bellinger/albums",
          "apple_music": "https://music.apple.com/us/search?term=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
          "youtube_music": "https://music.youtube.com/search?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
          "tidal": "https://listen.tidal.com/search?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
          "amazon_music": "https://music.amazon.com/search/In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
          "deezer": "https://www.deezer.com/search/In%20the%20Meantime%2C%20Pt.%202%20Eric%20Bellinger/album",
          "soundcloud": "https://soundcloud.com/search/albums?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
          "audiomack": "https://audiomack.com/search?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
          "pandora": "https://www.pandora.com/search/In%20the%20Meantime%2C%20Pt.%202%20Eric%20Bellinger/all"
        }
      },
      "source_urls": [
        "https://soundcloud.com/ericbellinger/sets/in-the-meantime-pt-2"
      ],
      "verification_status": "verified_best_effort_public_sources",
      "credits_scope_note": "Features/primary artists are populated across all tracks. Writer, producer and engineering credits are included only when publicly visible from the current source pass; otherwise they are not invented.",
      "tracks": [
        {
          "disc_number": 1,
          "track_number": 1,
          "title": "Chinese Food & Netflix",
          "display_title": "Chinese Food & Netflix (feat. ARoc)",
          "duration": null,
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "ARoc"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "ARoc"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "SoundCloud + ThisisRnB",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 2,
          "title": "Privacy",
          "display_title": "Privacy (feat. Problem)",
          "duration": null,
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [
            "Problem"
          ],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            },
            {
              "role": "featured artist",
              "name": "Problem"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": true,
            "youtube_url": "https://www.youtube.com/watch?v=Zhpkx6dwzJU",
            "youtube_video_id": "Zhpkx6dwzJU",
            "youtube_status": "verified_best_effort",
            "video_type": "official_360_vr_experience",
            "confidence": "high",
            "notes": "Matched by track title against the Eric Bellinger video manifest."
          },
          "track_source": "SoundCloud + ThisisRnB",
          "track_confidence": "high"
        },
        {
          "disc_number": 1,
          "track_number": 3,
          "title": "Squad",
          "display_title": "Squad",
          "duration": null,
          "primary_artists": [
            "Eric Bellinger"
          ],
          "featured_artists": [],
          "credits": [
            {
              "role": "primary artist",
              "name": "Eric Bellinger"
            }
          ],
          "credits_status": "artist_and_feature_credits_only",
          "music_video": {
            "has_music_video": false,
            "youtube_url": null,
            "youtube_video_id": null,
            "youtube_status": "no_verified_youtube_video_found",
            "video_type": null,
            "confidence": "medium",
            "notes": "No official YouTube music video URL verified in this pass."
          },
          "track_source": "SoundCloud + ThisisRnB",
          "track_confidence": "high"
        }
      ],
      "album_notes": []
    }
  ]
};
export const REQUESTED_ALBUM_TRACKLISTS_BY_TITLE = Object.fromEntries(
  REQUESTED_ALBUM_TRACKLISTS.albums.map((album) => [album.title, album]),
) as Record<string, RequestedAlbumTracklist>;
