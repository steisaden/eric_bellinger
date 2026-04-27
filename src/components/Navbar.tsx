import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Disc, Mic, MoonStar, Music, PenTool, SunMedium, Youtube, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION_COPY } from "@/data";
import type { ThemeMode } from "@/hooks/useThemeMode";
import { MorphText } from "@/components/text/MorphText";

const NAV_LINKS = NAVIGATION_COPY.links.map((link) => {
  const iconMap = {
    "#project": Music,
    "#tour": Calendar,
    "#discography": Disc,
    "#features": Mic,
    "#credits": PenTool,
    "#interviews": Youtube,
  } as const;

  return {
    name: link.label,
    href: link.href,
    icon: iconMap[link.href as keyof typeof iconMap] ?? Music,
  };
});

type NavbarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Section tracking
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-4 left-4 right-4 z-50 flex h-16 items-center justify-between rounded-full border border-slate-200 bg-white/80 px-4 shadow-2xl backdrop-blur-xl transition-all duration-500 lg:left-1/2 lg:top-6 lg:w-[1024px] lg:-translate-x-1/2 lg:px-6"
        )}
      >
        <a
          href="#project"
          aria-label={`${NAVIGATION_COPY.brand} – back to top`}
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase opacity-70">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-all duration-300 relative",
                  isActive ? "text-purple-400 opacity-100" : "hover:text-purple-400"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-purple-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-slate-900/80 transition-colors hover:border-purple-300 hover:bg-purple-50"
          >
            {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <a href={NAVIGATION_COPY.cta.href} className="rounded-full border border-slate-200 bg-white/80 px-6 py-2 text-[10px] font-bold tracking-widest uppercase text-black shadow-lg transition-all hover:bg-purple-100">
            {NAVIGATION_COPY.cta.text}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-900/80 transition-colors hover:border-purple-300 hover:bg-purple-50"
          >
            {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-nav-menu"
            aria-expanded={mobileOpen}
            className="p-2 text-slate-900/80 transition-colors hover:text-slate-900"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-white/70 px-3 pb-3 pt-16 backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              id="mobile-nav-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ y: 32 }}
              animate={{ y: 0 }}
              exit={{ y: 32 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="flex w-full max-w-md flex-col gap-6 rounded-t-[32px] border border-slate-200 border-b-0 bg-[#faf7f0]/95 p-6 shadow-[0_-20px_80px_rgba(0,0,0,0.55)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-600/35">Navigate</span>
                <button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700/50 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-slate-900"
                >
                  {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="rounded-full p-2 text-slate-700/50 transition-colors hover:text-slate-900"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid gap-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 font-display text-2xl uppercase tracking-tighter transition-colors hover:border-eb-accent/40 hover:text-eb-accent"
                  >
                    <link.icon className="h-6 w-6 opacity-50" />
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
