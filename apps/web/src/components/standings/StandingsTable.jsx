export default function StandingsTable({ rows = [] }) {
  return (
    <div className="pp-table-wrap">
      <table className="min-w-full text-left text-sm">
        <thead className="pp-table-head">
          <tr>
            <th className="px-3 py-2">#</th>
            <th className="px-3 py-2">Team</th>
            <th className="px-3 py-2">P</th>
            <th className="px-3 py-2">GD</th>
            <th className="px-3 py-2">Pts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.team?.id ?? row.position} className="border-t border-neutral-200">
              <td className="px-3 py-2">{row.position}</td>
              <td className="px-3 py-2">{row.team?.name}</td>
              <td className="pp-muted px-3 py-2">{row.played}</td>
              <td className="pp-muted px-3 py-2">{row.gd}</td>
              <td className="px-3 py-2 font-semibold">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
