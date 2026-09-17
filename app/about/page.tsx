import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    title: "Start with the goal",
    description: "I begin by understanding what the website needs to communicate and what the user should be able to do next.",
  },
  {
    title: "Keep it clear",
    description: "Strong hierarchy, focused content, and simple navigation help people understand a digital experience quickly.",
  },
  {
    title: "Build for real screens",
    description: "Every interface is shaped to work across mobile, tablet, and desktop rather than treating responsiveness as an afterthought.",
  },
  {
    title: "Refine the details",
    description: "After the core experience works, I focus on spacing, interactions, accessibility, performance, and the small details that make a site feel finished.",
  },
];

const tools = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Motion", "GitHub", "Vercel", "Supabase"];

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">About</p>
          <h1 className="mt-6 max-w-6xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            I build modern websites for brands and businesses.
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I&apos;m Thomas Fatade, a web developer focused on creating clear,
            responsive digital experiences with strong visual direction and a
            practical approach to the web.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--border)] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Approach</p>
          </div>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            <p>
              Good websites should look considered, but they also need to work.
              I balance visual direction with clear communication, useful
              structure, and a smooth experience for the people using the site.
            </p>
            <p>
              Whether it is a business website, product experience, landing
              page, or digital platform, I start with the purpose and build the
              interface around it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">How I work</p>
          <div className="mt-10 grid border-t border-[var(--border)] sm:grid-cols-2">
            {principles.map((principle, index) => (
              <article key={principle.title} className="border-b border-[var(--border)] py-8 sm:px-8 sm:first:pl-0 sm:nth-[2n+1]:pl-0 lg:py-10">
                <p className="font-[var(--font-display)] text-2xl font-medium">0{index + 1}</p>
                <h2 className="mt-4 font-[var(--font-display)] text-2xl font-medium tracking-tight">{principle.title}</h2>
                <p className="mt-3 max-w-md text-base leading-7 text-[var(--muted)]">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-16 text-black sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">Technology</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-[var(--font-display)] text-2xl font-medium tracking-tight sm:text-3xl">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Let&apos;s work together</p>
          <h2 className="mt-5 max-w-4xl font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Have a website or digital product to build?
          </h2>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-white pb-2 text-base font-medium">
            Start a project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
