export default function BitgetEducationPage() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            Web3 / Education
          </p>
          <h1 className="mt-5 max-w-5xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Bitget Education
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            An educational landing experience built to make exchange features
            easier to understand through clear sections and straightforward
            navigation.
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
              The page organizes educational information around common exchange
              activities, including buying and selling crypto, P2P, deposits and
              withdrawals, rewards, futures, spot, and stocks.
            </p>
            <p>
              The experience keeps the content educational and structured, with
              responsive navigation and visual sections designed to make each
              topic easier to scan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
