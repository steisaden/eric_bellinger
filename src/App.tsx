/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
