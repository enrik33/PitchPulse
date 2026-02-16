import StandingsTable from "../components/standings/StandingsTable";
import { useStandings } from "../hooks/useStandings";
import StandingsSkeleton from "../components/standings/StandingsSkeleton";
import ErrorState from "../components/common/ErrorState";

export default function StandingsPage() {
  const { data, isLoading, isError, error, refetch } = useStandings();
  const updatedLabel = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  }).format(new Date());

  if (isLoading) return <StandingsSkeleton />;
  if (isError) {
    return (
      <ErrorState
        title="Unable to load standings"
        message={error?.message}
        onRetry={() => {
          refetch();
        }}
      />
    );
  }

  return (
    <section className="pp-page">
      <header className="pp-standings-hero">
        <p className="pp-status-chip pp-status-chip-neutral">League Table</p>
        <h1 className="pp-page-title">Standings</h1>
        <p className="pp-muted text-sm">Updated {updatedLabel} - current LaLiga ranking snapshot</p>
      </header>
      <StandingsTable rows={data ?? []} />
    </section>
  );
}
