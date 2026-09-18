import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type CaseStudyLayoutProps = {
  category: string;
  title: string;
  intro: string;
  overview: string[];
  focus: string[];
  details?: { label: string; value: string }[];
  deliverables?: string[];
  nextProject?: { title: string; href: string };
  children?: ReactNode;
  visual?: { eyebrow: string; title: string; accent: string };
};

export function CaseStudyLayout({ category, title, intro, overview, focus, details = [], deliverables = [], nextProject, children, visual }: CaseStudyLayoutProps) {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link href="/work" className="inline-flex min-h-10 items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
              <ArrowLeft size={16} />
              Back to work
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:mt-12 sm:text-sm">{category}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-6xl font-[var(--font-display)] text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">{title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{intro}</p>
          </Reveal>
        </div>
      </section>

      {visual && (
        <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 text-black sm:p-10 lg:p-14">
                <div className="absolute -right-24 -top-24 size-72 rounded-full blur-3xl" style={{ backgroundColor: visual.accent, opacity: 0.22 }} />
                <div className="relative grid min-h-[280px] items-end gap-10 sm:min-h-[360px] lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{visual.eyebrow}</p>
                    <p className="mt-5 max-w-3xl font-[var(--font-display)] text-4xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">{visual.title}</p>
                  </div>
                  <div className="flex size-28 items-center justify-center rounded-full border border-black/10 bg-white/70 text-xs uppercase tracking-[0.14em] text-zinc-600 backdrop-blur-sm">Project<br />Visual</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="border-y border-[var(--border)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">Overview</p>
          </Reveal>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {overview.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.05}><p>{paragraph}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      {deliverables.length > 0 && (
        <section className="border-b border-[var(--border)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">
                Deliverables
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="border-t border-[var(--border)] pt-5">
                    <p className="font-[var(--font-display)] text-xl font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {details.length > 0 && (
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal><p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">Project details</p></Reveal>
            <div className="mt-8 grid border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
              {details.map((detail, index) => (
                <Reveal key={detail.label} delay={index * 0.05} className="h-full">
                  <div className="h-full border-b border-[var(--border)] py-6 sm:px-6 sm:first:pl-0 lg:border-b-0">
                    <p className="text-sm text-[var(--muted)]">{detail.label}</p>
                    <p className="mt-2 font-[var(--font-display)] text-xl font-medium">{detail.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--surface)] px-5 py-16 text-black sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal><p className="text-xs uppercase tracking-[0.18em] text-zinc-500 sm:text-sm">What I focused on</p></Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {focus.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="border-t border-zinc-300 pt-5">
                  <p className="font-[var(--font-display)] text-2xl font-medium tracking-tight">0{index + 1}</p>
                  <p className="mt-3 max-w-sm text-base leading-7 text-zinc-600">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {nextProject && (
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal><p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">Next project</p></Reveal>
            <Reveal delay={0.06}>
              <Link href={nextProject.href} className="group mt-6 flex items-end justify-between gap-6 border-b border-[var(--border)] pb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
                <h2 className="max-w-4xl font-[var(--font-display)] text-3xl font-semibold tracking-[-0.04em] sm:text-6xl">{nextProject.title}</h2>
                <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-7" />
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </main>
  );
}
