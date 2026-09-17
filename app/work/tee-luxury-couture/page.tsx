export default function TeeLuxuryCouturePage() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            Fashion / E-commerce
          </p>
          <h1 className="mt-5 max-w-5xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Tee Luxury Couture
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            A fashion-focused digital experience designed to present the brand
            clearly and create a polished path through its online presence.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--border)] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Overview
            </p>
          </div>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            <p>
              The project focuses on strong visual presentation, clear content
              hierarchy, and a responsive experience across screen sizes.
            </p>
            <p>
              The interface was shaped to give the fashion brand a confident
              digital presence while keeping navigation and important actions
              easy to understand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
