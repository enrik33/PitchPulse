import { useParams } from "react-router-dom";
import MatchHeader from "../components/match/MatchHeader";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import ErrorState from "../components/common/ErrorState";
import { useMatch } from "../hooks/useMatch";

export default function MatchPage() {
  const { matchId } = useParams();
  const { data, isLoading, isError, error } = useMatch(matchId);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <ErrorState message={error?.message} />;

  return (
    <section className="pp-page">
      <h1 className="pp-page-title">Match</h1>
      <MatchHeader match={data} />
    </section>
  );
}
