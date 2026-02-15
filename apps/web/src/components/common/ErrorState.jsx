export default function ErrorState({ title = "Something went wrong", message = "Please try again." }) {
  return (
    <div className="pp-state-panel pp-state-error">
      <p className="text-2xl leading-none" aria-hidden="true">
        !
      </p>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
