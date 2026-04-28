export type FeatureListenStatus = "verified" | "search_fallback" | "missing";

export type FeatureListenLink = {
  url: string;
  status: FeatureListenStatus;
};

export type FeatureSongListenLinks = {
  appleMusic: FeatureListenLink;
  spotify: FeatureListenLink;
  youtubeMusic: FeatureListenLink;
  youtube: FeatureListenLink;
  tidal: FeatureListenLink;
  amazonMusic: FeatureListenLink;
  deezer: FeatureListenLink;
};

const APPLE_MUSIC_VERIFIED_LINKS: Record<string, FeatureListenLink> = {
  "fa-001": { url: "https://music.apple.com/us/album/yak-you-already-know-feat-sage-the-gemini-eric-bellinger/1064278596?i=1064279313&uo=4", status: "verified" },
  "fa-002": { url: "https://music.apple.com/us/search?term=2%20Piece%20Mally%20Mall%20feat.%20Migos%2C%20Eric%20Bellinger%2C%20Jeremih%20%26%20Jazz%20Lazer", status: "search_fallback" },
  "fa-003": { url: "https://music.apple.com/us/album/4-digits-feat-fabolous-eric-bellinger/1440923130?i=1440923934&uo=4", status: "verified" },
  "fa-005": { url: "https://music.apple.com/us/search?term=Action%20Nef%20the%20Pharaoh%20feat.%20Ty%20Dolla%20%24ign%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-006": { url: "https://music.apple.com/us/search?term=Alive%20Kemba%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-007": { url: "https://music.apple.com/us/album/anyway-single/1534915725?uo=4", status: "verified" },
  "fa-009": { url: "https://music.apple.com/us/album/april-21st-feat-eric-bellinger/1672162231?i=1672162240&uo=4", status: "verified" },
  "fa-010": { url: "https://music.apple.com/us/album/back-it-up/1468033938?i=1468034007&uo=4", status: "verified" },
  "fa-011": { url: "https://music.apple.com/us/search?term=Best%20Head%20Ever%20The%20Game%20feat.%20Tyga%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-012": { url: "https://music.apple.com/us/album/big-body-benz-feat-eric-bellinger/1677282036?i=1677282044&uo=4", status: "verified" },
  "fa-013": { url: "https://music.apple.com/us/search?term=Body%20Calling%20K%20Camp%20feat.%20Eric%20Bellinger%20%26%20Aaron%20Page", status: "search_fallback" },
  "fa-014": { url: "https://music.apple.com/us/search?term=Bonus%20King%20Los%20Imperfections%20Lola%20Monroe%2C%20Eric%20Bellinger%20%26%20Carmen", status: "search_fallback" },
  "fa-015": { url: "https://music.apple.com/us/search?term=Boss%20Talk%20Dubb%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-016": { url: "https://music.apple.com/us/search?term=Broken%20RaVaughn%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-017": { url: "https://music.apple.com/us/album/can-i/1862019071?i=1862019219&uo=4", status: "verified" },
  "fa-018": { url: "https://music.apple.com/us/album/cant-let-you-go/1534768877?i=1534768893&uo=4", status: "verified" },
  "fa-020": { url: "https://music.apple.com/us/album/change/1536819208?i=1536819209&uo=4", status: "verified" },
  "fa-021": { url: "https://music.apple.com/us/album/cheat-code-mode-feat-young-thug/1641201768?i=1641201769&uo=4", status: "verified" },
  "fa-023": { url: "https://music.apple.com/us/album/circles-feat-q-tip-eric-bellinger-sha-sha/1050845369?i=1050845831&uo=4", status: "verified" },
  "fa-024": { url: "https://music.apple.com/us/search?term=Connected%20Chip%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-025": { url: "https://music.apple.com/us/search?term=Consistency%20Trevor%20Jackson%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-026": { url: "https://music.apple.com/us/album/couch-standing-feat-jeremih-wale/1641201768?i=1641201770&uo=4", status: "verified" },
  "fa-027": { url: "https://music.apple.com/us/search?term=Dat%20Ass%20Jacob%20Latimore%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-028": { url: "https://music.apple.com/us/search?term=Death%20Penalty%20The%20Game%20feat.%20Fabolous%2C%20Eric%20Bellinger%20%26%20Slim%20Thug", status: "search_fallback" },
  "fa-029": { url: "https://music.apple.com/us/search?term=Do%20Ya%20Da%20Boy%20Dame%20feat.%20Ty%20Dolla%20%24ign%2C%20Adrian%20Marcel%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-030": { url: "https://music.apple.com/us/search?term=Drop%20It%20Blaq%20Tuxedo%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-031": { url: "https://music.apple.com/us/album/energy-feat-eric-bellinger/1584259361?i=1584259385&uo=4", status: "verified" },
  "fa-032": { url: "https://music.apple.com/us/album/exposed-feat-eric-bellinger-lil-twist/1878789361?i=1878789684&uo=4", status: "verified" },
  "fa-033": { url: "https://music.apple.com/us/album/facetime-feat-eric-bellinger-wale-a-d/1444276741?i=1444276743&uo=4", status: "verified" },
  "fa-034": { url: "https://music.apple.com/us/album/fed-up-feat-rayven-justice-rossi-eric-bellinger/944021521?i=944021611&uo=4", status: "verified" },
  "fa-036": { url: "https://music.apple.com/us/search?term=Follow%20My%20Lead%20Chipmunk%20feat.%20Eric%20B", status: "search_fallback" },
  "fa-037": { url: "https://music.apple.com/us/search?term=Freak%20Mally%20Mall%20feat.%20Eric%20Bellinger%2C%20Chinx%20Drugz%20%26%20Too%20%24hort", status: "search_fallback" },
  "fa-038": { url: "https://music.apple.com/us/search?term=Freak%20Chrishan%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-039": { url: "https://music.apple.com/us/search?term=Fresh%20Kid%20Ink%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-040": { url: "https://music.apple.com/us/album/fwu-feat-eric-bellinger/1516377660?i=1516377739&uo=4", status: "verified" },
  "fa-041": { url: "https://music.apple.com/us/search?term=Go%20Crazy%20Rayven%20Justice%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-042": { url: "https://music.apple.com/us/search?term=Hard%20To%20Remember%20-Season0.5-%20Remix%20/%20Bonus%20Track%20AK-69%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-043": { url: "https://music.apple.com/us/album/hotbox-feat-eric-bellinger/1382926406?i=1382927167&uo=4", status: "verified" },
  "fa-044": { url: "https://music.apple.com/us/album/how-i-feel-feat-eric-bellinger-killer-mike/1535725134?i=1535725632&uo=4", status: "verified" },
  "fa-045": { url: "https://music.apple.com/us/album/i-dont-want-her-remix-feat-french-montana/895682716?i=895682719&uo=4", status: "verified" },
  "fa-046": { url: "https://music.apple.com/us/album/im-not-sorry-feat-eric-bellinger/1444277362?i=1444277369&uo=4", status: "verified" },
  "fa-047": { url: "https://music.apple.com/us/album/intuition-feat-eric-bellinger/1445844003?i=1445844165&uo=4", status: "verified" },
  "fa-049": { url: "https://music.apple.com/us/search?term=Involved%20Ye%20Ali%2C%20Eric%20Bellinger%20%26%20Zae%20France", status: "search_fallback" },
  "fa-050": { url: "https://music.apple.com/us/search?term=JADED%20Mozzy%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-051": { url: "https://music.apple.com/us/search?term=Just%20in%20You%20Victor%20Oladipo%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-052": { url: "https://music.apple.com/us/search?term=Last%20Time%20Joe%20Moses%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-053": { url: "https://music.apple.com/us/search?term=Living%20My%20Best%20Life%20Jim%20Jones%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-054": { url: "https://music.apple.com/us/search?term=Long%20Distance%20Love%20Bulby%20York%20feat.%20Eric%20Bellinger%20%26%20Candy%20Gloster", status: "search_fallback" },
  "fa-055": { url: "https://music.apple.com/us/search?term=Make%20Me%20-%20Remix%20Teedra%20Moses%20feat.%20Eric%20Bellinger%20%26%20Curren%24y", status: "search_fallback" },
  "fa-057": { url: "https://music.apple.com/us/search?term=My%20Yang%20Rayven%20Justice%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-058": { url: "https://music.apple.com/us/search?term=Nasty%20Kirko%20Bangz%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-059": { url: "https://music.apple.com/us/album/new-oldie/1595698888?i=1595699287&uo=4", status: "verified" },
  "fa-061": { url: "https://music.apple.com/us/search?term=Newness%20Jade%20Novah%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-062": { url: "https://music.apple.com/us/album/no-flutes-feat-eric-bellinger/1367601963?i=1367603026&uo=4", status: "verified" },
  "fa-064": { url: "https://music.apple.com/us/album/nothing-feat-eric-bellinger/899760460?i=899760472&uo=4", status: "verified" },
  "fa-065": { url: "https://music.apple.com/us/album/on-my-way-feat-o-t-genasis-eric-bellinger-ad/1587241762?i=1587241766&uo=4", status: "verified" },
  "fa-067": { url: "https://music.apple.com/us/search?term=On%20the%20Green%20Mistah%20F.A.B.%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-068": { url: "https://music.apple.com/us/search?term=On%20the%20Low%20Angel%2C%20Eric%20Bellinger%20%26%20Wretch%2032", status: "search_fallback" },
  "fa-070": { url: "https://music.apple.com/us/search?term=One%20Mo%20Gin%20AD%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-071": { url: "https://music.apple.com/us/album/one-reason-flex-feat-eric-bellinger/1141515631?i=1141515790&uo=4", status: "verified" },
  "fa-073": { url: "https://music.apple.com/us/album/or-nah-feat-too-%24hort-problem-av-eric-bellinger/894157031?i=894157052&uo=4", status: "verified" },
  "fa-076": { url: "https://music.apple.com/us/search?term=Read%20Receipts%20Sy%20Ari%20da%20Kid%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-078": { url: "https://music.apple.com/us/search?term=Ready%20for%20It%20Kevin%20Ross%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-079": { url: "https://music.apple.com/us/search?term=Real%20Emotions%20Elliott%20Trent%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-080": { url: "https://music.apple.com/us/search?term=Rich%20Sex%20Konshens%20feat.%20Eric%20Bellinger%20%26%20Moyann", status: "search_fallback" },
  "fa-081": { url: "https://music.apple.com/us/search?term=Right%20Away%20Audio%20Push%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-082": { url: "https://music.apple.com/us/album/right-here-feat-eric-bellinger/1435294159?i=1435294340&uo=4", status: "verified" },
  "fa-083": { url: "https://music.apple.com/us/search?term=Ruthless%20Bone%20Thugs%20feat.%20Layzie%20Bone%2C%20Flesh-N-Bone%2C%20Eric%20Bellinger", status: "search_fallback" },
  "fa-084": { url: "https://music.apple.com/us/search?term=Same%20Page%20M%C3%BDa%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-085": { url: "https://music.apple.com/us/search?term=Say%20A.D.%20%26%20Sorry%20Jaynari%20feat.%20Kid%20Ink%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-086": { url: "https://music.apple.com/us/search?term=Second%20Hand%20Smoke%20Sage%20the%20Gemini%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-088": { url: "https://music.apple.com/us/search?term=Show%20and%20Tell%20Sammie%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-089": { url: "https://music.apple.com/us/search?term=Slide%20MarMar%20Oso%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-090": { url: "https://music.apple.com/us/album/slip-fall-feat-eric-bellinger/1224787129?i=1224788152&uo=4", status: "verified" },
  "fa-091": { url: "https://music.apple.com/us/search?term=Status%20Audio%20Push%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-092": { url: "https://music.apple.com/us/album/stay-away-feat-eric-bellinger/1738940339?i=1738940975&uo=4", status: "verified" },
  "fa-093": { url: "https://music.apple.com/us/search?term=Survivor%27s%20Remorse%20Smoke%20DZA%20feat.%20Dom%20Kennedy%2C%20Jay%20305%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-094": { url: "https://music.apple.com/us/search?term=Tables%20Turn%20Beanz%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-095": { url: "https://music.apple.com/us/search?term=Taboo%20Queen%20Naija%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-097": { url: "https://music.apple.com/us/search?term=The%20One%20Connie%20Diiamond%20feat.%20Fabolous%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-099": { url: "https://music.apple.com/us/search?term=Trippin%27%20on%20Me%20Travis%20Scott%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-100": { url: "https://music.apple.com/us/search?term=Type%20of%20Day%20BJ%20the%20Chicago%20Kid%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-101": { url: "https://music.apple.com/us/search?term=Unfollow%20Victor%20Oladipo%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-102": { url: "https://music.apple.com/us/search?term=Used%202%20Daz%20Dillinger%2C%20Kurupt%20%26%20Dogg%20Pound%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-103": { url: "https://music.apple.com/us/search?term=Welcome%20to%20My%20City%20AI%20feat.%20Junior%20Reid%2C%20Eric%20Bellinger", status: "search_fallback" },
  "fa-104": { url: "https://music.apple.com/us/search?term=What%20It%20Is%20Freddie%20Gibbs%20feat.%20Iamsu%21%20%26%20Eric%20Bellinger", status: "search_fallback" },
  "fa-105": { url: "https://music.apple.com/us/search?term=Whatever%20Ashlyne%20Huff%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-107": { url: "https://music.apple.com/us/search?term=Where%20Do%20We%20Go%20Joe%20Budden%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-109": { url: "https://music.apple.com/us/search?term=Women%20of%20Los%20Angeles%20Wale%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-110": { url: "https://music.apple.com/us/search?term=World%20is%20One%202021%20Chuu%20%26%20Kim%20Yo%20Han%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-112": { url: "https://music.apple.com/us/search?term=Yaya%20Bobby%20Brackins%20feat.%20Eric%20Bellinger", status: "search_fallback" },
  "fa-113": { url: "https://music.apple.com/us/search?term=ZONE%20EARTHGANG%20%26%20Spillage%20Village%20feat.%20Eric%20Bellinger", status: "search_fallback" },
};

function buildSearchUrl(base: string, query: string) {
  return `${base}${encodeURIComponent(query)}`;
}

function buildFallbackLinks(query: string): Omit<FeatureSongListenLinks, "appleMusic"> {
  return {
    spotify: { url: buildSearchUrl("https://open.spotify.com/search/", query), status: "search_fallback" },
    youtubeMusic: { url: buildSearchUrl("https://music.youtube.com/search?q=", query), status: "search_fallback" },
    youtube: { url: buildSearchUrl("https://www.youtube.com/results?search_query=", query), status: "search_fallback" },
    tidal: { url: buildSearchUrl("https://listen.tidal.com/search?q=", query), status: "search_fallback" },
    amazonMusic: { url: buildSearchUrl("https://music.amazon.com/search/", query), status: "search_fallback" },
    deezer: { url: buildSearchUrl("https://www.deezer.com/search/", query), status: "search_fallback" },
  };
}

export function getFeaturedSongListenLinks(song: { id: string; title: string; artist: string }): FeatureSongListenLinks {
  const query = `${song.title} ${song.artist}`;
  const appleMusic = APPLE_MUSIC_VERIFIED_LINKS[song.id] ?? { url: buildSearchUrl("https://music.apple.com/us/search?term=", query), status: "search_fallback" };
  return {
    appleMusic,
    ...buildFallbackLinks(query),
  };
}

