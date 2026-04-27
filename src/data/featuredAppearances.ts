export type FeaturedAppearanceRecord = {
  id: string;
  title: string;
  variantOrMix: string | null;
  artistCredit: string;
  primaryArtist: string;
  ericBellingerRoleInCredit: string;
  featuredOrAdditionalArtists: string[];
  duration: string | null;
  isrcs: string[];
  releaseGroups: string[];
  credits: Record<string, unknown>;
  streamingLinks: Record<string, unknown>;
  source: Record<string, unknown>;
  notes: string | null;
};

export const FEATURED_APPEARANCES: FeaturedAppearanceRecord[] = [
  {
    "id": "fa-001",
    "title": "#YAK (You Already Know)",
    "variantOrMix": null,
    "artistCredit": "Da Brat feat. Sage the Gemini & Eric Bellinger",
    "primaryArtist": "Da Brat",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Sage the Gemini",
      "Eric Bellinger"
    ],
    "duration": "4:25",
    "isrcs": [
      "USUYG1088031"
    ],
    "releaseGroups": [
      "#YAK (You Already Know)"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Da Brat feat. Sage the Gemini & Eric Bellinger",
        "duration": "4:25",
        "isrcs": [
          "USUYG1088031"
        ],
        "release_groups": [
          "#YAK (You Already Know)"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/%23YAK%20%28You%20Already%20Know%29%20Da%20Brat%20feat.%20Sage%20the%20Gemini%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/%23YAK%20%28You%20Already%20Know%29%20Da%20Brat%20feat.%20Sage%20the%20Gemini%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-002",
    "title": "2 Piece",
    "variantOrMix": null,
    "artistCredit": "Mally Mall feat. Migos, Eric Bellinger, Jeremih & Jazz Lazer",
    "primaryArtist": "Mally Mall",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Migos",
      "Eric Bellinger",
      "Jeremih",
      "Jazz Lazer"
    ],
    "duration": "4:21",
    "isrcs": [
      "USUYG1087260"
    ],
    "releaseGroups": [
      "Triple X-Mas"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mally Mall feat. Migos, Eric Bellinger, Jeremih & Jazz Lazer",
        "duration": "4:21",
        "isrcs": [
          "USUYG1087260"
        ],
        "release_groups": [
          "Triple X-Mas"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/2%20Piece%20Mally%20Mall%20feat.%20Migos%2C%20Eric%20Bellinger%2C%20Jeremih%20%26%20Jazz%20Lazer",
        "apple_music_search": "https://music.apple.com/us/search?term=2+Piece+Mally+Mall+feat.+Migos%2C+Eric+Bellinger%2C+Jeremih+%26+Jazz+Lazer",
        "youtube_music_search": "https://music.youtube.com/search?q=2+Piece+Mally+Mall+feat.+Migos%2C+Eric+Bellinger%2C+Jeremih+%26+Jazz+Lazer",
        "youtube_search": "https://www.youtube.com/results?search_query=2+Piece+Mally+Mall+feat.+Migos%2C+Eric+Bellinger%2C+Jeremih+%26+Jazz+Lazer",
        "deezer_search": "https://www.deezer.com/search/2%20Piece%20Mally%20Mall%20feat.%20Migos%2C%20Eric%20Bellinger%2C%20Jeremih%20%26%20Jazz%20Lazer",
        "tidal_search": "https://listen.tidal.com/search?q=2+Piece+Mally+Mall+feat.+Migos%2C+Eric+Bellinger%2C+Jeremih+%26+Jazz+Lazer",
        "amazon_music_search": "https://music.amazon.com/search/2+Piece+Mally+Mall+feat.+Migos%2C+Eric+Bellinger%2C+Jeremih+%26+Jazz+Lazer",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=2+Piece+Mally+Mall+feat.+Migos%2C+Eric+Bellinger%2C+Jeremih+%26+Jazz+Lazer"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-003",
    "title": "4 Digits",
    "variantOrMix": null,
    "artistCredit": "DJ Mustard feat. Fabolous & Eric Bellinger",
    "primaryArtist": "DJ Mustard",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Fabolous",
      "Eric Bellinger"
    ],
    "duration": "3:11",
    "isrcs": [],
    "releaseGroups": [
      "10 Summers"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "DJ Mustard feat. Fabolous & Eric Bellinger",
        "duration": "3:11",
        "isrcs": [],
        "release_groups": [
          "10 Summers"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/4%20Digits%20DJ%20Mustard%20feat.%20Fabolous%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=4+Digits+DJ+Mustard+feat.+Fabolous+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=4+Digits+DJ+Mustard+feat.+Fabolous+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=4+Digits+DJ+Mustard+feat.+Fabolous+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/4%20Digits%20DJ%20Mustard%20feat.%20Fabolous%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=4+Digits+DJ+Mustard+feat.+Fabolous+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/4+Digits+DJ+Mustard+feat.+Fabolous+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=4+Digits+DJ+Mustard+feat.+Fabolous+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-004",
    "title": "4 Digits",
    "variantOrMix": null,
    "artistCredit": "Mustard, Fabolous & Eric Bellinger",
    "primaryArtist": "Mustard",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Fabolous",
      "Eric Bellinger"
    ],
    "duration": "3:11",
    "isrcs": [
      "QMJMT1400119"
    ],
    "releaseGroups": [
      "2010s RAP HITS : 2010 - 2014 Era"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mustard, Fabolous & Eric Bellinger",
        "duration": "3:11",
        "isrcs": [
          "QMJMT1400119"
        ],
        "release_groups": [
          "2010s RAP HITS : 2010 - 2014 Era"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/4%20Digits%20Mustard%2C%20Fabolous%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=4+Digits+Mustard%2C+Fabolous+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=4+Digits+Mustard%2C+Fabolous+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=4+Digits+Mustard%2C+Fabolous+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/4%20Digits%20Mustard%2C%20Fabolous%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=4+Digits+Mustard%2C+Fabolous+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/4+Digits+Mustard%2C+Fabolous+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=4+Digits+Mustard%2C+Fabolous+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": "Alternate artist-credit version of the DJ Mustard/Fabolous/Eric Bellinger recording."
  },
  {
    "id": "fa-005",
    "title": "Action",
    "variantOrMix": null,
    "artistCredit": "Nef the Pharaoh feat. Ty Dolla $ign & Eric Bellinger",
    "primaryArtist": "Nef the Pharaoh",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Ty Dolla $ign",
      "Eric Bellinger"
    ],
    "duration": "4:06",
    "isrcs": [
      "USUYG1091796"
    ],
    "releaseGroups": [
      "Neffy Got Wings"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Nef the Pharaoh feat. Ty Dolla $ign & Eric Bellinger",
        "duration": "4:06",
        "isrcs": [
          "USUYG1091796"
        ],
        "release_groups": [
          "Neffy Got Wings"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Action%20Nef%20the%20Pharaoh%20feat.%20Ty%20Dolla%20%24ign%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Action+Nef+the+Pharaoh+feat.+Ty+Dolla+%24ign+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Action+Nef+the+Pharaoh+feat.+Ty+Dolla+%24ign+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Action+Nef+the+Pharaoh+feat.+Ty+Dolla+%24ign+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Action%20Nef%20the%20Pharaoh%20feat.%20Ty%20Dolla%20%24ign%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Action+Nef+the+Pharaoh+feat.+Ty+Dolla+%24ign+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Action+Nef+the+Pharaoh+feat.+Ty+Dolla+%24ign+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Action+Nef+the+Pharaoh+feat.+Ty+Dolla+%24ign+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-006",
    "title": "Alive",
    "variantOrMix": null,
    "artistCredit": "Kemba feat. Eric Bellinger",
    "primaryArtist": "Kemba",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:22",
    "isrcs": [],
    "releaseGroups": [
      "Gilda"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Kemba feat. Eric Bellinger",
        "duration": "4:22",
        "isrcs": [],
        "release_groups": [
          "Gilda"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Alive%20Kemba%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Alive+Kemba+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Alive+Kemba+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Alive+Kemba+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Alive%20Kemba%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Alive+Kemba+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Alive+Kemba+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Alive+Kemba+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-007",
    "title": "Anyway",
    "variantOrMix": null,
    "artistCredit": "DJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger & Mishon",
    "primaryArtist": "DJ Carisma",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Tory Lanez",
      "Sage the Gemini",
      "Eric Bellinger",
      "Mishon"
    ],
    "duration": "4:45",
    "isrcs": [],
    "releaseGroups": [
      "Anyway"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "DJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger & Mishon",
        "duration": "4:45",
        "isrcs": [],
        "release_groups": [
          "Anyway"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Anyway%20DJ%20Carisma%20feat.%20Tory%20Lanez%2C%20Sage%20the%20Gemini%2C%20Eric%20Bellinger%20%26%20Mishon",
        "apple_music_search": "https://music.apple.com/us/search?term=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "youtube_music_search": "https://music.youtube.com/search?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "youtube_search": "https://www.youtube.com/results?search_query=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "deezer_search": "https://www.deezer.com/search/Anyway%20DJ%20Carisma%20feat.%20Tory%20Lanez%2C%20Sage%20the%20Gemini%2C%20Eric%20Bellinger%20%26%20Mishon",
        "tidal_search": "https://listen.tidal.com/search?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "amazon_music_search": "https://music.amazon.com/search/Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-008",
    "title": "Anyway",
    "variantOrMix": "Explicit",
    "artistCredit": "DJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger & Mishon",
    "primaryArtist": "DJ Carisma",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Tory Lanez",
      "Sage the Gemini",
      "Eric Bellinger",
      "Mishon"
    ],
    "duration": "4:44",
    "isrcs": [],
    "releaseGroups": [
      "Anyway"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "DJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger & Mishon",
        "duration": "4:44",
        "isrcs": [],
        "release_groups": [
          "Anyway"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Anyway%20DJ%20Carisma%20feat.%20Tory%20Lanez%2C%20Sage%20the%20Gemini%2C%20Eric%20Bellinger%20%26%20Mishon",
        "apple_music_search": "https://music.apple.com/us/search?term=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "youtube_music_search": "https://music.youtube.com/search?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "youtube_search": "https://www.youtube.com/results?search_query=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "deezer_search": "https://www.deezer.com/search/Anyway%20DJ%20Carisma%20feat.%20Tory%20Lanez%2C%20Sage%20the%20Gemini%2C%20Eric%20Bellinger%20%26%20Mishon",
        "tidal_search": "https://listen.tidal.com/search?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "amazon_music_search": "https://music.amazon.com/search/Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger+%26+Mishon"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-009",
    "title": "April 21st",
    "variantOrMix": null,
    "artistCredit": "G Perico feat. Eric Bellinger",
    "primaryArtist": "G Perico",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "1:50",
    "isrcs": [],
    "releaseGroups": [
      "Blue T-Shirt Leaks"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "G Perico feat. Eric Bellinger",
        "duration": "1:50",
        "isrcs": [],
        "release_groups": [
          "Blue T-Shirt Leaks"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/April%2021st%20G%20Perico%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=April+21st+G+Perico+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=April+21st+G+Perico+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=April+21st+G+Perico+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/April%2021st%20G%20Perico%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=April+21st+G+Perico+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/April+21st+G+Perico+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=April+21st+G+Perico+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-010",
    "title": "Back It Up",
    "variantOrMix": null,
    "artistCredit": "BJ the Chicago Kid & Eric Bellinger",
    "primaryArtist": "BJ the Chicago Kid",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:49",
    "isrcs": [
      "USUYG1250781"
    ],
    "releaseGroups": [
      "1123"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "BJ the Chicago Kid & Eric Bellinger",
        "duration": "4:49",
        "isrcs": [
          "USUYG1250781"
        ],
        "release_groups": [
          "1123"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Back%20It%20Up%20BJ%20the%20Chicago%20Kid%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Back+It+Up+BJ+the+Chicago+Kid+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Back+It+Up+BJ+the+Chicago+Kid+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Back+It+Up+BJ+the+Chicago+Kid+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Back%20It%20Up%20BJ%20the%20Chicago%20Kid%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Back+It+Up+BJ+the+Chicago+Kid+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Back+It+Up+BJ+the+Chicago+Kid+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Back+It+Up+BJ+the+Chicago+Kid+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-011",
    "title": "Best Head Ever",
    "variantOrMix": null,
    "artistCredit": "The Game feat. Tyga & Eric Bellinger",
    "primaryArtist": "The Game",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Tyga",
      "Eric Bellinger"
    ],
    "duration": "3:39",
    "isrcs": [
      "USKO11401325"
    ],
    "releaseGroups": [
      "Blood Moon: Year of the Wolf"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "The Game feat. Tyga & Eric Bellinger",
        "duration": "3:39",
        "isrcs": [
          "USKO11401325"
        ],
        "release_groups": [
          "Blood Moon: Year of the Wolf"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Best%20Head%20Ever%20The%20Game%20feat.%20Tyga%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Best+Head+Ever+The+Game+feat.+Tyga+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Best+Head+Ever+The+Game+feat.+Tyga+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Best+Head+Ever+The+Game+feat.+Tyga+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Best%20Head%20Ever%20The%20Game%20feat.%20Tyga%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Best+Head+Ever+The+Game+feat.+Tyga+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Best+Head+Ever+The+Game+feat.+Tyga+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Best+Head+Ever+The+Game+feat.+Tyga+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-012",
    "title": "Big Body Benz",
    "variantOrMix": null,
    "artistCredit": "Ye Ali feat. Eric Bellinger",
    "primaryArtist": "Ye Ali",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:39",
    "isrcs": [],
    "releaseGroups": [
      "Passion & Patience"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Ye Ali feat. Eric Bellinger",
        "duration": "3:39",
        "isrcs": [],
        "release_groups": [
          "Passion & Patience"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Big%20Body%20Benz%20Ye%20Ali%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Big+Body+Benz+Ye+Ali+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Big+Body+Benz+Ye+Ali+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Big+Body+Benz+Ye+Ali+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Big%20Body%20Benz%20Ye%20Ali%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Big+Body+Benz+Ye+Ali+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Big+Body+Benz+Ye+Ali+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Big+Body+Benz+Ye+Ali+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-013",
    "title": "Body Calling",
    "variantOrMix": null,
    "artistCredit": "K Camp feat. Eric Bellinger & Aaron Page",
    "primaryArtist": "K Camp",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Aaron Page"
    ],
    "duration": "4:20",
    "isrcs": [],
    "releaseGroups": [
      "Kiss 6"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "K Camp feat. Eric Bellinger & Aaron Page",
        "duration": "4:20",
        "isrcs": [],
        "release_groups": [
          "Kiss 6"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Body%20Calling%20K%20Camp%20feat.%20Eric%20Bellinger%20%26%20Aaron%20Page",
        "apple_music_search": "https://music.apple.com/us/search?term=Body+Calling+K+Camp+feat.+Eric+Bellinger+%26+Aaron+Page",
        "youtube_music_search": "https://music.youtube.com/search?q=Body+Calling+K+Camp+feat.+Eric+Bellinger+%26+Aaron+Page",
        "youtube_search": "https://www.youtube.com/results?search_query=Body+Calling+K+Camp+feat.+Eric+Bellinger+%26+Aaron+Page",
        "deezer_search": "https://www.deezer.com/search/Body%20Calling%20K%20Camp%20feat.%20Eric%20Bellinger%20%26%20Aaron%20Page",
        "tidal_search": "https://listen.tidal.com/search?q=Body+Calling+K+Camp+feat.+Eric+Bellinger+%26+Aaron+Page",
        "amazon_music_search": "https://music.amazon.com/search/Body+Calling+K+Camp+feat.+Eric+Bellinger+%26+Aaron+Page",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Body+Calling+K+Camp+feat.+Eric+Bellinger+%26+Aaron+Page"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-014",
    "title": "Bonus King Los Imperfections",
    "variantOrMix": null,
    "artistCredit": "Lola Monroe, Eric Bellinger & Carmen",
    "primaryArtist": "Lola Monroe",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Carmen"
    ],
    "duration": null,
    "isrcs": [],
    "releaseGroups": [
      "Lipstick & Pistols"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Lola Monroe, Eric Bellinger & Carmen",
        "duration": null,
        "isrcs": [],
        "release_groups": [
          "Lipstick & Pistols"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Bonus%20King%20Los%20Imperfections%20Lola%20Monroe%2C%20Eric%20Bellinger%20%26%20Carmen",
        "apple_music_search": "https://music.apple.com/us/search?term=Bonus+King+Los+Imperfections+Lola+Monroe%2C+Eric+Bellinger+%26+Carmen",
        "youtube_music_search": "https://music.youtube.com/search?q=Bonus+King+Los+Imperfections+Lola+Monroe%2C+Eric+Bellinger+%26+Carmen",
        "youtube_search": "https://www.youtube.com/results?search_query=Bonus+King+Los+Imperfections+Lola+Monroe%2C+Eric+Bellinger+%26+Carmen",
        "deezer_search": "https://www.deezer.com/search/Bonus%20King%20Los%20Imperfections%20Lola%20Monroe%2C%20Eric%20Bellinger%20%26%20Carmen",
        "tidal_search": "https://listen.tidal.com/search?q=Bonus+King+Los+Imperfections+Lola+Monroe%2C+Eric+Bellinger+%26+Carmen",
        "amazon_music_search": "https://music.amazon.com/search/Bonus+King+Los+Imperfections+Lola+Monroe%2C+Eric+Bellinger+%26+Carmen",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Bonus+King+Los+Imperfections+Lola+Monroe%2C+Eric+Bellinger+%26+Carmen"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-015",
    "title": "Boss Talk",
    "variantOrMix": null,
    "artistCredit": "Dubb feat. Eric Bellinger",
    "primaryArtist": "Dubb",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:06",
    "isrcs": [],
    "releaseGroups": [
      "Never Content"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Dubb feat. Eric Bellinger",
        "duration": "3:06",
        "isrcs": [],
        "release_groups": [
          "Never Content"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Boss%20Talk%20Dubb%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Boss+Talk+Dubb+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Boss+Talk+Dubb+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Boss+Talk+Dubb+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Boss%20Talk%20Dubb%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Boss+Talk+Dubb+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Boss+Talk+Dubb+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Boss+Talk+Dubb+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-016",
    "title": "Broken",
    "variantOrMix": null,
    "artistCredit": "RaVaughn & Eric Bellinger",
    "primaryArtist": "RaVaughn",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:25",
    "isrcs": [],
    "releaseGroups": [
      "Love Always... The Introduction"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "RaVaughn & Eric Bellinger",
        "duration": "4:25",
        "isrcs": [],
        "release_groups": [
          "Love Always... The Introduction"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Broken%20RaVaughn%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Broken+RaVaughn+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Broken+RaVaughn+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Broken+RaVaughn+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Broken%20RaVaughn%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Broken+RaVaughn+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Broken+RaVaughn+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Broken+RaVaughn+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-017",
    "title": "Can I",
    "variantOrMix": null,
    "artistCredit": "The Game, DJ Drama, Mike & Keys & Eric Bellinger",
    "primaryArtist": "The Game",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "DJ Drama",
      "Mike & Keys",
      "Eric Bellinger"
    ],
    "duration": "3:00",
    "isrcs": [
      "US39N2565884"
    ],
    "releaseGroups": [
      "Gangsta Grillz: Every Movie Needs A Trailer",
      "Gangsta Grillz: E.M.N.T - The Credits"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "The Game, DJ Drama, Mike & Keys & Eric Bellinger",
        "duration": "3:00",
        "isrcs": [
          "US39N2565884"
        ],
        "release_groups": [
          "Gangsta Grillz: Every Movie Needs A Trailer",
          "Gangsta Grillz: E.M.N.T - The Credits"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Can%20I%20The%20Game%2C%20DJ%20Drama%2C%20Mike%20%26%20Keys%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Can+I+The+Game%2C+DJ+Drama%2C+Mike+%26+Keys+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Can+I+The+Game%2C+DJ+Drama%2C+Mike+%26+Keys+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Can+I+The+Game%2C+DJ+Drama%2C+Mike+%26+Keys+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Can%20I%20The%20Game%2C%20DJ%20Drama%2C%20Mike%20%26%20Keys%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Can+I+The+Game%2C+DJ+Drama%2C+Mike+%26+Keys+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Can+I+The+Game%2C+DJ+Drama%2C+Mike+%26+Keys+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Can+I+The+Game%2C+DJ+Drama%2C+Mike+%26+Keys+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-018",
    "title": "Can't Let You Go",
    "variantOrMix": "Clean",
    "artistCredit": "Mozzy feat. Eric Bellinger",
    "primaryArtist": "Mozzy",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:35",
    "isrcs": [
      "USUYG1306062"
    ],
    "releaseGroups": [
      "Beyond Bulletproof"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mozzy feat. Eric Bellinger",
        "duration": "2:35",
        "isrcs": [
          "USUYG1306062"
        ],
        "release_groups": [
          "Beyond Bulletproof"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Can%27t%20Let%20You%20Go%20Mozzy%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Can%27t%20Let%20You%20Go%20Mozzy%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-019",
    "title": "Can't Let You Go",
    "variantOrMix": "Explicit",
    "artistCredit": "Mozzy feat. Eric Bellinger",
    "primaryArtist": "Mozzy",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:35",
    "isrcs": [
      "USUYG1303333"
    ],
    "releaseGroups": [
      "Beyond Bulletproof"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mozzy feat. Eric Bellinger",
        "duration": "2:35",
        "isrcs": [
          "USUYG1303333"
        ],
        "release_groups": [
          "Beyond Bulletproof"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Can%27t%20Let%20You%20Go%20Mozzy%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Can%27t%20Let%20You%20Go%20Mozzy%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-020",
    "title": "Change",
    "variantOrMix": null,
    "artistCredit": "Jermaine Dupri, Ne-Yo, Johntá Austin, Common, Gary Clark Jr., Eric Bellinger, Rotimi, Detroit Youth Choir, PJ Morton, Smokie Norful, Wanya Morris, Big Rube, Bryan-Michael Cox, Anthony Hamilton, Keedron Bryant, Kirk Franklin & Jac Ross",
    "primaryArtist": "Jermaine Dupri",
    "ericBellingerRoleInCredit": "ensemble_artist",
    "featuredOrAdditionalArtists": [
      "Ne-Yo",
      "Johntá Austin",
      "Common",
      "Gary Clark Jr.",
      "Eric Bellinger",
      "Rotimi",
      "Detroit Youth Choir",
      "PJ Morton",
      "Smokie Norful",
      "Wanya Morris",
      "Big Rube",
      "Bryan-Michael Cox",
      "Anthony Hamilton",
      "Keedron Bryant",
      "Kirk Franklin",
      "Jac Ross"
    ],
    "duration": "4:32",
    "isrcs": [
      "USLZJ2054305"
    ],
    "releaseGroups": [
      "Change"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Jermaine Dupri, Ne-Yo, Johntá Austin, Common, Gary Clark Jr., Eric Bellinger, Rotimi, Detroit Youth Choir, PJ Morton, Smokie Norful, Wanya Morris, Big Rube, Bryan-Michael Cox, Anthony Hamilton, Keedron Bryant, Kirk Franklin & Jac Ross",
        "duration": "4:32",
        "isrcs": [
          "USLZJ2054305"
        ],
        "release_groups": [
          "Change"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Change%20Jermaine%20Dupri%2C%20Ne-Yo%2C%20Johnt%C3%A1%20Austin%2C%20Common%2C%20Gary%20Clark%20Jr.%2C%20Eric%20Bellinger%2C%20Rotimi%2C%20Detroit%20Youth%20Choir%2C%20PJ%20Morton%2C%20Smokie%20Norful%2C%20Wanya%20Morris%2C%20Big%20Rube%2C%20Bryan-Michael%20Cox%2C%20Anthony%20Hamilton%2C%20Keedron%20Bryant%2C%20Kirk%20Franklin%20%26%20Jac%20Ross",
        "apple_music_search": "https://music.apple.com/us/search?term=Change+Jermaine+Dupri%2C+Ne-Yo%2C+Johnt%C3%A1+Austin%2C+Common%2C+Gary+Clark+Jr.%2C+Eric+Bellinger%2C+Rotimi%2C+Detroit+Youth+Choir%2C+PJ+Morton%2C+Smokie+Norful%2C+Wanya+Morris%2C+Big+Rube%2C+Bryan-Michael+Cox%2C+Anthony+Hamilton%2C+Keedron+Bryant%2C+Kirk+Franklin+%26+Jac+Ross",
        "youtube_music_search": "https://music.youtube.com/search?q=Change+Jermaine+Dupri%2C+Ne-Yo%2C+Johnt%C3%A1+Austin%2C+Common%2C+Gary+Clark+Jr.%2C+Eric+Bellinger%2C+Rotimi%2C+Detroit+Youth+Choir%2C+PJ+Morton%2C+Smokie+Norful%2C+Wanya+Morris%2C+Big+Rube%2C+Bryan-Michael+Cox%2C+Anthony+Hamilton%2C+Keedron+Bryant%2C+Kirk+Franklin+%26+Jac+Ross",
        "youtube_search": "https://www.youtube.com/results?search_query=Change+Jermaine+Dupri%2C+Ne-Yo%2C+Johnt%C3%A1+Austin%2C+Common%2C+Gary+Clark+Jr.%2C+Eric+Bellinger%2C+Rotimi%2C+Detroit+Youth+Choir%2C+PJ+Morton%2C+Smokie+Norful%2C+Wanya+Morris%2C+Big+Rube%2C+Bryan-Michael+Cox%2C+Anthony+Hamilton%2C+Keedron+Bryant%2C+Kirk+Franklin+%26+Jac+Ross",
        "deezer_search": "https://www.deezer.com/search/Change%20Jermaine%20Dupri%2C%20Ne-Yo%2C%20Johnt%C3%A1%20Austin%2C%20Common%2C%20Gary%20Clark%20Jr.%2C%20Eric%20Bellinger%2C%20Rotimi%2C%20Detroit%20Youth%20Choir%2C%20PJ%20Morton%2C%20Smokie%20Norful%2C%20Wanya%20Morris%2C%20Big%20Rube%2C%20Bryan-Michael%20Cox%2C%20Anthony%20Hamilton%2C%20Keedron%20Bryant%2C%20Kirk%20Franklin%20%26%20Jac%20Ross",
        "tidal_search": "https://listen.tidal.com/search?q=Change+Jermaine+Dupri%2C+Ne-Yo%2C+Johnt%C3%A1+Austin%2C+Common%2C+Gary+Clark+Jr.%2C+Eric+Bellinger%2C+Rotimi%2C+Detroit+Youth+Choir%2C+PJ+Morton%2C+Smokie+Norful%2C+Wanya+Morris%2C+Big+Rube%2C+Bryan-Michael+Cox%2C+Anthony+Hamilton%2C+Keedron+Bryant%2C+Kirk+Franklin+%26+Jac+Ross",
        "amazon_music_search": "https://music.amazon.com/search/Change+Jermaine+Dupri%2C+Ne-Yo%2C+Johnt%C3%A1+Austin%2C+Common%2C+Gary+Clark+Jr.%2C+Eric+Bellinger%2C+Rotimi%2C+Detroit+Youth+Choir%2C+PJ+Morton%2C+Smokie+Norful%2C+Wanya+Morris%2C+Big+Rube%2C+Bryan-Michael+Cox%2C+Anthony+Hamilton%2C+Keedron+Bryant%2C+Kirk+Franklin+%26+Jac+Ross",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Change+Jermaine+Dupri%2C+Ne-Yo%2C+Johnt%C3%A1+Austin%2C+Common%2C+Gary+Clark+Jr.%2C+Eric+Bellinger%2C+Rotimi%2C+Detroit+Youth+Choir%2C+PJ+Morton%2C+Smokie+Norful%2C+Wanya+Morris%2C+Big+Rube%2C+Bryan-Michael+Cox%2C+Anthony+Hamilton%2C+Keedron+Bryant%2C+Kirk+Franklin+%26+Jac+Ross"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-021",
    "title": "Cheat Code Mode",
    "variantOrMix": null,
    "artistCredit": "Nieman J & Eric Bellinger feat. Young Thug",
    "primaryArtist": "Nieman J",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Young Thug"
    ],
    "duration": "3:31",
    "isrcs": [
      "USUYG1300853"
    ],
    "releaseGroups": [
      "Cheat Code Mode",
      "Optimal Music"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Nieman J & Eric Bellinger feat. Young Thug",
        "duration": "3:31",
        "isrcs": [
          "USUYG1300853"
        ],
        "release_groups": [
          "Cheat Code Mode",
          "Optimal Music"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Cheat%20Code%20Mode%20Nieman%20J%20%26%20Eric%20Bellinger%20feat.%20Young%20Thug",
        "apple_music_search": "https://music.apple.com/us/search?term=Cheat+Code+Mode+Nieman+J+%26+Eric+Bellinger+feat.+Young+Thug",
        "youtube_music_search": "https://music.youtube.com/search?q=Cheat+Code+Mode+Nieman+J+%26+Eric+Bellinger+feat.+Young+Thug",
        "youtube_search": "https://www.youtube.com/results?search_query=Cheat+Code+Mode+Nieman+J+%26+Eric+Bellinger+feat.+Young+Thug",
        "deezer_search": "https://www.deezer.com/search/Cheat%20Code%20Mode%20Nieman%20J%20%26%20Eric%20Bellinger%20feat.%20Young%20Thug",
        "tidal_search": "https://listen.tidal.com/search?q=Cheat+Code+Mode+Nieman+J+%26+Eric+Bellinger+feat.+Young+Thug",
        "amazon_music_search": "https://music.amazon.com/search/Cheat+Code+Mode+Nieman+J+%26+Eric+Bellinger+feat.+Young+Thug",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Cheat+Code+Mode+Nieman+J+%26+Eric+Bellinger+feat.+Young+Thug"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-022",
    "title": "Cheat Code Mode",
    "variantOrMix": "Clean",
    "artistCredit": "Young Thug, Nieman J, Eric Bellinger & Joe Moses",
    "primaryArtist": "Young Thug",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Nieman J",
      "Eric Bellinger",
      "Joe Moses"
    ],
    "duration": "3:31",
    "isrcs": [
      "USUYG1300854"
    ],
    "releaseGroups": [
      "Cheat Code Mode"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Young Thug, Nieman J, Eric Bellinger & Joe Moses",
        "duration": "3:31",
        "isrcs": [
          "USUYG1300854"
        ],
        "release_groups": [
          "Cheat Code Mode"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Cheat%20Code%20Mode%20Young%20Thug%2C%20Nieman%20J%2C%20Eric%20Bellinger%20%26%20Joe%20Moses",
        "apple_music_search": "https://music.apple.com/us/search?term=Cheat+Code+Mode+Young+Thug%2C+Nieman+J%2C+Eric+Bellinger+%26+Joe+Moses",
        "youtube_music_search": "https://music.youtube.com/search?q=Cheat+Code+Mode+Young+Thug%2C+Nieman+J%2C+Eric+Bellinger+%26+Joe+Moses",
        "youtube_search": "https://www.youtube.com/results?search_query=Cheat+Code+Mode+Young+Thug%2C+Nieman+J%2C+Eric+Bellinger+%26+Joe+Moses",
        "deezer_search": "https://www.deezer.com/search/Cheat%20Code%20Mode%20Young%20Thug%2C%20Nieman%20J%2C%20Eric%20Bellinger%20%26%20Joe%20Moses",
        "tidal_search": "https://listen.tidal.com/search?q=Cheat+Code+Mode+Young+Thug%2C+Nieman+J%2C+Eric+Bellinger+%26+Joe+Moses",
        "amazon_music_search": "https://music.amazon.com/search/Cheat+Code+Mode+Young+Thug%2C+Nieman+J%2C+Eric+Bellinger+%26+Joe+Moses",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Cheat+Code+Mode+Young+Thug%2C+Nieman+J%2C+Eric+Bellinger+%26+Joe+Moses"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-023",
    "title": "Circles",
    "variantOrMix": null,
    "artistCredit": "The Game feat. Q-Tip, Eric Bellinger & Sha Sha",
    "primaryArtist": "The Game",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Q-Tip",
      "Eric Bellinger",
      "Sha Sha"
    ],
    "duration": "4:12",
    "isrcs": [],
    "releaseGroups": [
      "The Documentary 2",
      "The Documentary 2 + 2.5"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "The Game feat. Q-Tip, Eric Bellinger & Sha Sha",
        "duration": "4:12",
        "isrcs": [],
        "release_groups": [
          "The Documentary 2",
          "The Documentary 2 + 2.5"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Circles%20The%20Game%20feat.%20Q-Tip%2C%20Eric%20Bellinger%20%26%20Sha%20Sha",
        "apple_music_search": "https://music.apple.com/us/search?term=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger+%26+Sha+Sha",
        "youtube_music_search": "https://music.youtube.com/search?q=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger+%26+Sha+Sha",
        "youtube_search": "https://www.youtube.com/results?search_query=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger+%26+Sha+Sha",
        "deezer_search": "https://www.deezer.com/search/Circles%20The%20Game%20feat.%20Q-Tip%2C%20Eric%20Bellinger%20%26%20Sha%20Sha",
        "tidal_search": "https://listen.tidal.com/search?q=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger+%26+Sha+Sha",
        "amazon_music_search": "https://music.amazon.com/search/Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger+%26+Sha+Sha",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger+%26+Sha+Sha"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-024",
    "title": "Connected",
    "variantOrMix": null,
    "artistCredit": "Chip feat. Eric Bellinger",
    "primaryArtist": "Chip",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:36",
    "isrcs": [],
    "releaseGroups": [
      "Believe & Achieve: Episode 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Chip feat. Eric Bellinger",
        "duration": "3:36",
        "isrcs": [],
        "release_groups": [
          "Believe & Achieve: Episode 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Connected%20Chip%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Connected+Chip+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Connected+Chip+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Connected+Chip+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Connected%20Chip%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Connected+Chip+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Connected+Chip+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Connected+Chip+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-025",
    "title": "Consistency",
    "variantOrMix": null,
    "artistCredit": "Trevor Jackson & Eric Bellinger",
    "primaryArtist": "Trevor Jackson",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:26",
    "isrcs": [
      "QZNMT2451592"
    ],
    "releaseGroups": [
      "It’s Complicated"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Trevor Jackson & Eric Bellinger",
        "duration": "2:26",
        "isrcs": [
          "QZNMT2451592"
        ],
        "release_groups": [
          "It’s Complicated"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Consistency%20Trevor%20Jackson%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Consistency+Trevor+Jackson+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Consistency+Trevor+Jackson+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Consistency+Trevor+Jackson+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Consistency%20Trevor%20Jackson%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Consistency+Trevor+Jackson+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Consistency+Trevor+Jackson+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Consistency+Trevor+Jackson+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-026",
    "title": "Couch Standing",
    "variantOrMix": null,
    "artistCredit": "Nieman J & Eric Bellinger feat. Jeremih & Wale",
    "primaryArtist": "Nieman J",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Jeremih",
      "Wale"
    ],
    "duration": "3:13",
    "isrcs": [
      "USUYG1306139"
    ],
    "releaseGroups": [
      "Optimal Music"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Nieman J & Eric Bellinger feat. Jeremih & Wale",
        "duration": "3:13",
        "isrcs": [
          "USUYG1306139"
        ],
        "release_groups": [
          "Optimal Music"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Couch%20Standing%20Nieman%20J%20%26%20Eric%20Bellinger%20feat.%20Jeremih%20%26%20Wale",
        "apple_music_search": "https://music.apple.com/us/search?term=Couch+Standing+Nieman+J+%26+Eric+Bellinger+feat.+Jeremih+%26+Wale",
        "youtube_music_search": "https://music.youtube.com/search?q=Couch+Standing+Nieman+J+%26+Eric+Bellinger+feat.+Jeremih+%26+Wale",
        "youtube_search": "https://www.youtube.com/results?search_query=Couch+Standing+Nieman+J+%26+Eric+Bellinger+feat.+Jeremih+%26+Wale",
        "deezer_search": "https://www.deezer.com/search/Couch%20Standing%20Nieman%20J%20%26%20Eric%20Bellinger%20feat.%20Jeremih%20%26%20Wale",
        "tidal_search": "https://listen.tidal.com/search?q=Couch+Standing+Nieman+J+%26+Eric+Bellinger+feat.+Jeremih+%26+Wale",
        "amazon_music_search": "https://music.amazon.com/search/Couch+Standing+Nieman+J+%26+Eric+Bellinger+feat.+Jeremih+%26+Wale",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Couch+Standing+Nieman+J+%26+Eric+Bellinger+feat.+Jeremih+%26+Wale"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-027",
    "title": "Dat Ass",
    "variantOrMix": null,
    "artistCredit": "Jacob Latimore feat. Eric Bellinger",
    "primaryArtist": "Jacob Latimore",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:53",
    "isrcs": [],
    "releaseGroups": [
      "Leo Season"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Jacob Latimore feat. Eric Bellinger",
        "duration": "2:53",
        "isrcs": [],
        "release_groups": [
          "Leo Season"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Dat%20Ass%20Jacob%20Latimore%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Dat+Ass+Jacob+Latimore+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Dat+Ass+Jacob+Latimore+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Dat+Ass+Jacob+Latimore+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Dat%20Ass%20Jacob%20Latimore%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Dat+Ass+Jacob+Latimore+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Dat+Ass+Jacob+Latimore+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Dat+Ass+Jacob+Latimore+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-028",
    "title": "Death Penalty",
    "variantOrMix": null,
    "artistCredit": "The Game feat. Fabolous, Eric Bellinger & Slim Thug",
    "primaryArtist": "The Game",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Fabolous",
      "Eric Bellinger",
      "Slim Thug"
    ],
    "duration": "4:21",
    "isrcs": [],
    "releaseGroups": [
      "California Republic"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "The Game feat. Fabolous, Eric Bellinger & Slim Thug",
        "duration": "4:21",
        "isrcs": [],
        "release_groups": [
          "California Republic"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Death%20Penalty%20The%20Game%20feat.%20Fabolous%2C%20Eric%20Bellinger%20%26%20Slim%20Thug",
        "apple_music_search": "https://music.apple.com/us/search?term=Death+Penalty+The+Game+feat.+Fabolous%2C+Eric+Bellinger+%26+Slim+Thug",
        "youtube_music_search": "https://music.youtube.com/search?q=Death+Penalty+The+Game+feat.+Fabolous%2C+Eric+Bellinger+%26+Slim+Thug",
        "youtube_search": "https://www.youtube.com/results?search_query=Death+Penalty+The+Game+feat.+Fabolous%2C+Eric+Bellinger+%26+Slim+Thug",
        "deezer_search": "https://www.deezer.com/search/Death%20Penalty%20The%20Game%20feat.%20Fabolous%2C%20Eric%20Bellinger%20%26%20Slim%20Thug",
        "tidal_search": "https://listen.tidal.com/search?q=Death+Penalty+The+Game+feat.+Fabolous%2C+Eric+Bellinger+%26+Slim+Thug",
        "amazon_music_search": "https://music.amazon.com/search/Death+Penalty+The+Game+feat.+Fabolous%2C+Eric+Bellinger+%26+Slim+Thug",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Death+Penalty+The+Game+feat.+Fabolous%2C+Eric+Bellinger+%26+Slim+Thug"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings"
    },
    "notes": null
  },
  {
    "id": "fa-029",
    "title": "Do Ya",
    "variantOrMix": null,
    "artistCredit": "Da Boy Dame feat. Ty Dolla $ign, Adrian Marcel & Eric Bellinger",
    "primaryArtist": "Da Boy Dame",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Ty Dolla $ign",
      "Adrian Marcel",
      "Eric Bellinger"
    ],
    "duration": "3:59",
    "isrcs": [],
    "releaseGroups": [
      "Hot This Week 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Da Boy Dame feat. Ty Dolla $ign, Adrian Marcel & Eric Bellinger",
        "duration": "3:59",
        "isrcs": [],
        "release_groups": [
          "Hot This Week 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Do%20Ya%20Da%20Boy%20Dame%20feat.%20Ty%20Dolla%20%24ign%2C%20Adrian%20Marcel%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Do+Ya+Da+Boy+Dame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Do+Ya+Da+Boy+Dame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Do+Ya+Da+Boy+Dame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Do%20Ya%20Da%20Boy%20Dame%20feat.%20Ty%20Dolla%20%24ign%2C%20Adrian%20Marcel%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Do+Ya+Da+Boy+Dame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Do+Ya+Da+Boy+Dame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Do+Ya+Da+Boy+Dame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-030",
    "title": "Drop It",
    "variantOrMix": null,
    "artistCredit": "Blaq Tuxedo feat. Eric Bellinger",
    "primaryArtist": "Blaq Tuxedo",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:20",
    "isrcs": [
      "GBKPL1958459"
    ],
    "releaseGroups": [
      "Blaq Tuxedo"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Blaq Tuxedo feat. Eric Bellinger",
        "duration": "3:20",
        "isrcs": [
          "GBKPL1958459"
        ],
        "release_groups": [
          "Blaq Tuxedo"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Drop%20It%20Blaq%20Tuxedo%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Drop+It+Blaq+Tuxedo+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Drop+It+Blaq+Tuxedo+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Drop+It+Blaq+Tuxedo+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Drop%20It%20Blaq%20Tuxedo%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Drop+It+Blaq+Tuxedo+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Drop+It+Blaq+Tuxedo+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Drop+It+Blaq+Tuxedo+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-031",
    "title": "Energy",
    "variantOrMix": null,
    "artistCredit": "Vedo feat. Eric Bellinger",
    "primaryArtist": "Vedo",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:41",
    "isrcs": [],
    "releaseGroups": [
      "1320"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Vedo feat. Eric Bellinger",
        "duration": "3:41",
        "isrcs": [],
        "release_groups": [
          "1320"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Energy%20Vedo%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Energy+Vedo+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Energy+Vedo+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Energy+Vedo+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Energy%20Vedo%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Energy+Vedo+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Energy+Vedo+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Energy+Vedo+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-032",
    "title": "Exposed",
    "variantOrMix": null,
    "artistCredit": "Mally Mall feat. Eric Bellinger & Lil Twist",
    "primaryArtist": "Mally Mall",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Lil Twist"
    ],
    "duration": "3:00",
    "isrcs": [],
    "releaseGroups": [
      "Mally's World, Vol. 1"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mally Mall feat. Eric Bellinger & Lil Twist",
        "duration": "3:00",
        "isrcs": [],
        "release_groups": [
          "Mally's World, Vol. 1"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Exposed%20Mally%20Mall%20feat.%20Eric%20Bellinger%20%26%20Lil%20Twist",
        "apple_music_search": "https://music.apple.com/us/search?term=Exposed+Mally+Mall+feat.+Eric+Bellinger+%26+Lil+Twist",
        "youtube_music_search": "https://music.youtube.com/search?q=Exposed+Mally+Mall+feat.+Eric+Bellinger+%26+Lil+Twist",
        "youtube_search": "https://www.youtube.com/results?search_query=Exposed+Mally+Mall+feat.+Eric+Bellinger+%26+Lil+Twist",
        "deezer_search": "https://www.deezer.com/search/Exposed%20Mally%20Mall%20feat.%20Eric%20Bellinger%20%26%20Lil%20Twist",
        "tidal_search": "https://listen.tidal.com/search?q=Exposed+Mally+Mall+feat.+Eric+Bellinger+%26+Lil+Twist",
        "amazon_music_search": "https://music.amazon.com/search/Exposed+Mally+Mall+feat.+Eric+Bellinger+%26+Lil+Twist",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Exposed+Mally+Mall+feat.+Eric+Bellinger+%26+Lil+Twist"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-033",
    "title": "Facetime",
    "variantOrMix": null,
    "artistCredit": "L.A. Leakers, Eric Bellinger, Wale & AD",
    "primaryArtist": "L.A. Leakers",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Wale",
      "AD"
    ],
    "duration": "3:39",
    "isrcs": [],
    "releaseGroups": [
      "Facetime"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "L.A. Leakers, Eric Bellinger, Wale & AD",
        "duration": "3:39",
        "isrcs": [],
        "release_groups": [
          "Facetime"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Facetime%20L.A.%20Leakers%2C%20Eric%20Bellinger%2C%20Wale%20%26%20AD",
        "apple_music_search": "https://music.apple.com/us/search?term=Facetime+L.A.+Leakers%2C+Eric+Bellinger%2C+Wale+%26+AD",
        "youtube_music_search": "https://music.youtube.com/search?q=Facetime+L.A.+Leakers%2C+Eric+Bellinger%2C+Wale+%26+AD",
        "youtube_search": "https://www.youtube.com/results?search_query=Facetime+L.A.+Leakers%2C+Eric+Bellinger%2C+Wale+%26+AD",
        "deezer_search": "https://www.deezer.com/search/Facetime%20L.A.%20Leakers%2C%20Eric%20Bellinger%2C%20Wale%20%26%20AD",
        "tidal_search": "https://listen.tidal.com/search?q=Facetime+L.A.+Leakers%2C+Eric+Bellinger%2C+Wale+%26+AD",
        "amazon_music_search": "https://music.amazon.com/search/Facetime+L.A.+Leakers%2C+Eric+Bellinger%2C+Wale+%26+AD",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Facetime+L.A.+Leakers%2C+Eric+Bellinger%2C+Wale+%26+AD"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-034",
    "title": "Fed Up",
    "variantOrMix": null,
    "artistCredit": "Jonn Hart feat. Rayven Justice, Eric Bellinger & Rossi",
    "primaryArtist": "Jonn Hart",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Rayven Justice",
      "Eric Bellinger",
      "Rossi"
    ],
    "duration": "3:06",
    "isrcs": [
      "USUYG1056257"
    ],
    "releaseGroups": [
      "Cool Kid Cartel Collection 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Jonn Hart feat. Rayven Justice, Eric Bellinger & Rossi",
        "duration": "3:06",
        "isrcs": [
          "USUYG1056257"
        ],
        "release_groups": [
          "Cool Kid Cartel Collection 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Fed%20Up%20Jonn%20Hart%20feat.%20Rayven%20Justice%2C%20Eric%20Bellinger%20%26%20Rossi",
        "apple_music_search": "https://music.apple.com/us/search?term=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "youtube_music_search": "https://music.youtube.com/search?q=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "youtube_search": "https://www.youtube.com/results?search_query=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "deezer_search": "https://www.deezer.com/search/Fed%20Up%20Jonn%20Hart%20feat.%20Rayven%20Justice%2C%20Eric%20Bellinger%20%26%20Rossi",
        "tidal_search": "https://listen.tidal.com/search?q=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "amazon_music_search": "https://music.amazon.com/search/Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-035",
    "title": "Fed Up",
    "variantOrMix": "DJ Hed mix",
    "artistCredit": "Jonn Hart feat. Rayven Justice, Eric Bellinger & Rossi",
    "primaryArtist": "Jonn Hart",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Rayven Justice",
      "Eric Bellinger",
      "Rossi"
    ],
    "duration": "2:56",
    "isrcs": [
      "USUYG1079055"
    ],
    "releaseGroups": [
      "Heart 2 Hart 3",
      "iHart Collection, Pt. 1"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Jonn Hart feat. Rayven Justice, Eric Bellinger & Rossi",
        "duration": "2:56",
        "isrcs": [
          "USUYG1079055"
        ],
        "release_groups": [
          "Heart 2 Hart 3",
          "iHart Collection, Pt. 1"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Fed%20Up%20Jonn%20Hart%20feat.%20Rayven%20Justice%2C%20Eric%20Bellinger%20%26%20Rossi",
        "apple_music_search": "https://music.apple.com/us/search?term=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "youtube_music_search": "https://music.youtube.com/search?q=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "youtube_search": "https://www.youtube.com/results?search_query=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "deezer_search": "https://www.deezer.com/search/Fed%20Up%20Jonn%20Hart%20feat.%20Rayven%20Justice%2C%20Eric%20Bellinger%20%26%20Rossi",
        "tidal_search": "https://listen.tidal.com/search?q=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "amazon_music_search": "https://music.amazon.com/search/Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Fed+Up+Jonn+Hart+feat.+Rayven+Justice%2C+Eric+Bellinger+%26+Rossi"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-036",
    "title": "Follow My Lead",
    "variantOrMix": null,
    "artistCredit": "Chipmunk feat. Eric B",
    "primaryArtist": "Chipmunk",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric B"
    ],
    "duration": "3:49",
    "isrcs": [],
    "releaseGroups": [
      "Transition"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Chipmunk feat. Eric B",
        "duration": "3:49",
        "isrcs": [],
        "release_groups": [
          "Transition"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Follow%20My%20Lead%20Chipmunk%20feat.%20Eric%20B",
        "apple_music_search": "https://music.apple.com/us/search?term=Follow+My+Lead+Chipmunk+feat.+Eric+B",
        "youtube_music_search": "https://music.youtube.com/search?q=Follow+My+Lead+Chipmunk+feat.+Eric+B",
        "youtube_search": "https://www.youtube.com/results?search_query=Follow+My+Lead+Chipmunk+feat.+Eric+B",
        "deezer_search": "https://www.deezer.com/search/Follow%20My%20Lead%20Chipmunk%20feat.%20Eric%20B",
        "tidal_search": "https://listen.tidal.com/search?q=Follow+My+Lead+Chipmunk+feat.+Eric+B",
        "amazon_music_search": "https://music.amazon.com/search/Follow+My+Lead+Chipmunk+feat.+Eric+B",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Follow+My+Lead+Chipmunk+feat.+Eric+B"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": "MusicBrainz lists this under Eric Bellinger's artist page but the displayed credit is shortened to 'Eric B'. Verify identity before commercial use."
  },
  {
    "id": "fa-037",
    "title": "Freak",
    "variantOrMix": null,
    "artistCredit": "Mally Mall feat. Eric Bellinger, Chinx Drugz & Too $hort",
    "primaryArtist": "Mally Mall",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Chinx Drugz",
      "Too $hort"
    ],
    "duration": "3:50",
    "isrcs": [
      "USUYG1087255"
    ],
    "releaseGroups": [
      "Triple X-Mas"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mally Mall feat. Eric Bellinger, Chinx Drugz & Too $hort",
        "duration": "3:50",
        "isrcs": [
          "USUYG1087255"
        ],
        "release_groups": [
          "Triple X-Mas"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Freak%20Mally%20Mall%20feat.%20Eric%20Bellinger%2C%20Chinx%20Drugz%20%26%20Too%20%24hort",
        "apple_music_search": "https://music.apple.com/us/search?term=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx+Drugz+%26+Too+%24hort",
        "youtube_music_search": "https://music.youtube.com/search?q=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx+Drugz+%26+Too+%24hort",
        "youtube_search": "https://www.youtube.com/results?search_query=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx+Drugz+%26+Too+%24hort",
        "deezer_search": "https://www.deezer.com/search/Freak%20Mally%20Mall%20feat.%20Eric%20Bellinger%2C%20Chinx%20Drugz%20%26%20Too%20%24hort",
        "tidal_search": "https://listen.tidal.com/search?q=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx+Drugz+%26+Too+%24hort",
        "amazon_music_search": "https://music.amazon.com/search/Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx+Drugz+%26+Too+%24hort",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx+Drugz+%26+Too+%24hort"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-038",
    "title": "Freak",
    "variantOrMix": null,
    "artistCredit": "Chrishan feat. Eric Bellinger",
    "primaryArtist": "Chrishan",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:17",
    "isrcs": [
      "QZK6P2218352"
    ],
    "releaseGroups": [
      "TieDye, Pt. 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Chrishan feat. Eric Bellinger",
        "duration": "2:17",
        "isrcs": [
          "QZK6P2218352"
        ],
        "release_groups": [
          "TieDye, Pt. 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Freak%20Chrishan%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Freak+Chrishan+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Freak+Chrishan+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Freak+Chrishan+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Freak%20Chrishan%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Freak+Chrishan+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Freak+Chrishan+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Freak+Chrishan+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-039",
    "title": "Fresh",
    "variantOrMix": null,
    "artistCredit": "Kid Ink feat. Eric Bellinger",
    "primaryArtist": "Kid Ink",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:09",
    "isrcs": [],
    "releaseGroups": [
      "Rocketshipshawty"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Kid Ink feat. Eric Bellinger",
        "duration": "3:09",
        "isrcs": [],
        "release_groups": [
          "Rocketshipshawty"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Fresh%20Kid%20Ink%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Fresh+Kid+Ink+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Fresh+Kid+Ink+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Fresh+Kid+Ink+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Fresh%20Kid%20Ink%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Fresh+Kid+Ink+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Fresh+Kid+Ink+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Fresh+Kid+Ink+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-040",
    "title": "Fwu",
    "variantOrMix": null,
    "artistCredit": "Joe Moses feat. Eric Bellinger",
    "primaryArtist": "Joe Moses",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:15",
    "isrcs": [],
    "releaseGroups": [
      "Westside II"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Joe Moses feat. Eric Bellinger",
        "duration": "3:15",
        "isrcs": [],
        "release_groups": [
          "Westside II"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Fwu%20Joe%20Moses%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Fwu+Joe+Moses+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Fwu+Joe+Moses+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Fwu+Joe+Moses+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Fwu%20Joe%20Moses%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Fwu+Joe+Moses+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Fwu+Joe+Moses+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Fwu+Joe+Moses+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-041",
    "title": "Go Crazy",
    "variantOrMix": null,
    "artistCredit": "Rayven Justice feat. Eric Bellinger",
    "primaryArtist": "Rayven Justice",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:28",
    "isrcs": [],
    "releaseGroups": [
      "Do It Justice"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Rayven Justice feat. Eric Bellinger",
        "duration": "3:28",
        "isrcs": [],
        "release_groups": [
          "Do It Justice"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Go%20Crazy%20Rayven%20Justice%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Go+Crazy+Rayven+Justice+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Go+Crazy+Rayven+Justice+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Go+Crazy+Rayven+Justice+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Go%20Crazy%20Rayven%20Justice%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Go+Crazy+Rayven+Justice+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Go+Crazy+Rayven+Justice+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Go+Crazy+Rayven+Justice+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=2"
    },
    "notes": null
  },
  {
    "id": "fa-042",
    "title": "Hard To Remember -Season0.5- Remix / Bonus Track",
    "variantOrMix": null,
    "artistCredit": "AK-69 feat. Eric Bellinger",
    "primaryArtist": "AK-69",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:30",
    "isrcs": [],
    "releaseGroups": [
      "LIVE : live"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "AK-69 feat. Eric Bellinger",
        "duration": "3:30",
        "isrcs": [],
        "release_groups": [
          "LIVE : live"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Hard%20To%20Remember%20-Season0.5-%20Remix%20/%20Bonus%20Track%20AK-69%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Hard+To+Remember+-Season0.5-+Remix+%2F+Bonus+Track+AK-69+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Hard+To+Remember+-Season0.5-+Remix+%2F+Bonus+Track+AK-69+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Hard+To+Remember+-Season0.5-+Remix+%2F+Bonus+Track+AK-69+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Hard%20To%20Remember%20-Season0.5-%20Remix%20/%20Bonus%20Track%20AK-69%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Hard+To+Remember+-Season0.5-+Remix+%2F+Bonus+Track+AK-69+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Hard+To+Remember+-Season0.5-+Remix+%2F+Bonus+Track+AK-69+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Hard+To+Remember+-Season0.5-+Remix+%2F+Bonus+Track+AK-69+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-043",
    "title": "Hotbox",
    "variantOrMix": null,
    "artistCredit": "Ne-Yo feat. Eric Bellinger",
    "primaryArtist": "Ne-Yo",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:16",
    "isrcs": [
      "USUM71805564"
    ],
    "releaseGroups": [
      "GOOD MAN"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Ne-Yo feat. Eric Bellinger",
        "duration": "4:16",
        "isrcs": [
          "USUM71805564"
        ],
        "release_groups": [
          "GOOD MAN"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Hotbox%20Ne-Yo%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Hotbox+Ne-Yo+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Hotbox+Ne-Yo+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Hotbox+Ne-Yo+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Hotbox%20Ne-Yo%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Hotbox+Ne-Yo+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Hotbox+Ne-Yo+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Hotbox+Ne-Yo+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-044",
    "title": "How I Feel",
    "variantOrMix": null,
    "artistCredit": "T.I. feat. Eric Bellinger & Killer Mike",
    "primaryArtist": "T.I.",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Killer Mike"
    ],
    "duration": "5:22",
    "isrcs": [
      "USUYG1337008"
    ],
    "releaseGroups": [
      "The L.I.B.R.A. (Legend Is Back Running Atlanta)"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "T.I. feat. Eric Bellinger & Killer Mike",
        "duration": "5:22",
        "isrcs": [
          "USUYG1337008"
        ],
        "release_groups": [
          "The L.I.B.R.A. (Legend Is Back Running Atlanta)"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/How%20I%20Feel%20T.I.%20feat.%20Eric%20Bellinger%20%26%20Killer%20Mike",
        "apple_music_search": "https://music.apple.com/us/search?term=How+I+Feel+T.I.+feat.+Eric+Bellinger+%26+Killer+Mike",
        "youtube_music_search": "https://music.youtube.com/search?q=How+I+Feel+T.I.+feat.+Eric+Bellinger+%26+Killer+Mike",
        "youtube_search": "https://www.youtube.com/results?search_query=How+I+Feel+T.I.+feat.+Eric+Bellinger+%26+Killer+Mike",
        "deezer_search": "https://www.deezer.com/search/How%20I%20Feel%20T.I.%20feat.%20Eric%20Bellinger%20%26%20Killer%20Mike",
        "tidal_search": "https://listen.tidal.com/search?q=How+I+Feel+T.I.+feat.+Eric+Bellinger+%26+Killer+Mike",
        "amazon_music_search": "https://music.amazon.com/search/How+I+Feel+T.I.+feat.+Eric+Bellinger+%26+Killer+Mike",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=How+I+Feel+T.I.+feat.+Eric+Bellinger+%26+Killer+Mike"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-045",
    "title": "I Don't Want Her",
    "variantOrMix": null,
    "artistCredit": "League of Starz feat. Eric Bellinger & Problem",
    "primaryArtist": "League of Starz",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Problem"
    ],
    "duration": "3:15",
    "isrcs": [
      "USUYG1034992"
    ],
    "releaseGroups": [
      "LOS.FM (Deluxe Edition)"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "League of Starz feat. Eric Bellinger & Problem",
        "duration": "3:15",
        "isrcs": [
          "USUYG1034992"
        ],
        "release_groups": [
          "LOS.FM (Deluxe Edition)"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/I%20Don%27t%20Want%20Her%20League%20of%20Starz%20feat.%20Eric%20Bellinger%20%26%20Problem",
        "apple_music_search": "https://music.apple.com/us/search?term=I+Don%27t+Want+Her+League+of+Starz+feat.+Eric+Bellinger+%26+Problem",
        "youtube_music_search": "https://music.youtube.com/search?q=I+Don%27t+Want+Her+League+of+Starz+feat.+Eric+Bellinger+%26+Problem",
        "youtube_search": "https://www.youtube.com/results?search_query=I+Don%27t+Want+Her+League+of+Starz+feat.+Eric+Bellinger+%26+Problem",
        "deezer_search": "https://www.deezer.com/search/I%20Don%27t%20Want%20Her%20League%20of%20Starz%20feat.%20Eric%20Bellinger%20%26%20Problem",
        "tidal_search": "https://listen.tidal.com/search?q=I+Don%27t+Want+Her+League+of+Starz+feat.+Eric+Bellinger+%26+Problem",
        "amazon_music_search": "https://music.amazon.com/search/I+Don%27t+Want+Her+League+of+Starz+feat.+Eric+Bellinger+%26+Problem",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=I+Don%27t+Want+Her+League+of+Starz+feat.+Eric+Bellinger+%26+Problem"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-046",
    "title": "I'm Not Sorry",
    "variantOrMix": null,
    "artistCredit": "DEAN feat. Eric Bellinger",
    "primaryArtist": "DEAN",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:29",
    "isrcs": [
      "KRUM71500049"
    ],
    "releaseGroups": [
      "I'm Not Sorry",
      "SXSW 2016 Showcasing Artists"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "DEAN feat. Eric Bellinger",
        "duration": "3:29",
        "isrcs": [
          "KRUM71500049"
        ],
        "release_groups": [
          "I'm Not Sorry",
          "SXSW 2016 Showcasing Artists"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/I%27m%20Not%20Sorry%20DEAN%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/I%27m%20Not%20Sorry%20DEAN%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-047",
    "title": "Intuition",
    "variantOrMix": null,
    "artistCredit": "Selena Gomez & the Scene feat. Eric Bellinger",
    "primaryArtist": "Selena Gomez & the Scene",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:59",
    "isrcs": [
      "USHR11031317"
    ],
    "releaseGroups": [
      "A Year Without Rain",
      "When the Sun Goes Down"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Selena Gomez & the Scene feat. Eric Bellinger",
        "duration": "2:59",
        "isrcs": [
          "USHR11031317"
        ],
        "release_groups": [
          "A Year Without Rain",
          "When the Sun Goes Down"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Intuition%20Selena%20Gomez%20%26%20the%20Scene%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Intuition%20Selena%20Gomez%20%26%20the%20Scene%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-048",
    "title": "Intuition",
    "variantOrMix": "Dolby Atmos mix",
    "artistCredit": "Selena Gomez & the Scene feat. Eric Bellinger",
    "primaryArtist": "Selena Gomez & the Scene",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:59",
    "isrcs": [
      "USHR12244653"
    ],
    "releaseGroups": [
      "A Year Without Rain"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Selena Gomez & the Scene feat. Eric Bellinger",
        "duration": "2:59",
        "isrcs": [
          "USHR12244653"
        ],
        "release_groups": [
          "A Year Without Rain"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Intuition%20Selena%20Gomez%20%26%20the%20Scene%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Intuition%20Selena%20Gomez%20%26%20the%20Scene%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Intuition+Selena+Gomez+%26+the+Scene+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-049",
    "title": "Involved",
    "variantOrMix": null,
    "artistCredit": "Ye Ali, Eric Bellinger & Zae France",
    "primaryArtist": "Ye Ali",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Zae France"
    ],
    "duration": "2:30",
    "isrcs": [],
    "releaseGroups": [
      "THJ Radio Vol. 1"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Ye Ali, Eric Bellinger & Zae France",
        "duration": "2:30",
        "isrcs": [],
        "release_groups": [
          "THJ Radio Vol. 1"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Involved%20Ye%20Ali%2C%20Eric%20Bellinger%20%26%20Zae%20France",
        "apple_music_search": "https://music.apple.com/us/search?term=Involved+Ye+Ali%2C+Eric+Bellinger+%26+Zae+France",
        "youtube_music_search": "https://music.youtube.com/search?q=Involved+Ye+Ali%2C+Eric+Bellinger+%26+Zae+France",
        "youtube_search": "https://www.youtube.com/results?search_query=Involved+Ye+Ali%2C+Eric+Bellinger+%26+Zae+France",
        "deezer_search": "https://www.deezer.com/search/Involved%20Ye%20Ali%2C%20Eric%20Bellinger%20%26%20Zae%20France",
        "tidal_search": "https://listen.tidal.com/search?q=Involved+Ye+Ali%2C+Eric+Bellinger+%26+Zae+France",
        "amazon_music_search": "https://music.amazon.com/search/Involved+Ye+Ali%2C+Eric+Bellinger+%26+Zae+France",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Involved+Ye+Ali%2C+Eric+Bellinger+%26+Zae+France"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-050",
    "title": "JADED",
    "variantOrMix": null,
    "artistCredit": "Mozzy feat. Eric Bellinger",
    "primaryArtist": "Mozzy",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:12",
    "isrcs": [
      "USA2P2355148",
      "USA2P2406429"
    ],
    "releaseGroups": [
      "CHILDREN OF THE SLUMS"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mozzy feat. Eric Bellinger",
        "duration": "3:12",
        "isrcs": [
          "USA2P2355148",
          "USA2P2406429"
        ],
        "release_groups": [
          "CHILDREN OF THE SLUMS"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/JADED%20Mozzy%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=JADED+Mozzy+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=JADED+Mozzy+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=JADED+Mozzy+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/JADED%20Mozzy%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=JADED+Mozzy+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/JADED+Mozzy+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=JADED+Mozzy+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-051",
    "title": "Just in You",
    "variantOrMix": null,
    "artistCredit": "Victor Oladipo feat. Eric Bellinger",
    "primaryArtist": "Victor Oladipo",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:07",
    "isrcs": [
      "USUYG1223186"
    ],
    "releaseGroups": [
      "V.O."
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Victor Oladipo feat. Eric Bellinger",
        "duration": "3:07",
        "isrcs": [
          "USUYG1223186"
        ],
        "release_groups": [
          "V.O."
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Just%20in%20You%20Victor%20Oladipo%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Just+in+You+Victor+Oladipo+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Just+in+You+Victor+Oladipo+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Just+in+You+Victor+Oladipo+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Just%20in%20You%20Victor%20Oladipo%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Just+in+You+Victor+Oladipo+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Just+in+You+Victor+Oladipo+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Just+in+You+Victor+Oladipo+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-052",
    "title": "Last Time",
    "variantOrMix": null,
    "artistCredit": "Joe Moses feat. Eric Bellinger",
    "primaryArtist": "Joe Moses",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:07",
    "isrcs": [
      "USUYG1260893"
    ],
    "releaseGroups": [
      "Westside"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Joe Moses feat. Eric Bellinger",
        "duration": "3:07",
        "isrcs": [
          "USUYG1260893"
        ],
        "release_groups": [
          "Westside"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Last%20Time%20Joe%20Moses%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Last+Time+Joe+Moses+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Last+Time+Joe+Moses+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Last+Time+Joe+Moses+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Last%20Time%20Joe%20Moses%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Last+Time+Joe+Moses+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Last+Time+Joe+Moses+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Last+Time+Joe+Moses+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-053",
    "title": "Living My Best Life",
    "variantOrMix": null,
    "artistCredit": "Jim Jones feat. Eric Bellinger",
    "primaryArtist": "Jim Jones",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:59",
    "isrcs": [
      "USUYG1189783"
    ],
    "releaseGroups": [
      "Wasted Talent"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Jim Jones feat. Eric Bellinger",
        "duration": "2:59",
        "isrcs": [
          "USUYG1189783"
        ],
        "release_groups": [
          "Wasted Talent"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Living%20My%20Best%20Life%20Jim%20Jones%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Living+My+Best+Life+Jim+Jones+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Living+My+Best+Life+Jim+Jones+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Living+My+Best+Life+Jim+Jones+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Living%20My%20Best%20Life%20Jim%20Jones%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Living+My+Best+Life+Jim+Jones+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Living+My+Best+Life+Jim+Jones+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Living+My+Best+Life+Jim+Jones+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-054",
    "title": "Long Distance Love",
    "variantOrMix": null,
    "artistCredit": "Bulby York feat. Eric Bellinger & Candy Gloster",
    "primaryArtist": "Bulby York",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Candy Gloster"
    ],
    "duration": "3:53",
    "isrcs": [],
    "releaseGroups": [
      "Epic & Ting"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Bulby York feat. Eric Bellinger & Candy Gloster",
        "duration": "3:53",
        "isrcs": [],
        "release_groups": [
          "Epic & Ting"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Long%20Distance%20Love%20Bulby%20York%20feat.%20Eric%20Bellinger%20%26%20Candy%20Gloster",
        "apple_music_search": "https://music.apple.com/us/search?term=Long+Distance+Love+Bulby+York+feat.+Eric+Bellinger+%26+Candy+Gloster",
        "youtube_music_search": "https://music.youtube.com/search?q=Long+Distance+Love+Bulby+York+feat.+Eric+Bellinger+%26+Candy+Gloster",
        "youtube_search": "https://www.youtube.com/results?search_query=Long+Distance+Love+Bulby+York+feat.+Eric+Bellinger+%26+Candy+Gloster",
        "deezer_search": "https://www.deezer.com/search/Long%20Distance%20Love%20Bulby%20York%20feat.%20Eric%20Bellinger%20%26%20Candy%20Gloster",
        "tidal_search": "https://listen.tidal.com/search?q=Long+Distance+Love+Bulby+York+feat.+Eric+Bellinger+%26+Candy+Gloster",
        "amazon_music_search": "https://music.amazon.com/search/Long+Distance+Love+Bulby+York+feat.+Eric+Bellinger+%26+Candy+Gloster",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Long+Distance+Love+Bulby+York+feat.+Eric+Bellinger+%26+Candy+Gloster"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-055",
    "title": "Make Me - Remix",
    "variantOrMix": null,
    "artistCredit": "Teedra Moses feat. Eric Bellinger & Curren$y",
    "primaryArtist": "Teedra Moses",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Curren$y"
    ],
    "duration": "3:42",
    "isrcs": [
      "CAK472200601"
    ],
    "releaseGroups": [
      "Make Me (remix)"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Teedra Moses feat. Eric Bellinger & Curren$y",
        "duration": "3:42",
        "isrcs": [
          "CAK472200601"
        ],
        "release_groups": [
          "Make Me (remix)"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Make%20Me%20-%20Remix%20Teedra%20Moses%20feat.%20Eric%20Bellinger%20%26%20Curren%24y",
        "apple_music_search": "https://music.apple.com/us/search?term=Make+Me+-+Remix+Teedra+Moses+feat.+Eric+Bellinger+%26+Curren%24y",
        "youtube_music_search": "https://music.youtube.com/search?q=Make+Me+-+Remix+Teedra+Moses+feat.+Eric+Bellinger+%26+Curren%24y",
        "youtube_search": "https://www.youtube.com/results?search_query=Make+Me+-+Remix+Teedra+Moses+feat.+Eric+Bellinger+%26+Curren%24y",
        "deezer_search": "https://www.deezer.com/search/Make%20Me%20-%20Remix%20Teedra%20Moses%20feat.%20Eric%20Bellinger%20%26%20Curren%24y",
        "tidal_search": "https://listen.tidal.com/search?q=Make+Me+-+Remix+Teedra+Moses+feat.+Eric+Bellinger+%26+Curren%24y",
        "amazon_music_search": "https://music.amazon.com/search/Make+Me+-+Remix+Teedra+Moses+feat.+Eric+Bellinger+%26+Curren%24y",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Make+Me+-+Remix+Teedra+Moses+feat.+Eric+Bellinger+%26+Curren%24y"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=3"
    },
    "notes": null
  },
  {
    "id": "fa-056",
    "title": "My Blessing",
    "variantOrMix": null,
    "artistCredit": "Grafh feat. Eric Bellinger",
    "primaryArtist": "Grafh",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:12",
    "isrcs": [],
    "releaseGroups": [
      "Good Energy"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Grafh feat. Eric Bellinger",
        "duration": "4:12",
        "isrcs": [],
        "release_groups": [
          "Good Energy"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/My%20Blessing%20Grafh%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=My+Blessing+Grafh+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=My+Blessing+Grafh+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=My+Blessing+Grafh+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/My%20Blessing%20Grafh%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=My+Blessing+Grafh+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/My+Blessing+Grafh+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=My+Blessing+Grafh+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-057",
    "title": "My Yang",
    "variantOrMix": null,
    "artistCredit": "Rayven Justice & Eric Bellinger",
    "primaryArtist": "Rayven Justice",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:57",
    "isrcs": [
      "USUYG1054708"
    ],
    "releaseGroups": [
      "I Have A Dream"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Rayven Justice & Eric Bellinger",
        "duration": "2:57",
        "isrcs": [
          "USUYG1054708"
        ],
        "release_groups": [
          "I Have A Dream"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/My%20Yang%20Rayven%20Justice%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=My+Yang+Rayven+Justice+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=My+Yang+Rayven+Justice+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=My+Yang+Rayven+Justice+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/My%20Yang%20Rayven%20Justice%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=My+Yang+Rayven+Justice+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/My+Yang+Rayven+Justice+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=My+Yang+Rayven+Justice+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-058",
    "title": "Nasty",
    "variantOrMix": null,
    "artistCredit": "Kirko Bangz feat. Eric Bellinger",
    "primaryArtist": "Kirko Bangz",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:33",
    "isrcs": [],
    "releaseGroups": [
      "Now That U Here"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Kirko Bangz feat. Eric Bellinger",
        "duration": "2:33",
        "isrcs": [],
        "release_groups": [
          "Now That U Here"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Nasty%20Kirko%20Bangz%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Nasty+Kirko+Bangz+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Nasty+Kirko+Bangz+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Nasty+Kirko+Bangz+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Nasty%20Kirko%20Bangz%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Nasty+Kirko+Bangz+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Nasty+Kirko+Bangz+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Nasty+Kirko+Bangz+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-059",
    "title": "New Oldie",
    "variantOrMix": "Clean",
    "artistCredit": "Eric Bellinger, Snoop Dogg & Usher",
    "primaryArtist": "Eric Bellinger",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Snoop Dogg",
      "Usher"
    ],
    "duration": "3:20",
    "isrcs": [
      "USRC12103465"
    ],
    "releaseGroups": [
      "Snoop Dogg Presents Algorithm"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Eric Bellinger, Snoop Dogg & Usher",
        "duration": "3:20",
        "isrcs": [
          "USRC12103465"
        ],
        "release_groups": [
          "Snoop Dogg Presents Algorithm"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/New%20Oldie%20Eric%20Bellinger%2C%20Snoop%20Dogg%20%26%20Usher",
        "apple_music_search": "https://music.apple.com/us/search?term=New+Oldie+Eric+Bellinger%2C+Snoop+Dogg+%26+Usher",
        "youtube_music_search": "https://music.youtube.com/search?q=New+Oldie+Eric+Bellinger%2C+Snoop+Dogg+%26+Usher",
        "youtube_search": "https://www.youtube.com/results?search_query=New+Oldie+Eric+Bellinger%2C+Snoop+Dogg+%26+Usher",
        "deezer_search": "https://www.deezer.com/search/New%20Oldie%20Eric%20Bellinger%2C%20Snoop%20Dogg%20%26%20Usher",
        "tidal_search": "https://listen.tidal.com/search?q=New+Oldie+Eric+Bellinger%2C+Snoop+Dogg+%26+Usher",
        "amazon_music_search": "https://music.amazon.com/search/New+Oldie+Eric+Bellinger%2C+Snoop+Dogg+%26+Usher",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=New+Oldie+Eric+Bellinger%2C+Snoop+Dogg+%26+Usher"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": "Primary artist display starts with Eric Bellinger, but the release group is a Snoop Dogg project; included as a co-billed appearance."
  },
  {
    "id": "fa-060",
    "title": "New Oldie",
    "variantOrMix": "Global edition",
    "artistCredit": "Snoop Dogg & Eric Bellinger feat. Glenn Lewis",
    "primaryArtist": "Snoop Dogg",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Glenn Lewis"
    ],
    "duration": "2:58",
    "isrcs": [
      "USUG12106345"
    ],
    "releaseGroups": [
      "Snoop Dogg Presents Algorithm"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Snoop Dogg & Eric Bellinger feat. Glenn Lewis",
        "duration": "2:58",
        "isrcs": [
          "USUG12106345"
        ],
        "release_groups": [
          "Snoop Dogg Presents Algorithm"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/New%20Oldie%20Snoop%20Dogg%20%26%20Eric%20Bellinger%20feat.%20Glenn%20Lewis",
        "apple_music_search": "https://music.apple.com/us/search?term=New+Oldie+Snoop+Dogg+%26+Eric+Bellinger+feat.+Glenn+Lewis",
        "youtube_music_search": "https://music.youtube.com/search?q=New+Oldie+Snoop+Dogg+%26+Eric+Bellinger+feat.+Glenn+Lewis",
        "youtube_search": "https://www.youtube.com/results?search_query=New+Oldie+Snoop+Dogg+%26+Eric+Bellinger+feat.+Glenn+Lewis",
        "deezer_search": "https://www.deezer.com/search/New%20Oldie%20Snoop%20Dogg%20%26%20Eric%20Bellinger%20feat.%20Glenn%20Lewis",
        "tidal_search": "https://listen.tidal.com/search?q=New+Oldie+Snoop+Dogg+%26+Eric+Bellinger+feat.+Glenn+Lewis",
        "amazon_music_search": "https://music.amazon.com/search/New+Oldie+Snoop+Dogg+%26+Eric+Bellinger+feat.+Glenn+Lewis",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=New+Oldie+Snoop+Dogg+%26+Eric+Bellinger+feat.+Glenn+Lewis"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-061",
    "title": "Newness",
    "variantOrMix": null,
    "artistCredit": "Jade Novah & Eric Bellinger",
    "primaryArtist": "Jade Novah",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:53",
    "isrcs": [],
    "releaseGroups": [
      "Stages"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Jade Novah & Eric Bellinger",
        "duration": "3:53",
        "isrcs": [],
        "release_groups": [
          "Stages"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Newness%20Jade%20Novah%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Newness+Jade+Novah+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Newness+Jade+Novah+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Newness+Jade+Novah+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Newness%20Jade%20Novah%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Newness+Jade+Novah+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Newness+Jade+Novah+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Newness+Jade+Novah+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-062",
    "title": "No Flutes",
    "variantOrMix": null,
    "artistCredit": "Angel feat. Eric Bellinger",
    "primaryArtist": "Angel",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:54",
    "isrcs": [],
    "releaseGroups": [
      "Woman"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Angel feat. Eric Bellinger",
        "duration": "3:54",
        "isrcs": [],
        "release_groups": [
          "Woman"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/No%20Flutes%20Angel%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=No+Flutes+Angel+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=No+Flutes+Angel+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=No+Flutes+Angel+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/No%20Flutes%20Angel%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=No+Flutes+Angel+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/No+Flutes+Angel+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=No+Flutes+Angel+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-063",
    "title": "No Sleep",
    "variantOrMix": null,
    "artistCredit": "I.D. feat. Eric Bellinger",
    "primaryArtist": "I.D.",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:18",
    "isrcs": [],
    "releaseGroups": [
      "No Sleep"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "I.D. feat. Eric Bellinger",
        "duration": "3:18",
        "isrcs": [],
        "release_groups": [
          "No Sleep"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/No%20Sleep%20I.D.%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=No+Sleep+I.D.+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=No+Sleep+I.D.+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=No+Sleep+I.D.+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/No%20Sleep%20I.D.%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=No+Sleep+I.D.+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/No+Sleep+I.D.+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=No+Sleep+I.D.+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-064",
    "title": "Nothing",
    "variantOrMix": null,
    "artistCredit": "Mase feat. Eric Bellinger",
    "primaryArtist": "Mase",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:01",
    "isrcs": [],
    "releaseGroups": [
      "Nothing"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mase feat. Eric Bellinger",
        "duration": "3:01",
        "isrcs": [],
        "release_groups": [
          "Nothing"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Nothing%20Mase%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Nothing+Mase+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Nothing+Mase+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Nothing+Mase+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Nothing%20Mase%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Nothing+Mase+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Nothing+Mase+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Nothing+Mase+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-065",
    "title": "On My Way",
    "variantOrMix": null,
    "artistCredit": "DJ Era feat. O.T. Genasis, Eric Bellinger",
    "primaryArtist": "DJ Era",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "O.T. Genasis",
      "Eric Bellinger"
    ],
    "duration": null,
    "isrcs": [],
    "releaseGroups": [],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "DJ Era feat. O.T. Genasis, Eric Bellinger",
        "duration": null,
        "isrcs": [],
        "release_groups": []
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/On%20My%20Way%20DJ%20Era%20feat.%20O.T.%20Genasis%2C%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=On+My+Way+DJ+Era+feat.+O.T.+Genasis%2C+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=On+My+Way+DJ+Era+feat.+O.T.+Genasis%2C+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=On+My+Way+DJ+Era+feat.+O.T.+Genasis%2C+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/On%20My%20Way%20DJ%20Era%20feat.%20O.T.%20Genasis%2C%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=On+My+Way+DJ+Era+feat.+O.T.+Genasis%2C+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/On+My+Way+DJ+Era+feat.+O.T.+Genasis%2C+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=On+My+Way+DJ+Era+feat.+O.T.+Genasis%2C+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-066",
    "title": "On My Way",
    "variantOrMix": null,
    "artistCredit": "O.T. Genasis, Eric Bellinger, AD & DJ Era",
    "primaryArtist": "O.T. Genasis",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "AD",
      "DJ Era"
    ],
    "duration": "2:33",
    "isrcs": [],
    "releaseGroups": [
      "On My Way"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "O.T. Genasis, Eric Bellinger, AD & DJ Era",
        "duration": "2:33",
        "isrcs": [],
        "release_groups": [
          "On My Way"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/On%20My%20Way%20O.T.%20Genasis%2C%20Eric%20Bellinger%2C%20AD%20%26%20DJ%20Era",
        "apple_music_search": "https://music.apple.com/us/search?term=On+My+Way+O.T.+Genasis%2C+Eric+Bellinger%2C+AD+%26+DJ+Era",
        "youtube_music_search": "https://music.youtube.com/search?q=On+My+Way+O.T.+Genasis%2C+Eric+Bellinger%2C+AD+%26+DJ+Era",
        "youtube_search": "https://www.youtube.com/results?search_query=On+My+Way+O.T.+Genasis%2C+Eric+Bellinger%2C+AD+%26+DJ+Era",
        "deezer_search": "https://www.deezer.com/search/On%20My%20Way%20O.T.%20Genasis%2C%20Eric%20Bellinger%2C%20AD%20%26%20DJ%20Era",
        "tidal_search": "https://listen.tidal.com/search?q=On+My+Way+O.T.+Genasis%2C+Eric+Bellinger%2C+AD+%26+DJ+Era",
        "amazon_music_search": "https://music.amazon.com/search/On+My+Way+O.T.+Genasis%2C+Eric+Bellinger%2C+AD+%26+DJ+Era",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=On+My+Way+O.T.+Genasis%2C+Eric+Bellinger%2C+AD+%26+DJ+Era"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-067",
    "title": "On the Green",
    "variantOrMix": null,
    "artistCredit": "Mistah F.A.B. feat. Eric Bellinger",
    "primaryArtist": "Mistah F.A.B.",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:02",
    "isrcs": [
      "USUYG1281057"
    ],
    "releaseGroups": [
      "Cuban Cigars & Rose Champagne"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mistah F.A.B. feat. Eric Bellinger",
        "duration": "3:02",
        "isrcs": [
          "USUYG1281057"
        ],
        "release_groups": [
          "Cuban Cigars & Rose Champagne"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/On%20the%20Green%20Mistah%20F.A.B.%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=On+the+Green+Mistah+F.A.B.+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=On+the+Green+Mistah+F.A.B.+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=On+the+Green+Mistah+F.A.B.+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/On%20the%20Green%20Mistah%20F.A.B.%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=On+the+Green+Mistah+F.A.B.+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/On+the+Green+Mistah+F.A.B.+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=On+the+Green+Mistah+F.A.B.+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-068",
    "title": "On the Low",
    "variantOrMix": null,
    "artistCredit": "Angel, Eric Bellinger & Wretch 32",
    "primaryArtist": "Angel",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Wretch 32"
    ],
    "duration": "5:08",
    "isrcs": [],
    "releaseGroups": [
      "Possession With Intent"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Angel, Eric Bellinger & Wretch 32",
        "duration": "5:08",
        "isrcs": [],
        "release_groups": [
          "Possession With Intent"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/On%20the%20Low%20Angel%2C%20Eric%20Bellinger%20%26%20Wretch%2032",
        "apple_music_search": "https://music.apple.com/us/search?term=On+the+Low+Angel%2C+Eric+Bellinger+%26+Wretch+32",
        "youtube_music_search": "https://music.youtube.com/search?q=On+the+Low+Angel%2C+Eric+Bellinger+%26+Wretch+32",
        "youtube_search": "https://www.youtube.com/results?search_query=On+the+Low+Angel%2C+Eric+Bellinger+%26+Wretch+32",
        "deezer_search": "https://www.deezer.com/search/On%20the%20Low%20Angel%2C%20Eric%20Bellinger%20%26%20Wretch%2032",
        "tidal_search": "https://listen.tidal.com/search?q=On+the+Low+Angel%2C+Eric+Bellinger+%26+Wretch+32",
        "amazon_music_search": "https://music.amazon.com/search/On+the+Low+Angel%2C+Eric+Bellinger+%26+Wretch+32",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=On+the+Low+Angel%2C+Eric+Bellinger+%26+Wretch+32"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-069",
    "title": "On the Low",
    "variantOrMix": "Remix",
    "artistCredit": "Angel feat. Jeremih, Eric Bellinger, Dappy & Wretch 32",
    "primaryArtist": "Angel",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Jeremih",
      "Eric Bellinger",
      "Dappy",
      "Wretch 32"
    ],
    "duration": "5:22",
    "isrcs": [
      "GBUM71503674"
    ],
    "releaseGroups": [
      "Leyla"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Angel feat. Jeremih, Eric Bellinger, Dappy & Wretch 32",
        "duration": "5:22",
        "isrcs": [
          "GBUM71503674"
        ],
        "release_groups": [
          "Leyla"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/On%20the%20Low%20Angel%20feat.%20Jeremih%2C%20Eric%20Bellinger%2C%20Dappy%20%26%20Wretch%2032",
        "apple_music_search": "https://music.apple.com/us/search?term=On+the+Low+Angel+feat.+Jeremih%2C+Eric+Bellinger%2C+Dappy+%26+Wretch+32",
        "youtube_music_search": "https://music.youtube.com/search?q=On+the+Low+Angel+feat.+Jeremih%2C+Eric+Bellinger%2C+Dappy+%26+Wretch+32",
        "youtube_search": "https://www.youtube.com/results?search_query=On+the+Low+Angel+feat.+Jeremih%2C+Eric+Bellinger%2C+Dappy+%26+Wretch+32",
        "deezer_search": "https://www.deezer.com/search/On%20the%20Low%20Angel%20feat.%20Jeremih%2C%20Eric%20Bellinger%2C%20Dappy%20%26%20Wretch%2032",
        "tidal_search": "https://listen.tidal.com/search?q=On+the+Low+Angel+feat.+Jeremih%2C+Eric+Bellinger%2C+Dappy+%26+Wretch+32",
        "amazon_music_search": "https://music.amazon.com/search/On+the+Low+Angel+feat.+Jeremih%2C+Eric+Bellinger%2C+Dappy+%26+Wretch+32",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=On+the+Low+Angel+feat.+Jeremih%2C+Eric+Bellinger%2C+Dappy+%26+Wretch+32"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-070",
    "title": "One Mo Gin",
    "variantOrMix": null,
    "artistCredit": "AD feat. Eric Bellinger",
    "primaryArtist": "AD",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:30",
    "isrcs": [
      "USLD91714911"
    ],
    "releaseGroups": [
      "Regional Departure"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "AD feat. Eric Bellinger",
        "duration": "2:30",
        "isrcs": [
          "USLD91714911"
        ],
        "release_groups": [
          "Regional Departure"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/One%20Mo%20Gin%20AD%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=One+Mo+Gin+AD+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=One+Mo+Gin+AD+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=One+Mo+Gin+AD+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/One%20Mo%20Gin%20AD%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=One+Mo+Gin+AD+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/One+Mo+Gin+AD+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=One+Mo+Gin+AD+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-071",
    "title": "One Reason (Flex)",
    "variantOrMix": null,
    "artistCredit": "Wale & Eric Bellinger",
    "primaryArtist": "Wale",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": null,
    "isrcs": [],
    "releaseGroups": [
      "One Reason (Flex)"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Wale & Eric Bellinger",
        "duration": null,
        "isrcs": [],
        "release_groups": [
          "One Reason (Flex)"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/One%20Reason%20%28Flex%29%20Wale%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=One+Reason+%28Flex%29+Wale+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=One+Reason+%28Flex%29+Wale+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=One+Reason+%28Flex%29+Wale+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/One%20Reason%20%28Flex%29%20Wale%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=One+Reason+%28Flex%29+Wale+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/One+Reason+%28Flex%29+Wale+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=One+Reason+%28Flex%29+Wale+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-072",
    "title": "One Reason (Flex)",
    "variantOrMix": null,
    "artistCredit": "Wale feat. Eric Bellinger",
    "primaryArtist": "Wale",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:10",
    "isrcs": [],
    "releaseGroups": [
      "Priorities 5"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Wale feat. Eric Bellinger",
        "duration": "3:10",
        "isrcs": [],
        "release_groups": [
          "Priorities 5"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/One%20Reason%20%28Flex%29%20Wale%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=One+Reason+%28Flex%29+Wale+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=One+Reason+%28Flex%29+Wale+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=One+Reason+%28Flex%29+Wale+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/One%20Reason%20%28Flex%29%20Wale%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=One+Reason+%28Flex%29+Wale+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/One+Reason+%28Flex%29+Wale+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=One+Reason+%28Flex%29+Wale+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-073",
    "title": "Or Nah",
    "variantOrMix": null,
    "artistCredit": "The Game feat. Too $hort, Problem, AV & Eric Bellinger",
    "primaryArtist": "The Game",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Too $hort",
      "Problem",
      "AV",
      "Eric Bellinger"
    ],
    "duration": "4:14",
    "isrcs": [],
    "releaseGroups": [
      "Or Nah"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "The Game feat. Too $hort, Problem, AV & Eric Bellinger",
        "duration": "4:14",
        "isrcs": [],
        "release_groups": [
          "Or Nah"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Or%20Nah%20The%20Game%20feat.%20Too%20%24hort%2C%20Problem%2C%20AV%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Or%20Nah%20The%20Game%20feat.%20Too%20%24hort%2C%20Problem%2C%20AV%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-074",
    "title": "Or Nah",
    "variantOrMix": null,
    "artistCredit": "The Game feat. Too $hort, Problem, AV & Eric Bellinger",
    "primaryArtist": "The Game",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Too $hort",
      "Problem",
      "AV",
      "Eric Bellinger"
    ],
    "duration": "4:14",
    "isrcs": [
      "USKO11401016"
    ],
    "releaseGroups": [
      "Blood Moon: Year of the Wolf"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "The Game feat. Too $hort, Problem, AV & Eric Bellinger",
        "duration": "4:14",
        "isrcs": [
          "USKO11401016"
        ],
        "release_groups": [
          "Blood Moon: Year of the Wolf"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Or%20Nah%20The%20Game%20feat.%20Too%20%24hort%2C%20Problem%2C%20AV%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Or%20Nah%20The%20Game%20feat.%20Too%20%24hort%2C%20Problem%2C%20AV%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=4"
    },
    "notes": null
  },
  {
    "id": "fa-075",
    "title": "Questions",
    "variantOrMix": null,
    "artistCredit": "DJ Luke Nasty & Eric Bellinger",
    "primaryArtist": "DJ Luke Nasty",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:55",
    "isrcs": [],
    "releaseGroups": [
      "Highway Music 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "DJ Luke Nasty & Eric Bellinger",
        "duration": "3:55",
        "isrcs": [],
        "release_groups": [
          "Highway Music 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Questions%20DJ%20Luke%20Nasty%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Questions+DJ+Luke+Nasty+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Questions+DJ+Luke+Nasty+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Questions+DJ+Luke+Nasty+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Questions%20DJ%20Luke%20Nasty%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Questions+DJ+Luke+Nasty+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Questions+DJ+Luke+Nasty+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Questions+DJ+Luke+Nasty+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-076",
    "title": "Read Receipts",
    "variantOrMix": null,
    "artistCredit": "Sy Ari da Kid feat. Eric Bellinger",
    "primaryArtist": "Sy Ari da Kid",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:29",
    "isrcs": [],
    "releaseGroups": [
      "After the Heartbreak"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Sy Ari da Kid feat. Eric Bellinger",
        "duration": "4:29",
        "isrcs": [],
        "release_groups": [
          "After the Heartbreak"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Read%20Receipts%20Sy%20Ari%20da%20Kid%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Read%20Receipts%20Sy%20Ari%20da%20Kid%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-077",
    "title": "Read Receipts",
    "variantOrMix": null,
    "artistCredit": "Sy Ari da Kid feat. Eric Bellinger",
    "primaryArtist": "Sy Ari da Kid",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:31",
    "isrcs": [],
    "releaseGroups": [
      "Sy Ari & R&B Friends"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Sy Ari da Kid feat. Eric Bellinger",
        "duration": "4:31",
        "isrcs": [],
        "release_groups": [
          "Sy Ari & R&B Friends"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Read%20Receipts%20Sy%20Ari%20da%20Kid%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Read%20Receipts%20Sy%20Ari%20da%20Kid%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Read+Receipts+Sy+Ari+da+Kid+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-078",
    "title": "Ready for It",
    "variantOrMix": null,
    "artistCredit": "Kevin Ross & Eric Bellinger",
    "primaryArtist": "Kevin Ross",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:27",
    "isrcs": [
      "USUYG1498590"
    ],
    "releaseGroups": [
      "Ready for It",
      "Midnight Microdose, Vol. 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Kevin Ross & Eric Bellinger",
        "duration": "2:27",
        "isrcs": [
          "USUYG1498590"
        ],
        "release_groups": [
          "Ready for It",
          "Midnight Microdose, Vol. 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Ready%20for%20It%20Kevin%20Ross%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Ready+for+It+Kevin+Ross+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Ready+for+It+Kevin+Ross+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Ready+for+It+Kevin+Ross+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Ready%20for%20It%20Kevin%20Ross%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Ready+for+It+Kevin+Ross+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Ready+for+It+Kevin+Ross+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Ready+for+It+Kevin+Ross+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-079",
    "title": "Real Emotions",
    "variantOrMix": null,
    "artistCredit": "Elliott Trent feat. Eric Bellinger",
    "primaryArtist": "Elliott Trent",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:51",
    "isrcs": [
      "QZHN31954915"
    ],
    "releaseGroups": [
      "The DownTime"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Elliott Trent feat. Eric Bellinger",
        "duration": "3:51",
        "isrcs": [
          "QZHN31954915"
        ],
        "release_groups": [
          "The DownTime"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Real%20Emotions%20Elliott%20Trent%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Real+Emotions+Elliott+Trent+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Real+Emotions+Elliott+Trent+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Real+Emotions+Elliott+Trent+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Real%20Emotions%20Elliott%20Trent%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Real+Emotions+Elliott+Trent+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Real+Emotions+Elliott+Trent+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Real+Emotions+Elliott+Trent+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-080",
    "title": "Rich Sex",
    "variantOrMix": null,
    "artistCredit": "Konshens feat. Eric Bellinger & Moyann",
    "primaryArtist": "Konshens",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger",
      "Moyann"
    ],
    "duration": "3:04",
    "isrcs": [],
    "releaseGroups": [
      "Pool Party"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Konshens feat. Eric Bellinger & Moyann",
        "duration": "3:04",
        "isrcs": [],
        "release_groups": [
          "Pool Party"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Rich%20Sex%20Konshens%20feat.%20Eric%20Bellinger%20%26%20Moyann",
        "apple_music_search": "https://music.apple.com/us/search?term=Rich+Sex+Konshens+feat.+Eric+Bellinger+%26+Moyann",
        "youtube_music_search": "https://music.youtube.com/search?q=Rich+Sex+Konshens+feat.+Eric+Bellinger+%26+Moyann",
        "youtube_search": "https://www.youtube.com/results?search_query=Rich+Sex+Konshens+feat.+Eric+Bellinger+%26+Moyann",
        "deezer_search": "https://www.deezer.com/search/Rich%20Sex%20Konshens%20feat.%20Eric%20Bellinger%20%26%20Moyann",
        "tidal_search": "https://listen.tidal.com/search?q=Rich+Sex+Konshens+feat.+Eric+Bellinger+%26+Moyann",
        "amazon_music_search": "https://music.amazon.com/search/Rich+Sex+Konshens+feat.+Eric+Bellinger+%26+Moyann",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Rich+Sex+Konshens+feat.+Eric+Bellinger+%26+Moyann"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-081",
    "title": "Right Away",
    "variantOrMix": null,
    "artistCredit": "Audio Push feat. Eric Bellinger",
    "primaryArtist": "Audio Push",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:35",
    "isrcs": [],
    "releaseGroups": [
      "No Rest... For the Blessed"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Audio Push feat. Eric Bellinger",
        "duration": "2:35",
        "isrcs": [],
        "release_groups": [
          "No Rest... For the Blessed"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Right%20Away%20Audio%20Push%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Right+Away+Audio+Push+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Right+Away+Audio+Push+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Right+Away+Audio+Push+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Right%20Away%20Audio%20Push%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Right+Away+Audio+Push+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Right+Away+Audio+Push+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Right+Away+Audio+Push+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-082",
    "title": "Right Here",
    "variantOrMix": null,
    "artistCredit": "Wale feat. Eric Bellinger",
    "primaryArtist": "Wale",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:42",
    "isrcs": [
      "USWB11801965"
    ],
    "releaseGroups": [
      "Free Lunch"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Wale feat. Eric Bellinger",
        "duration": "3:42",
        "isrcs": [
          "USWB11801965"
        ],
        "release_groups": [
          "Free Lunch"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Right%20Here%20Wale%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Right+Here+Wale+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Right+Here+Wale+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Right+Here+Wale+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Right%20Here%20Wale%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Right+Here+Wale+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Right+Here+Wale+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Right+Here+Wale+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-083",
    "title": "Ruthless",
    "variantOrMix": null,
    "artistCredit": "Bone Thugs feat. Layzie Bone, Flesh-N-Bone, Eric Bellinger",
    "primaryArtist": "Bone Thugs",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Layzie Bone",
      "Flesh-N-Bone",
      "Eric Bellinger"
    ],
    "duration": "4:03",
    "isrcs": [
      "USKO11700425"
    ],
    "releaseGroups": [
      "New Waves"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Bone Thugs feat. Layzie Bone, Flesh-N-Bone, Eric Bellinger",
        "duration": "4:03",
        "isrcs": [
          "USKO11700425"
        ],
        "release_groups": [
          "New Waves"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Ruthless%20Bone%20Thugs%20feat.%20Layzie%20Bone%2C%20Flesh-N-Bone%2C%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Ruthless+Bone+Thugs+feat.+Layzie+Bone%2C+Flesh-N-Bone%2C+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Ruthless+Bone+Thugs+feat.+Layzie+Bone%2C+Flesh-N-Bone%2C+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Ruthless+Bone+Thugs+feat.+Layzie+Bone%2C+Flesh-N-Bone%2C+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Ruthless%20Bone%20Thugs%20feat.%20Layzie%20Bone%2C%20Flesh-N-Bone%2C%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Ruthless+Bone+Thugs+feat.+Layzie+Bone%2C+Flesh-N-Bone%2C+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Ruthless+Bone+Thugs+feat.+Layzie+Bone%2C+Flesh-N-Bone%2C+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Ruthless+Bone+Thugs+feat.+Layzie+Bone%2C+Flesh-N-Bone%2C+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-084",
    "title": "Same Page",
    "variantOrMix": null,
    "artistCredit": "Mýa feat. Eric Bellinger",
    "primaryArtist": "Mýa",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:58",
    "isrcs": [],
    "releaseGroups": [
      "Sweet XVI"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Mýa feat. Eric Bellinger",
        "duration": "2:58",
        "isrcs": [],
        "release_groups": [
          "Sweet XVI"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Same%20Page%20M%C3%BDa%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Same+Page+M%C3%BDa+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Same+Page+M%C3%BDa+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Same+Page+M%C3%BDa+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Same%20Page%20M%C3%BDa%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Same+Page+M%C3%BDa+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Same+Page+M%C3%BDa+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Same+Page+M%C3%BDa+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-085",
    "title": "Say",
    "variantOrMix": null,
    "artistCredit": "A.D. & Sorry Jaynari feat. Kid Ink & Eric Bellinger",
    "primaryArtist": "A.D.",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Sorry Jaynari",
      "Kid Ink",
      "Eric Bellinger"
    ],
    "duration": "4:05",
    "isrcs": [
      "QZ7SP1700007"
    ],
    "releaseGroups": [
      "Last of the '80s"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "A.D. & Sorry Jaynari feat. Kid Ink & Eric Bellinger",
        "duration": "4:05",
        "isrcs": [
          "QZ7SP1700007"
        ],
        "release_groups": [
          "Last of the '80s"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Say%20A.D.%20%26%20Sorry%20Jaynari%20feat.%20Kid%20Ink%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Say+A.D.+%26+Sorry+Jaynari+feat.+Kid+Ink+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Say+A.D.+%26+Sorry+Jaynari+feat.+Kid+Ink+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Say+A.D.+%26+Sorry+Jaynari+feat.+Kid+Ink+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Say%20A.D.%20%26%20Sorry%20Jaynari%20feat.%20Kid%20Ink%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Say+A.D.+%26+Sorry+Jaynari+feat.+Kid+Ink+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Say+A.D.+%26+Sorry+Jaynari+feat.+Kid+Ink+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Say+A.D.+%26+Sorry+Jaynari+feat.+Kid+Ink+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-086",
    "title": "Second Hand Smoke",
    "variantOrMix": null,
    "artistCredit": "Sage the Gemini feat. Eric Bellinger",
    "primaryArtist": "Sage the Gemini",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:45",
    "isrcs": [
      "USUG11400039"
    ],
    "releaseGroups": [
      "Remember Me"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Sage the Gemini feat. Eric Bellinger",
        "duration": "2:45",
        "isrcs": [
          "USUG11400039"
        ],
        "release_groups": [
          "Remember Me"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Second%20Hand%20Smoke%20Sage%20the%20Gemini%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Second%20Hand%20Smoke%20Sage%20the%20Gemini%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-087",
    "title": "Second Hand Smoke",
    "variantOrMix": "Clean",
    "artistCredit": "Sage the Gemini feat. Eric Bellinger",
    "primaryArtist": "Sage the Gemini",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:45",
    "isrcs": [],
    "releaseGroups": [
      "Remember Me"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Sage the Gemini feat. Eric Bellinger",
        "duration": "2:45",
        "isrcs": [],
        "release_groups": [
          "Remember Me"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Second%20Hand%20Smoke%20Sage%20the%20Gemini%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Second%20Hand%20Smoke%20Sage%20the%20Gemini%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-088",
    "title": "Show and Tell",
    "variantOrMix": null,
    "artistCredit": "Sammie feat. Eric Bellinger",
    "primaryArtist": "Sammie",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:08",
    "isrcs": [],
    "releaseGroups": [
      "Coming of Age"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Sammie feat. Eric Bellinger",
        "duration": "3:08",
        "isrcs": [],
        "release_groups": [
          "Coming of Age"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Show%20and%20Tell%20Sammie%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Show+and+Tell+Sammie+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Show+and+Tell+Sammie+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Show+and+Tell+Sammie+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Show%20and%20Tell%20Sammie%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Show+and+Tell+Sammie+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Show+and+Tell+Sammie+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Show+and+Tell+Sammie+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-089",
    "title": "Slide",
    "variantOrMix": null,
    "artistCredit": "MarMar Oso feat. Eric Bellinger",
    "primaryArtist": "MarMar Oso",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:58",
    "isrcs": [
      "USUYG1327344"
    ],
    "releaseGroups": [
      "Marvin’s Room"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "MarMar Oso feat. Eric Bellinger",
        "duration": "2:58",
        "isrcs": [
          "USUYG1327344"
        ],
        "release_groups": [
          "Marvin’s Room"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Slide%20MarMar%20Oso%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Slide+MarMar+Oso+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Slide+MarMar+Oso+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Slide+MarMar+Oso+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Slide%20MarMar%20Oso%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Slide+MarMar+Oso+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Slide+MarMar+Oso+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Slide+MarMar+Oso+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-090",
    "title": "Slip & Fall",
    "variantOrMix": null,
    "artistCredit": "Elhae feat. Eric Bellinger",
    "primaryArtist": "Elhae",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:01",
    "isrcs": [],
    "releaseGroups": [
      "AURA II"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Elhae feat. Eric Bellinger",
        "duration": "3:01",
        "isrcs": [],
        "release_groups": [
          "AURA II"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Slip%20%26%20Fall%20Elhae%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Slip+%26+Fall+Elhae+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Slip+%26+Fall+Elhae+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Slip+%26+Fall+Elhae+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Slip%20%26%20Fall%20Elhae%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Slip+%26+Fall+Elhae+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Slip+%26+Fall+Elhae+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Slip+%26+Fall+Elhae+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-091",
    "title": "Status",
    "variantOrMix": null,
    "artistCredit": "Audio Push feat. Eric Bellinger",
    "primaryArtist": "Audio Push",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "4:31",
    "isrcs": [],
    "releaseGroups": [
      "Cloud 909"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Audio Push feat. Eric Bellinger",
        "duration": "4:31",
        "isrcs": [],
        "release_groups": [
          "Cloud 909"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Status%20Audio%20Push%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Status+Audio+Push+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Status+Audio+Push+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Status+Audio+Push+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Status%20Audio%20Push%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Status+Audio+Push+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Status+Audio+Push+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Status+Audio+Push+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-092",
    "title": "Stay Away",
    "variantOrMix": "Explicit",
    "artistCredit": "E-40 feat. Eric Bellinger",
    "primaryArtist": "E-40",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:39",
    "isrcs": [
      "US4KV1600030"
    ],
    "releaseGroups": [
      "The D-Boy Diary (deluxe edition)",
      "The D-Boy Diary, Book 1"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "E-40 feat. Eric Bellinger",
        "duration": "3:39",
        "isrcs": [
          "US4KV1600030"
        ],
        "release_groups": [
          "The D-Boy Diary (deluxe edition)",
          "The D-Boy Diary, Book 1"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Stay%20Away%20E-40%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Stay+Away+E-40+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Stay+Away+E-40+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Stay+Away+E-40+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Stay%20Away%20E-40%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Stay+Away+E-40+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Stay+Away+E-40+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Stay+Away+E-40+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-093",
    "title": "Survivor's Remorse",
    "variantOrMix": null,
    "artistCredit": "Smoke DZA feat. Dom Kennedy, Jay 305 & Eric Bellinger",
    "primaryArtist": "Smoke DZA",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Dom Kennedy",
      "Jay 305",
      "Eric Bellinger"
    ],
    "duration": "4:19",
    "isrcs": [
      "QMKSC1901216"
    ],
    "releaseGroups": [
      "Homegrown"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Smoke DZA feat. Dom Kennedy, Jay 305 & Eric Bellinger",
        "duration": "4:19",
        "isrcs": [
          "QMKSC1901216"
        ],
        "release_groups": [
          "Homegrown"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Survivor%27s%20Remorse%20Smoke%20DZA%20feat.%20Dom%20Kennedy%2C%20Jay%20305%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Survivor%27s+Remorse+Smoke+DZA+feat.+Dom+Kennedy%2C+Jay+305+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Survivor%27s+Remorse+Smoke+DZA+feat.+Dom+Kennedy%2C+Jay+305+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Survivor%27s+Remorse+Smoke+DZA+feat.+Dom+Kennedy%2C+Jay+305+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Survivor%27s%20Remorse%20Smoke%20DZA%20feat.%20Dom%20Kennedy%2C%20Jay%20305%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Survivor%27s+Remorse+Smoke+DZA+feat.+Dom+Kennedy%2C+Jay+305+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Survivor%27s+Remorse+Smoke+DZA+feat.+Dom+Kennedy%2C+Jay+305+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Survivor%27s+Remorse+Smoke+DZA+feat.+Dom+Kennedy%2C+Jay+305+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=5"
    },
    "notes": null
  },
  {
    "id": "fa-094",
    "title": "Tables Turn",
    "variantOrMix": null,
    "artistCredit": "Beanz feat. Eric Bellinger",
    "primaryArtist": "Beanz",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:35",
    "isrcs": [],
    "releaseGroups": [
      "Tables Turn"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Beanz feat. Eric Bellinger",
        "duration": "2:35",
        "isrcs": [],
        "release_groups": [
          "Tables Turn"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Tables%20Turn%20Beanz%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Tables+Turn+Beanz+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Tables+Turn+Beanz+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Tables+Turn+Beanz+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Tables%20Turn%20Beanz%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Tables+Turn+Beanz+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Tables+Turn+Beanz+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Tables+Turn+Beanz+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-095",
    "title": "Taboo",
    "variantOrMix": "Clean",
    "artistCredit": "Queen Naija & Eric Bellinger",
    "primaryArtist": "Queen Naija",
    "ericBellingerRoleInCredit": "co_billed_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:01",
    "isrcs": [
      "USUG12309402"
    ],
    "releaseGroups": [
      "After the Butterflies"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Queen Naija & Eric Bellinger",
        "duration": "3:01",
        "isrcs": [
          "USUG12309402"
        ],
        "release_groups": [
          "After the Butterflies"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Taboo%20Queen%20Naija%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Taboo+Queen+Naija+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Taboo+Queen+Naija+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Taboo+Queen+Naija+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Taboo%20Queen%20Naija%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Taboo+Queen+Naija+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Taboo+Queen+Naija+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Taboo+Queen+Naija+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-096",
    "title": "Taboo",
    "variantOrMix": "Explicit",
    "artistCredit": "Queen Naija feat. Eric Bellinger",
    "primaryArtist": "Queen Naija",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:00",
    "isrcs": [
      "USUG12205904"
    ],
    "releaseGroups": [
      "After the Butterflies"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Queen Naija feat. Eric Bellinger",
        "duration": "3:00",
        "isrcs": [
          "USUG12205904"
        ],
        "release_groups": [
          "After the Butterflies"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Taboo%20Queen%20Naija%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Taboo+Queen+Naija+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Taboo+Queen+Naija+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Taboo+Queen+Naija+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Taboo%20Queen%20Naija%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Taboo+Queen+Naija+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Taboo+Queen+Naija+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Taboo+Queen+Naija+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-097",
    "title": "The One",
    "variantOrMix": null,
    "artistCredit": "Connie Diiamond feat. Fabolous & Eric Bellinger",
    "primaryArtist": "Connie Diiamond",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Fabolous",
      "Eric Bellinger"
    ],
    "duration": "2:21",
    "isrcs": [],
    "releaseGroups": [
      "Underdog Szn 2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Connie Diiamond feat. Fabolous & Eric Bellinger",
        "duration": "2:21",
        "isrcs": [],
        "release_groups": [
          "Underdog Szn 2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/The%20One%20Connie%20Diiamond%20feat.%20Fabolous%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=The+One+Connie+Diiamond+feat.+Fabolous+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=The+One+Connie+Diiamond+feat.+Fabolous+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=The+One+Connie+Diiamond+feat.+Fabolous+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/The%20One%20Connie%20Diiamond%20feat.%20Fabolous%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=The+One+Connie+Diiamond+feat.+Fabolous+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/The+One+Connie+Diiamond+feat.+Fabolous+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=The+One+Connie+Diiamond+feat.+Fabolous+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-098",
    "title": "Treat Yourself",
    "variantOrMix": null,
    "artistCredit": "Wale feat. Eric Bellinger",
    "primaryArtist": "Wale",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": null,
    "isrcs": [],
    "releaseGroups": [
      "Before I SHINE"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Wale feat. Eric Bellinger",
        "duration": null,
        "isrcs": [],
        "release_groups": [
          "Before I SHINE"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Treat%20Yourself%20Wale%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Treat+Yourself+Wale+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Treat+Yourself+Wale+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Treat+Yourself+Wale+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Treat%20Yourself%20Wale%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Treat+Yourself+Wale+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Treat+Yourself+Wale+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Treat+Yourself+Wale+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-099",
    "title": "Trippin' on Me",
    "variantOrMix": null,
    "artistCredit": "Travis Scott feat. Eric Bellinger",
    "primaryArtist": "Travis Scott",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:46",
    "isrcs": [],
    "releaseGroups": [
      "TRAVI$ LA FLAME"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Travis Scott feat. Eric Bellinger",
        "duration": "3:46",
        "isrcs": [],
        "release_groups": [
          "TRAVI$ LA FLAME"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Trippin%27%20on%20Me%20Travis%20Scott%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Trippin%27+on+Me+Travis+Scott+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Trippin%27+on+Me+Travis+Scott+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Trippin%27+on+Me+Travis+Scott+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Trippin%27%20on%20Me%20Travis%20Scott%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Trippin%27+on+Me+Travis+Scott+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Trippin%27+on+Me+Travis+Scott+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Trippin%27+on+Me+Travis+Scott+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-100",
    "title": "Type of Day",
    "variantOrMix": null,
    "artistCredit": "BJ the Chicago Kid feat. Eric Bellinger",
    "primaryArtist": "BJ the Chicago Kid",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:08",
    "isrcs": [],
    "releaseGroups": [
      "4 Am"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "BJ the Chicago Kid feat. Eric Bellinger",
        "duration": "3:08",
        "isrcs": [],
        "release_groups": [
          "4 Am"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Type%20of%20Day%20BJ%20the%20Chicago%20Kid%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Type+of+Day+BJ+the+Chicago+Kid+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Type+of+Day+BJ+the+Chicago+Kid+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Type+of+Day+BJ+the+Chicago+Kid+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Type%20of%20Day%20BJ%20the%20Chicago%20Kid%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Type+of+Day+BJ+the+Chicago+Kid+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Type+of+Day+BJ+the+Chicago+Kid+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Type+of+Day+BJ+the+Chicago+Kid+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-101",
    "title": "Unfollow",
    "variantOrMix": null,
    "artistCredit": "Victor Oladipo feat. Eric Bellinger",
    "primaryArtist": "Victor Oladipo",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:28",
    "isrcs": [
      "USUYG1162058"
    ],
    "releaseGroups": [
      "Songs for You"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Victor Oladipo feat. Eric Bellinger",
        "duration": "3:28",
        "isrcs": [
          "USUYG1162058"
        ],
        "release_groups": [
          "Songs for You"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Unfollow%20Victor%20Oladipo%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Unfollow+Victor+Oladipo+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Unfollow+Victor+Oladipo+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Unfollow+Victor+Oladipo+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Unfollow%20Victor%20Oladipo%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Unfollow+Victor+Oladipo+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Unfollow+Victor+Oladipo+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Unfollow+Victor+Oladipo+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-102",
    "title": "Used 2",
    "variantOrMix": null,
    "artistCredit": "Daz Dillinger, Kurupt & Dogg Pound feat. Eric Bellinger",
    "primaryArtist": "Daz Dillinger",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Kurupt",
      "Dogg Pound",
      "Eric Bellinger"
    ],
    "duration": "4:51",
    "isrcs": [],
    "releaseGroups": [
      "DPG 4 Life"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Daz Dillinger, Kurupt & Dogg Pound feat. Eric Bellinger",
        "duration": "4:51",
        "isrcs": [],
        "release_groups": [
          "DPG 4 Life"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Used%202%20Daz%20Dillinger%2C%20Kurupt%20%26%20Dogg%20Pound%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Used+2+Daz+Dillinger%2C+Kurupt+%26+Dogg+Pound+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Used+2+Daz+Dillinger%2C+Kurupt+%26+Dogg+Pound+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Used+2+Daz+Dillinger%2C+Kurupt+%26+Dogg+Pound+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Used%202%20Daz%20Dillinger%2C%20Kurupt%20%26%20Dogg%20Pound%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Used+2+Daz+Dillinger%2C+Kurupt+%26+Dogg+Pound+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Used+2+Daz+Dillinger%2C+Kurupt+%26+Dogg+Pound+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Used+2+Daz+Dillinger%2C+Kurupt+%26+Dogg+Pound+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-103",
    "title": "Welcome to My City",
    "variantOrMix": null,
    "artistCredit": "AI feat. Junior Reid, Eric Bellinger",
    "primaryArtist": "AI",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Junior Reid",
      "Eric Bellinger"
    ],
    "duration": "3:22",
    "isrcs": [
      "JPPO01702704"
    ],
    "releaseGroups": [
      "和と洋",
      "Self Selection ‘Hip Hop’",
      "BEST OF COLLABO Vol.2"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "AI feat. Junior Reid, Eric Bellinger",
        "duration": "3:22",
        "isrcs": [
          "JPPO01702704"
        ],
        "release_groups": [
          "和と洋",
          "Self Selection ‘Hip Hop’",
          "BEST OF COLLABO Vol.2"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Welcome%20to%20My%20City%20AI%20feat.%20Junior%20Reid%2C%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Welcome+to+My+City+AI+feat.+Junior+Reid%2C+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Welcome+to+My+City+AI+feat.+Junior+Reid%2C+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Welcome+to+My+City+AI+feat.+Junior+Reid%2C+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Welcome%20to%20My%20City%20AI%20feat.%20Junior%20Reid%2C%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Welcome+to+My+City+AI+feat.+Junior+Reid%2C+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Welcome+to+My+City+AI+feat.+Junior+Reid%2C+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Welcome+to+My+City+AI+feat.+Junior+Reid%2C+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-104",
    "title": "What It Is",
    "variantOrMix": null,
    "artistCredit": "Freddie Gibbs feat. Iamsu! & Eric Bellinger",
    "primaryArtist": "Freddie Gibbs",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Iamsu!",
      "Eric Bellinger"
    ],
    "duration": "3:07",
    "isrcs": [],
    "releaseGroups": [
      "Hot This Week 19"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Freddie Gibbs feat. Iamsu! & Eric Bellinger",
        "duration": "3:07",
        "isrcs": [],
        "release_groups": [
          "Hot This Week 19"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/What%20It%20Is%20Freddie%20Gibbs%20feat.%20Iamsu%21%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=What+It+Is+Freddie+Gibbs+feat.+Iamsu%21+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=What+It+Is+Freddie+Gibbs+feat.+Iamsu%21+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=What+It+Is+Freddie+Gibbs+feat.+Iamsu%21+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/What%20It%20Is%20Freddie%20Gibbs%20feat.%20Iamsu%21%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=What+It+Is+Freddie+Gibbs+feat.+Iamsu%21+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/What+It+Is+Freddie+Gibbs+feat.+Iamsu%21+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=What+It+Is+Freddie+Gibbs+feat.+Iamsu%21+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-105",
    "title": "Whatever",
    "variantOrMix": null,
    "artistCredit": "Ashlyne Huff feat. Eric Bellinger",
    "primaryArtist": "Ashlyne Huff",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:23",
    "isrcs": [],
    "releaseGroups": [
      "Promo Only: Mainstream Radio, July 2011"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Ashlyne Huff feat. Eric Bellinger",
        "duration": "3:23",
        "isrcs": [],
        "release_groups": [
          "Promo Only: Mainstream Radio, July 2011"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Whatever%20Ashlyne%20Huff%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Whatever%20Ashlyne%20Huff%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-106",
    "title": "Whatever",
    "variantOrMix": null,
    "artistCredit": "Ashlyne Huff feat. Eric Bellinger",
    "primaryArtist": "Ashlyne Huff",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:21",
    "isrcs": [],
    "releaseGroups": [
      "Let It Out"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Ashlyne Huff feat. Eric Bellinger",
        "duration": "3:21",
        "isrcs": [],
        "release_groups": [
          "Let It Out"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Whatever%20Ashlyne%20Huff%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Whatever%20Ashlyne%20Huff%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Whatever+Ashlyne+Huff+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Whatever+Ashlyne+Huff+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-107",
    "title": "Where Do We Go",
    "variantOrMix": null,
    "artistCredit": "Joe Budden feat. Eric Bellinger",
    "primaryArtist": "Joe Budden",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "7:11",
    "isrcs": [],
    "releaseGroups": [
      "All Love Lost"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Joe Budden feat. Eric Bellinger",
        "duration": "7:11",
        "isrcs": [],
        "release_groups": [
          "All Love Lost"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Where%20Do%20We%20Go%20Joe%20Budden%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Where%20Do%20We%20Go%20Joe%20Budden%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-108",
    "title": "Where Do We Go",
    "variantOrMix": null,
    "artistCredit": "Joe Budden feat. Eric Bellinger",
    "primaryArtist": "Joe Budden",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "6:25",
    "isrcs": [],
    "releaseGroups": [
      "Hot This Week 25"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Joe Budden feat. Eric Bellinger",
        "duration": "6:25",
        "isrcs": [],
        "release_groups": [
          "Hot This Week 25"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Where%20Do%20We%20Go%20Joe%20Budden%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Where%20Do%20We%20Go%20Joe%20Budden%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Where+Do+We+Go+Joe+Budden+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-109",
    "title": "Women of Los Angeles",
    "variantOrMix": null,
    "artistCredit": "Wale feat. Eric Bellinger",
    "primaryArtist": "Wale",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "3:47",
    "isrcs": [],
    "releaseGroups": [
      "Summer on Sunset",
      "Summer on Sunset, Vol. 1"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Wale feat. Eric Bellinger",
        "duration": "3:47",
        "isrcs": [],
        "release_groups": [
          "Summer on Sunset",
          "Summer on Sunset, Vol. 1"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Women%20of%20Los%20Angeles%20Wale%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Women+of+Los+Angeles+Wale+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Women+of+Los+Angeles+Wale+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Women+of+Los+Angeles+Wale+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Women%20of%20Los%20Angeles%20Wale%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Women+of+Los+Angeles+Wale+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Women+of+Los+Angeles+Wale+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Women+of+Los+Angeles+Wale+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-110",
    "title": "World is One 2021",
    "variantOrMix": null,
    "artistCredit": "Chuu & Kim Yo Han feat. Eric Bellinger",
    "primaryArtist": "Chuu",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Kim Yo Han",
      "Eric Bellinger"
    ],
    "duration": "3:14",
    "isrcs": [
      "KRF632103974"
    ],
    "releaseGroups": [
      "World is One 2021"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Chuu & Kim Yo Han feat. Eric Bellinger",
        "duration": "3:14",
        "isrcs": [
          "KRF632103974"
        ],
        "release_groups": [
          "World is One 2021"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/World%20is%20One%202021%20Chuu%20%26%20Kim%20Yo%20Han%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=World+is+One+2021+Chuu+%26+Kim+Yo+Han+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=World+is+One+2021+Chuu+%26+Kim+Yo+Han+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=World+is+One+2021+Chuu+%26+Kim+Yo+Han+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/World%20is%20One%202021%20Chuu%20%26%20Kim%20Yo%20Han%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=World+is+One+2021+Chuu+%26+Kim+Yo+Han+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/World+is+One+2021+Chuu+%26+Kim+Yo+Han+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=World+is+One+2021+Chuu+%26+Kim+Yo+Han+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-111",
    "title": "YAK (You Already Know)",
    "variantOrMix": null,
    "artistCredit": "Da Brat feat. Sage the Gemini & Eric Bellinger",
    "primaryArtist": "Da Brat",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Sage the Gemini",
      "Eric Bellinger"
    ],
    "duration": "4:29",
    "isrcs": [],
    "releaseGroups": [
      "Hot This Week 35"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Da Brat feat. Sage the Gemini & Eric Bellinger",
        "duration": "4:29",
        "isrcs": [],
        "release_groups": [
          "Hot This Week 35"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/YAK%20%28You%20Already%20Know%29%20Da%20Brat%20feat.%20Sage%20the%20Gemini%20%26%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/YAK%20%28You%20Already%20Know%29%20Da%20Brat%20feat.%20Sage%20the%20Gemini%20%26%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini+%26+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-112",
    "title": "Yaya",
    "variantOrMix": null,
    "artistCredit": "Bobby Brackins feat. Eric Bellinger",
    "primaryArtist": "Bobby Brackins",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Eric Bellinger"
    ],
    "duration": "2:46",
    "isrcs": [
      "USUYG1093103"
    ],
    "releaseGroups": [
      "To Live For"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "Bobby Brackins feat. Eric Bellinger",
        "duration": "2:46",
        "isrcs": [
          "USUYG1093103"
        ],
        "release_groups": [
          "To Live For"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/Yaya%20Bobby%20Brackins%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=Yaya+Bobby+Brackins+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=Yaya+Bobby+Brackins+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=Yaya+Bobby+Brackins+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/Yaya%20Bobby%20Brackins%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=Yaya+Bobby+Brackins+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/Yaya+Bobby+Brackins+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=Yaya+Bobby+Brackins+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=6"
    },
    "notes": null
  },
  {
    "id": "fa-113",
    "title": "ZONE",
    "variantOrMix": null,
    "artistCredit": "EARTHGANG & Spillage Village feat. Eric Bellinger",
    "primaryArtist": "EARTHGANG",
    "ericBellingerRoleInCredit": "featured_artist",
    "featuredOrAdditionalArtists": [
      "Spillage Village",
      "Eric Bellinger"
    ],
    "duration": "2:48",
    "isrcs": [
      "QZNMW2440910"
    ],
    "releaseGroups": [
      "PERFECT FANTASY"
    ],
    "credits": {
      "verified_from_musicbrainz_listing": {
        "artist_credit": "EARTHGANG & Spillage Village feat. Eric Bellinger",
        "duration": "2:48",
        "isrcs": [
          "QZNMW2440910"
        ],
        "release_groups": [
          "PERFECT FANTASY"
        ]
      },
      "personnel_writers_producers_engineers": [],
      "personnel_credit_note": "Not fully available from the MusicBrainz recordings index used for this file. Verify with release liner notes, ASCAP/BMI, AllMusic, TIDAL credits, Spotify credits, Apple Music credits, or label metadata before publication."
    },
    "streamingLinks": {
      "exact_track_links_verified": {},
      "platform_search_links_unverified": {
        "spotify_search": "https://open.spotify.com/search/ZONE%20EARTHGANG%20%26%20Spillage%20Village%20feat.%20Eric%20Bellinger",
        "apple_music_search": "https://music.apple.com/us/search?term=ZONE+EARTHGANG+%26+Spillage+Village+feat.+Eric+Bellinger",
        "youtube_music_search": "https://music.youtube.com/search?q=ZONE+EARTHGANG+%26+Spillage+Village+feat.+Eric+Bellinger",
        "youtube_search": "https://www.youtube.com/results?search_query=ZONE+EARTHGANG+%26+Spillage+Village+feat.+Eric+Bellinger",
        "deezer_search": "https://www.deezer.com/search/ZONE%20EARTHGANG%20%26%20Spillage%20Village%20feat.%20Eric%20Bellinger",
        "tidal_search": "https://listen.tidal.com/search?q=ZONE+EARTHGANG+%26+Spillage+Village+feat.+Eric+Bellinger",
        "amazon_music_search": "https://music.amazon.com/search/ZONE+EARTHGANG+%26+Spillage+Village+feat.+Eric+Bellinger",
        "soundcloud_search": "https://soundcloud.com/search/sounds?q=ZONE+EARTHGANG+%26+Spillage+Village+feat.+Eric+Bellinger"
      },
      "streaming_note": "Search links were generated from the song title and artist credit. They are not proof that the track exists on every listed platform. Exact platform URLs require platform catalog/API matching."
    },
    "source": {
      "catalog": "MusicBrainz",
      "artist_mbid": "07a8922d-680a-4637-a55e-88d7d1969a95",
      "artist_recordings_page": "https://musicbrainz.org/artist/07a8922d-680a-4637-a55e-88d7d1969a95/recordings?page=7"
    },
    "notes": null
  }
];
