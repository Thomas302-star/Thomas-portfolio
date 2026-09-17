import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="selected-work" className="min-h-[40vh] border-b border-white/10 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Selected work</p>
        </div>
      </section>
    </main>
  );
}
