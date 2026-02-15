import EmptyState from "../common/EmptyState";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function topTierClass(position) {
  if (position === 1) return "pp-standings-row-top";
  if (position === 2) return "pp-standings-row-elite";
  if (position === 3) return "pp-standings-row-contender";
  return "";
}

function TeamBadge({ team }) {
  const name = team?.name ?? "Unknown Team";
  const crest = team?.crestUrl;

  if (!crest) {
    return (
      <div className="pp-team-crest-fallback" aria-hidden="true">
        {getInitials(name)}
      </div>
    );
  }

  return <img src={crest} alt="" className="h-7 w-7 rounded-full border border-slate-200 object-contain" />;
}

export default function StandingsTable({ rows = [] }) {
  if (!rows.length) {
    return (
      <EmptyState
        title="No standings available"
        message="The league table is currently unavailable. Please check again soon."
      />
    );
  }

  return (
    <section className="pp-standings-wrap">
      <div className="md:hidden space-y-2">
        {rows.map((row) => (
          <article key={row.team?.id ?? row.position} className={`pp-standings-mobile-card ${topTierClass(row.position)}`}>
            <div className="flex items-center gap-3">
              <div className="pp-rank-badge">{row.position ?? "-"}</div>
              <TeamBadge team={row.team} />
              <p className="min-w-0 truncate text-sm font-semibold text-slate-900">{row.team?.name ?? "Unknown Team"}</p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-extrabold leading-none text-slate-950">{row.points ?? 0}</p>
              <p className="pp-muted text-xs">PTS</p>
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2 text-xs">
              <p className="pp-muted">Played</p>
              <p className="font-semibold text-slate-700">{row.played ?? 0}</p>
              <p className="pp-muted">GD</p>
              <p className="font-semibold text-slate-700">{row.gd ?? 0}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="pp-table-wrap hidden md:block">
        <table className="pp-standings-table min-w-full text-left text-sm">
          <thead className="pp-table-head">
            <tr>
              <th className="px-4 py-3">Pos</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3 text-right">P</th>
              <th className="px-4 py-3 text-right">GD</th>
              <th className="px-4 py-3 text-right">Pts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.team?.id ?? row.position} className={`pp-standings-row ${topTierClass(row.position)}`}>
                <td className="px-4 py-3">
                  <div className="pp-rank-badge">{row.position ?? "-"}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <TeamBadge team={row.team} />
                    <p className="font-semibold text-slate-900">{row.team?.name ?? "Unknown Team"}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-700">{row.played ?? 0}</td>
                <td className="px-4 py-3 text-right font-medium text-slate-700">{row.gd ?? 0}</td>
                <td className="px-4 py-3 text-right text-lg font-extrabold text-slate-950">{row.points ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
