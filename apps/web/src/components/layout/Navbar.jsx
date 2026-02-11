import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
        <NavLink to="/" className={linkClass}>
          Today
        </NavLink>
        <NavLink to="/standings" className={linkClass}>
          Standings
        </NavLink>
      </nav>
    </header>
  );
}
