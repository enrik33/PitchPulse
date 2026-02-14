export default function EmptyState({ title = "Nothing here", message = "No data available." }) {
  return (
    <div className="pp-surface pp-state-empty">
      <p className="font-semibold">{title}</p>
      <p className="pp-muted text-sm">{message}</p>
    </div>
  );
}
