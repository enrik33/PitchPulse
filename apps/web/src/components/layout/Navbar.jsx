import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `pp-nav-link ${isActive ? "pp-nav-link-active" : ""}`;

  return (
    <header className="pp-nav">
      <nav className="pp-nav-inner" aria-label="Primary">
        <NavLink to="/" className="pp-brand">
          <span className="pp-brand-mark" aria-hidden="true" />
          <span className="pp-brand-word">PitchPulse</span>
        </NavLink>

        <button
          type="button"
          className="pp-nav-toggle md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <div className="pp-nav-links hidden md:flex">
          <NavLink to="/" className={linkClass}>
            Today
          </NavLink>
          <NavLink to="/standings" className={linkClass}>
            Standings
          </NavLink>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="pp-nav-mobile md:hidden">
          <NavLink to="/" className={linkClass}>
            Today
          </NavLink>
          <NavLink to="/standings" className={linkClass}>
            Standings
          </NavLink>
        </div>
      )}
    </header>
  );
}
