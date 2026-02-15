import { Link } from "react-router-dom";

export default function EmptyState({
  title = "Nothing here",
  message = "No data available.",
  eyebrow = "No results",
  marker = "0-0",
  actionLabel,
  actionTo
}) {
  return (
    <div className="pp-state-panel pp-state-empty" role="status" aria-live="polite">
      <p className="pp-state-eyebrow">{eyebrow}</p>
      <p className="pp-state-marker" aria-hidden="true">
        {marker}
      </p>
      <p className="pp-state-title text-slate-900">{title}</p>
      <p className="pp-state-copy pp-muted">{message}</p>
      {actionLabel && actionTo ? (
        <Link className="pp-state-action" to={actionTo}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
