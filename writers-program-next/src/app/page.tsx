import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OffersSection from "./components/OffersSection";
import ProcessSection from "./components/ProcessSection";
import CriteriaSection from "./components/CriteriaSection";
import CommunitySection from "./components/CommunitySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <ProcessSection />
      <CriteriaSection />
      <CommunitySection />
      {/* Other sections here */}
    </main>
  );
}
