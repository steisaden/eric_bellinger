import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type MorphTextProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

export function MorphText({ words, intervalMs = 2200, className }: MorphTextProps) {
  const reduceMotion = useReducedMotion();
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeWords.length <= 1 || reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeWords.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, reduceMotion, safeWords.length]);

  if (safeWords.length === 0) {
    return null;
  }

  const currentWord = safeWords[index % safeWords.length];

  return (
    <span className={cn("brand-morph-stage", className)} aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 8, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="brand-morph-text"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}