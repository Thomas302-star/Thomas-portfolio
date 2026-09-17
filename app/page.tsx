import { AboutSection } from "@/components/sections/about-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesSection } from "@/components/sections/services-section";
import { TechnologySection } from "@/components/sections/technology-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWork />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TechnologySection />
      <FinalCtaSection />
    </main>
  );
}
