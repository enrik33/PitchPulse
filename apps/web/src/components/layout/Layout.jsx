import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="pp-app-shell">
      <div className="pp-bg-orb pp-bg-orb-left" aria-hidden="true" />
      <div className="pp-bg-orb pp-bg-orb-right" aria-hidden="true" />
      <Navbar />
      <main className="pp-page-container pp-shell-content">
        <section className="pp-page-frame">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
