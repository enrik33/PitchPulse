export default function LoadingSkeleton() {
  return (
    <div className="space-y-3" aria-label="Loading">
      <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
      <div className="h-24 animate-pulse rounded bg-gray-200" />
      <div className="h-24 animate-pulse rounded bg-gray-200" />
    </div>
  );
}
