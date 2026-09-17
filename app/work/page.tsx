const projects = [
  {
    number: "01",
    category: "Fashion / E-commerce",
    title: "Tee Luxury Couture",
    description:
      "A refined fashion landing experience focused on brand presentation, product discovery, and a responsive customer journey.",
    href: "/work/tee-luxury-couture",
  },
  {
    number: "02",
    category: "SaaS / Product",
    title: "Creator Content Planner",
    description:
      "A focused product experience designed to help solo creators decide what to publish and organize their content into a simple plan.",
    href: "/work/creator-content-planner",
  },
  {
    number: "03",
    category: "Web3 / Education",
    title: "Bitget Education",
    description:
      "An educational landing experience that explains core exchange features through a clear, structured interface.",
    href: "/work/bitget-education",
  },
  {
    number: "04",
    category: "Remote Jobs / SaaS",
    title: "RemoteScout",
    description:
      "A platform for finding legitimate remote jobs from trusted sources in one place, with tools for discovering, saving, applying, and tracking opportunities.",
    href: "/work/remotescout",
  },
  {
    number: "05",
    category: "Ministry / Organization",
    title: "EMMANUEL MAKANJUOLA APOSTOLIC MISSIONS",
    description:
      "A modern ministry website built to present the mission, ministry focus, resources, and ways to connect through a clear digital experience.",
    href: "/work/emmanuel-makanjuola-apostolic-missions",
  },
];

export default function WorkPage() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            Selected work
          </p>
          <h1 className="mt-5 max-w-5xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Digital work built with purpose.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            A selection of websites and digital products built around clear
            goals, thoughtful structure, and a strong user experience.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              className="group grid gap-8 border-b border-[var(--border)] py-10 transition-colors duration-200 hover:bg-white/[0.02] sm:grid-cols-[72px_1fr_auto] sm:items-start sm:py-14"
            >
              <span className="text-sm text-[var(--muted)]">{project.number}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {project.category}
                </p>
                <h2 className="mt-3 font-[var(--font-display)] text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.description}
                </p>
              </div>
              <span className="text-sm text-[var(--muted)] transition-colors duration-200 group-hover:text-white">
                View project →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
