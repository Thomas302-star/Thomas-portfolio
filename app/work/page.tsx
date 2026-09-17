import { Reveal } from "@/components/ui/reveal";

const projects = [
  { number: "01", category: "Fashion / E-commerce", title: "Tee Luxury Couture", description: "A refined fashion landing experience focused on brand presentation, product discovery, and a responsive customer journey.", href: "/work/tee-luxury-couture" },
  { number: "02", category: "SaaS / Product", title: "Creator Content Planner", description: "A focused product experience designed to help solo creators decide what to publish and organize their content into a simple plan.", href: "/work/creator-content-planner" },
  { number: "03", category: "Web3 / Education", title: "Bitget Education", description: "An educational landing experience that explains core exchange features through a clear, structured interface.", href: "/work/bitget-education" },
  { number: "04", category: "Remote Jobs / SaaS", title: "RemoteScout", description: "A platform for finding legitimate remote jobs from trusted sources in one place, with tools for discovering, saving, applying, and tracking opportunities.", href: "/work/remotescout" },
  { number: "05", category: "Ministry / Organization", title: "EMMANUEL MAKANJUOLA APOSTOLIC MISSIONS", description: "A modern ministry website built to present the mission, ministry focus, resources, and ways to connect through a clear digital experience.", href: "/work/emmanuel-makanjuola-apostolic-missions" },
];

export default function WorkPage() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">Selected work</p></Reveal>
          <Reveal delay={0.06}><h1 className="mt-5 max-w-5xl font-[var(--font-display)] text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.95] tracking-[-0.055em]">Digital work built with purpose.</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">A selection of websites and digital products built around clear goals, thoughtful structure, and a strong user experience.</p></Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.04}>
              <a href={project.href} className="group grid gap-6 border-b border-[var(--border)] py-9 transition-colors duration-200 hover:bg-white/[0.02] focus-visible:outline-none sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-8 sm:py-14">
                <span className="text-sm text-[var(--muted)]">{project.number}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{project.category}</p>
                  <h2 className="mt-3 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] sm:text-4xl">{project.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">{project.description}</p>
                </div>
                <span className="text-sm text-[var(--muted)] transition-colors duration-200 group-hover:text-white">View project →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
