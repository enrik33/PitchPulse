export default function MatchDetailSkeleton() {
  return (
    <section className="pp-page" aria-label="Loading match">
      <div className="pp-match-page-hero space-y-3">
        <div className="pp-skeleton h-6 w-24" />
        <div className="pp-skeleton h-8 w-44" />
        <div className="pp-skeleton h-4 w-72 max-w-full" />
      </div>

      <div className="pp-match-detail-hero space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="pp-skeleton h-6 w-20" />
          <div className="pp-skeleton h-4 w-40" />
        </div>
        <div className="pp-skeleton h-32 w-full" />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="pp-skeleton h-20 w-full" />
        <div className="pp-skeleton h-20 w-full" />
        <div className="pp-skeleton h-20 w-full" />
        <div className="pp-skeleton h-20 w-full" />
      </div>
    </section>
  );
}
