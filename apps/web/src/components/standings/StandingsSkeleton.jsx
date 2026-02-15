export default function StandingsSkeleton() {
  return (
    <section className="pp-page" aria-label="Loading standings" role="status" aria-live="polite">
      <div className="pp-standings-hero space-y-3">
        <div className="pp-skeleton h-6 w-24" />
        <div className="pp-skeleton h-8 w-48" />
        <div className="pp-skeleton h-4 w-80 max-w-full" />
      </div>

      <div className="pp-surface space-y-3 p-4">
        <div className="pp-skeleton h-10 w-full" />
        <div className="pp-skeleton h-14 w-full" />
        <div className="pp-skeleton h-14 w-full" />
        <div className="pp-skeleton h-14 w-full" />
        <div className="pp-skeleton h-14 w-full" />
      </div>
    </section>
  );
}
