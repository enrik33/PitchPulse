export default function MatchHeader({ match }) {
  if (!match) return null;

  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{match.status ?? "UNKNOWN"}</p>
      <h2 className="text-xl font-semibold">
        {match.homeTeam?.name ?? "Home"} vs {match.awayTeam?.name ?? "Away"}
      </h2>
      <p className="text-base">
        {match.score?.home ?? "-"} : {match.score?.away ?? "-"}
      </p>
      <p className="text-sm text-gray-600">Kickoff: {match.utcDate ?? "TBD"}</p>
      <p className="text-sm text-gray-600">Venue: {match.venue ?? "Unavailable"}</p>
    </article>
  );
}
