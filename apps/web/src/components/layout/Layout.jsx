import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="pp-app-shell">
      <Navbar />
      <main className="pp-page-container">
        <Outlet />
      </main>
    </div>
  );
}
