import { ArrowUpRight, Link2, Mail, Music, Instagram, Youtube } from "lucide-react";

import { FOOTER_COPY } from "@/data";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/ericbellinger", icon: Instagram },
  { label: "Website", href: "https://ericbellinger.com/", icon: Link2 },
  { label: "YouTube", href: "https://www.youtube.com/@EricBellinger", icon: Youtube },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/eric-bellinger/395826107", icon: Music },
] as const;

export function Footer() {
  return (
    <footer id="support" className="relative overflow-hidden py-24 md:py-32">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="editorial-panel overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="artist-eyebrow text-[#ffd36e]">STAY IN THE WORLD</p>
              <h2 className="mt-4 text-balance font-display text-5xl font-light uppercase tracking-tighter text-white md:text-7xl lg:text-[5.5rem]">
                {FOOTER_COPY.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-7 text-white/68 md:text-xl">Get updates on new music, live dates, videos, merch, and the next era.</p>

              <form className="mt-8 flex w-full max-w-2xl items-center rounded-full border border-white/10 bg-black/30 p-1 pl-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
                <input
                  type="email"
                  placeholder={FOOTER_COPY.emailPlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-[10px] font-medium uppercase tracking-[0.32em] text-white placeholder:text-white/32 focus:outline-none"
                />
                <button
                  type="submit"
                  className="artist-button-primary ml-3 shrink-0 px-5 py-3 text-[10px]"
                >
                  {FOOTER_COPY.submitButton}
                </button>
              </form>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-black/26 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Official site</p>
                <a href="https://ericbellinger.com/" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-[#ffd36e]">
                  ericbellinger.com <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-sm text-white/56">{FOOTER_COPY.dataQualityNote}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/80 transition-colors hover:border-[#ffd36e]/20 hover:bg-white/[0.06] hover:text-white"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[#ffd36e]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{social.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/42" />
                    </a>
                  );
                })}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/72">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Booking &amp; management</p>
                  <a href={`mailto:${FOOTER_COPY.bookingEmail ?? "info@ericbellinger.com"}`} className="mt-2 inline-flex items-center gap-2 text-sm text-white/88 transition-colors hover:text-[#ffd36e]">
                    <Mail className="h-4 w-4 text-[#ffd36e]" />
                    {FOOTER_COPY.bookingEmail ?? "info@ericbellinger.com"}
                  </a>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/72">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Streaming</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/72">
                    <a href="https://music.apple.com/us/artist/eric-bellinger/395826107" target="_blank" rel="noreferrer" className="artist-pill-inset rounded-full px-3 py-1.5 transition-colors hover:border-[#ffd36e]/20 hover:bg-[#ffd36e]/10">
                      Apple Music
                    </a>
                    <a href="https://open.spotify.com/artist/1qqM4o5R6s2Xj8q8O0LQk9" target="_blank" rel="noreferrer" className="artist-pill-inset rounded-full px-3 py-1.5 transition-colors hover:border-[#ffd36e]/20 hover:bg-[#ffd36e]/10">
                      Spotify
                    </a>
                    <a href="https://music.youtube.com/channel/UC7N1pV1oQ5J8Z4b8BzJf8Jw" target="_blank" rel="noreferrer" className="artist-pill-inset rounded-full px-3 py-1.5 transition-colors hover:border-[#ffd36e]/20 hover:bg-[#ffd36e]/10">
                      YouTube Music
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/42">{FOOTER_COPY.copyright.replace("{CURRENTYEAR}", "2026")}</p>
            <p className="max-w-xl text-sm text-white/48">{FOOTER_COPY.subheading}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
