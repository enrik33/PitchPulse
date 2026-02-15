export default function LoadingSkeleton() {
  return (
    <section className="pp-page" aria-label="Loading">
      <div className="pp-today-hero space-y-3">
        <div className="pp-skeleton h-6 w-28" />
        <div className="pp-skeleton h-8 w-56" />
        <div className="pp-skeleton h-4 w-72 max-w-full" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <div className="pp-skeleton h-52" />
        <div className="pp-skeleton h-52" />
        <div className="pp-skeleton h-52" />
      </div>
    </section>
  );
}
