import { ArrowDown } from "lucide-react";
import { ProjectInquiryForm } from "@/components/sections/project-inquiry-form";

const contactLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Back home", href: "/" },
];

export default function ContactPage() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Start a project
            </p>
            <h1 className="mt-5 font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Let&apos;s build something clear and useful.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Tell me what you&apos;re building, who it&apos;s for, and what you want
              the website to achieve. I&apos;ll use the details to understand the
              project before the build begins.
            </p>
          </div>

          <a
            href="#project-inquiry"
            className="mt-12 inline-flex items-center gap-3 text-sm text-white transition-opacity hover:opacity-70"
          >
            Tell me about the project
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="project-inquiry" className="border-t border-[var(--border)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
              Project inquiry
            </p>
            <h2 className="mt-5 max-w-md font-[var(--font-display)] text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
              A few details to get the conversation started.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
              Share the essentials. You do not need to have every detail figured
              out before reaching out.
            </p>

            <nav aria-label="Contact navigation" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <ProjectInquiryForm />
        </div>
      </section>
    </main>
  );
}
