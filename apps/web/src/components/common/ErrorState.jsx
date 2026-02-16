export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again.",
  eyebrow = "Error",
  actionLabel = "Try again",
  onRetry
}) {
  return (
    <div className="pp-state-panel pp-state-error" role="alert" aria-live="assertive">
      <p className="pp-state-eyebrow">{eyebrow}</p>
      <p className="pp-state-marker" aria-hidden="true">
        !
      </p>
      <p className="pp-state-title">{title}</p>
      <p className="pp-state-copy">{message}</p>
      {typeof onRetry === "function" ? (
        <button type="button" className="pp-state-action" onClick={onRetry}>
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
