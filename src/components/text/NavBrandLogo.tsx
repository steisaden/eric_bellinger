import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

import { FoilText } from "./FoilText";

const BRAND_WORDS = ["ERIC BELLINGER", "YFS", "IT'S EAZY"] as const;
const MORPH_INTERVAL_MS = 3400;
const MOBILE_BREAKPOINT = 420;

type NavBrandLogoProps = {
  className?: string;
};

export function NavBrandLogo({ className }: NavBrandLogoProps) {
  const reduceMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const updateCompact = () => setIsCompact(mediaQuery.matches);
    updateCompact();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateCompact);
      return () => mediaQuery.removeEventListener("change", updateCompact);
    }

    mediaQuery.addListener(updateCompact);
    return () => mediaQuery.removeListener(updateCompact);
  }, []);

  const words = reduceMotion || isCompact ? [BRAND_WORDS[0]] : BRAND_WORDS;

  useEffect(() => {
    if (words.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, MORPH_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [words.length]);

  const currentWord = words[index % words.length];

  return (
    <span
      className={cn(
        "inline-flex h-10 w-[clamp(168px,54vw,204px)] max-w-full shrink items-center justify-start gap-2.5 overflow-hidden align-middle sm:w-[clamp(176px,34vw,214px)] xl:w-[188px] xl:justify-center xl:gap-0",
        className,
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <span aria-hidden="true" className="mobile-nav-logo-orb xl:hidden">
        <span className="mobile-nav-logo-orb__glow" />
        <span className="mobile-nav-logo-orb__shine" />
        <span className="mobile-nav-logo-orb__letters">EB</span>
      </span>

      <span className="inline-flex min-w-0 flex-1 items-center overflow-hidden xl:flex-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentWord}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, filter: "blur(8px)", scale: 0.985 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(8px)", scale: 1.01 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block min-w-0 will-change-transform"
          >
            <FoilText className="max-w-full whitespace-nowrap text-[clamp(0.62rem,2.65vw,0.76rem)] font-semibold uppercase tracking-[0.22em] text-white sm:text-[clamp(0.72rem,1.4vw,0.88rem)] sm:tracking-[0.28em] xl:text-[clamp(0.68rem,0.86vw,0.92rem)]">
              {currentWord}
            </FoilText>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
