import { splitFeaturedTitle } from "@/lib/formatters";
import type { SongwritingCredit } from "@/types";

interface NotableRecordCardProps {
  key?: string | number;
  song: SongwritingCredit;
}

export function NotableRecordCard({ song }: NotableRecordCardProps) {
  const { baseTitle, featureText } = splitFeaturedTitle(song.title);

  return (
    <article className="receipt-card flex h-full flex-col rounded-[26px] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
      <div className="flex items-start justify-between gap-3">
        <div className="text-[10px] uppercase tracking-[0.28em] text-[#ffd36e]">#{song.rank}</div>
        <div className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[9px] uppercase tracking-[0.24em] text-white/42">
          Spotify snapshot
        </div>
      </div>

      <div className="mt-4 min-w-0">
        <h4 className="text-[1.1rem] font-medium leading-tight text-white md:text-[1.28rem]">{baseTitle}</h4>
        {featureText ? <p className="mt-1 text-sm text-white/58">{featureText}</p> : null}
        <p className="mt-2 text-sm text-white/72">{song.artist}</p>
      </div>

      {song.notabilityReason ? (
        <p className="copy-clamp-3 mt-3 text-xs leading-relaxed text-white/52">{song.notabilityReason}</p>
      ) : (
        <p className="mt-3 text-xs leading-relaxed text-white/40">Highlighted from Spotify’s public songwriter snapshot.</p>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3 text-[10px] uppercase tracking-[0.24em] text-white/42">
        <span>Visible row</span>
        <span>{song.spotifyStreamsSnapshot?.toLocaleString()} streams</span>
      </div>
    </article>
  );
}
