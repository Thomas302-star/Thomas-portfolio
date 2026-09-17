import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <a
              href="/"
              className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-white"
            >
              THOMAS FATADE
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Web developer building modern websites for brands and businesses.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white transition-colors duration-200 hover:text-[var(--accent)]"
            >
              Start a Project
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Thomas Fatade. All rights reserved.</p>
          <a
            href="#top"
            className="w-fit transition-colors duration-200 hover:text-white"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
