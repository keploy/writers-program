import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramSection from "@/components/sections/ProgramSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CriteriaSection from "@/components/sections/CriteriaSection";
import CommunitySection from "@/components/sections/CommunitySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <ProcessSection />
      <CriteriaSection />
      <CommunitySection />
    </main>
  );
}
