export default function EmptyState({ title = "Nothing here", message = "No data available." }) {
  return (
    <div className="pp-state-panel pp-state-empty">
      <p className="text-3xl leading-none" aria-hidden="true">
        0-0
      </p>
      <p className="text-lg font-semibold text-slate-900">{title}</p>
      <p className="pp-muted text-sm">{message}</p>
    </div>
  );
}
