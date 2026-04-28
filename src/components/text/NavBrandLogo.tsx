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
        "inline-flex h-[1.18rem] min-w-[clamp(152px,16vw,188px)] items-center justify-center overflow-hidden align-middle",
        className,
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, filter: "blur(8px)", scale: 0.985 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(8px)", scale: 1.01 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="block will-change-transform"
        >
          <FoilText className="text-[clamp(0.68rem,0.86vw,0.92rem)] font-semibold uppercase tracking-[0.28em] text-white whitespace-nowrap">
            {currentWord}
          </FoilText>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
