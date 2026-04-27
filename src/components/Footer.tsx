import { motion } from "motion/react";
import { Instagram, Twitter, Youtube, Music, Mail, ArrowUpRight } from "lucide-react";

import { FOOTER_COPY } from "@/data";
import { MorphText } from "@/components/text/MorphText";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ericbellinger",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    )
  },
  {
    label: "Twitter",
    href: "https://x.com/ericbellinger",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
    )
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@EricBellinger",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.5-1.5 24.12 24.12 0 0 1 16 0 2 2 0 0 1 1.5 1.5 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.5 1.5 24.12 24.12 0 0 1-16 0 2 2 0 0 1-1.5-1.5z"/><polygon points="10 9 15 12 10 15 10 9"/></svg>
    )
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/EricBellingerMusic",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg>
    )
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ericbellinger",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer id="support" className="relative pt-32 pb-12 bg-[#faf7f0] overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 pointer-events-none w-full h-full">
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-eb-accent/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-24">
          <div className="w-full max-w-xl">
            <h2 className="font-display font-light text-center text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-glow italic">{FOOTER_COPY.heading}</h2>
            <p className="text-slate-600 text-center text-sm mb-8 leading-relaxed">
              {FOOTER_COPY.subheading}
            </p>
            
            <form className="flex w-full items-center bg-white/80 backdrop-blur-xl border border-slate-200 p-1 pl-6 rounded-full shadow-2xl group focus-within:border-white/30 transition-colors">
              <input 
                type="email" 
                placeholder={FOOTER_COPY.emailPlaceholder} 
                className="bg-transparent border-none outline-none flex-grow text-[10px] uppercase tracking-widest font-mono text-slate-900 placeholder:text-slate-500/50"
              />
              <button type="submit" className="bg-white text-black font-bold uppercase tracking-widest text-[10px] px-6 py-3 rounded-full hover:bg-purple-100 transition-colors">
                {FOOTER_COPY.submitButton}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#project"
            aria-label="Eric Bellinger – back to top"
            className="group brand-lockup shrink-0"
          >
            <span className="brand-icon">
              <span className="brand-icon-sheen" />
              <span className="brand-icon-fill">EB</span>
            </span>
            <span className="brand-stack">
              <span className="brand-morph-wrap">
                <MorphText
                  words={["Eric Bellinger", "YFS", "It's Eazy"]}
                  intervalMs={2200}
                  className="max-w-[140px] sm:max-w-[170px] text-center text-[0.7rem] sm:text-[0.74rem]"
                />
              </span>
            </span>
          </a>
          
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full border border-slate-200 hover:border-purple-400 text-slate-700 hover:text-purple-400 transition-colors flex items-center justify-center w-10 h-10"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            {FOOTER_COPY.copyright.replace("{CURRENTYEAR}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
