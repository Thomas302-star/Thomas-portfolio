import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-20 text-[var(--background)] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-black/50 sm:text-sm">Start a project</p>
            <h2 className="mt-5 font-[var(--font-display)] text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.95] tracking-[-0.055em]">Have a project in mind?</h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">Tell me what you&apos;re building, what you need, and where you want to go. Let&apos;s turn the idea into a clear digital experience.</p>
            <a href="/contact" className="mt-10 inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap border border-[#0A0A0A] px-6 py-3 text-sm font-medium text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A] hover:text-[#F5F5F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]">
              Start a project
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
