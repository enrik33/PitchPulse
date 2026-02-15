import MatchCard from "./MatchCard";
import EmptyState from "../common/EmptyState";

export default function MatchList({ matches = [] }) {
  if (!matches.length) {
    return (
      <EmptyState
        title="No matches today"
        message="No LaLiga fixtures are scheduled right now. Check back later for kickoff updates."
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
