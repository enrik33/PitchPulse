export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again.",
  eyebrow = "Error"
}) {
  return (
    <div className="pp-state-panel pp-state-error">
      <p className="pp-state-eyebrow">{eyebrow}</p>
      <p className="pp-state-marker" aria-hidden="true">
        !
      </p>
      <p className="pp-state-title">{title}</p>
      <p className="pp-state-copy">{message}</p>
    </div>
  );
}
