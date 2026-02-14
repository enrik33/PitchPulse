import MatchList from "../components/match/MatchList";
import { useTodayMatches } from "../hooks/useTodayMatches";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import ErrorState from "../components/common/ErrorState";

export default function TodayPage() {
  const { data, isLoading, isError, error } = useTodayMatches();

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <ErrorState message={error?.message} />;

  return (
    <section className="pp-page">
      <h1 className="pp-page-title">Today Matches</h1>
      <MatchList matches={data ?? []} />
    </section>
  );
}
