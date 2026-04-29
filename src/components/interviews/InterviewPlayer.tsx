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
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        width: isMinimized ? "90%" : "95%",
        height: isMinimized ? 200 : "auto",
        left: isMinimized ? "5%" : "50%",
        bottom: isMinimized ? "24px" : "50%",
        x: "-50%",
        translateY: isMinimized ? 0 : "50%",
      }}
      exit={{ opacity: 0, y: 40, scale: 0.9 }}
      transition={{ type: "spring", damping: 26, stiffness: 210 }}
      className={cn(
        "fixed z-[100] flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.4)]",
        !isMinimized && "max-w-3xl aspect-video w-[95vw]",
      )}
      style={{ position: "fixed" }}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4 py-2.5">
        <span id="interview-player-title" className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
          {activeInterview?.title ?? INTERVIEWS_COPY.playingLabel}
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlayerSize();
            }}
            aria-label={isMinimized ? "Expand player" : "Minimize player"}
            className="touch-target-44 inline-flex items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={closePlayer}
            aria-label="Close player"
            className="touch-target-44 inline-flex items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-3.5 w-3.5" />
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
