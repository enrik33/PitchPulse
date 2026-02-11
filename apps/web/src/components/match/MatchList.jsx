import MatchCard from "./MatchCard";
import EmptyState from "../common/EmptyState";

export default function MatchList({ matches = [] }) {
  if (!matches.length) {
    return <EmptyState title="No matches today" message="Check back later for fixtures and results." />;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
