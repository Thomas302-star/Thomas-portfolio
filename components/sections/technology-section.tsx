import { Reveal } from "@/components/ui/reveal";

const technologies = [
  { name: "Next.js", description: "Modern React framework for fast, scalable web experiences." },
  { name: "TypeScript", description: "Reliable, maintainable code with strong type safety." },
  { name: "React", description: "Flexible component architecture for interactive interfaces." },
  { name: "Tailwind CSS", description: "A practical system for building responsive visual interfaces." },
  { name: "Motion", description: "Purposeful animation that makes interactions feel considered." },
  { name: "GitHub", description: "Version control and collaboration throughout the build." },
  { name: "Vercel", description: "Reliable deployment and delivery for modern web projects." },
  { name: "Supabase", description: "A flexible backend option for products that need data and auth." },
];

export function TechnologySection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">Technology</p>
              <h2 className="mt-5 max-w-md font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">The tools behind the work.</h2>
            </div>
          </Reveal>
          <div className="grid border-y border-[var(--border)] sm:grid-cols-2">
            {technologies.map((technology, index) => (
              <Reveal key={technology.name} delay={index * 0.035}>
                <article className={`h-full py-7 sm:px-6 ${index > 0 ? "border-t border-[var(--border)] sm:border-t-0" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-[var(--border)]" : ""} ${index >= 2 ? "sm:border-t" : ""}`}>
                  <h3 className="font-[var(--font-display)] text-xl font-medium tracking-[-0.02em] text-white">{technology.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{technology.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
