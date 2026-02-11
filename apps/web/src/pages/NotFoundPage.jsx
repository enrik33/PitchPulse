import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link className="text-blue-600 underline" to="/">
        Go to home
      </Link>
    </section>
  );
}
