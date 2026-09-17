export function AboutSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-24 text-[var(--background)] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-black/50">
              About
            </p>
            <h2 className="mt-5 max-w-md font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Thoughtful websites, built to work.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-black/65 sm:text-lg">
            <p>
              I&apos;m Thomas Fatade, a web developer focused on building modern
              websites for brands and businesses.
            </p>
            <p>
              I care about the balance between strong visual direction, clear
              communication, and a smooth experience for the people using the
              website. Every project starts with understanding the goal before
              moving into design and development.
            </p>
            <p>
              My approach is practical: keep the experience clear, make the
              important information easy to find, and build a solid foundation
              that can grow with the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
