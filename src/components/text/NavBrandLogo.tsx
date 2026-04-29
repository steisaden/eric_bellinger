import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

import { FoilText } from "./FoilText";

const BRAND_WORDS = ["ERIC BELLINGER", "YFS", "IT'S EAZY"] as const;
const MORPH_INTERVAL_MS = 3400;

type NavBrandLogoProps = {
  className?: string;
};

export function NavBrandLogo({ className }: NavBrandLogoProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const words = reduceMotion ? [BRAND_WORDS[0]] : BRAND_WORDS;

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
        "inline-flex h-[1.18rem] w-[clamp(150px,45vw,188px)] max-w-full shrink items-center justify-start overflow-hidden align-middle sm:w-[clamp(158px,28vw,188px)] xl:justify-center",
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
          className="block min-w-0 will-change-transform"
        >
          <FoilText className="max-w-full whitespace-nowrap text-[clamp(0.68rem,2.75vw,0.82rem)] font-semibold uppercase tracking-[0.24em] text-white sm:text-[clamp(0.72rem,1.45vw,0.9rem)] sm:tracking-[0.28em] xl:text-[clamp(0.68rem,0.86vw,0.92rem)]">
            {currentWord}
          </FoilText>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
