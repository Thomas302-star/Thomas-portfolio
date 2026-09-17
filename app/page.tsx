import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWork />
      <ServicesSection />
    </main>
  );
}
