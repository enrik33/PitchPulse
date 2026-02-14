import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `pp-nav-link ${isActive ? "pp-nav-link-active" : ""}`;

  return (
    <header className="pp-nav">
      <nav className="pp-nav-inner">
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
