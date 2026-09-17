import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type CaseStudyLayoutProps = {
  category: string;
  title: string;
  intro: string;
  overview: string[];
  focus: string[];
  details?: { label: string; value: string }[];
  nextProject?: { title: string; href: string };
  children?: ReactNode;
};

export function CaseStudyLayout({
  category,
  title,
  intro,
  overview,
  focus,
  details = [],
  nextProject,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>
          <p className="mt-12 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {category}
          </p>
          <h1 className="mt-5 max-w-6xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {intro}
          </p>
        </div>
      </section>

      {children}

      <section className="border-y border-[var(--border)] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Overview
            </p>
          </div>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {details.length > 0 && (
        <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Project details
            </p>
            <div className="mt-8 grid border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
              {details.map((detail) => (
                <div key={detail.label} className="border-b border-[var(--border)] py-6 sm:px-6 sm:first:pl-0 lg:border-b-0">
                  <p className="text-sm text-[var(--muted)]">{detail.label}</p>
                  <p className="mt-2 font-[var(--font-display)] text-xl font-medium">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--surface)] px-6 py-16 text-black sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              What I focused on
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {focus.map((item, index) => (
              <div key={item} className="border-t border-zinc-300 pt-5">
                <p className="font-[var(--font-display)] text-2xl font-medium tracking-tight">
                  0{index + 1}
                </p>
                <p className="mt-3 max-w-sm text-base leading-7 text-zinc-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nextProject && (
        <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Next project
            </p>
            <Link
              href={nextProject.href}
              className="group mt-6 flex items-end justify-between gap-8 border-b border-[var(--border)] pb-6"
            >
              <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                {nextProject.title}
              </h2>
              <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={28} />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
