import { Maximize2, Minimize2, X } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { INTERVIEWS_COPY } from "@/data";
import type { Interview } from "@/types";

interface InterviewPlayerProps {
  activeVideo: string;
  activeInterview: Interview | null;
  isMinimized: boolean;
  togglePlayerSize: () => void;
  closePlayer: () => void;
}

export function InterviewPlayer({
  activeVideo,
  activeInterview,
  isMinimized,
  togglePlayerSize,
  closePlayer,
}: InterviewPlayerProps) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="interview-player-title"
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: isMinimized ? 0 : 0,
        x: isMinimized ? 0 : "-50%",
        scale: 1,
        width: isMinimized ? "var(--pip-width, 320px)" : "min(95vw, 840px)",
        height: "auto",
      }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ type: "spring", damping: 28, stiffness: 220 }}
      className={cn(
        "fixed z-[100] flex flex-col overflow-hidden rounded-[22px] border border-white/20 bg-[#0a0a0a]/80 shadow-[0_32px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-shadow duration-300",
        isMinimized
          ? "bottom-20 right-4 [--pip-width:180px] sm:bottom-8 sm:right-8 sm:[--pip-width:320px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          : "bottom-1/2 left-1/2 translate-y-1/2"
      )}
    >
      <div className={cn(
        "flex shrink-0 items-center justify-between bg-white/[0.03] px-4 py-2.5",
        isMinimized && "px-3 py-2"
      )}>
        <div className="flex min-w-0 items-center gap-2">
          {isMinimized && <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />}
          <span
            id="interview-player-title"
            className={cn(
              "truncate font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/60",
              isMinimized && "max-w-[100px] text-[8px]"
            )}
          >
            {activeInterview?.title ?? INTERVIEWS_COPY.playingLabel}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlayerSize();
            }}
            aria-label={isMinimized ? "Expand player" : "Minimize player"}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-white/15 hover:text-white"
          >
            {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
          </button>
          <button
            type="button"
            onClick={closePlayer}
            aria-label="Close player"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-white/15 hover:text-white"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="relative flex-grow bg-black">
        <div className="absolute inset-0">
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo}`}
            title={activeInterview?.title ?? "Interview"}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
}
