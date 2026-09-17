import { ArrowUpRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-24 text-[var(--background)] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-black/50">
            Start a project
          </p>
          <h2 className="mt-5 font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Have a project in mind?
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
            Tell me what you&apos;re building, what you need, and where you want
            to go. Let&apos;s turn the idea into a clear digital experience.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 border border-[var(--background)] px-6 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[var(--background)] hover:text-[var(--surface)]"
          >
            Start a project
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
