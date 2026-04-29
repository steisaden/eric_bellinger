import type { SongwritingCredit } from "@/types";

export type SongwritingCreditRecord = {
  id: string;
  year: number | null;
  title: string;
  primaryArtist: string;
  featuredArtists: string[];
  role: string;
  parentProject: string;
  knownCoWriters: string[];
  certifications: unknown[];
  awardsOrNotableNotes: string[];
  sourceKeys: unknown[];
  confidence: string;
  notes: string | null;
  readableFormat: string;
  platformSearchLinksUnverified: Record<string, unknown>;
};

export const SONGWRITING_CREDITS: SongwritingCreditRecord[] = [
  {
    "id": "sw-001",
    "year": 2003,
    "title": "Can't Let You Go",
    "primaryArtist": "Fabolous",
    "featuredArtists": [
      "Mike Shorey",
      "Lil' Mo"
    ],
    "role": "Songwriter",
    "parentProject": "Street Dreams (2003)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "apple_music_and_shazam_public_credits"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2003\nCan't Let You Go\nFabolous feat. Mike Shorey, Lil' Mo\nSongwriter\nCertification: not verified / not found in public lookup\nParent project: Street Dreams (2003)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Can%27t+Let+You+Go+Fabolous+feat.+Mike+Shorey%2C+Lil%27+Mo",
      "apple_music_search": "https://music.apple.com/us/search?term=Can%27t+Let+You+Go+Fabolous+feat.+Mike+Shorey%2C+Lil%27+Mo",
      "tidal_search": "https://tidal.com/search?q=Can%27t+Let+You+Go+Fabolous+feat.+Mike+Shorey%2C+Lil%27+Mo",
      "youtube_music_search": "https://music.youtube.com/search?q=Can%27t+Let+You+Go+Fabolous+feat.+Mike+Shorey%2C+Lil%27+Mo",
      "deezer_search": "https://www.deezer.com/search/Can%27t+Let+You+Go+Fabolous+feat.+Mike+Shorey%2C+Lil%27+Mo"
    }
  },
  {
    "id": "sw-002",
    "year": 2010,
    "title": "Intuition",
    "primaryArtist": "Selena Gomez & The Scene",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "A Year Without Rain (2010)",
    "knownCoWriters": [
      "Toby Gad",
      "Lindy Robbins",
      "Eric Bellinger"
    ],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2010\nIntuition\nSelena Gomez & The Scene feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: A Year Without Rain (2010)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Intuition+Selena+Gomez+%26+The+Scene+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Intuition+Selena+Gomez+%26+The+Scene+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Intuition+Selena+Gomez+%26+The+Scene+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Intuition+Selena+Gomez+%26+The+Scene+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Intuition+Selena+Gomez+%26+The+Scene+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-003",
    "year": 2010,
    "title": "Waiting Outside The Lines",
    "primaryArtist": "Greyson Chance",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Waiting Outside the Lines / Hold On 'til the Night era (2010)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2010\nWaiting Outside The Lines\nGreyson Chance\nWriter\nCertification: not verified / not found in public lookup\nParent project: Waiting Outside the Lines / Hold On 'til the Night era (2010)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Waiting+Outside+The+Lines+Greyson+Chance",
      "apple_music_search": "https://music.apple.com/us/search?term=Waiting+Outside+The+Lines+Greyson+Chance",
      "tidal_search": "https://tidal.com/search?q=Waiting+Outside+The+Lines+Greyson+Chance",
      "youtube_music_search": "https://music.youtube.com/search?q=Waiting+Outside+The+Lines+Greyson+Chance",
      "deezer_search": "https://www.deezer.com/search/Waiting+Outside+The+Lines+Greyson+Chance"
    }
  },
  {
    "id": "sw-004",
    "year": 2011,
    "title": "Can't Live Without My Music",
    "primaryArtist": "Cali Swag District",
    "featuredArtists": [
      "Ashley A."
    ],
    "role": "Writer",
    "parentProject": "The Kickback / soundtrack-era credit",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2011\nCan't Live Without My Music\nCali Swag District feat. Ashley A.\nWriter\nCertification: not verified / not found in public lookup\nParent project: The Kickback / soundtrack-era credit",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Can%27t+Live+Without+My+Music+Cali+Swag+District+feat.+Ashley+A.",
      "apple_music_search": "https://music.apple.com/us/search?term=Can%27t+Live+Without+My+Music+Cali+Swag+District+feat.+Ashley+A.",
      "tidal_search": "https://tidal.com/search?q=Can%27t+Live+Without+My+Music+Cali+Swag+District+feat.+Ashley+A.",
      "youtube_music_search": "https://music.youtube.com/search?q=Can%27t+Live+Without+My+Music+Cali+Swag+District+feat.+Ashley+A.",
      "deezer_search": "https://www.deezer.com/search/Can%27t+Live+Without+My+Music+Cali+Swag+District+feat.+Ashley+A."
    }
  },
  {
    "id": "sw-005",
    "year": 2011,
    "title": "Champion",
    "primaryArtist": "Chipmunk",
    "featuredArtists": [
      "Chris Brown"
    ],
    "role": "Writer",
    "parentProject": "Transition (2011)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2011\nChampion\nChipmunk feat. Chris Brown\nWriter\nCertification: not verified / not found in public lookup\nParent project: Transition (2011)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Champion+Chipmunk+feat.+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Champion+Chipmunk+feat.+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Champion+Chipmunk+feat.+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Champion+Chipmunk+feat.+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Champion+Chipmunk+feat.+Chris+Brown"
    }
  },
  {
    "id": "sw-006",
    "year": 2011,
    "title": "Music Sounds Better With U",
    "primaryArtist": "Big Time Rush",
    "featuredArtists": [
      "Mann"
    ],
    "role": "Co-writer",
    "parentProject": "Elevate (2011)",
    "knownCoWriters": [
      "Eric Bellinger",
      "Mike Caren",
      "Logan Henderson",
      "Brent Kutzle",
      "James Maslow",
      "Carlos Pena Jr.",
      "Kendall Schmidt",
      "Ryan Tedder",
      "Noel Zancanella"
    ],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2011\nMusic Sounds Better With U\nBig Time Rush feat. Mann\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Elevate (2011)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Music+Sounds+Better+With+U+Big+Time+Rush+feat.+Mann",
      "apple_music_search": "https://music.apple.com/us/search?term=Music+Sounds+Better+With+U+Big+Time+Rush+feat.+Mann",
      "tidal_search": "https://tidal.com/search?q=Music+Sounds+Better+With+U+Big+Time+Rush+feat.+Mann",
      "youtube_music_search": "https://music.youtube.com/search?q=Music+Sounds+Better+With+U+Big+Time+Rush+feat.+Mann",
      "deezer_search": "https://www.deezer.com/search/Music+Sounds+Better+With+U+Big+Time+Rush+feat.+Mann"
    }
  },
  {
    "id": "sw-007",
    "year": 2011,
    "title": "Nothing On Me",
    "primaryArtist": "Jacob Latimore",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Nothing On Me (2011)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2011\nNothing On Me\nJacob Latimore\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Nothing On Me (2011)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Nothing+On+Me+Jacob+Latimore",
      "apple_music_search": "https://music.apple.com/us/search?term=Nothing+On+Me+Jacob+Latimore",
      "tidal_search": "https://tidal.com/search?q=Nothing+On+Me+Jacob+Latimore",
      "youtube_music_search": "https://music.youtube.com/search?q=Nothing+On+Me+Jacob+Latimore",
      "deezer_search": "https://www.deezer.com/search/Nothing+On+Me+Jacob+Latimore"
    }
  },
  {
    "id": "sw-008",
    "year": 2011,
    "title": "Oh My Love",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "F.A.M.E. (2011)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [
      "F.A.M.E. won Grammy Award for Best R&B Album; Bellinger credited as songwriter on the album"
    ],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2011\nOh My Love\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: F.A.M.E. (2011)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Oh+My+Love+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Oh+My+Love+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Oh+My+Love+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Oh+My+Love+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Oh+My+Love+Chris+Brown"
    }
  },
  {
    "id": "sw-009",
    "year": 2011,
    "title": "Say It With Me",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "F.A.M.E. (2011)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [
      "F.A.M.E. won Grammy Award for Best R&B Album; Bellinger credited as songwriter on the album"
    ],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2011\nSay It With Me\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: F.A.M.E. (2011)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Say+It+With+Me+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Say+It+With+Me+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Say+It+With+Me+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Say+It+With+Me+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Say+It+With+Me+Chris+Brown"
    }
  },
  {
    "id": "sw-010",
    "year": 2011,
    "title": "The Woman You Love",
    "primaryArtist": "Ashanti",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "The Woman You Love (single, 2011)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2011\nThe Woman You Love\nAshanti\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: The Woman You Love (single, 2011)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/The+Woman+You+Love+Ashanti",
      "apple_music_search": "https://music.apple.com/us/search?term=The+Woman+You+Love+Ashanti",
      "tidal_search": "https://tidal.com/search?q=The+Woman+You+Love+Ashanti",
      "youtube_music_search": "https://music.youtube.com/search?q=The+Woman+You+Love+Ashanti",
      "deezer_search": "https://www.deezer.com/search/The+Woman+You+Love+Ashanti"
    }
  },
  {
    "id": "sw-011",
    "year": 2012,
    "title": "Hold Me Down",
    "primaryArtist": "JLS",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Evolution / single-era credit",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "medium",
    "notes": null,
    "readableFormat": "2012\nHold Me Down\nJLS\nWriter\nCertification: not verified / not found in public lookup\nParent project: Evolution / single-era credit",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Hold+Me+Down+JLS",
      "apple_music_search": "https://music.apple.com/us/search?term=Hold+Me+Down+JLS",
      "tidal_search": "https://tidal.com/search?q=Hold+Me+Down+JLS",
      "youtube_music_search": "https://music.youtube.com/search?q=Hold+Me+Down+JLS",
      "deezer_search": "https://www.deezer.com/search/Hold+Me+Down+JLS"
    }
  },
  {
    "id": "sw-012",
    "year": 2012,
    "title": "I Care For U",
    "primaryArtist": "Usher",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Looking 4 Myself (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nI Care For U\nUsher\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Looking 4 Myself (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/I+Care+For+U+Usher",
      "apple_music_search": "https://music.apple.com/us/search?term=I+Care+For+U+Usher",
      "tidal_search": "https://tidal.com/search?q=I+Care+For+U+Usher",
      "youtube_music_search": "https://music.youtube.com/search?q=I+Care+For+U+Usher",
      "deezer_search": "https://www.deezer.com/search/I+Care+For+U+Usher"
    }
  },
  {
    "id": "sw-013",
    "year": 2012,
    "title": "If 6 Were 9",
    "primaryArtist": "Keke Palmer",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Keke Palmer (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nIf 6 Were 9\nKeke Palmer\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Keke Palmer (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/If+6+Were+9+Keke+Palmer",
      "apple_music_search": "https://music.apple.com/us/search?term=If+6+Were+9+Keke+Palmer",
      "tidal_search": "https://tidal.com/search?q=If+6+Were+9+Keke+Palmer",
      "youtube_music_search": "https://music.youtube.com/search?q=If+6+Were+9+Keke+Palmer",
      "deezer_search": "https://www.deezer.com/search/If+6+Were+9+Keke+Palmer"
    }
  },
  {
    "id": "sw-014",
    "year": 2012,
    "title": "Leggo",
    "primaryArtist": "B. Smyth",
    "featuredArtists": [
      "2 Chainz"
    ],
    "role": "Co-writer",
    "parentProject": "Leggo (single, 2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nLeggo\nB. Smyth feat. 2 Chainz\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Leggo (single, 2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Leggo+B.+Smyth+feat.+2+Chainz",
      "apple_music_search": "https://music.apple.com/us/search?term=Leggo+B.+Smyth+feat.+2+Chainz",
      "tidal_search": "https://tidal.com/search?q=Leggo+B.+Smyth+feat.+2+Chainz",
      "youtube_music_search": "https://music.youtube.com/search?q=Leggo+B.+Smyth+feat.+2+Chainz",
      "deezer_search": "https://www.deezer.com/search/Leggo+B.+Smyth+feat.+2+Chainz"
    }
  },
  {
    "id": "sw-015",
    "year": 2012,
    "title": "Lemme See",
    "primaryArtist": "Usher",
    "featuredArtists": [
      "Rick Ross"
    ],
    "role": "Co-writer",
    "parentProject": "Looking 4 Myself (2012)",
    "knownCoWriters": [
      "Usher Raymond IV",
      "William Roberts",
      "James Scheffer",
      "Eric Bellinger",
      "Danny Morris",
      "Nickolas Marzouca",
      "Lundon Knighten"
    ],
    "certifications": [
      {
        "org": "RIAA",
        "level": "certified single; level not text-exposed in RIAA search result",
        "date": "2024-02-09",
        "source": "riaa_search"
      }
    ],
    "awardsOrNotableNotes": [
      "ASCAP Award-winning R&B/Hip-Hop Song"
    ],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written",
      "riaa_search"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nLemme See\nUsher feat. Rick Ross\nCo-writer\nRIAA: certified single; level not text-exposed in RIAA search result\nParent project: Looking 4 Myself (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Lemme+See+Usher+feat.+Rick+Ross",
      "apple_music_search": "https://music.apple.com/us/search?term=Lemme+See+Usher+feat.+Rick+Ross",
      "tidal_search": "https://tidal.com/search?q=Lemme+See+Usher+feat.+Rick+Ross",
      "youtube_music_search": "https://music.youtube.com/search?q=Lemme+See+Usher+feat.+Rick+Ross",
      "deezer_search": "https://www.deezer.com/search/Lemme+See+Usher+feat.+Rick+Ross"
    }
  },
  {
    "id": "sw-016",
    "year": 2012,
    "title": "Mirage",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Nas"
    ],
    "role": "Co-writer",
    "parentProject": "Fortune (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nMirage\nChris Brown feat. Nas\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Fortune (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Mirage+Chris+Brown+feat.+Nas",
      "apple_music_search": "https://music.apple.com/us/search?term=Mirage+Chris+Brown+feat.+Nas",
      "tidal_search": "https://tidal.com/search?q=Mirage+Chris+Brown+feat.+Nas",
      "youtube_music_search": "https://music.youtube.com/search?q=Mirage+Chris+Brown+feat.+Nas",
      "deezer_search": "https://www.deezer.com/search/Mirage+Chris+Brown+feat.+Nas"
    }
  },
  {
    "id": "sw-017",
    "year": 2012,
    "title": "Nowhere",
    "primaryArtist": "MKTO",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "MKTO (2012/2014 release cycle)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nNowhere\nMKTO\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: MKTO (2012/2014 release cycle)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Nowhere+MKTO",
      "apple_music_search": "https://music.apple.com/us/search?term=Nowhere+MKTO",
      "tidal_search": "https://tidal.com/search?q=Nowhere+MKTO",
      "youtube_music_search": "https://music.youtube.com/search?q=Nowhere+MKTO",
      "deezer_search": "https://www.deezer.com/search/Nowhere+MKTO"
    }
  },
  {
    "id": "sw-018",
    "year": 2012,
    "title": "Right Here",
    "primaryArtist": "Justin Bieber",
    "featuredArtists": [
      "Drake"
    ],
    "role": "Co-writer",
    "parentProject": "Believe (2012)",
    "knownCoWriters": [
      "Justin Bieber",
      "Aubrey Graham",
      "Chauncey Hollis",
      "Eric Bellinger"
    ],
    "certifications": [],
    "awardsOrNotableNotes": [
      "Spotify songwriter page lists it among Bellinger's highest-streaming songwriter credits"
    ],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nRight Here\nJustin Bieber feat. Drake\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Believe (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Right+Here+Justin+Bieber+feat.+Drake",
      "apple_music_search": "https://music.apple.com/us/search?term=Right+Here+Justin+Bieber+feat.+Drake",
      "tidal_search": "https://tidal.com/search?q=Right+Here+Justin+Bieber+feat.+Drake",
      "youtube_music_search": "https://music.youtube.com/search?q=Right+Here+Justin+Bieber+feat.+Drake",
      "deezer_search": "https://www.deezer.com/search/Right+Here+Justin+Bieber+feat.+Drake"
    }
  },
  {
    "id": "sw-019",
    "year": 2012,
    "title": "So Many Girls",
    "primaryArtist": "JLS",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Evolution (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "medium",
    "notes": null,
    "readableFormat": "2012\nSo Many Girls\nJLS\nWriter\nCertification: not verified / not found in public lookup\nParent project: Evolution (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/So+Many+Girls+JLS",
      "apple_music_search": "https://music.apple.com/us/search?term=So+Many+Girls+JLS",
      "tidal_search": "https://tidal.com/search?q=So+Many+Girls+JLS",
      "youtube_music_search": "https://music.youtube.com/search?q=So+Many+Girls+JLS",
      "deezer_search": "https://www.deezer.com/search/So+Many+Girls+JLS"
    }
  },
  {
    "id": "sw-020",
    "year": 2012,
    "title": "Think Like A Man",
    "primaryArtist": "Jennifer Hudson, Ne-Yo & Rick Ross",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Think Like a Man soundtrack (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nThink Like A Man\nJennifer Hudson, Ne-Yo & Rick Ross\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Think Like a Man soundtrack (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Think+Like+A+Man+Jennifer+Hudson%2C+Ne-Yo+%26+Rick+Ross",
      "apple_music_search": "https://music.apple.com/us/search?term=Think+Like+A+Man+Jennifer+Hudson%2C+Ne-Yo+%26+Rick+Ross",
      "tidal_search": "https://tidal.com/search?q=Think+Like+A+Man+Jennifer+Hudson%2C+Ne-Yo+%26+Rick+Ross",
      "youtube_music_search": "https://music.youtube.com/search?q=Think+Like+A+Man+Jennifer+Hudson%2C+Ne-Yo+%26+Rick+Ross",
      "deezer_search": "https://www.deezer.com/search/Think+Like+A+Man+Jennifer+Hudson%2C+Ne-Yo+%26+Rick+Ross"
    }
  },
  {
    "id": "sw-021",
    "year": 2012,
    "title": "Thought Of You",
    "primaryArtist": "Justin Bieber",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Believe (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nThought Of You\nJustin Bieber\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Believe (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Thought+Of+You+Justin+Bieber",
      "apple_music_search": "https://music.apple.com/us/search?term=Thought+Of+You+Justin+Bieber",
      "tidal_search": "https://tidal.com/search?q=Thought+Of+You+Justin+Bieber",
      "youtube_music_search": "https://music.youtube.com/search?q=Thought+Of+You+Justin+Bieber",
      "deezer_search": "https://www.deezer.com/search/Thought+Of+You+Justin+Bieber"
    }
  },
  {
    "id": "sw-022",
    "year": 2012,
    "title": "Wait For You",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Fortune (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nWait For You\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Fortune (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Wait+For+You+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Wait+For+You+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Wait+For+You+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Wait+For+You+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Wait+For+You+Chris+Brown"
    }
  },
  {
    "id": "sw-023",
    "year": 2012,
    "title": "What Happened To U",
    "primaryArtist": "Usher",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Looking 4 Myself (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nWhat Happened To U\nUsher\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Looking 4 Myself (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/What+Happened+To+U+Usher",
      "apple_music_search": "https://music.apple.com/us/search?term=What+Happened+To+U+Usher",
      "tidal_search": "https://tidal.com/search?q=What+Happened+To+U+Usher",
      "youtube_music_search": "https://music.youtube.com/search?q=What+Happened+To+U+Usher",
      "deezer_search": "https://www.deezer.com/search/What+Happened+To+U+Usher"
    }
  },
  {
    "id": "sw-024",
    "year": 2012,
    "title": "Without You",
    "primaryArtist": "Brandy",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Two Eleven (2012)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2012\nWithout You\nBrandy\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Two Eleven (2012)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Without+You+Brandy",
      "apple_music_search": "https://music.apple.com/us/search?term=Without+You+Brandy",
      "tidal_search": "https://tidal.com/search?q=Without+You+Brandy",
      "youtube_music_search": "https://music.youtube.com/search?q=Without+You+Brandy",
      "deezer_search": "https://www.deezer.com/search/Without+You+Brandy"
    }
  },
  {
    "id": "sw-025",
    "year": 2013,
    "title": "B.A.N.S.",
    "primaryArtist": "Sevyn Streeter",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Call Me Crazy, But... (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nB.A.N.S.\nSevyn Streeter\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Call Me Crazy, But... (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/B.A.N.S.+Sevyn+Streeter",
      "apple_music_search": "https://music.apple.com/us/search?term=B.A.N.S.+Sevyn+Streeter",
      "tidal_search": "https://tidal.com/search?q=B.A.N.S.+Sevyn+Streeter",
      "youtube_music_search": "https://music.youtube.com/search?q=B.A.N.S.+Sevyn+Streeter",
      "deezer_search": "https://www.deezer.com/search/B.A.N.S.+Sevyn+Streeter"
    }
  },
  {
    "id": "sw-026",
    "year": 2013,
    "title": "Heartbreaker",
    "primaryArtist": "Justin Bieber",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Journals (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nHeartbreaker\nJustin Bieber\nWriter\nCertification: not verified / not found in public lookup\nParent project: Journals (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Heartbreaker+Justin+Bieber",
      "apple_music_search": "https://music.apple.com/us/search?term=Heartbreaker+Justin+Bieber",
      "tidal_search": "https://tidal.com/search?q=Heartbreaker+Justin+Bieber",
      "youtube_music_search": "https://music.youtube.com/search?q=Heartbreaker+Justin+Bieber",
      "deezer_search": "https://www.deezer.com/search/Heartbreaker+Justin+Bieber"
    }
  },
  {
    "id": "sw-027",
    "year": 2013,
    "title": "Hit The Snooze!",
    "primaryArtist": "Don Benjamin",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Hit The Snooze! (single, 2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nHit The Snooze!\nDon Benjamin feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Hit The Snooze! (single, 2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Hit+The+Snooze%21+Don+Benjamin+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Hit+The+Snooze%21+Don+Benjamin+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Hit+The+Snooze%21+Don+Benjamin+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Hit+The+Snooze%21+Don+Benjamin+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Hit+The+Snooze%21+Don+Benjamin+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-028",
    "year": 2013,
    "title": "Hold That",
    "primaryArtist": "Sean Kingston",
    "featuredArtists": [
      "Yo Gotti"
    ],
    "role": "Co-writer",
    "parentProject": "Back 2 Life (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nHold That\nSean Kingston feat. Yo Gotti\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Back 2 Life (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Hold+That+Sean+Kingston+feat.+Yo+Gotti",
      "apple_music_search": "https://music.apple.com/us/search?term=Hold+That+Sean+Kingston+feat.+Yo+Gotti",
      "tidal_search": "https://tidal.com/search?q=Hold+That+Sean+Kingston+feat.+Yo+Gotti",
      "youtube_music_search": "https://music.youtube.com/search?q=Hold+That+Sean+Kingston+feat.+Yo+Gotti",
      "deezer_search": "https://www.deezer.com/search/Hold+That+Sean+Kingston+feat.+Yo+Gotti"
    }
  },
  {
    "id": "sw-029",
    "year": 2013,
    "title": "In & Out",
    "primaryArtist": "Marcus Canty",
    "featuredArtists": [
      "Wale"
    ],
    "role": "Co-writer",
    "parentProject": "THIS... Is Marcus Canty (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nIn & Out\nMarcus Canty feat. Wale\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: THIS... Is Marcus Canty (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/In+%26+Out+Marcus+Canty+feat.+Wale",
      "apple_music_search": "https://music.apple.com/us/search?term=In+%26+Out+Marcus+Canty+feat.+Wale",
      "tidal_search": "https://tidal.com/search?q=In+%26+Out+Marcus+Canty+feat.+Wale",
      "youtube_music_search": "https://music.youtube.com/search?q=In+%26+Out+Marcus+Canty+feat.+Wale",
      "deezer_search": "https://www.deezer.com/search/In+%26+Out+Marcus+Canty+feat.+Wale"
    }
  },
  {
    "id": "sw-030",
    "year": 2013,
    "title": "Kiss It",
    "primaryArtist": "Dev",
    "featuredArtists": [
      "Sage the Gemini"
    ],
    "role": "Co-writer",
    "parentProject": "Kiss It (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nKiss It\nDev feat. Sage the Gemini\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Kiss It (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Kiss+It+Dev+feat.+Sage+the+Gemini",
      "apple_music_search": "https://music.apple.com/us/search?term=Kiss+It+Dev+feat.+Sage+the+Gemini",
      "tidal_search": "https://tidal.com/search?q=Kiss+It+Dev+feat.+Sage+the+Gemini",
      "youtube_music_search": "https://music.youtube.com/search?q=Kiss+It+Dev+feat.+Sage+the+Gemini",
      "deezer_search": "https://www.deezer.com/search/Kiss+It+Dev+feat.+Sage+the+Gemini"
    }
  },
  {
    "id": "sw-031",
    "year": 2013,
    "title": "New Thang",
    "primaryArtist": "Trevor Jackson",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "#NewThang (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nNew Thang\nTrevor Jackson\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: #NewThang (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/New+Thang+Trevor+Jackson",
      "apple_music_search": "https://music.apple.com/us/search?term=New+Thang+Trevor+Jackson",
      "tidal_search": "https://tidal.com/search?q=New+Thang+Trevor+Jackson",
      "youtube_music_search": "https://music.youtube.com/search?q=New+Thang+Trevor+Jackson",
      "deezer_search": "https://www.deezer.com/search/New+Thang+Trevor+Jackson"
    }
  },
  {
    "id": "sw-032",
    "year": 2013,
    "title": "No Fun",
    "primaryArtist": "TGT",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Three Kings (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nNo Fun\nTGT\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Three Kings (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/No+Fun+TGT",
      "apple_music_search": "https://music.apple.com/us/search?term=No+Fun+TGT",
      "tidal_search": "https://tidal.com/search?q=No+Fun+TGT",
      "youtube_music_search": "https://music.youtube.com/search?q=No+Fun+TGT",
      "deezer_search": "https://www.deezer.com/search/No+Fun+TGT"
    }
  },
  {
    "id": "sw-033",
    "year": 2013,
    "title": "S#1T Happens",
    "primaryArtist": "Bridget Kelly",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Cut To... Bridget Kelly (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nS#1T Happens\nBridget Kelly\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Cut To... Bridget Kelly (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/S%231T+Happens+Bridget+Kelly",
      "apple_music_search": "https://music.apple.com/us/search?term=S%231T+Happens+Bridget+Kelly",
      "tidal_search": "https://tidal.com/search?q=S%231T+Happens+Bridget+Kelly",
      "youtube_music_search": "https://music.youtube.com/search?q=S%231T+Happens+Bridget+Kelly",
      "deezer_search": "https://www.deezer.com/search/S%231T+Happens+Bridget+Kelly"
    }
  },
  {
    "id": "sw-034",
    "year": 2013,
    "title": "Sex On The Ceiling",
    "primaryArtist": "Sevyn Streeter",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Call Me Crazy, But... (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nSex On The Ceiling\nSevyn Streeter\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Call Me Crazy, But... (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Sex+On+The+Ceiling+Sevyn+Streeter",
      "apple_music_search": "https://music.apple.com/us/search?term=Sex+On+The+Ceiling+Sevyn+Streeter",
      "tidal_search": "https://tidal.com/search?q=Sex+On+The+Ceiling+Sevyn+Streeter",
      "youtube_music_search": "https://music.youtube.com/search?q=Sex+On+The+Ceiling+Sevyn+Streeter",
      "deezer_search": "https://www.deezer.com/search/Sex+On+The+Ceiling+Sevyn+Streeter"
    }
  },
  {
    "id": "sw-035",
    "year": 2013,
    "title": "So Much To Prove",
    "primaryArtist": "Fantasia",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Side Effects of You (2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nSo Much To Prove\nFantasia\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Side Effects of You (2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/So+Much+To+Prove+Fantasia",
      "apple_music_search": "https://music.apple.com/us/search?term=So+Much+To+Prove+Fantasia",
      "tidal_search": "https://tidal.com/search?q=So+Much+To+Prove+Fantasia",
      "youtube_music_search": "https://music.youtube.com/search?q=So+Much+To+Prove+Fantasia",
      "deezer_search": "https://www.deezer.com/search/So+Much+To+Prove+Fantasia"
    }
  },
  {
    "id": "sw-036",
    "year": 2013,
    "title": "What It Is",
    "primaryArtist": "League of Starz",
    "featuredArtists": [
      "Freddie Gibbs",
      "Iamsu!",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "What It Is (single, 2013)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2013\nWhat It Is\nLeague of Starz feat. Freddie Gibbs, Iamsu!, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: What It Is (single, 2013)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/What+It+Is+League+of+Starz+feat.+Freddie+Gibbs%2C+Iamsu%21%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=What+It+Is+League+of+Starz+feat.+Freddie+Gibbs%2C+Iamsu%21%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=What+It+Is+League+of+Starz+feat.+Freddie+Gibbs%2C+Iamsu%21%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=What+It+Is+League+of+Starz+feat.+Freddie+Gibbs%2C+Iamsu%21%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/What+It+Is+League+of+Starz+feat.+Freddie+Gibbs%2C+Iamsu%21%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-037",
    "year": 2014,
    "title": "4 Digits",
    "primaryArtist": "DJ Mustard",
    "featuredArtists": [
      "Fabolous",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "10 Summers (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\n4 Digits\nDJ Mustard feat. Fabolous, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: 10 Summers (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/4+Digits+DJ+Mustard+feat.+Fabolous%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=4+Digits+DJ+Mustard+feat.+Fabolous%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=4+Digits+DJ+Mustard+feat.+Fabolous%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=4+Digits+DJ+Mustard+feat.+Fabolous%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/4+Digits+DJ+Mustard+feat.+Fabolous%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-038",
    "year": 2014,
    "title": "Add Me In",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "X (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nAdd Me In\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: X (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Add+Me+In+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Add+Me+In+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Add+Me+In+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Add+Me+In+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Add+Me+In+Chris+Brown"
    }
  },
  {
    "id": "sw-039",
    "year": 2014,
    "title": "Anyway",
    "primaryArtist": "DJ Carisma",
    "featuredArtists": [
      "Tory Lanez",
      "Sage the Gemini",
      "Eric Bellinger",
      "Mishon"
    ],
    "role": "Co-writer",
    "parentProject": "Anyway (single, 2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nAnyway\nDJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger, Mishon\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Anyway (single, 2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger%2C+Mishon",
      "apple_music_search": "https://music.apple.com/us/search?term=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger%2C+Mishon",
      "tidal_search": "https://tidal.com/search?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger%2C+Mishon",
      "youtube_music_search": "https://music.youtube.com/search?q=Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger%2C+Mishon",
      "deezer_search": "https://www.deezer.com/search/Anyway+DJ+Carisma+feat.+Tory+Lanez%2C+Sage+the+Gemini%2C+Eric+Bellinger%2C+Mishon"
    }
  },
  {
    "id": "sw-040",
    "year": 2014,
    "title": "Best Head Ever",
    "primaryArtist": "The Game",
    "featuredArtists": [
      "Tyga",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Year of the Wolf (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nBest Head Ever\nThe Game feat. Tyga, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Year of the Wolf (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Best+Head+Ever+The+Game+feat.+Tyga%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Best+Head+Ever+The+Game+feat.+Tyga%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Best+Head+Ever+The+Game+feat.+Tyga%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Best+Head+Ever+The+Game+feat.+Tyga%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Best+Head+Ever+The+Game+feat.+Tyga%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-041",
    "year": 2014,
    "title": "Broken Hearted Girl",
    "primaryArtist": "Teyana Taylor",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "VII (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nBroken Hearted Girl\nTeyana Taylor\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: VII (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Broken+Hearted+Girl+Teyana+Taylor",
      "apple_music_search": "https://music.apple.com/us/search?term=Broken+Hearted+Girl+Teyana+Taylor",
      "tidal_search": "https://tidal.com/search?q=Broken+Hearted+Girl+Teyana+Taylor",
      "youtube_music_search": "https://music.youtube.com/search?q=Broken+Hearted+Girl+Teyana+Taylor",
      "deezer_search": "https://www.deezer.com/search/Broken+Hearted+Girl+Teyana+Taylor"
    }
  },
  {
    "id": "sw-042",
    "year": 2014,
    "title": "Disrespectful",
    "primaryArtist": "Trey Songz",
    "featuredArtists": [
      "Mila J"
    ],
    "role": "Co-writer",
    "parentProject": "Trigga (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nDisrespectful\nTrey Songz feat. Mila J\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Trigga (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Disrespectful+Trey+Songz+feat.+Mila+J",
      "apple_music_search": "https://music.apple.com/us/search?term=Disrespectful+Trey+Songz+feat.+Mila+J",
      "tidal_search": "https://tidal.com/search?q=Disrespectful+Trey+Songz+feat.+Mila+J",
      "youtube_music_search": "https://music.youtube.com/search?q=Disrespectful+Trey+Songz+feat.+Mila+J",
      "deezer_search": "https://www.deezer.com/search/Disrespectful+Trey+Songz+feat.+Mila+J"
    }
  },
  {
    "id": "sw-043",
    "year": 2014,
    "title": "Fine China",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "X (2014)",
    "knownCoWriters": [
      "Chris Brown",
      "Eric Bellinger",
      "Sevyn Streeter",
      "Leon 'Roccstar' Youngblood"
    ],
    "certifications": [
      {
        "org": "RIAA",
        "level": "Platinum",
        "date": "2017-11-10",
        "source": "wikipedia_song_page_and_riaa_search"
      }
    ],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written",
      "riaa_search"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nFine China\nChris Brown\nCo-writer\nRIAA: Platinum\nParent project: X (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Fine+China+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Fine+China+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Fine+China+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Fine+China+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Fine+China+Chris+Brown"
    }
  },
  {
    "id": "sw-044",
    "year": 2014,
    "title": "Freakin (Remix)",
    "primaryArtist": "Lyrica Anderson",
    "featuredArtists": [
      "Wiz Khalifa",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Freakin (Remix) (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nFreakin (Remix)\nLyrica Anderson feat. Wiz Khalifa, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Freakin (Remix) (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Freakin+%28Remix%29+Lyrica+Anderson+feat.+Wiz+Khalifa%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Freakin+%28Remix%29+Lyrica+Anderson+feat.+Wiz+Khalifa%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Freakin+%28Remix%29+Lyrica+Anderson+feat.+Wiz+Khalifa%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Freakin+%28Remix%29+Lyrica+Anderson+feat.+Wiz+Khalifa%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Freakin+%28Remix%29+Lyrica+Anderson+feat.+Wiz+Khalifa%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-045",
    "year": 2014,
    "title": "Jealous",
    "primaryArtist": "Don Benjamin",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Jealous (single, 2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nJealous\nDon Benjamin feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Jealous (single, 2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Jealous+Don+Benjamin+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Jealous+Don+Benjamin+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Jealous+Don+Benjamin+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Jealous+Don+Benjamin+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Jealous+Don+Benjamin+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-046",
    "year": 2014,
    "title": "Love Around The World",
    "primaryArtist": "Trey Songz",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Trigga (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nLove Around The World\nTrey Songz\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Trigga (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Love+Around+The+World+Trey+Songz",
      "apple_music_search": "https://music.apple.com/us/search?term=Love+Around+The+World+Trey+Songz",
      "tidal_search": "https://tidal.com/search?q=Love+Around+The+World+Trey+Songz",
      "youtube_music_search": "https://music.youtube.com/search?q=Love+Around+The+World+Trey+Songz",
      "deezer_search": "https://www.deezer.com/search/Love+Around+The+World+Trey+Songz"
    }
  },
  {
    "id": "sw-047",
    "year": 2014,
    "title": "Love More",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Nicki Minaj"
    ],
    "role": "Co-writer",
    "parentProject": "X (2014)",
    "knownCoWriters": [
      "Chris Brown",
      "Onika Maraj",
      "Darrell Eversley",
      "Howard Eversley",
      "Shaun Spearman",
      "Verse Simmonds",
      "Eric Bellinger"
    ],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nLove More\nChris Brown feat. Nicki Minaj\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: X (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Love+More+Chris+Brown+feat.+Nicki+Minaj",
      "apple_music_search": "https://music.apple.com/us/search?term=Love+More+Chris+Brown+feat.+Nicki+Minaj",
      "tidal_search": "https://tidal.com/search?q=Love+More+Chris+Brown+feat.+Nicki+Minaj",
      "youtube_music_search": "https://music.youtube.com/search?q=Love+More+Chris+Brown+feat.+Nicki+Minaj",
      "deezer_search": "https://www.deezer.com/search/Love+More+Chris+Brown+feat.+Nicki+Minaj"
    }
  },
  {
    "id": "sw-048",
    "year": 2014,
    "title": "My Yang",
    "primaryArtist": "Rayven Justice",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "I Have a Dream (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nMy Yang\nRayven Justice feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: I Have a Dream (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/My+Yang+Rayven+Justice+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=My+Yang+Rayven+Justice+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=My+Yang+Rayven+Justice+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=My+Yang+Rayven+Justice+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/My+Yang+Rayven+Justice+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-049",
    "year": 2014,
    "title": "New Flame",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Usher",
      "Rick Ross"
    ],
    "role": "Co-writer",
    "parentProject": "X (2014)",
    "knownCoWriters": [
      "Chris Brown",
      "Justin Booth Johnson",
      "Keith Thomas",
      "Mark Pitts",
      "Eric Bellinger",
      "William Roberts",
      "Malissa Hunter",
      "James Chambers",
      "Maurice 'Verse' Simmonds"
    ],
    "certifications": [
      {
        "org": "RIAA",
        "level": "2x Platinum per public song article; RIAA search currently shows a later certification record dated 2025-06-06 but the award level is not exposed in text",
        "date": "2017-11-10 / 2025-06-06",
        "source": "wikipedia_song_page_and_riaa_search"
      }
    ],
    "awardsOrNotableNotes": [
      "57th Grammy Awards nominee: Best R&B Song (as songwriter credit on the work)",
      "Spotify songwriter page lists it as a major Bellinger credit"
    ],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written",
      "riaa_search"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nNew Flame\nChris Brown feat. Usher, Rick Ross\nCo-writer\nRIAA: 2x Platinum per public song article; RIAA search currently shows a later certification record dated 2025-06-06 but the award level is not exposed in text\nParent project: X (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/New+Flame+Chris+Brown+feat.+Usher%2C+Rick+Ross",
      "apple_music_search": "https://music.apple.com/us/search?term=New+Flame+Chris+Brown+feat.+Usher%2C+Rick+Ross",
      "tidal_search": "https://tidal.com/search?q=New+Flame+Chris+Brown+feat.+Usher%2C+Rick+Ross",
      "youtube_music_search": "https://music.youtube.com/search?q=New+Flame+Chris+Brown+feat.+Usher%2C+Rick+Ross",
      "deezer_search": "https://www.deezer.com/search/New+Flame+Chris+Brown+feat.+Usher%2C+Rick+Ross"
    }
  },
  {
    "id": "sw-050",
    "year": 2014,
    "title": "No Lights",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "X (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nNo Lights\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: X (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/No+Lights+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=No+Lights+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=No+Lights+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=No+Lights+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/No+Lights+Chris+Brown"
    }
  },
  {
    "id": "sw-051",
    "year": 2014,
    "title": "Nothing",
    "primaryArtist": "Ma$e",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Nothing (single, 2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nNothing\nMa$e feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Nothing (single, 2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Nothing+Ma%24e+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Nothing+Ma%24e+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Nothing+Ma%24e+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Nothing+Ma%24e+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Nothing+Ma%24e+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-052",
    "year": 2014,
    "title": "On One",
    "primaryArtist": "The Game",
    "featuredArtists": [
      "Ty Dolla $ign",
      "King Marie"
    ],
    "role": "Co-writer",
    "parentProject": "Year of the Wolf (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nOn One\nThe Game feat. Ty Dolla $ign, King Marie\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Year of the Wolf (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/On+One+The+Game+feat.+Ty+Dolla+%24ign%2C+King+Marie",
      "apple_music_search": "https://music.apple.com/us/search?term=On+One+The+Game+feat.+Ty+Dolla+%24ign%2C+King+Marie",
      "tidal_search": "https://tidal.com/search?q=On+One+The+Game+feat.+Ty+Dolla+%24ign%2C+King+Marie",
      "youtube_music_search": "https://music.youtube.com/search?q=On+One+The+Game+feat.+Ty+Dolla+%24ign%2C+King+Marie",
      "deezer_search": "https://www.deezer.com/search/On+One+The+Game+feat.+Ty+Dolla+%24ign%2C+King+Marie"
    }
  },
  {
    "id": "sw-053",
    "year": 2014,
    "title": "On The Low",
    "primaryArtist": "Angel",
    "featuredArtists": [
      "Eric Bellinger",
      "Wretch 32"
    ],
    "role": "Co-writer",
    "parentProject": "Possession With Intent (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nOn The Low\nAngel feat. Eric Bellinger, Wretch 32\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Possession With Intent (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/On+The+Low+Angel+feat.+Eric+Bellinger%2C+Wretch+32",
      "apple_music_search": "https://music.apple.com/us/search?term=On+The+Low+Angel+feat.+Eric+Bellinger%2C+Wretch+32",
      "tidal_search": "https://tidal.com/search?q=On+The+Low+Angel+feat.+Eric+Bellinger%2C+Wretch+32",
      "youtube_music_search": "https://music.youtube.com/search?q=On+The+Low+Angel+feat.+Eric+Bellinger%2C+Wretch+32",
      "deezer_search": "https://www.deezer.com/search/On+The+Low+Angel+feat.+Eric+Bellinger%2C+Wretch+32"
    }
  },
  {
    "id": "sw-054",
    "year": 2014,
    "title": "Or Nah",
    "primaryArtist": "The Game",
    "featuredArtists": [
      "Too $hort",
      "Problem",
      "AV",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Year of the Wolf (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_relationships"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nOr Nah\nThe Game feat. Too $hort, Problem, AV, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Year of the Wolf (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Or+Nah+The+Game+feat.+Too+%24hort%2C+Problem%2C+AV%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-055",
    "year": 2014,
    "title": "Out With The Old",
    "primaryArtist": "Jinsu",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Built To Last (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nOut With The Old\nJinsu feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Built To Last (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Out+With+The+Old+Jinsu+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Out+With+The+Old+Jinsu+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Out+With+The+Old+Jinsu+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Out+With+The+Old+Jinsu+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Out+With+The+Old+Jinsu+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-056",
    "year": 2014,
    "title": "Outta My League",
    "primaryArtist": "Teyana Taylor",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "VII (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nOutta My League\nTeyana Taylor\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: VII (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Outta+My+League+Teyana+Taylor",
      "apple_music_search": "https://music.apple.com/us/search?term=Outta+My+League+Teyana+Taylor",
      "tidal_search": "https://tidal.com/search?q=Outta+My+League+Teyana+Taylor",
      "youtube_music_search": "https://music.youtube.com/search?q=Outta+My+League+Teyana+Taylor",
      "deezer_search": "https://www.deezer.com/search/Outta+My+League+Teyana+Taylor"
    }
  },
  {
    "id": "sw-057",
    "year": 2014,
    "title": "Rollin'",
    "primaryArtist": "Kid Ink",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "My Own Lane (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nRollin'\nKid Ink\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: My Own Lane (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Rollin%27+Kid+Ink",
      "apple_music_search": "https://music.apple.com/us/search?term=Rollin%27+Kid+Ink",
      "tidal_search": "https://tidal.com/search?q=Rollin%27+Kid+Ink",
      "youtube_music_search": "https://music.youtube.com/search?q=Rollin%27+Kid+Ink",
      "deezer_search": "https://www.deezer.com/search/Rollin%27+Kid+Ink"
    }
  },
  {
    "id": "sw-058",
    "year": 2014,
    "title": "Second Hand Smoke",
    "primaryArtist": "Sage the Gemini",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Remember Me (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nSecond Hand Smoke\nSage the Gemini feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Remember Me (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Second+Hand+Smoke+Sage+the+Gemini+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-059",
    "year": 2014,
    "title": "Serial",
    "primaryArtist": "Trey Songz",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Trigga (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nSerial\nTrey Songz\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Trigga (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Serial+Trey+Songz",
      "apple_music_search": "https://music.apple.com/us/search?term=Serial+Trey+Songz",
      "tidal_search": "https://tidal.com/search?q=Serial+Trey+Songz",
      "youtube_music_search": "https://music.youtube.com/search?q=Serial+Trey+Songz",
      "deezer_search": "https://www.deezer.com/search/Serial+Trey+Songz"
    }
  },
  {
    "id": "sw-060",
    "year": 2014,
    "title": "Stereotype",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "X (2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nStereotype\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: X (2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Stereotype+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Stereotype+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Stereotype+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Stereotype+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Stereotype+Chris+Brown"
    }
  },
  {
    "id": "sw-061",
    "year": 2014,
    "title": "You Like It",
    "primaryArtist": "Omarion",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "You Like It (single, 2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nYou Like It\nOmarion\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: You Like It (single, 2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/You+Like+It+Omarion",
      "apple_music_search": "https://music.apple.com/us/search?term=You+Like+It+Omarion",
      "tidal_search": "https://tidal.com/search?q=You+Like+It+Omarion",
      "youtube_music_search": "https://music.youtube.com/search?q=You+Like+It+Omarion",
      "deezer_search": "https://www.deezer.com/search/You+Like+It+Omarion"
    }
  },
  {
    "id": "sw-062",
    "year": 2014,
    "title": "You Playin' (This Could Be Us)",
    "primaryArtist": "Jae Murphy",
    "featuredArtists": [
      "The Game",
      "Eric Bellinger",
      "Problem"
    ],
    "role": "Co-writer",
    "parentProject": "You Playin' (This Could Be Us) (single, 2014)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2014\nYou Playin' (This Could Be Us)\nJae Murphy feat. The Game, Eric Bellinger, Problem\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: You Playin' (This Could Be Us) (single, 2014)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/You+Playin%27+%28This+Could+Be+Us%29+Jae+Murphy+feat.+The+Game%2C+Eric+Bellinger%2C+Problem",
      "apple_music_search": "https://music.apple.com/us/search?term=You+Playin%27+%28This+Could+Be+Us%29+Jae+Murphy+feat.+The+Game%2C+Eric+Bellinger%2C+Problem",
      "tidal_search": "https://tidal.com/search?q=You+Playin%27+%28This+Could+Be+Us%29+Jae+Murphy+feat.+The+Game%2C+Eric+Bellinger%2C+Problem",
      "youtube_music_search": "https://music.youtube.com/search?q=You+Playin%27+%28This+Could+Be+Us%29+Jae+Murphy+feat.+The+Game%2C+Eric+Bellinger%2C+Problem",
      "deezer_search": "https://www.deezer.com/search/You+Playin%27+%28This+Could+Be+Us%29+Jae+Murphy+feat.+The+Game%2C+Eric+Bellinger%2C+Problem"
    }
  },
  {
    "id": "sw-063",
    "year": 2015,
    "title": "#YAK (You Already Know)",
    "primaryArtist": "Da Brat",
    "featuredArtists": [
      "Sage the Gemini",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "#YAK (You Already Know) (single, 2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\n#YAK (You Already Know)\nDa Brat feat. Sage the Gemini, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: #YAK (You Already Know) (single, 2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/%23YAK+%28You+Already+Know%29+Da+Brat+feat.+Sage+the+Gemini%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-064",
    "year": 2015,
    "title": "Armageddon",
    "primaryArtist": "Elijah Blake",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Shadows & Diamonds (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nArmageddon\nElijah Blake\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Shadows & Diamonds (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Armageddon+Elijah+Blake",
      "apple_music_search": "https://music.apple.com/us/search?term=Armageddon+Elijah+Blake",
      "tidal_search": "https://tidal.com/search?q=Armageddon+Elijah+Blake",
      "youtube_music_search": "https://music.youtube.com/search?q=Armageddon+Elijah+Blake",
      "deezer_search": "https://www.deezer.com/search/Armageddon+Elijah+Blake"
    }
  },
  {
    "id": "sw-065",
    "year": 2015,
    "title": "Boomerang",
    "primaryArtist": "Sevyn Streeter",
    "featuredArtists": [
      "Hit-Boy"
    ],
    "role": "Co-writer",
    "parentProject": "Shoulda Been There, Pt. 1 (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nBoomerang\nSevyn Streeter feat. Hit-Boy\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Shoulda Been There, Pt. 1 (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Boomerang+Sevyn+Streeter+feat.+Hit-Boy",
      "apple_music_search": "https://music.apple.com/us/search?term=Boomerang+Sevyn+Streeter+feat.+Hit-Boy",
      "tidal_search": "https://tidal.com/search?q=Boomerang+Sevyn+Streeter+feat.+Hit-Boy",
      "youtube_music_search": "https://music.youtube.com/search?q=Boomerang+Sevyn+Streeter+feat.+Hit-Boy",
      "deezer_search": "https://www.deezer.com/search/Boomerang+Sevyn+Streeter+feat.+Hit-Boy"
    }
  },
  {
    "id": "sw-066",
    "year": 2015,
    "title": "Circles",
    "primaryArtist": "The Game",
    "featuredArtists": [
      "Q-Tip",
      "Eric Bellinger",
      "Sha Sha"
    ],
    "role": "Co-writer",
    "parentProject": "The Documentary 2 (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nCircles\nThe Game feat. Q-Tip, Eric Bellinger, Sha Sha\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: The Documentary 2 (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger%2C+Sha+Sha",
      "apple_music_search": "https://music.apple.com/us/search?term=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger%2C+Sha+Sha",
      "tidal_search": "https://tidal.com/search?q=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger%2C+Sha+Sha",
      "youtube_music_search": "https://music.youtube.com/search?q=Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger%2C+Sha+Sha",
      "deezer_search": "https://www.deezer.com/search/Circles+The+Game+feat.+Q-Tip%2C+Eric+Bellinger%2C+Sha+Sha"
    }
  },
  {
    "id": "sw-067",
    "year": 2015,
    "title": "Curfew Overtime",
    "primaryArtist": "Kalin and Myles",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Kalin and Myles (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nCurfew Overtime\nKalin and Myles\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Kalin and Myles (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Curfew+Overtime+Kalin+and+Myles",
      "apple_music_search": "https://music.apple.com/us/search?term=Curfew+Overtime+Kalin+and+Myles",
      "tidal_search": "https://tidal.com/search?q=Curfew+Overtime+Kalin+and+Myles",
      "youtube_music_search": "https://music.youtube.com/search?q=Curfew+Overtime+Kalin+and+Myles",
      "deezer_search": "https://www.deezer.com/search/Curfew+Overtime+Kalin+and+Myles"
    }
  },
  {
    "id": "sw-068",
    "year": 2015,
    "title": "Do Ya",
    "primaryArtist": "DaBoyDame",
    "featuredArtists": [
      "Ty Dolla $ign",
      "Adrian Marcel",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Do Ya (single, 2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nDo Ya\nDaBoyDame feat. Ty Dolla $ign, Adrian Marcel, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Do Ya (single, 2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Do+Ya+DaBoyDame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Do+Ya+DaBoyDame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Do+Ya+DaBoyDame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Do+Ya+DaBoyDame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Do+Ya+DaBoyDame+feat.+Ty+Dolla+%24ign%2C+Adrian+Marcel%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-069",
    "year": 2015,
    "title": "Dumb Shit",
    "primaryArtist": "Tyrese",
    "featuredArtists": [
      "Snoop Dogg"
    ],
    "role": "Co-writer",
    "parentProject": "Black Rose (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nDumb Shit\nTyrese feat. Snoop Dogg\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Black Rose (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Dumb+Shit+Tyrese+feat.+Snoop+Dogg",
      "apple_music_search": "https://music.apple.com/us/search?term=Dumb+Shit+Tyrese+feat.+Snoop+Dogg",
      "tidal_search": "https://tidal.com/search?q=Dumb+Shit+Tyrese+feat.+Snoop+Dogg",
      "youtube_music_search": "https://music.youtube.com/search?q=Dumb+Shit+Tyrese+feat.+Snoop+Dogg",
      "deezer_search": "https://www.deezer.com/search/Dumb+Shit+Tyrese+feat.+Snoop+Dogg"
    }
  },
  {
    "id": "sw-070",
    "year": 2015,
    "title": "Freak",
    "primaryArtist": "Mally Mall",
    "featuredArtists": [
      "Eric Bellinger",
      "Chinx",
      "Too $hort"
    ],
    "role": "Co-writer",
    "parentProject": "EMPIRE Presents: Triple X-Mas (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nFreak\nMally Mall feat. Eric Bellinger, Chinx, Too $hort\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: EMPIRE Presents: Triple X-Mas (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx%2C+Too+%24hort",
      "apple_music_search": "https://music.apple.com/us/search?term=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx%2C+Too+%24hort",
      "tidal_search": "https://tidal.com/search?q=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx%2C+Too+%24hort",
      "youtube_music_search": "https://music.youtube.com/search?q=Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx%2C+Too+%24hort",
      "deezer_search": "https://www.deezer.com/search/Freak+Mally+Mall+feat.+Eric+Bellinger%2C+Chinx%2C+Too+%24hort"
    }
  },
  {
    "id": "sw-071",
    "year": 2015,
    "title": "Hands All Over You",
    "primaryArtist": "Kalin and Myles",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Kalin and Myles (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nHands All Over You\nKalin and Myles\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Kalin and Myles (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Hands+All+Over+You+Kalin+and+Myles",
      "apple_music_search": "https://music.apple.com/us/search?term=Hands+All+Over+You+Kalin+and+Myles",
      "tidal_search": "https://tidal.com/search?q=Hands+All+Over+You+Kalin+and+Myles",
      "youtube_music_search": "https://music.youtube.com/search?q=Hands+All+Over+You+Kalin+and+Myles",
      "deezer_search": "https://www.deezer.com/search/Hands+All+Over+You+Kalin+and+Myles"
    }
  },
  {
    "id": "sw-072",
    "year": 2015,
    "title": "I Go In",
    "primaryArtist": "AD",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Blue 89 (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nI Go In\nAD feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Blue 89 (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/I+Go+In+AD+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=I+Go+In+AD+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=I+Go+In+AD+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=I+Go+In+AD+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/I+Go+In+AD+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-073",
    "year": 2015,
    "title": "I Still Do",
    "primaryArtist": "Tyrese",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Black Rose (2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nI Still Do\nTyrese\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Black Rose (2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/I+Still+Do+Tyrese",
      "apple_music_search": "https://music.apple.com/us/search?term=I+Still+Do+Tyrese",
      "tidal_search": "https://tidal.com/search?q=I+Still+Do+Tyrese",
      "youtube_music_search": "https://music.youtube.com/search?q=I+Still+Do+Tyrese",
      "deezer_search": "https://www.deezer.com/search/I+Still+Do+Tyrese"
    }
  },
  {
    "id": "sw-074",
    "year": 2015,
    "title": "I'm Not Sorry",
    "primaryArtist": "DEAN",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "I'm Not Sorry (single, 2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nI'm Not Sorry\nDEAN feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: I'm Not Sorry (single, 2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/I%27m+Not+Sorry+DEAN+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-075",
    "year": 2015,
    "title": "Round Here",
    "primaryArtist": "DJ Nemo",
    "featuredArtists": [
      "Joe Moses",
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Round Here (single, 2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nRound Here\nDJ Nemo feat. Joe Moses, Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Round Here (single, 2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Round+Here+DJ+Nemo+feat.+Joe+Moses%2C+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Round+Here+DJ+Nemo+feat.+Joe+Moses%2C+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Round+Here+DJ+Nemo+feat.+Joe+Moses%2C+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Round+Here+DJ+Nemo+feat.+Joe+Moses%2C+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Round+Here+DJ+Nemo+feat.+Joe+Moses%2C+Eric+Bellinger"
    }
  },
  {
    "id": "sw-076",
    "year": 2015,
    "title": "Something Real",
    "primaryArtist": "Atla",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Co-writer",
    "parentProject": "Something Real (single, 2015)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2015\nSomething Real\nAtla feat. Eric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Something Real (single, 2015)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Something+Real+Atla+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Something+Real+Atla+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Something+Real+Atla+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Something+Real+Atla+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Something+Real+Atla+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-077",
    "year": 2015,
    "title": "Valet",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [
      "Fetty Wap",
      "2 Chainz"
    ],
    "role": "Songwriter",
    "parentProject": "Cuffing Season / Cuffing Season, Pt. 2 era",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "medium",
    "notes": null,
    "readableFormat": "2015\nValet\nEric Bellinger feat. Fetty Wap, 2 Chainz\nSongwriter\nCertification: not verified / not found in public lookup\nParent project: Cuffing Season / Cuffing Season, Pt. 2 era",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Valet+Eric+Bellinger+feat.+Fetty+Wap%2C+2+Chainz",
      "apple_music_search": "https://music.apple.com/us/search?term=Valet+Eric+Bellinger+feat.+Fetty+Wap%2C+2+Chainz",
      "tidal_search": "https://tidal.com/search?q=Valet+Eric+Bellinger+feat.+Fetty+Wap%2C+2+Chainz",
      "youtube_music_search": "https://music.youtube.com/search?q=Valet+Eric+Bellinger+feat.+Fetty+Wap%2C+2+Chainz",
      "deezer_search": "https://www.deezer.com/search/Valet+Eric+Bellinger+feat.+Fetty+Wap%2C+2+Chainz"
    }
  },
  {
    "id": "sw-078",
    "year": 2016,
    "title": "Drive By",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Songwriter",
    "parentProject": "Eric B for President: Term 1 / single era",
    "knownCoWriters": [],
    "certifications": [
      {
        "org": "RIAA",
        "level": "Gold",
        "date": "not specified in public snippet",
        "source": "eric_bellinger_bio_and_hype_mag_snippet"
      }
    ],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2016\nDrive By\nEric Bellinger\nSongwriter\nRIAA: Gold\nParent project: Eric B for President: Term 1 / single era",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Drive+By+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Drive+By+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Drive+By+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Drive+By+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Drive+By+Eric+Bellinger"
    }
  },
  {
    "id": "sw-079",
    "year": 2016,
    "title": "Epic & Ting",
    "primaryArtist": "Bulby York",
    "featuredArtists": [],
    "role": "Composer",
    "parentProject": "Epic & Ting (2016)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2016\nEpic & Ting\nBulby York\nComposer\nCertification: not verified / not found in public lookup\nParent project: Epic & Ting (2016)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Epic+%26+Ting+Bulby+York",
      "apple_music_search": "https://music.apple.com/us/search?term=Epic+%26+Ting+Bulby+York",
      "tidal_search": "https://tidal.com/search?q=Epic+%26+Ting+Bulby+York",
      "youtube_music_search": "https://music.youtube.com/search?q=Epic+%26+Ting+Bulby+York",
      "deezer_search": "https://www.deezer.com/search/Epic+%26+Ting+Bulby+York"
    }
  },
  {
    "id": "sw-080",
    "year": 2016,
    "title": "G.O.A.T.",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Songwriter",
    "parentProject": "Eric B for President: Term 1 (2016)",
    "knownCoWriters": [],
    "certifications": [
      {
        "org": "RIAA",
        "level": "Gold",
        "date": "not specified in public snippet",
        "source": "eric_bellinger_bio_and_hype_mag_snippet"
      }
    ],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2016\nG.O.A.T.\nEric Bellinger\nSongwriter\nRIAA: Gold\nParent project: Eric B for President: Term 1 (2016)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/G.O.A.T.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=G.O.A.T.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=G.O.A.T.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=G.O.A.T.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/G.O.A.T.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-081",
    "year": 2016,
    "title": "You Don't Know",
    "primaryArtist": "Tank",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Sex Love & Pain II (2016)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2016\nYou Don't Know\nTank\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Sex Love & Pain II (2016)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/You+Don%27t+Know+Tank",
      "apple_music_search": "https://music.apple.com/us/search?term=You+Don%27t+Know+Tank",
      "tidal_search": "https://tidal.com/search?q=You+Don%27t+Know+Tank",
      "youtube_music_search": "https://music.youtube.com/search?q=You+Don%27t+Know+Tank",
      "deezer_search": "https://www.deezer.com/search/You+Don%27t+Know+Tank"
    }
  },
  {
    "id": "sw-082",
    "year": 2017,
    "title": "Emerald / Burgundy",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Juvenile",
      "Juicy J"
    ],
    "role": "Writer",
    "parentProject": "Heartbreak on a Full Moon era",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "medium",
    "notes": null,
    "readableFormat": "2017\nEmerald / Burgundy\nChris Brown feat. Juvenile, Juicy J\nWriter\nCertification: not verified / not found in public lookup\nParent project: Heartbreak on a Full Moon era",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Emerald+%2F+Burgundy+Chris+Brown+feat.+Juvenile%2C+Juicy+J",
      "apple_music_search": "https://music.apple.com/us/search?term=Emerald+%2F+Burgundy+Chris+Brown+feat.+Juvenile%2C+Juicy+J",
      "tidal_search": "https://tidal.com/search?q=Emerald+%2F+Burgundy+Chris+Brown+feat.+Juvenile%2C+Juicy+J",
      "youtube_music_search": "https://music.youtube.com/search?q=Emerald+%2F+Burgundy+Chris+Brown+feat.+Juvenile%2C+Juicy+J",
      "deezer_search": "https://www.deezer.com/search/Emerald+%2F+Burgundy+Chris+Brown+feat.+Juvenile%2C+Juicy+J"
    }
  },
  {
    "id": "sw-083",
    "year": 2017,
    "title": "Order of Operations",
    "primaryArtist": "Big Boi",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Boomiverse (2017)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2017\nOrder of Operations\nBig Boi\nWriter\nCertification: not verified / not found in public lookup\nParent project: Boomiverse (2017)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Order+of+Operations+Big+Boi",
      "apple_music_search": "https://music.apple.com/us/search?term=Order+of+Operations+Big+Boi",
      "tidal_search": "https://tidal.com/search?q=Order+of+Operations+Big+Boi",
      "youtube_music_search": "https://music.youtube.com/search?q=Order+of+Operations+Big+Boi",
      "deezer_search": "https://www.deezer.com/search/Order+of+Operations+Big+Boi"
    }
  },
  {
    "id": "sw-084",
    "year": 2017,
    "title": "Overthunk",
    "primaryArtist": "Big Boi",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Writer",
    "parentProject": "Boomiverse (2017)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2017\nOverthunk\nBig Boi feat. Eric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Boomiverse (2017)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Overthunk+Big+Boi+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Overthunk+Big+Boi+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Overthunk+Big+Boi+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Overthunk+Big+Boi+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Overthunk+Big+Boi+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-085",
    "year": 2017,
    "title": "Peace Sign",
    "primaryArtist": "Sevyn Streeter",
    "featuredArtists": [
      "Dave East"
    ],
    "role": "Co-writer",
    "parentProject": "Girl Disrupted (2017)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2017\nPeace Sign\nSevyn Streeter feat. Dave East\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Girl Disrupted (2017)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Peace+Sign+Sevyn+Streeter+feat.+Dave+East",
      "apple_music_search": "https://music.apple.com/us/search?term=Peace+Sign+Sevyn+Streeter+feat.+Dave+East",
      "tidal_search": "https://tidal.com/search?q=Peace+Sign+Sevyn+Streeter+feat.+Dave+East",
      "youtube_music_search": "https://music.youtube.com/search?q=Peace+Sign+Sevyn+Streeter+feat.+Dave+East",
      "deezer_search": "https://www.deezer.com/search/Peace+Sign+Sevyn+Streeter+feat.+Dave+East"
    }
  },
  {
    "id": "sw-086",
    "year": 2017,
    "title": "Welcome To My City",
    "primaryArtist": "AI",
    "featuredArtists": [
      "Eric Bellinger",
      "Junior Reid"
    ],
    "role": "Co-writer",
    "parentProject": "Wa to Yo (2017)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2017\nWelcome To My City\nAI feat. Eric Bellinger, Junior Reid\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Wa to Yo (2017)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Welcome+To+My+City+AI+feat.+Eric+Bellinger%2C+Junior+Reid",
      "apple_music_search": "https://music.apple.com/us/search?term=Welcome+To+My+City+AI+feat.+Eric+Bellinger%2C+Junior+Reid",
      "tidal_search": "https://tidal.com/search?q=Welcome+To+My+City+AI+feat.+Eric+Bellinger%2C+Junior+Reid",
      "youtube_music_search": "https://music.youtube.com/search?q=Welcome+To+My+City+AI+feat.+Eric+Bellinger%2C+Junior+Reid",
      "deezer_search": "https://www.deezer.com/search/Welcome+To+My+City+AI+feat.+Eric+Bellinger%2C+Junior+Reid"
    }
  },
  {
    "id": "sw-087",
    "year": 2018,
    "title": "3Way",
    "primaryArtist": "Teyana Taylor",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "K.T.S.E. (2018)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category",
      "blackamericaweb_best_songs_written"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2018\n3Way\nTeyana Taylor\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: K.T.S.E. (2018)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/3Way+Teyana+Taylor",
      "apple_music_search": "https://music.apple.com/us/search?term=3Way+Teyana+Taylor",
      "tidal_search": "https://tidal.com/search?q=3Way+Teyana+Taylor",
      "youtube_music_search": "https://music.youtube.com/search?q=3Way+Teyana+Taylor",
      "deezer_search": "https://www.deezer.com/search/3Way+Teyana+Taylor"
    }
  },
  {
    "id": "sw-088",
    "year": 2019,
    "title": "69",
    "primaryArtist": "Teyana Taylor",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "The Album (2020)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2019\n69\nTeyana Taylor\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: The Album (2020)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/69+Teyana+Taylor",
      "apple_music_search": "https://music.apple.com/us/search?term=69+Teyana+Taylor",
      "tidal_search": "https://tidal.com/search?q=69+Teyana+Taylor",
      "youtube_music_search": "https://music.youtube.com/search?q=69+Teyana+Taylor",
      "deezer_search": "https://www.deezer.com/search/69+Teyana+Taylor"
    }
  },
  {
    "id": "sw-089",
    "year": 2019,
    "title": "Early 2K",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Tank"
    ],
    "role": "Writer",
    "parentProject": "Indigo (2019)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2019\nEarly 2K\nChris Brown feat. Tank\nWriter\nCertification: not verified / not found in public lookup\nParent project: Indigo (2019)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Early+2K+Chris+Brown+feat.+Tank",
      "apple_music_search": "https://music.apple.com/us/search?term=Early+2K+Chris+Brown+feat.+Tank",
      "tidal_search": "https://tidal.com/search?q=Early+2K+Chris+Brown+feat.+Tank",
      "youtube_music_search": "https://music.youtube.com/search?q=Early+2K+Chris+Brown+feat.+Tank",
      "deezer_search": "https://www.deezer.com/search/Early+2K+Chris+Brown+feat.+Tank"
    }
  },
  {
    "id": "sw-090",
    "year": 2019,
    "title": "How You Want It?",
    "primaryArtist": "Teyana Taylor",
    "featuredArtists": [
      "King Combs"
    ],
    "role": "Co-writer",
    "parentProject": "The Album (2020 release; single issued 2019)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "wikipedia_eric_bellinger_songwriting_table",
      "tidal_credit_page",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2019\nHow You Want It?\nTeyana Taylor feat. King Combs\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: The Album (2020 release; single issued 2019)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/How+You+Want+It%3F+Teyana+Taylor+feat.+King+Combs",
      "apple_music_search": "https://music.apple.com/us/search?term=How+You+Want+It%3F+Teyana+Taylor+feat.+King+Combs",
      "tidal_search": "https://tidal.com/search?q=How+You+Want+It%3F+Teyana+Taylor+feat.+King+Combs",
      "youtube_music_search": "https://music.youtube.com/search?q=How+You+Want+It%3F+Teyana+Taylor+feat.+King+Combs",
      "deezer_search": "https://www.deezer.com/search/How+You+Want+It%3F+Teyana+Taylor+feat.+King+Combs"
    }
  },
  {
    "id": "sw-091",
    "year": 2019,
    "title": "Indigo",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Indigo (2019)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page",
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2019\nIndigo\nChris Brown\nWriter\nCertification: not verified / not found in public lookup\nParent project: Indigo (2019)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Indigo+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Indigo+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Indigo+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Indigo+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Indigo+Chris+Brown"
    }
  },
  {
    "id": "sw-092",
    "year": 2019,
    "title": "Temporary Lover",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Lil Jon"
    ],
    "role": "Writer",
    "parentProject": "Indigo / Indigo extended era",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships",
      "wikipedia_songs_written_category"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2019\nTemporary Lover\nChris Brown feat. Lil Jon\nWriter\nCertification: not verified / not found in public lookup\nParent project: Indigo / Indigo extended era",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Temporary+Lover+Chris+Brown+feat.+Lil+Jon",
      "apple_music_search": "https://music.apple.com/us/search?term=Temporary+Lover+Chris+Brown+feat.+Lil+Jon",
      "tidal_search": "https://tidal.com/search?q=Temporary+Lover+Chris+Brown+feat.+Lil+Jon",
      "youtube_music_search": "https://music.youtube.com/search?q=Temporary+Lover+Chris+Brown+feat.+Lil+Jon",
      "deezer_search": "https://www.deezer.com/search/Temporary+Lover+Chris+Brown+feat.+Lil+Jon"
    }
  },
  {
    "id": "sw-093",
    "year": 2020,
    "title": "Can't Let You Go",
    "primaryArtist": "Mozzy",
    "featuredArtists": [
      "Eric Bellinger"
    ],
    "role": "Songwriter",
    "parentProject": "Beyond Bulletproof (2020)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "apple_music_and_shazam_public_credits"
    ],
    "confidence": "high",
    "notes": "",
    "readableFormat": "2020\nCan't Let You Go\nMozzy feat. Eric Bellinger\nSongwriter\nCertification: not verified / not found in public lookup\nParent project: Beyond Bulletproof (2020)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Can%27t+Let+You+Go+Mozzy+feat.+Eric+Bellinger"
    }
  },
  {
    "id": "sw-094",
    "year": 2021,
    "title": "Bet",
    "primaryArtist": "Kristinia DeBarge",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Bet (single, 2021)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2021\nBet\nKristinia DeBarge\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Bet (single, 2021)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Bet+Kristinia+DeBarge",
      "apple_music_search": "https://music.apple.com/us/search?term=Bet+Kristinia+DeBarge",
      "tidal_search": "https://tidal.com/search?q=Bet+Kristinia+DeBarge",
      "youtube_music_search": "https://music.youtube.com/search?q=Bet+Kristinia+DeBarge",
      "deezer_search": "https://www.deezer.com/search/Bet+Kristinia+DeBarge"
    }
  },
  {
    "id": "sw-095",
    "year": 2021,
    "title": "Energy",
    "primaryArtist": "VEDO",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "1320 (2021)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2021\nEnergy\nVEDO\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: 1320 (2021)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Energy+VEDO",
      "apple_music_search": "https://music.apple.com/us/search?term=Energy+VEDO",
      "tidal_search": "https://tidal.com/search?q=Energy+VEDO",
      "youtube_music_search": "https://music.youtube.com/search?q=Energy+VEDO",
      "deezer_search": "https://www.deezer.com/search/Energy+VEDO"
    }
  },
  {
    "id": "sw-096",
    "year": 2021,
    "title": "Nostálgico",
    "primaryArtist": "Rvssian, Rauw Alejandro & Chris Brown",
    "featuredArtists": [],
    "role": "Songwriter",
    "parentProject": "Nostálgico (single, 2021)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [
      ""
    ],
    "sourceKeys": [
      "spotify_songwriter_page"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2021\nNostálgico\nRvssian, Rauw Alejandro & Chris Brown\nSongwriter\nCertification: not verified / not found in public lookup\nParent project: Nostálgico (single, 2021)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Nost%C3%A1lgico+Rvssian%2C+Rauw+Alejandro+%26+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Nost%C3%A1lgico+Rvssian%2C+Rauw+Alejandro+%26+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Nost%C3%A1lgico+Rvssian%2C+Rauw+Alejandro+%26+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Nost%C3%A1lgico+Rvssian%2C+Rauw+Alejandro+%26+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Nost%C3%A1lgico+Rvssian%2C+Rauw+Alejandro+%26+Chris+Brown"
    }
  },
  {
    "id": "sw-097",
    "year": 2021,
    "title": "Opposite",
    "primaryArtist": "Kelvin Truitt",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Opposite (single, 2021)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2021\nOpposite\nKelvin Truitt\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Opposite (single, 2021)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Opposite+Kelvin+Truitt",
      "apple_music_search": "https://music.apple.com/us/search?term=Opposite+Kelvin+Truitt",
      "tidal_search": "https://tidal.com/search?q=Opposite+Kelvin+Truitt",
      "youtube_music_search": "https://music.youtube.com/search?q=Opposite+Kelvin+Truitt",
      "deezer_search": "https://www.deezer.com/search/Opposite+Kelvin+Truitt"
    }
  },
  {
    "id": "sw-098",
    "year": 2022,
    "title": "C.A.B. (Catch A Body)",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Fivio Foreign"
    ],
    "role": "Writer",
    "parentProject": "Breezy (2022)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2022\nC.A.B. (Catch A Body)\nChris Brown feat. Fivio Foreign\nWriter\nCertification: not verified / not found in public lookup\nParent project: Breezy (2022)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/C.A.B.+%28Catch+A+Body%29+Chris+Brown+feat.+Fivio+Foreign",
      "apple_music_search": "https://music.apple.com/us/search?term=C.A.B.+%28Catch+A+Body%29+Chris+Brown+feat.+Fivio+Foreign",
      "tidal_search": "https://tidal.com/search?q=C.A.B.+%28Catch+A+Body%29+Chris+Brown+feat.+Fivio+Foreign",
      "youtube_music_search": "https://music.youtube.com/search?q=C.A.B.+%28Catch+A+Body%29+Chris+Brown+feat.+Fivio+Foreign",
      "deezer_search": "https://www.deezer.com/search/C.A.B.+%28Catch+A+Body%29+Chris+Brown+feat.+Fivio+Foreign"
    }
  },
  {
    "id": "sw-099",
    "year": 2022,
    "title": "Iffy",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "Iffy / Breezy era (2022)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "wikipedia_songs_written_category",
      "dork_credit_index"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2022\nIffy\nChris Brown\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: Iffy / Breezy era (2022)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Iffy+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=Iffy+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=Iffy+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=Iffy+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/Iffy+Chris+Brown"
    }
  },
  {
    "id": "sw-100",
    "year": 2022,
    "title": "No One Else",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Breezy (2022)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2022\nNo One Else\nChris Brown\nWriter\nCertification: not verified / not found in public lookup\nParent project: Breezy (2022)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/No+One+Else+Chris+Brown",
      "apple_music_search": "https://music.apple.com/us/search?term=No+One+Else+Chris+Brown",
      "tidal_search": "https://tidal.com/search?q=No+One+Else+Chris+Brown",
      "youtube_music_search": "https://music.youtube.com/search?q=No+One+Else+Chris+Brown",
      "deezer_search": "https://www.deezer.com/search/No+One+Else+Chris+Brown"
    }
  },
  {
    "id": "sw-101",
    "year": 2022,
    "title": "Psychic",
    "primaryArtist": "Chris Brown",
    "featuredArtists": [
      "Jack Harlow"
    ],
    "role": "Songwriter",
    "parentProject": "Breezy (2022)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2022\nPsychic\nChris Brown feat. Jack Harlow\nSongwriter\nCertification: not verified / not found in public lookup\nParent project: Breezy (2022)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Psychic+Chris+Brown+feat.+Jack+Harlow",
      "apple_music_search": "https://music.apple.com/us/search?term=Psychic+Chris+Brown+feat.+Jack+Harlow",
      "tidal_search": "https://tidal.com/search?q=Psychic+Chris+Brown+feat.+Jack+Harlow",
      "youtube_music_search": "https://music.youtube.com/search?q=Psychic+Chris+Brown+feat.+Jack+Harlow",
      "deezer_search": "https://www.deezer.com/search/Psychic+Chris+Brown+feat.+Jack+Harlow"
    }
  },
  {
    "id": "sw-102",
    "year": 2023,
    "title": "Curious",
    "primaryArtist": "Eric Bellinger, Fabolous & Cordae",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Curious (single, 2023)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "medium",
    "notes": null,
    "readableFormat": "2023\nCurious\nEric Bellinger, Fabolous & Cordae\nWriter\nCertification: not verified / not found in public lookup\nParent project: Curious (single, 2023)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Curious+Eric+Bellinger%2C+Fabolous+%26+Cordae",
      "apple_music_search": "https://music.apple.com/us/search?term=Curious+Eric+Bellinger%2C+Fabolous+%26+Cordae",
      "tidal_search": "https://tidal.com/search?q=Curious+Eric+Bellinger%2C+Fabolous+%26+Cordae",
      "youtube_music_search": "https://music.youtube.com/search?q=Curious+Eric+Bellinger%2C+Fabolous+%26+Cordae",
      "deezer_search": "https://www.deezer.com/search/Curious+Eric+Bellinger%2C+Fabolous+%26+Cordae"
    }
  },
  {
    "id": "sw-103",
    "year": 2023,
    "title": "Goin' Dutch",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Co-writer",
    "parentProject": "New Light / associated sessions",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "society_of_wolves_new_light_credit"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2023\nGoin' Dutch\nEric Bellinger\nCo-writer\nCertification: not verified / not found in public lookup\nParent project: New Light / associated sessions",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Goin%27+Dutch+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Goin%27+Dutch+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Goin%27+Dutch+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Goin%27+Dutch+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Goin%27+Dutch+Eric+Bellinger"
    }
  },
  {
    "id": "sw-104",
    "year": 2023,
    "title": "Stay Long",
    "primaryArtist": "Diddy",
    "featuredArtists": [
      "Summer Walker"
    ],
    "role": "Writer",
    "parentProject": "The Love Album: Off the Grid (2023)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "musicbrainz_works",
      "musicbrainz_relationships"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2023\nStay Long\nDiddy feat. Summer Walker\nWriter\nCertification: not verified / not found in public lookup\nParent project: The Love Album: Off the Grid (2023)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Stay+Long+Diddy+feat.+Summer+Walker",
      "apple_music_search": "https://music.apple.com/us/search?term=Stay+Long+Diddy+feat.+Summer+Walker",
      "tidal_search": "https://tidal.com/search?q=Stay+Long+Diddy+feat.+Summer+Walker",
      "youtube_music_search": "https://music.youtube.com/search?q=Stay+Long+Diddy+feat.+Summer+Walker",
      "deezer_search": "https://www.deezer.com/search/Stay+Long+Diddy+feat.+Summer+Walker"
    }
  },
  {
    "id": "sw-105",
    "year": 2024,
    "title": "Everybody Clap",
    "primaryArtist": "P1Harmony",
    "featuredArtists": [],
    "role": "Composer",
    "parentProject": "Killin' It (2024)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "wikipedia_eric_bellinger_songwriting_table",
      "dork_credit_index"
    ],
    "confidence": "high",
    "notes": null,
    "readableFormat": "2024\nEverybody Clap\nP1Harmony\nComposer\nCertification: not verified / not found in public lookup\nParent project: Killin' It (2024)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Everybody+Clap+P1Harmony",
      "apple_music_search": "https://music.apple.com/us/search?term=Everybody+Clap+P1Harmony",
      "tidal_search": "https://tidal.com/search?q=Everybody+Clap+P1Harmony",
      "youtube_music_search": "https://music.youtube.com/search?q=Everybody+Clap+P1Harmony",
      "deezer_search": "https://www.deezer.com/search/Everybody+Clap+P1Harmony"
    }
  },
  {
    "id": "sw-106",
    "year": 2026,
    "title": "Cry In Front Of You",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Songwriter",
    "parentProject": "Cry In Front Of You (single, 2026)",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "spotify_songwriter_page"
    ],
    "confidence": "medium",
    "notes": "",
    "readableFormat": "2026\nCry In Front Of You\nEric Bellinger\nSongwriter\nCertification: not verified / not found in public lookup\nParent project: Cry In Front Of You (single, 2026)",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Cry+In+Front+Of+You+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Cry+In+Front+Of+You+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Cry+In+Front+Of+You+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Cry+In+Front+Of+You+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Cry+In+Front+Of+You+Eric+Bellinger"
    }
  },
  {
    "id": "sw-107",
    "year": null,
    "title": "2 Bad",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer / Lyricist",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\n2 Bad\nEric Bellinger\nWriter / Lyricist\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/2+Bad+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=2+Bad+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=2+Bad+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=2+Bad+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/2+Bad+Eric+Bellinger"
    }
  },
  {
    "id": "sw-108",
    "year": null,
    "title": "All For Me",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Credited",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nAll For Me\nEric Bellinger\nCredited\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/All+For+Me+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=All+For+Me+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=All+For+Me+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=All+For+Me+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/All+For+Me+Eric+Bellinger"
    }
  },
  {
    "id": "sw-109",
    "year": null,
    "title": "Alla Dat",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Credited",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nAlla Dat\nEric Bellinger\nCredited\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Alla+Dat+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Alla+Dat+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Alla+Dat+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Alla+Dat+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Alla+Dat+Eric+Bellinger"
    }
  },
  {
    "id": "sw-110",
    "year": null,
    "title": "Backstage",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Credited",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nBackstage\nEric Bellinger\nCredited\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Backstage+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Backstage+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Backstage+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Backstage+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Backstage+Eric+Bellinger"
    }
  },
  {
    "id": "sw-111",
    "year": null,
    "title": "Backtrack",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nBacktrack\nEric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Backtrack+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Backtrack+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Backtrack+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Backtrack+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Backtrack+Eric+Bellinger"
    }
  },
  {
    "id": "sw-112",
    "year": null,
    "title": "BNB",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer / Lyricist",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nBNB\nEric Bellinger\nWriter / Lyricist\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/BNB+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=BNB+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=BNB+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=BNB+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/BNB+Eric+Bellinger"
    }
  },
  {
    "id": "sw-113",
    "year": null,
    "title": "Godly",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nGodly\nEric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Godly+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Godly+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Godly+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Godly+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Godly+Eric+Bellinger"
    }
  },
  {
    "id": "sw-114",
    "year": null,
    "title": "Gravity",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nGravity\nEric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Gravity+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Gravity+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Gravity+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Gravity+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Gravity+Eric+Bellinger"
    }
  },
  {
    "id": "sw-115",
    "year": null,
    "title": "Irrelevant / Company",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nIrrelevant / Company\nEric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Irrelevant+%2F+Company+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Irrelevant+%2F+Company+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Irrelevant+%2F+Company+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Irrelevant+%2F+Company+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Irrelevant+%2F+Company+Eric+Bellinger"
    }
  },
  {
    "id": "sw-116",
    "year": null,
    "title": "Lonely",
    "primaryArtist": "Wale",
    "featuredArtists": [],
    "role": "Writer / additional vocals",
    "parentProject": "Unknown / Wale catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nLonely\nWale\nWriter / additional vocals\nCertification: not verified / not found in public lookup\nParent project: Unknown / Wale catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Lonely+Wale",
      "apple_music_search": "https://music.apple.com/us/search?term=Lonely+Wale",
      "tidal_search": "https://tidal.com/search?q=Lonely+Wale",
      "youtube_music_search": "https://music.youtube.com/search?q=Lonely+Wale",
      "deezer_search": "https://www.deezer.com/search/Lonely+Wale"
    }
  },
  {
    "id": "sw-117",
    "year": null,
    "title": "Mistress",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nMistress\nEric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Mistress+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Mistress+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Mistress+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Mistress+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Mistress+Eric+Bellinger"
    }
  },
  {
    "id": "sw-118",
    "year": null,
    "title": "Right Here",
    "primaryArtist": "Wale",
    "featuredArtists": [],
    "role": "Writer / additional vocals",
    "parentProject": "Unknown / Wale catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": " ",
    "readableFormat": "Unknown\nRight Here\nWale\nWriter / additional vocals\nCertification: not verified / not found in public lookup\nParent project: Unknown / Wale catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Right+Here+Wale",
      "apple_music_search": "https://music.apple.com/us/search?term=Right+Here+Wale",
      "tidal_search": "https://tidal.com/search?q=Right+Here+Wale",
      "youtube_music_search": "https://music.youtube.com/search?q=Right+Here+Wale",
      "deezer_search": "https://www.deezer.com/search/Right+Here+Wale"
    }
  },
  {
    "id": "sw-119",
    "year": null,
    "title": "Spice",
    "primaryArtist": "Eric Bellinger",
    "featuredArtists": [],
    "role": "Writer",
    "parentProject": "Unknown / Eric Bellinger catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nSpice\nEric Bellinger\nWriter\nCertification: not verified / not found in public lookup\nParent project: Unknown / Eric Bellinger catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Spice+Eric+Bellinger",
      "apple_music_search": "https://music.apple.com/us/search?term=Spice+Eric+Bellinger",
      "tidal_search": "https://tidal.com/search?q=Spice+Eric+Bellinger",
      "youtube_music_search": "https://music.youtube.com/search?q=Spice+Eric+Bellinger",
      "deezer_search": "https://www.deezer.com/search/Spice+Eric+Bellinger"
    }
  },
  {
    "id": "sw-120",
    "year": null,
    "title": "Survive",
    "primaryArtist": "Wale",
    "featuredArtists": [],
    "role": "Writer / additional vocals",
    "parentProject": "Unknown / Wale catalog",
    "knownCoWriters": [],
    "certifications": [],
    "awardsOrNotableNotes": [],
    "sourceKeys": [
      "dork_credit_index"
    ],
    "confidence": "low",
    "notes": "",
    "readableFormat": "Unknown\nSurvive\nWale\nWriter / additional vocals\nCertification: not verified / not found in public lookup\nParent project: Unknown / Wale catalog",
    "platformSearchLinksUnverified": {
      "spotify_search": "https://open.spotify.com/search/Survive+Wale",
      "apple_music_search": "https://music.apple.com/us/search?term=Survive+Wale",
      "tidal_search": "https://tidal.com/search?q=Survive+Wale",
      "youtube_music_search": "https://music.youtube.com/search?q=Survive+Wale",
      "deezer_search": "https://www.deezer.com/search/Survive+Wale"
    }
  }
];
