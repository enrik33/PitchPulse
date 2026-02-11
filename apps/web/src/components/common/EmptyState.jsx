export default function EmptyState({ title = "Nothing here", message = "No data available." }) {
  return (
    <div className="rounded-lg border bg-white p-6 text-center text-gray-600">
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
