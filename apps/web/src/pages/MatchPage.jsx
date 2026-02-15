import { useParams } from "react-router-dom";
import MatchHeader from "../components/match/MatchHeader";
import MatchDetailSkeleton from "../components/match/MatchDetailSkeleton";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";
import { useMatch } from "../hooks/useMatch";

export default function MatchPage() {
  const { matchId } = useParams();
  const { data, isLoading, isError, error } = useMatch(matchId);

  if (isLoading) return <MatchDetailSkeleton />;
  if (isError) return <ErrorState title="Unable to load match" message={error?.message} />;
  if (!data) {
    return (
      <EmptyState
        title="Match unavailable"
        message="This match does not have detail data right now. Please check again shortly."
      />
    );
  }

  return (
    <section className="pp-page">
      <header className="pp-match-page-hero">
        <p className="pp-status-chip pp-status-chip-neutral">Match Center</p>
        <h1 className="pp-page-title">Match Detail</h1>
        <p className="pp-muted text-sm">Live scoreboard and fixture metadata</p>
      </header>
      <MatchHeader match={data} />
    </section>
  );
}
