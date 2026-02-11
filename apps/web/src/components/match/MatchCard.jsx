import { Link } from "react-router-dom";

export default function MatchCard({ match }) {
  if (!match) return null;

  return (
    <Link
      to={`/match/${match.id}`}
      className="block rounded-lg border bg-white p-4 shadow-sm transition hover:shadow"
    >
      <p className="text-sm text-gray-500">{match.status ?? "UNKNOWN"}</p>
      <p className="font-medium">
        {match.homeTeam?.name ?? "Home"} vs {match.awayTeam?.name ?? "Away"}
      </p>
      <p className="text-sm text-gray-700">
        {match.score?.home ?? "-"} : {match.score?.away ?? "-"}
      </p>
    </Link>
  );
}
