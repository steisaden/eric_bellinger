import { useMemo, useState } from "react";

import { ACTIVE_TOUR_DATES, ARCHIVED_TOUR_DATES } from "@/data";
import type { TourDate } from "@/types";

export function useTourLogic() {
  const [showArchive, setShowArchive] = useState(false);

  const upcomingTours = useMemo(
    () => [...ACTIVE_TOUR_DATES].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [],
  );

  const archivedTours = useMemo(
    () => [...ARCHIVED_TOUR_DATES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  );

  return {
    upcomingTours,
    archivedTours,
    showArchive,
    toggleArchive: () => setShowArchive((value) => !value),
  };
}
