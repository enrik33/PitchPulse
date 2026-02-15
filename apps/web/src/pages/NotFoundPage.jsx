import EmptyState from "../components/common/EmptyState";

export default function NotFoundPage() {
  return (
    <section className="pp-page">
      <EmptyState
        eyebrow="404"
        marker="?"
        title="Page not found"
        message="The page you requested does not exist or has moved."
        actionLabel="Back to home"
        actionTo="/"
      />
    </section>
  );
}
