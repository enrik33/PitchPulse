import { Link } from "react-router-dom";

function formatStatus(status) {
  const normalized = String(status ?? "").toUpperCase();

  if (normalized.includes("LIVE") || normalized === "IN_PLAY") {
    return { label: "Live", tone: "pp-status-chip-live" };
  }

  if (normalized === "FINISHED" || normalized === "FT") {
    return { label: "Final", tone: "pp-status-chip-finished" };
  }

  if (normalized === "POSTPONED" || normalized === "SUSPENDED" || normalized === "CANCELED") {
    return { label: "Delayed", tone: "pp-status-chip-delayed" };
  }

  if (normalized === "TIMED" || normalized === "SCHEDULED") {
    return { label: "Upcoming", tone: "pp-status-chip-neutral" };
  }

  return { label: normalized || "Unknown", tone: "pp-status-chip-neutral" };
}

function formatKickoff(utcDate) {
  if (!utcDate) return "Kickoff TBD";

  const date = new Date(utcDate);
  if (Number.isNaN(date.getTime())) return "Kickoff TBD";

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

export default function MatchCard({ match }) {
  if (!match) return null;

  const { label: statusLabel, tone: statusTone } = formatStatus(match.status);
  const homeName = match.homeTeam?.name ?? "Home";
  const awayName = match.awayTeam?.name ?? "Away";
  const homeScore = match.score?.home;
  const awayScore = match.score?.away;
  const hasScore = homeScore !== null && homeScore !== undefined && awayScore !== null && awayScore !== undefined;
  const homeLeads = hasScore && Number(homeScore) > Number(awayScore);
  const awayLeads = hasScore && Number(awayScore) > Number(homeScore);

  return (
    <Link
      to={`/match/${match.id}`}
      className="pp-match-card pp-match-card-premium group"
      aria-label={`${homeName} vs ${awayName}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className={`pp-status-chip ${statusTone}`}>{statusLabel}</p>
        <p className="pp-muted text-xs font-medium">Kickoff {formatKickoff(match.utcDate)}</p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <p className={`text-sm ${homeLeads ? "font-semibold text-slate-900" : "font-medium text-slate-700"}`}>
            {homeName}
          </p>
          <p className={`text-3xl leading-none ${homeLeads ? "font-bold text-slate-950" : "font-semibold text-slate-700"}`}>
            {homeScore ?? "-"}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className={`text-sm ${awayLeads ? "font-semibold text-slate-900" : "font-medium text-slate-700"}`}>
            {awayName}
          </p>
          <p className={`text-3xl leading-none ${awayLeads ? "font-bold text-slate-950" : "font-semibold text-slate-700"}`}>
            {awayScore ?? "-"}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
        <p className="pp-muted truncate text-xs">{match.venue ?? "Venue to be confirmed"}</p>
        <p className="text-sm font-semibold text-slate-800 transition-transform group-hover:translate-x-0.5">
          Open Match
        </p>
      </div>
    </Link>
  );
}
