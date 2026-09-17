import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Tee Luxury Couture",
    category: "Fashion / E-commerce",
    description: "A refined digital presence for a fashion brand, designed to make the collection feel premium across every screen.",
    href: "#",
  },
  {
    number: "02",
    title: "Creator Content Planner",
    category: "SaaS / Product",
    description: "A focused planning experience that helps creators turn ideas into an organized content workflow.",
    href: "#",
  },
  {
    number: "03",
    title: "Bitget Education",
    category: "Web3 / Education",
    description: "An educational landing experience that presents complex digital asset topics through a clearer, structured interface.",
    href: "#",
  },
];

export function SelectedWork() {
  return (
    <section id="selected-work" className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Selected work</p>
          </div>

          <div>
            <div className="mb-14 max-w-2xl">
              <h2 className="font-display text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Digital work built with purpose.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                A selection of websites and digital products built around clear ideas, useful experiences, and strong visual direction.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {projects.map((project) => (
                <article key={project.number} className="group grid gap-6 py-8 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-10">
                  <span className="text-xs tracking-[0.2em] text-zinc-600">{project.number}</span>

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.16em] text-zinc-500">{project.category}</p>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.href}
                    aria-label={`View ${project.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center border border-zinc-800 text-zinc-400 transition-all duration-300 group-hover:border-zinc-500 group-hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.6} />
                  </a>
                </article>
              ))}
            </div>

            <a href="/work" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              View all work
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
