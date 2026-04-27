import { useState } from "react";

export function useInterviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const openPlayable = (embedId: string) => {
    setActiveVideo(embedId);
    setIsMinimized(false);
  };

  const closePlayer = () => setActiveVideo(null);
  const togglePlayerSize = () => setIsMinimized((value) => !value);

  return {
    activeVideo,
    isMinimized,
    openPlayable,
    closePlayer,
    togglePlayerSize,
  };
}
