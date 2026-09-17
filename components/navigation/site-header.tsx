"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-black/95 px-4 py-3 sm:px-5">
        <Link
          href="/"
          className="font-[var(--font-display)] text-sm font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          Thomas Fatade
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-full bg-white transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-white transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </span>
        </button>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-[calc(100%+0.5rem)] border border-white/10 bg-[#0a0a0a] p-5 transition-all duration-200 md:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-4 text-lg text-white/80 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-5 bg-white px-5 py-3 text-center text-sm font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
