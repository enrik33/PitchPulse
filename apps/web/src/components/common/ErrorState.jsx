export default function ErrorState({ title = "Something went wrong", message = "Please try again." }) {
  return (
    <div className="pp-state-error">
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
