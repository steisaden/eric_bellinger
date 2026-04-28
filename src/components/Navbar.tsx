import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { Calendar, Disc, Menu, Mic, Music, PenTool, Youtube, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAVIGATION_COPY, TOUR_COPY } from "@/data";
import { NavBrandLogo } from "./text/NavBrandLogo";

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

const hasActiveTourDates = TOUR_COPY.activeTourDates.length > 0;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 220) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.28 }}
        className={cn(
          "fixed top-4 left-3 right-3 z-50 h-16 rounded-full border px-3 shadow-2xl backdrop-blur-2xl transition-all duration-500 sm:px-4 lg:left-1/2 lg:top-5 lg:right-auto lg:w-[min(1240px,calc(100vw-1.5rem))] lg:-translate-x-1/2 lg:px-5 xl:w-[min(1280px,calc(100vw-2rem))] xl:px-6",
          isScrolled
            ? "border-white/10 bg-black/70 shadow-[0_20px_60px_rgba(0,0,0,0.46)]"
            : "border-white/8 bg-black/46 shadow-[0_18px_50px_rgba(0,0,0,0.3)]",
        )}
      >
        <div className="grid h-full w-full grid-cols-[auto_auto] items-center justify-between gap-2 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:justify-normal xl:gap-3">
          <a
            href="#project"
            aria-label={`${NAVIGATION_COPY.brand} – back to top`}
            className="group flex min-w-0 shrink items-center xl:shrink-0"
          >
            <NavBrandLogo />
          </a>

          <div className="hidden min-w-0 items-center justify-center gap-4 overflow-hidden text-[10px] font-semibold uppercase tracking-[0.28em] xl:flex 2xl:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative whitespace-nowrap transition-colors duration-300",
                    isActive ? "text-[#ffd36e] opacity-100" : "text-white/68 hover:text-[#ffd36e]",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#ffd36e] via-[#ff9d00] to-[#ad46ff]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center justify-end gap-2 lg:flex xl:gap-3">
            <a
              href={hasActiveTourDates ? "#tour" : NAVIGATION_COPY.cta.href}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-gradient-to-r from-[#ff9d00] via-[#ffd36e] to-[#f7b72d] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-black shadow-[0_12px_32px_rgba(255,157,0,0.22)] transition-transform hover:-translate-y-0.5 xl:px-6"
            >
              {hasActiveTourDates ? "Tickets" : NAVIGATION_COPY.cta.text}
            </a>
          </div>

          <div className="ml-auto flex items-center justify-end gap-1.5 lg:hidden">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-controls="mobile-nav-menu"
              aria-expanded={mobileOpen}
              className="touch-target-44 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/82 transition-colors hover:border-white/16 hover:bg-white/12 hover:text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/58 px-3 pb-3 pt-16 backdrop-blur-md lg:hidden"
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
              className="flex max-h-[80vh] w-full max-w-md flex-col gap-6 overflow-y-auto rounded-t-[32px] border border-white/10 border-b-0 bg-[rgba(8,8,12,0.96)] p-6 shadow-[0_-20px_80px_rgba(0,0,0,0.55)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/32">Navigate</span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="touch-target-44 inline-flex items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
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
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 font-display text-2xl uppercase tracking-tighter text-white/90 transition-colors hover:border-[#ff9d00]/30 hover:text-[#ffd36e]"
                  >
                    <link.icon className="h-6 w-6 opacity-50" />
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <a
                href={hasActiveTourDates ? "#tour" : NAVIGATION_COPY.cta.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff9d00] via-[#ffd36e] to-[#f7b72d] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black"
              >
                {hasActiveTourDates ? "Get Tickets" : NAVIGATION_COPY.cta.text}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
