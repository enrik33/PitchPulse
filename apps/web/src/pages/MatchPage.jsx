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
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Match</h1>
      <MatchHeader match={data} />
    </section>
  );
}
