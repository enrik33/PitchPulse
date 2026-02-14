import StandingsTable from "../components/standings/StandingsTable";
import { useStandings } from "../hooks/useStandings";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import ErrorState from "../components/common/ErrorState";

export default function StandingsPage() {
  const { data, isLoading, isError, error } = useStandings();

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <ErrorState message={error?.message} />;

  return (
    <section className="pp-page">
      <h1 className="pp-page-title">Standings</h1>
      <StandingsTable rows={data ?? []} />
    </section>
  );
}
