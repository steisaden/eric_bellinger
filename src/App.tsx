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
import GalaxySwirl from "./components/background/GalaxySwirl";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="theme-dark relative min-h-screen overflow-x-hidden bg-transparent text-white selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none bg-[#05030a]">
        <GalaxySwirl />
      </div>
      <div className="relative z-10">
        <Navbar />

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
    </div>
  );
}
