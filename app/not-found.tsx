export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 md:px-10">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">404</p>
        <h1 className="font-[var(--font-display)] text-5xl tracking-tight md:text-7xl">Page not found.</h1>
      </section>
    </main>
  );
}
