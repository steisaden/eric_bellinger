export type AlbumStreamingRoute = {
  id: string;
  title: string;
  artists: string[];
  projectType: string;
  releaseDate: string | null;
  year: number;
  catalogIds: {
    appleMusicAlbumId: string | null;
    spotifyAlbumId: string | null;
  };
  urls: {
    primaryRouter: string | null;
    officialSmartLink: string | null;
    universalSmartLinkGeneratedFromAppleId: string | null;
    direct: {
      appleMusic: string | null;
      spotify: string | null;
      youtubeMusic: string | null;
      tidal: string | null;
      amazonMusic: string | null;
      deezer: string | null;
      soundcloud: string | null;
      audiomack: string | null;
      pandora: string | null;
    };
    fallbackSearch: {
      spotify: string | null;
      appleMusic: string | null;
      youtubeMusic: string | null;
      tidal: string | null;
      amazonMusic: string | null;
      deezer: string | null;
      soundcloud: string | null;
      audiomack: string | null;
      pandora: string | null;
    };
  };
  verificationStatus: Record<string, string>;
  notes: string | null;
};

export const ALBUM_STREAMING_ROUTES: AlbumStreamingRoute[] = [
  {
    "id": "in-the-meantime",
    "title": "In the Meantime",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2011-01-01",
    "year": 2011,
    "catalogIds": {
      "appleMusicAlbumId": "1435096196",
      "spotifyAlbumId": "2lF30XIw9WRQS1iZuh4PWi"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1435096196",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1435096196",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/in-the-meantime/1435096196",
        "spotify": "https://open.spotify.com/album/2lF30XIw9WRQS1iZuh4PWi",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/In%20the%20Meantime%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=In+the+Meantime+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=In+the+Meantime+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=In+the+Meantime+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/In+the+Meantime+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/In%20the%20Meantime%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=In+the+Meantime+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=In+the+Meantime+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/In%20the%20Meantime%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets; release date normalized to year when only year was available."
  },
  {
    "id": "born-ii-sing-vol-1",
    "title": "Born II Sing, Vol. 1",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape",
    "releaseDate": "2011-04-17",
    "year": 2011,
    "catalogIds": {
      "appleMusicAlbumId": "1435111962",
      "spotifyAlbumId": "5nk5NntIvKL4Yhq2igUrN2"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1435111962",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1435111962",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/born-ii-sing-vol-1/1435111962",
        "spotify": "https://open.spotify.com/album/5nk5NntIvKL4Yhq2igUrN2",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Born%20II%20Sing%2C%20Vol.%201%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Born+II+Sing%2C+Vol.+1+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Born+II+Sing%2C+Vol.+1+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Born+II+Sing%2C+Vol.+1+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Born+II+Sing%2C+Vol.+1+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Born%20II%20Sing%2C%20Vol.%201%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Born+II+Sing%2C+Vol.+1+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Born+II+Sing%2C+Vol.+1+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Born%20II%20Sing%2C%20Vol.%201%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "born-ii-sing-vol-2",
    "title": "Born II Sing, Vol. 2",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape",
    "releaseDate": "2012-04-15",
    "year": 2012,
    "catalogIds": {
      "appleMusicAlbumId": "1435112117",
      "spotifyAlbumId": "2KrR7IXZLJet9eBhCwh9BV"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1435112117",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1435112117",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/born-ii-sing-vol-2/1435112117",
        "spotify": "https://open.spotify.com/album/2KrR7IXZLJet9eBhCwh9BV",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Born%20II%20Sing%2C%20Vol.%202%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Born+II+Sing%2C+Vol.+2+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Born+II+Sing%2C+Vol.+2+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Born+II+Sing%2C+Vol.+2+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Born+II+Sing%2C+Vol.+2+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Born%20II%20Sing%2C%20Vol.%202%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Born+II+Sing%2C+Vol.+2+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Born+II+Sing%2C+Vol.+2+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Born%20II%20Sing%2C%20Vol.%202%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "born-ii-sing-vol-3",
    "title": "Born II Sing, Vol. 3",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape",
    "releaseDate": "2013-01-01",
    "year": 2013,
    "catalogIds": {
      "appleMusicAlbumId": "1435100127",
      "spotifyAlbumId": "2bzD6mOEl9iLR9hiM0khZ3"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1435100127",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1435100127",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/born-ii-sing-vol-3/1435100127",
        "spotify": "https://open.spotify.com/album/2bzD6mOEl9iLR9hiM0khZ3",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Born%20II%20Sing%2C%20Vol.%203%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Born+II+Sing%2C+Vol.+3+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Born+II+Sing%2C+Vol.+3+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Born+II+Sing%2C+Vol.+3+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Born+II+Sing%2C+Vol.+3+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Born%20II%20Sing%2C%20Vol.%203%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Born+II+Sing%2C+Vol.+3+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Born+II+Sing%2C+Vol.+3+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Born%20II%20Sing%2C%20Vol.%203%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets; release date normalized to year when only year was available."
  },
  {
    "id": "your-favorite-christmas-songs",
    "title": "Your Favorite Christmas Songs",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape / Holiday project",
    "releaseDate": "2013-12-10",
    "year": 2013,
    "catalogIds": {
      "appleMusicAlbumId": "1646823841",
      "spotifyAlbumId": "2J4yoqNkSjA6zI4PYtdAy2"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1646823841",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1646823841",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/your-favorite-christmas-songs/1646823841",
        "spotify": "https://open.spotify.com/album/2J4yoqNkSjA6zI4PYtdAy2",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Your%20Favorite%20Christmas%20Songs%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Your+Favorite+Christmas+Songs+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Your+Favorite+Christmas+Songs+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Your+Favorite+Christmas+Songs+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Your+Favorite+Christmas+Songs+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Your%20Favorite%20Christmas%20Songs%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Your+Favorite+Christmas+Songs+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Your+Favorite+Christmas+Songs+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Your%20Favorite%20Christmas%20Songs%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "the-rebirth",
    "title": "The Rebirth",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2014-02-11",
    "year": 2014,
    "catalogIds": {
      "appleMusicAlbumId": "1646824500",
      "spotifyAlbumId": "1dmRT4o84KJpQlbaJF7vhY"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1646824500",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1646824500",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/the-rebirth/1646824500",
        "spotify": "https://open.spotify.com/album/1dmRT4o84KJpQlbaJF7vhY",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/The%20Rebirth%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=The+Rebirth+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=The+Rebirth+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=The+Rebirth+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/The+Rebirth+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/The%20Rebirth%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=The+Rebirth+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/The%20Rebirth%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets. Duplicates/region variants may exist."
  },
  {
    "id": "choose-up-season",
    "title": "Choose Up Season",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape",
    "releaseDate": "2014-10-01",
    "year": 2014,
    "catalogIds": {
      "appleMusicAlbumId": "1646823629",
      "spotifyAlbumId": "4aypIonA8QcPoTNTVv9W9H"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1646823629",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1646823629",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/choose-up-season/1646823629",
        "spotify": "https://open.spotify.com/album/4aypIonA8QcPoTNTVv9W9H",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Choose%20Up%20Season%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Choose+Up+Season+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Choose+Up+Season+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Choose+Up+Season+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Choose+Up+Season+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Choose%20Up%20Season%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Choose+Up+Season+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Choose+Up+Season+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Choose%20Up%20Season%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets; release date normalized to month when exact date varied by service."
  },
  {
    "id": "cuffing-season",
    "title": "Cuffing Season",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2015-07-10",
    "year": 2015,
    "catalogIds": {
      "appleMusicAlbumId": "1018590532",
      "spotifyAlbumId": "02Pte1TJ00hQSaWJCyJLzm"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1018590532",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1018590532",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/cuffing-season/1018590532",
        "spotify": "https://open.spotify.com/album/02Pte1TJ00hQSaWJCyJLzm",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Cuffing%20Season%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Cuffing+Season+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Cuffing+Season+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Cuffing+Season+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Cuffing+Season+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Cuffing%20Season%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Cuffing+Season+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Cuffing+Season+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Cuffing%20Season%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "in-the-meantime-pt-2",
    "title": "In the Meantime, Pt. 2",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2015-09-04",
    "year": 2015,
    "catalogIds": {
      "appleMusicAlbumId": null,
      "spotifyAlbumId": null
    },
    "urls": {
      "primaryRouter": "https://soundcloud.com/ericbellinger/sets/eric-bellinger-in-the-meantime",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": null,
      "direct": {
        "appleMusic": null,
        "spotify": null,
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": "https://soundcloud.com/ericbellinger/sets/eric-bellinger-in-the-meantime",
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/In%20the%20Meantime%2C%20Pt.%202%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/In%20the%20Meantime%2C%20Pt.%202%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=In+the+Meantime%2C+Pt.+2+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/In%20the%20Meantime%2C%20Pt.%202%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "not_found_or_not_confident",
      "direct_spotify": "not_found_or_not_confident",
      "official_smart_link": "not_found",
      "universal_smart_link": "not_available",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "SoundCloud playlist was verified. Exact Apple/Spotify album URLs were not confidently exposed in search results, so direct platform fields are null."
  },
  {
    "id": "cuffing-season-part-2",
    "title": "Cuffing Season Part 2",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2015-12-04",
    "year": 2015,
    "catalogIds": {
      "appleMusicAlbumId": "1060704988",
      "spotifyAlbumId": "0A9zfrRQRAxBDPfcLpk2Wq"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1060704988",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1060704988",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/cuffing-season-part-2/1060704988",
        "spotify": "https://open.spotify.com/album/0A9zfrRQRAxBDPfcLpk2Wq",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Cuffing%20Season%20Part%202%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Cuffing+Season+Part+2+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Cuffing+Season+Part+2+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Cuffing+Season+Part+2+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Cuffing+Season+Part+2+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Cuffing%20Season%20Part%202%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Cuffing+Season+Part+2+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Cuffing+Season+Part+2+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Cuffing%20Season%20Part%202%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eventually",
    "title": "Eventually",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape",
    "releaseDate": "2016-05-27",
    "year": 2016,
    "catalogIds": {
      "appleMusicAlbumId": "1114091170",
      "spotifyAlbumId": "5jxMMefIMpSPPMxUebNHeg"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1114091170",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1114091170",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eventually/1114091170",
        "spotify": "https://open.spotify.com/album/5jxMMefIMpSPPMxUebNHeg",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eventually%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eventually+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eventually+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eventually+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eventually+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eventually%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eventually+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eventually+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eventually%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eric-b-for-president-term-1",
    "title": "Eric B for President: Term 1",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2016-09-09",
    "year": 2016,
    "catalogIds": {
      "appleMusicAlbumId": "1145029175",
      "spotifyAlbumId": "7KNNWIPBk4Josbqhfa2KI3"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1145029175",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1145029175",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eric-b-for-president-term-1/1145029175",
        "spotify": "https://open.spotify.com/album/7KNNWIPBk4Josbqhfa2KI3",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eric%20B%20for%20President%3A%20Term%201%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eric+B+for+President%3A+Term+1+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eric+B+for+President%3A+Term+1+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eric+B+for+President%3A+Term+1+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eric+B+for+President%3A+Term+1+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eric%20B%20for%20President%3A%20Term%201%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eric+B+for+President%3A+Term+1+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eric+B+for+President%3A+Term+1+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eric%20B%20for%20President%3A%20Term%201%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets. Apple has alternate region/catalog variants."
  },
  {
    "id": "eric-b-for-president-term-1-acoustic",
    "title": "Eric B for President: Term 1 (Acoustic)",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Acoustic EP",
    "releaseDate": "2017-01-20",
    "year": 2017,
    "catalogIds": {
      "appleMusicAlbumId": "1197110564",
      "spotifyAlbumId": "3i3U0L4Irpmel1hVTZD52w"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1197110564",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1197110564",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eric-b-for-president-term-1-acoustic/1197110564",
        "spotify": "https://open.spotify.com/album/3i3U0L4Irpmel1hVTZD52w",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eric%20B%20for%20President%3A%20Term%201%20%28Acoustic%29%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eric+B+for+President%3A+Term+1+%28Acoustic%29+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eric+B+for+President%3A+Term+1+%28Acoustic%29+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eric+B+for+President%3A+Term+1+%28Acoustic%29+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eric+B+for+President%3A+Term+1+%28Acoustic%29+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eric%20B%20for%20President%3A%20Term%201%20%28Acoustic%29%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eric+B+for+President%3A+Term+1+%28Acoustic%29+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eric+B+for+President%3A+Term+1+%28Acoustic%29+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eric%20B%20for%20President%3A%20Term%201%20%28Acoustic%29%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eric-b-for-president-term-2",
    "title": "Eric B for President: Term 2",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2017-03-10",
    "year": 2017,
    "catalogIds": {
      "appleMusicAlbumId": "1209205422",
      "spotifyAlbumId": "2CpjQUuHJ69IVoARFDVuAj"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1209205422",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1209205422",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eric-b-for-president-term-2/1209205422",
        "spotify": "https://open.spotify.com/album/2CpjQUuHJ69IVoARFDVuAj",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eric%20B%20for%20President%3A%20Term%202%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eric+B+for+President%3A+Term+2+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eric+B+for+President%3A+Term+2+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eric+B+for+President%3A+Term+2+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eric+B+for+President%3A+Term+2+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eric%20B%20for%20President%3A%20Term%202%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eric+B+for+President%3A+Term+2+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eric+B+for+President%3A+Term+2+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eric%20B%20for%20President%3A%20Term%202%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "cannabliss",
    "title": "Cannabliss",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2017-04-17",
    "year": 2017,
    "catalogIds": {
      "appleMusicAlbumId": "1226794984",
      "spotifyAlbumId": "4TuLrautEJ20PCikp4j4e9"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1226794984",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1226794984",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/cannabliss/1226794984",
        "spotify": "https://open.spotify.com/album/4TuLrautEJ20PCikp4j4e9",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Cannabliss%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Cannabliss+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Cannabliss+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Cannabliss+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Cannabliss+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Cannabliss%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Cannabliss+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Cannabliss+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Cannabliss%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eric-b-for-president-term-2-acoustic",
    "title": "Eric B for President: Term 2 (Acoustic)",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Acoustic EP",
    "releaseDate": "2017-08-18",
    "year": 2017,
    "catalogIds": {
      "appleMusicAlbumId": "1275782097",
      "spotifyAlbumId": "1WDO3fru9yHtai10ibKqbW"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1275782097",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1275782097",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eric-b-for-president-term-2-acoustic/1275782097",
        "spotify": "https://open.spotify.com/album/1WDO3fru9yHtai10ibKqbW",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eric%20B%20for%20President%3A%20Term%202%20%28Acoustic%29%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eric+B+for+President%3A+Term+2+%28Acoustic%29+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eric+B+for+President%3A+Term+2+%28Acoustic%29+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eric+B+for+President%3A+Term+2+%28Acoustic%29+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eric+B+for+President%3A+Term+2+%28Acoustic%29+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eric%20B%20for%20President%3A%20Term%202%20%28Acoustic%29%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eric+B+for+President%3A+Term+2+%28Acoustic%29+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eric+B+for+President%3A+Term+2+%28Acoustic%29+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eric%20B%20for%20President%3A%20Term%202%20%28Acoustic%29%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eazy-call",
    "title": "Eazy Call",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2018-04-06",
    "year": 2018,
    "catalogIds": {
      "appleMusicAlbumId": null,
      "spotifyAlbumId": "39hTPLiFQUdyVCgmz8kYgG"
    },
    "urls": {
      "primaryRouter": "https://ericbellinger.lnk.to/eazycall",
      "officialSmartLink": "https://ericbellinger.lnk.to/eazycall",
      "universalSmartLinkGeneratedFromAppleId": null,
      "direct": {
        "appleMusic": null,
        "spotify": "https://open.spotify.com/album/39hTPLiFQUdyVCgmz8kYgG",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eazy%20Call%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eazy+Call+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eazy+Call+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eazy+Call+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eazy+Call+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eazy%20Call%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eazy+Call+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eazy+Call+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eazy%20Call%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "not_found_or_not_confident",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "not_available",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official Linkfire smart link and Spotify direct URL verified. Apple direct album ID was not captured confidently, so Apple direct URL is null; use primary_router."
  },
  {
    "id": "meditation-music",
    "title": "Meditation Music",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2018-07-13",
    "year": 2018,
    "catalogIds": {
      "appleMusicAlbumId": "1408124935",
      "spotifyAlbumId": "2u408ofCI4bUc5rE1rJMxc"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1408124935",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1408124935",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/meditation-music/1408124935",
        "spotify": "https://open.spotify.com/album/2u408ofCI4bUc5rE1rJMxc",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Meditation%20Music%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Meditation+Music+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Meditation+Music+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Meditation+Music+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Meditation+Music+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Meditation%20Music%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Meditation+Music+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Meditation+Music+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Meditation%20Music%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "nine",
    "title": "Nine",
    "artists": [
      "Sammie",
      "Eric Bellinger"
    ],
    "projectType": "Collaborative album",
    "releaseDate": "2018-12-14",
    "year": 2018,
    "catalogIds": {
      "appleMusicAlbumId": "1494609005",
      "spotifyAlbumId": "5lN07HlqLxAROSlaEk7JWO"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1494609005",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1494609005",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/nine/1494609005",
        "spotify": "https://open.spotify.com/album/5lN07HlqLxAROSlaEk7JWO",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Nine%20Sammie%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Nine+Sammie+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Nine+Sammie+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Nine+Sammie+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Nine+Sammie+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Nine%20Sammie%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Nine+Sammie+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Nine+Sammie+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Nine%20Sammie%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "the-rebirth-2",
    "title": "The Rebirth 2",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2019-02-22",
    "year": 2019,
    "catalogIds": {
      "appleMusicAlbumId": "1450860375",
      "spotifyAlbumId": "6ge7TzHO6gXdfxrtavSr69"
    },
    "urls": {
      "primaryRouter": "https://ericbellinger.lnk.to/Therebirth2",
      "officialSmartLink": "https://ericbellinger.lnk.to/Therebirth2",
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1450860375",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/the-rebirth-2/1450860375",
        "spotify": "https://open.spotify.com/album/6ge7TzHO6gXdfxrtavSr69",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/The%20Rebirth%202%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=The+Rebirth+2+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=The+Rebirth+2+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=The+Rebirth+2+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/The+Rebirth+2+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/The%20Rebirth%202%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+2+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=The+Rebirth+2+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/The%20Rebirth%202%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official Linkfire smart link plus Apple and Spotify direct URLs verified."
  },
  {
    "id": "saved-by-the-bellinger",
    "title": "Saved by the Bellinger",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2019-09-27",
    "year": 2019,
    "catalogIds": {
      "appleMusicAlbumId": "1478338150",
      "spotifyAlbumId": "7D1dRxRKV1HULOSuU3HOqS"
    },
    "urls": {
      "primaryRouter": "https://ericbellinger.lnk.to/SBTB",
      "officialSmartLink": "https://ericbellinger.lnk.to/SBTB",
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1478338150",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/saved-by-the-bellinger/1478338150",
        "spotify": "https://open.spotify.com/album/7D1dRxRKV1HULOSuU3HOqS",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Saved%20by%20the%20Bellinger%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Saved+by+the+Bellinger+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Saved+by+the+Bellinger+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Saved+by+the+Bellinger+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Saved+by+the+Bellinger+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Saved%20by%20the%20Bellinger%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Saved+by+the+Bellinger+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Saved+by+the+Bellinger+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Saved%20by%20the%20Bellinger%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official Linkfire smart link plus Apple and Spotify direct URLs verified."
  },
  {
    "id": "cuffing-season-3",
    "title": "Cuffing Season 3",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2019-11-22",
    "year": 2019,
    "catalogIds": {
      "appleMusicAlbumId": "1487729339",
      "spotifyAlbumId": "0O2zHk3J94eTcxXCy4SOid"
    },
    "urls": {
      "primaryRouter": "https://ericbellinger.lnk.to/CS3",
      "officialSmartLink": "https://ericbellinger.lnk.to/CS3",
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1487729339",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/cuffing-season-3/1487729339",
        "spotify": "https://open.spotify.com/album/0O2zHk3J94eTcxXCy4SOid",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": "https://soundcloud.com/ericbellinger/sets/cuffing-season-3-1",
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Cuffing%20Season%203%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Cuffing+Season+3+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Cuffing+Season+3+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Cuffing+Season+3+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Cuffing+Season+3+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Cuffing%20Season%203%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Cuffing+Season+3+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Cuffing+Season+3+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Cuffing%20Season%203%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official Linkfire smart link, Odesli smart link, Apple, Spotify, and SoundCloud URLs verified."
  },
  {
    "id": "scenarios",
    "title": "Scenarios",
    "artists": [
      "Eric Bellinger",
      "Chase N. Cashe"
    ],
    "projectType": "Collaborative album",
    "releaseDate": "2020-01-24",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1496285725",
      "spotifyAlbumId": "1e7pGa8A99vV8ftAnCJWMI"
    },
    "urls": {
      "primaryRouter": "https://ericbellinger.lnk.to/Scenarios",
      "officialSmartLink": "https://ericbellinger.lnk.to/Scenarios",
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1496285725",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/scenarios/1496285725",
        "spotify": "https://open.spotify.com/album/1e7pGa8A99vV8ftAnCJWMI",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Scenarios%20Eric%20Bellinger%20Chase%20N.%20Cashe/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Scenarios+Eric+Bellinger+Chase+N.+Cashe",
        "youtubeMusic": "https://music.youtube.com/search?q=Scenarios+Eric+Bellinger+Chase+N.+Cashe",
        "tidal": "https://listen.tidal.com/search?q=Scenarios+Eric+Bellinger+Chase+N.+Cashe",
        "amazonMusic": "https://music.amazon.com/search/Scenarios+Eric+Bellinger+Chase+N.+Cashe",
        "deezer": "https://www.deezer.com/search/Scenarios%20Eric%20Bellinger%20Chase%20N.%20Cashe/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Scenarios+Eric+Bellinger+Chase+N.+Cashe",
        "audiomack": "https://audiomack.com/search?q=Scenarios+Eric+Bellinger+Chase+N.+Cashe",
        "pandora": "https://www.pandora.com/search/Scenarios%20Eric%20Bellinger%20Chase%20N.%20Cashe/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official Linkfire smart link plus Apple and Spotify direct URLs verified."
  },
  {
    "id": "optimal-music",
    "title": "Optimal Music",
    "artists": [
      "Eric Bellinger",
      "Nieman J"
    ],
    "projectType": "Collaborative album",
    "releaseDate": "2020-05-08",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1640485040",
      "spotifyAlbumId": "2qnh8gtPqmCNbzqCCyODnk"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1640485040",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1640485040",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/optimal-music/1640485040",
        "spotify": "https://open.spotify.com/album/2qnh8gtPqmCNbzqCCyODnk",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Optimal%20Music%20Eric%20Bellinger%20Nieman%20J/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Optimal+Music+Eric+Bellinger+Nieman+J",
        "youtubeMusic": "https://music.youtube.com/search?q=Optimal+Music+Eric+Bellinger+Nieman+J",
        "tidal": "https://listen.tidal.com/search?q=Optimal+Music+Eric+Bellinger+Nieman+J",
        "amazonMusic": "https://music.amazon.com/search/Optimal+Music+Eric+Bellinger+Nieman+J",
        "deezer": "https://www.deezer.com/search/Optimal%20Music%20Eric%20Bellinger%20Nieman%20J/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Optimal+Music+Eric+Bellinger+Nieman+J",
        "audiomack": "https://audiomack.com/search?q=Optimal+Music+Eric+Bellinger+Nieman+J",
        "pandora": "https://www.pandora.com/search/Optimal%20Music%20Eric%20Bellinger%20Nieman%20J/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets. Spotify duplicate/catalog variant may exist."
  },
  {
    "id": "hors-doeuvres",
    "title": "Hors D'oeuvres",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Mixtape",
    "releaseDate": "2020-06-05",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1515843993",
      "spotifyAlbumId": null
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1515843993",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1515843993",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/hors-doeuvres/1515843993",
        "spotify": null,
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Hors%20D%27oeuvres%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Hors+D%27oeuvres+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Hors+D%27oeuvres+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Hors+D%27oeuvres+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Hors+D%27oeuvres+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Hors%20D%27oeuvres%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Hors+D%27oeuvres+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Hors+D%27oeuvres+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Hors%20D%27oeuvres%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "not_found_or_not_confident",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple direct URL verified. Spotify direct album URL was not confidently captured, so it is null."
  },
  {
    "id": "feelin-like-christmas",
    "title": "Feelin' Like Christmas",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Holiday EP",
    "releaseDate": "2020-11-20",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1716742356",
      "spotifyAlbumId": "1Cm0jqlcZogPLhZqc8Lspl"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1716742356",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1716742356",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/feelin-like-christmas/1716742356",
        "spotify": "https://open.spotify.com/album/1Cm0jqlcZogPLhZqc8Lspl",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Feelin%27%20Like%20Christmas%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Feelin%27+Like+Christmas+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Feelin%27+Like+Christmas+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Feelin%27+Like+Christmas+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Feelin%27+Like+Christmas+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Feelin%27%20Like%20Christmas%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Feelin%27+Like+Christmas+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Feelin%27+Like+Christmas+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Feelin%27%20Like%20Christmas%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "genius",
    "title": "Genius",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2020-12-11",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1716736929",
      "spotifyAlbumId": null
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1716736929",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1716736929",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/genius/1716736929",
        "spotify": null,
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Genius%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Genius+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Genius+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Genius+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Genius+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Genius%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Genius+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Genius+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Genius%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "not_found_or_not_confident",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple direct URL verified. Spotify direct album URL was not confidently captured, so it is null."
  },
  {
    "id": "eric-b-for-president-term-3",
    "title": "Eric B For President: Term 3",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2020-09-11",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1530649682",
      "spotifyAlbumId": "4CZ1oizeyLzkfQxUF2eFz2"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1530649682",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1530649682",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eric-b-for-president-term-3/1530649682",
        "spotify": "https://open.spotify.com/album/4CZ1oizeyLzkfQxUF2eFz2",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eric%20B%20For%20President%3A%20Term%203%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eric+B+For+President%3A+Term+3+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eric+B+For+President%3A+Term+3+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eric+B+For+President%3A+Term+3+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eric+B+For+President%3A+Term+3+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eric%20B%20For%20President%3A%20Term%203%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eric+B+For+President%3A+Term+3+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eric+B+For+President%3A+Term+3+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eric%20B%20For%20President%3A%20Term%203%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eric-b-for-president-term-3-acoustic-version",
    "title": "Eric B For President: Term 3 (Acoustic Version)",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Acoustic EP",
    "releaseDate": "2020-12-18",
    "year": 2020,
    "catalogIds": {
      "appleMusicAlbumId": "1545081157",
      "spotifyAlbumId": "733BS7HiuFe4EoeAGI1Idk"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1545081157",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1545081157",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eric-b-for-president-term-3-acoustic-version/1545081157",
        "spotify": "https://open.spotify.com/album/733BS7HiuFe4EoeAGI1Idk",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eric%20B%20For%20President%3A%20Term%203%20%28Acoustic%20Version%29%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eric+B+For+President%3A+Term+3+%28Acoustic+Version%29+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eric+B+For+President%3A+Term+3+%28Acoustic+Version%29+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eric+B+For+President%3A+Term+3+%28Acoustic+Version%29+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eric+B+For+President%3A+Term+3+%28Acoustic+Version%29+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eric%20B%20For%20President%3A%20Term%203%20%28Acoustic%20Version%29%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eric+B+For+President%3A+Term+3+%28Acoustic+Version%29+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eric+B+For+President%3A+Term+3+%28Acoustic+Version%29+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eric%20B%20For%20President%3A%20Term%203%20%28Acoustic%20Version%29%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "1-800-hit-eazy",
    "title": "1-800-HIT-EAZY",
    "artists": [
      "Eric Bellinger",
      "Hitmaka"
    ],
    "projectType": "Collaborative album",
    "releaseDate": "2021-02-12",
    "year": 2021,
    "catalogIds": {
      "appleMusicAlbumId": "1550219088",
      "spotifyAlbumId": "49sZjOYtCwxpOhbwDXmaUi"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1550219088",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1550219088",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/1-800-hit-eazy/1550219088",
        "spotify": "https://open.spotify.com/album/49sZjOYtCwxpOhbwDXmaUi",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/1-800-HIT-EAZY%20Eric%20Bellinger%20Hitmaka/albums",
        "appleMusic": "https://music.apple.com/us/search?term=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
        "youtubeMusic": "https://music.youtube.com/search?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
        "tidal": "https://listen.tidal.com/search?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
        "amazonMusic": "https://music.amazon.com/search/1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
        "deezer": "https://www.deezer.com/search/1-800-HIT-EAZY%20Eric%20Bellinger%20Hitmaka/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
        "audiomack": "https://audiomack.com/search?q=1-800-HIT-EAZY+Eric+Bellinger+Hitmaka",
        "pandora": "https://www.pandora.com/search/1-800-HIT-EAZY%20Eric%20Bellinger%20Hitmaka/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "new-light",
    "title": "New Light",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2021-09-10",
    "year": 2021,
    "catalogIds": {
      "appleMusicAlbumId": "1582684260",
      "spotifyAlbumId": "3BY4kqH3wxKXvnDK6GUqH4"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1582684260",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1582684260",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/new-light/1582684260",
        "spotify": "https://open.spotify.com/album/3BY4kqH3wxKXvnDK6GUqH4",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/New%20Light%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=New+Light+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=New+Light+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=New+Light+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/New+Light+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/New%20Light%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=New+Light+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=New+Light+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/New%20Light%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets. Apple has regional duplicate IDs; U.S. catalog ID used."
  },
  {
    "id": "new-light-acoustics",
    "title": "New Light: Acoustics",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Acoustic EP",
    "releaseDate": "2021-11-26",
    "year": 2021,
    "catalogIds": {
      "appleMusicAlbumId": "1596366455",
      "spotifyAlbumId": "1gLuJkHtlvjcpG9uJFtXls"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1596366455",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1596366455",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/new-light-acoustics/1596366455",
        "spotify": "https://open.spotify.com/album/1gLuJkHtlvjcpG9uJFtXls",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/New%20Light%3A%20Acoustics%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=New+Light%3A+Acoustics+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=New+Light%3A+Acoustics+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=New+Light%3A+Acoustics+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/New+Light%3A+Acoustics+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/New%20Light%3A%20Acoustics%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=New+Light%3A+Acoustics+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=New+Light%3A+Acoustics+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/New%20Light%3A%20Acoustics%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "new-light-the-remixes",
    "title": "New Light: The Remixes",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Remix EP",
    "releaseDate": "2022-04-22",
    "year": 2022,
    "catalogIds": {
      "appleMusicAlbumId": "1620235077",
      "spotifyAlbumId": "5BCjKM8EYFMMnxHfTyC2p7"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1620235077",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1620235077",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/new-light-the-remixes/1620235077",
        "spotify": "https://open.spotify.com/album/5BCjKM8EYFMMnxHfTyC2p7",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/New%20Light%3A%20The%20Remixes%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=New+Light%3A+The+Remixes+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=New+Light%3A+The+Remixes+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=New+Light%3A+The+Remixes+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/New+Light%3A+The+Remixes+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/New%20Light%3A%20The%20Remixes%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=New+Light%3A+The+Remixes+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=New+Light%3A+The+Remixes+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/New%20Light%3A%20The%20Remixes%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "rock-the-bellinger",
    "title": "Rock the Bellinger",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "EP",
    "releaseDate": "2022-12-09",
    "year": 2022,
    "catalogIds": {
      "appleMusicAlbumId": "1658166240",
      "spotifyAlbumId": "3rNgarckK6kdzj3EC3QI02"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1658166240",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1658166240",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/rock-the-bellinger/1658166240",
        "spotify": "https://open.spotify.com/album/3rNgarckK6kdzj3EC3QI02",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Rock%20the%20Bellinger%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Rock+the+Bellinger+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Rock+the+Bellinger+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Rock+the+Bellinger+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Rock+the+Bellinger+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Rock%20the%20Bellinger%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Rock+the+Bellinger+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Rock+the+Bellinger+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Rock%20the%20Bellinger%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "1-800-hit-eazy-line-2",
    "title": "1(800)HIT-EAZY: Line 2",
    "artists": [
      "Eric Bellinger",
      "Hitmaka"
    ],
    "projectType": "Collaborative album",
    "releaseDate": "2023-02-10",
    "year": 2023,
    "catalogIds": {
      "appleMusicAlbumId": "1667711335",
      "spotifyAlbumId": "6KIxdiACBAewmOLM1YBPYJ"
    },
    "urls": {
      "primaryRouter": "https://music.empi.re/hiteazy2",
      "officialSmartLink": "https://music.empi.re/hiteazy2",
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1667711335",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/1-800-hit-eazy-line-2/1667711335",
        "spotify": "https://open.spotify.com/album/6KIxdiACBAewmOLM1YBPYJ",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20Eric%20Bellinger%20Hitmaka/albums",
        "appleMusic": "https://music.apple.com/us/search?term=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
        "youtubeMusic": "https://music.youtube.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
        "tidal": "https://listen.tidal.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
        "amazonMusic": "https://music.amazon.com/search/1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
        "deezer": "https://www.deezer.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20Eric%20Bellinger%20Hitmaka/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
        "audiomack": "https://audiomack.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+Eric+Bellinger+Hitmaka",
        "pandora": "https://www.pandora.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20Eric%20Bellinger%20Hitmaka/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official EMPIRE/Feature.fm smart link plus Apple and Spotify direct URLs verified."
  },
  {
    "id": "1-800-hit-eazy-line-2-sped-up",
    "title": "1(800)HIT-EAZY: Line 2 (Sped Up)",
    "artists": [
      "Eric Bellinger",
      "Hitmaka"
    ],
    "projectType": "Sped-up project",
    "releaseDate": "2023-04-07",
    "year": 2023,
    "catalogIds": {
      "appleMusicAlbumId": "1681686190",
      "spotifyAlbumId": "49C3kPdTX15weuka7Qg4k6"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1681686190",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1681686190",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/1-800-hit-eazy-line-2-sped-up/1681686190",
        "spotify": "https://open.spotify.com/album/49C3kPdTX15weuka7Qg4k6",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20%28Sped%20Up%29%20Eric%20Bellinger%20Hitmaka/albums",
        "appleMusic": "https://music.apple.com/us/search?term=1%28800%29HIT-EAZY%3A+Line+2+%28Sped+Up%29+Eric+Bellinger+Hitmaka",
        "youtubeMusic": "https://music.youtube.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+%28Sped+Up%29+Eric+Bellinger+Hitmaka",
        "tidal": "https://listen.tidal.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+%28Sped+Up%29+Eric+Bellinger+Hitmaka",
        "amazonMusic": "https://music.amazon.com/search/1%28800%29HIT-EAZY%3A+Line+2+%28Sped+Up%29+Eric+Bellinger+Hitmaka",
        "deezer": "https://www.deezer.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20%28Sped%20Up%29%20Eric%20Bellinger%20Hitmaka/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=1%28800%29HIT-EAZY%3A+Line+2+%28Sped+Up%29+Eric+Bellinger+Hitmaka",
        "audiomack": "https://audiomack.com/search?q=1%28800%29HIT-EAZY%3A+Line+2+%28Sped+Up%29+Eric+Bellinger+Hitmaka",
        "pandora": "https://www.pandora.com/search/1%28800%29HIT-EAZY%3A%20Line%202%20%28Sped%20Up%29%20Eric%20Bellinger%20Hitmaka/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "eazy-christmas",
    "title": "Eazy Christmas",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Holiday album",
    "releaseDate": "2023-12-01",
    "year": 2023,
    "catalogIds": {
      "appleMusicAlbumId": "1718841997",
      "spotifyAlbumId": "3l8Bbp0kaZXMhUCWKFx2FT"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1718841997",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1718841997",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/eazy-christmas/1718841997",
        "spotify": "https://open.spotify.com/album/3l8Bbp0kaZXMhUCWKFx2FT",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/Eazy%20Christmas%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=Eazy+Christmas+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=Eazy+Christmas+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=Eazy+Christmas+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/Eazy+Christmas+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/Eazy%20Christmas%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=Eazy+Christmas+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=Eazy+Christmas+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/Eazy%20Christmas%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "the-rebirth-3-the-party-and-the-bedroom",
    "title": "The Rebirth 3: The Party & The Bedroom",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2024-02-09",
    "year": 2024,
    "catalogIds": {
      "appleMusicAlbumId": "1730460638",
      "spotifyAlbumId": "01bHZLLEGrQkliJecHJTmS"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1730460638",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1730460638",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/the-rebirth-3-the-party-and-the-bedroom/1730460638",
        "spotify": "https://open.spotify.com/album/01bHZLLEGrQkliJecHJTmS",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "the-rebirth-3-the-party-and-the-bedroom-acoustic",
    "title": "The Rebirth 3: The Party & The Bedroom (Acoustic)",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Acoustic album",
    "releaseDate": "2024-06-07",
    "year": 2024,
    "catalogIds": {
      "appleMusicAlbumId": "1748765418",
      "spotifyAlbumId": "3koHdaGklBMuwwDl6iGL2Z"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1748765418",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1748765418",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/the-rebirth-3-the-party-and-the-bedroom-acoustic/1748765418",
        "spotify": "https://open.spotify.com/album/3koHdaGklBMuwwDl6iGL2Z",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20%28Acoustic%29%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+%28Acoustic%29+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+%28Acoustic%29+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+%28Acoustic%29+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/The+Rebirth+3%3A+The+Party+%26+The+Bedroom+%28Acoustic%29+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20%28Acoustic%29%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+%28Acoustic%29+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=The+Rebirth+3%3A+The+Party+%26+The+Bedroom+%28Acoustic%29+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/The%20Rebirth%203%3A%20The%20Party%20%26%20The%20Bedroom%20%28Acoustic%29%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "the-rebirth-3-remixes-and-more",
    "title": "The Rebirth 3: Remixes & More",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Remix album",
    "releaseDate": "2024-08-02",
    "year": 2024,
    "catalogIds": {
      "appleMusicAlbumId": "1760819971",
      "spotifyAlbumId": "08v5H0ZZKd7AhNpZNIBcRy"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1760819971",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1760819971",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/the-rebirth-3-remixes-and-more/1760819971",
        "spotify": "https://open.spotify.com/album/08v5H0ZZKd7AhNpZNIBcRy",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/The%20Rebirth%203%3A%20Remixes%20%26%20More%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/The%20Rebirth%203%3A%20Remixes%20%26%20More%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=The+Rebirth+3%3A+Remixes+%26+More+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/The%20Rebirth%203%3A%20Remixes%20%26%20More%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "itll-all-make-sense-later",
    "title": "It'll All Make Sense Later",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Studio album",
    "releaseDate": "2024-11-22",
    "year": 2024,
    "catalogIds": {
      "appleMusicAlbumId": "1777146974",
      "spotifyAlbumId": "7tvdxqWOmWKZfNtoq1Twje"
    },
    "urls": {
      "primaryRouter": "https://ericbellinger.lnk.to/IAMSL",
      "officialSmartLink": "https://ericbellinger.lnk.to/IAMSL",
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1777146974",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/itll-all-make-sense-later/1777146974",
        "spotify": "https://open.spotify.com/album/7tvdxqWOmWKZfNtoq1Twje",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/It%27ll%20All%20Make%20Sense%20Later%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/It%27ll+All+Make+Sense+Later+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/It%27ll%20All%20Make%20Sense%20Later%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=It%27ll+All+Make+Sense+Later+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/It%27ll%20All%20Make%20Sense%20Later%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "verified",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Official Linkfire smart link plus Apple and Spotify direct URLs verified."
  },
  {
    "id": "itll-all-make-sense-later-deluxe",
    "title": "It'll All Make Sense Later (Deluxe)",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Deluxe album",
    "releaseDate": "2025-03-14",
    "year": 2025,
    "catalogIds": {
      "appleMusicAlbumId": "1800549903",
      "spotifyAlbumId": "0p3gMzAZcxlKnjxyH8MgFw"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1800549903",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1800549903",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/itll-all-make-sense-later-deluxe/1800549903",
        "spotify": "https://open.spotify.com/album/0p3gMzAZcxlKnjxyH8MgFw",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/It%27ll%20All%20Make%20Sense%20Later%20%28Deluxe%29%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=It%27ll+All+Make+Sense+Later+%28Deluxe%29+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=It%27ll+All+Make+Sense+Later+%28Deluxe%29+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=It%27ll+All+Make+Sense+Later+%28Deluxe%29+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/It%27ll+All+Make+Sense+Later+%28Deluxe%29+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/It%27ll%20All%20Make%20Sense%20Later%20%28Deluxe%29%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=It%27ll+All+Make+Sense+Later+%28Deluxe%29+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=It%27ll+All+Make+Sense+Later+%28Deluxe%29+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/It%27ll%20All%20Make%20Sense%20Later%20%28Deluxe%29%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  },
  {
    "id": "it-all-makes-sense",
    "title": "It All Makes Sense",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Album",
    "releaseDate": "2025-09-26",
    "year": 2025,
    "catalogIds": {
      "appleMusicAlbumId": "1842173993",
      "spotifyAlbumId": "6ZDmFjpQwJAbQojUOix1CP"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1842173993",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1842173993",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/it-all-makes-sense/1842173993",
        "spotify": "https://open.spotify.com/album/6ZDmFjpQwJAbQojUOix1CP",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/It%20All%20Makes%20Sense%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=It+All+Makes+Sense+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=It+All+Makes+Sense+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=It+All+Makes+Sense+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/It+All+Makes+Sense+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/It%20All%20Makes%20Sense%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=It+All+Makes+Sense+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=It+All+Makes+Sense+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/It%20All%20Makes%20Sense%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets. Spotify duplicate/catalog variant may exist."
  },
  {
    "id": "it-all-makes-sense-deluxe",
    "title": "It All Makes Sense (Deluxe)",
    "artists": [
      "Eric Bellinger"
    ],
    "projectType": "Deluxe album",
    "releaseDate": "2025-10-17",
    "year": 2025,
    "catalogIds": {
      "appleMusicAlbumId": "1845947405",
      "spotifyAlbumId": "7L0s6OloAyewvqYpHdAFCY"
    },
    "urls": {
      "primaryRouter": "https://album.link/i/1845947405",
      "officialSmartLink": null,
      "universalSmartLinkGeneratedFromAppleId": "https://album.link/i/1845947405",
      "direct": {
        "appleMusic": "https://music.apple.com/us/album/it-all-makes-sense-deluxe/1845947405",
        "spotify": "https://open.spotify.com/album/7L0s6OloAyewvqYpHdAFCY",
        "youtubeMusic": null,
        "tidal": null,
        "amazonMusic": null,
        "deezer": null,
        "soundcloud": null,
        "audiomack": null,
        "pandora": null
      },
      "fallbackSearch": {
        "spotify": "https://open.spotify.com/search/It%20All%20Makes%20Sense%20%28Deluxe%29%20Eric%20Bellinger/albums",
        "appleMusic": "https://music.apple.com/us/search?term=It+All+Makes+Sense+%28Deluxe%29+Eric+Bellinger",
        "youtubeMusic": "https://music.youtube.com/search?q=It+All+Makes+Sense+%28Deluxe%29+Eric+Bellinger",
        "tidal": "https://listen.tidal.com/search?q=It+All+Makes+Sense+%28Deluxe%29+Eric+Bellinger",
        "amazonMusic": "https://music.amazon.com/search/It+All+Makes+Sense+%28Deluxe%29+Eric+Bellinger",
        "deezer": "https://www.deezer.com/search/It%20All%20Makes%20Sense%20%28Deluxe%29%20Eric%20Bellinger/album",
        "soundcloud": "https://soundcloud.com/search/albums?q=It+All+Makes+Sense+%28Deluxe%29+Eric+Bellinger",
        "audiomack": "https://audiomack.com/search?q=It+All+Makes+Sense+%28Deluxe%29+Eric+Bellinger",
        "pandora": "https://www.pandora.com/search/It%20All%20Makes%20Sense%20%28Deluxe%29%20Eric%20Bellinger/all"
      }
    },
    "verificationStatus": {
      "direct_apple_music": "verified",
      "direct_spotify": "verified",
      "official_smart_link": "not_found",
      "universal_smart_link": "generated_from_verified_apple_music_album_id",
      "other_platform_direct_urls": "not_populated_unless_verified; use primary_router or fallback_search"
    },
    "notes": "Apple and Spotify direct URLs verified from public search result snippets."
  }
];

export const ALBUM_STREAMING_ROUTES_BY_TITLE = Object.fromEntries(
  ALBUM_STREAMING_ROUTES.map((route) => [route.title, route]),
) as Record<string, AlbumStreamingRoute>;
