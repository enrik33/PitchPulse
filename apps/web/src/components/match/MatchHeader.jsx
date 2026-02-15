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

function formatKickoffDate(utcDate) {
  if (!utcDate) return "Date TBD";

  const date = new Date(utcDate);
  if (Number.isNaN(date.getTime())) return "Date TBD";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(date);
}

function formatKickoffTime(utcDate) {
  if (!utcDate) return "Time TBD";

  const date = new Date(utcDate);
  if (Number.isNaN(date.getTime())) return "Time TBD";

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function TeamBadge({ team }) {
  const name = team?.name ?? "Team";
  const crest = team?.crestUrl;

  if (!crest) {
    return (
      <div className="pp-team-crest-lg-fallback" aria-hidden="true">
        {getInitials(name)}
      </div>
    );
  }

  return <img src={crest} alt="" className="h-12 w-12 rounded-full border border-slate-200 bg-white object-contain p-1" />;
}

function TeamPanel({ team, score, align = "left" }) {
  const name = team?.name ?? "Unknown Team";
  const alignClass =
    align === "right"
      ? "items-center text-center sm:items-end sm:text-right"
      : "items-center text-center sm:items-start sm:text-left";

  return (
    <div className={`flex flex-1 flex-col gap-3 ${alignClass}`}>
      <TeamBadge team={team} />
      <p className="text-base font-semibold text-slate-900 md:text-xl">{name}</p>
      <p className="text-5xl font-black leading-none text-slate-950 md:text-6xl">{score ?? "-"}</p>
    </div>
  );
}

export default function MatchHeader({ match }) {
  if (!match) return null;

  const homeTeam = match.homeTeam ?? null;
  const awayTeam = match.awayTeam ?? null;
  const homeScore = match.score?.home ?? null;
  const awayScore = match.score?.away ?? null;
  const { label: statusLabel, tone: statusTone } = formatStatus(match.status);

  return (
    <article className="pp-match-detail-shell">
      <section className="pp-match-detail-hero">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={`pp-status-chip ${statusTone}`}>{statusLabel}</p>
          <p className="pp-muted text-xs font-medium uppercase tracking-wide">
            Kickoff {formatKickoffDate(match.utcDate)} at {formatKickoffTime(match.utcDate)}
          </p>
        </div>

        <div className="mt-5 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
          <TeamPanel team={homeTeam} score={homeScore} />
          <div className="flex shrink-0 flex-col items-center gap-2">
            <p className="pp-muted text-xs font-semibold uppercase tracking-[0.12em]">Scoreline</p>
            <p className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-700">
              vs
            </p>
          </div>
          <TeamPanel team={awayTeam} score={awayScore} align="right" />
        </div>
      </section>

      <section className="pp-match-meta-grid">
        <div className="pp-match-meta-card">
          <p className="pp-muted text-xs uppercase tracking-wide">Kickoff Date</p>
          <p className="text-sm font-semibold text-slate-900">{formatKickoffDate(match.utcDate)}</p>
        </div>
        <div className="pp-match-meta-card">
          <p className="pp-muted text-xs uppercase tracking-wide">Kickoff Time</p>
          <p className="text-sm font-semibold text-slate-900">{formatKickoffTime(match.utcDate)}</p>
        </div>
        <div className="pp-match-meta-card">
          <p className="pp-muted text-xs uppercase tracking-wide">Venue</p>
          <p className="truncate text-sm font-semibold text-slate-900">{match.venue ?? "Venue to be confirmed"}</p>
        </div>
        <div className="pp-match-meta-card">
          <p className="pp-muted text-xs uppercase tracking-wide">Match ID</p>
          <p className="text-sm font-semibold text-slate-900">{match.id ?? "Unavailable"}</p>
        </div>
      </section>
    </article>
  );
}
