import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { number: "01", title: "Discover", description: "We clarify your goals, audience, content, and the role the website needs to play for your business." },
  { number: "02", title: "Design", description: "I shape the structure, visual direction, and user experience around your brand and what your audience needs." },
  { number: "03", title: "Build", description: "The approved direction becomes a responsive, accessible, and maintainable website built with modern technology." },
  { number: "04", title: "Refine", description: "We review the experience, fix the details, and make sure the final website is ready for real users." },
];

export function ProcessSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">Process</p>
              <h2 className="mt-5 max-w-xl font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A clear process from idea to launch.</h2>
            </div>
          </Reveal>
          <div className="grid divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="grid gap-5 py-7 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-8">
                  <span className="text-sm text-[var(--muted)]">{step.number}</span>
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.025em] text-white">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">{step.description}</p>
                  </div>
                  <ArrowRight aria-hidden="true" className="hidden size-5 text-[var(--accent)] sm:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
