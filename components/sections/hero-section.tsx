"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden border-b border-white/10 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-16">
          <div className="max-w-5xl">
            <m.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.05, ease: "easeOut" }}
              className="mb-7 text-xs font-medium uppercase tracking-[0.24em] text-zinc-400"
            >
              Web Developer · Thomas Fatade
            </m.p>

            <m.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.15, ease: "easeOut" }}
              className="font-display text-[clamp(3.5rem,9.5vw,9rem)] font-medium leading-[0.88] tracking-[-0.055em] text-white"
            >
              I build modern websites for brands and businesses.
            </m.h1>

            <m.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
                Thoughtful design, clean development, and responsive experiences built to help your business show up with confidence online.
              </p>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="/work"
                  aria-label="View my work"
                  style={{ color: "#0A0A0A", backgroundColor: "#FFFFFF" }}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap border border-white px-5 text-sm font-medium transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span>View my work</span>
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/contact"
                  aria-label="Start a project"
                  style={{ color: "#FFFFFF", backgroundColor: "transparent" }}
                  className="inline-flex min-h-12 items-center justify-center whitespace-nowrap border border-zinc-700 px-5 text-sm font-medium transition-colors hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span>Start a project</span>
                </a>
              </div>
            </m.div>
          </div>

          <m.div initial={shouldReduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.55 }} className="hidden border-l border-white/10 pl-6 lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Based in Nigeria</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Working with brands, founders, creators, and businesses to turn ideas into useful digital experiences.
            </p>
          </m.div>
        </div>

        <m.a href="#selected-work" initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.8 }} className="mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white sm:mt-20">
          Scroll to explore
          <ArrowDown aria-hidden="true" size={15} strokeWidth={1.5} />
        </m.a>
      </div>
    </section>
  );
}
