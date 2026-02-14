export default function LoadingSkeleton() {
  return (
    <div className="space-y-3" aria-label="Loading">
      <div className="pp-skeleton h-6 w-40" />
      <div className="pp-skeleton h-24" />
      <div className="pp-skeleton h-24" />
    </div>
  );
}
