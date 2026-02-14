export default function MatchHeader({ match }) {
  if (!match) return null;

  return (
    <article className="pp-surface space-y-2 p-4">
      <p className="pp-status-chip">{match.status ?? "UNKNOWN"}</p>
      <h2 className="text-xl font-semibold">
        {match.homeTeam?.name ?? "Home"} vs {match.awayTeam?.name ?? "Away"}
      </h2>
      <p className="text-base">
        {match.score?.home ?? "-"} : {match.score?.away ?? "-"}
      </p>
      <p className="pp-muted text-sm">Kickoff: {match.utcDate ?? "TBD"}</p>
      <p className="pp-muted text-sm">Venue: {match.venue ?? "Unavailable"}</p>
    </article>
  );
}
