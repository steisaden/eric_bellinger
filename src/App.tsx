/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TourDates } from "./components/TourDates";
import { DiscographySection } from "./components/discography/DiscographySection";
import { FeaturedSongs } from "./components/FeaturedSongs";
import { CreditsSection } from "./components/credits/CreditsSection";
import { Interviews } from "./components/Interviews";
import { Footer } from "./components/Footer";
import { useThemeMode } from "./hooks/useThemeMode";

export default function App() {
  const { theme, toggleTheme } = useThemeMode();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    scrollToTop();
    window.addEventListener("pageshow", scrollToTop);

    return () => {
      window.removeEventListener("pageshow", scrollToTop);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <TourDates />
        <DiscographySection />
        <FeaturedSongs />
        <CreditsSection />
        <Interviews />
      </main>

      <Footer />
    </div>
  );
}
