import { Link } from "react-router-dom";

export default function MatchCard({ match }) {
  if (!match) return null;

  return (
    <Link to={`/match/${match.id}`} className="pp-match-card space-y-2">
      <p className="pp-status-chip">{match.status ?? "UNKNOWN"}</p>
      <p className="font-medium">
        {match.homeTeam?.name ?? "Home"} vs {match.awayTeam?.name ?? "Away"}
      </p>
      <p className="pp-muted text-sm">
        {match.score?.home ?? "-"} : {match.score?.away ?? "-"}
      </p>
    </Link>
  );
}
