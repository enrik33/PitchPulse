export default function LoadingSkeleton() {
  return (
    <section className="pp-page" aria-label="Loading">
      <div className="pp-state-panel pp-state-loading space-y-4">
        <div className="space-y-3">
          <div className="pp-skeleton h-5 w-24" />
          <div className="pp-skeleton h-8 w-56" />
          <div className="pp-skeleton h-4 w-72 max-w-full" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="pp-skeleton h-20" />
          <div className="pp-skeleton h-20" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <div className="pp-skeleton h-52" />
        <div className="pp-skeleton h-52" />
        <div className="pp-skeleton h-52" />
      </div>
    </section>
  );
}
