import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import TodayPage from "../pages/TodayPage";
import StandingsPage from "../pages/StandingsPage";
import MatchPage from "../pages/MatchPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <TodayPage /> },
      { path: "standings", element: <StandingsPage /> },
      { path: "match/:matchId", element: <MatchPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);
