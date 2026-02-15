import MatchList from "../components/match/MatchList";
import { useTodayMatches } from "../hooks/useTodayMatches";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import ErrorState from "../components/common/ErrorState";

export default function TodayPage() {
  const { data, isLoading, isError, error } = useTodayMatches();
  const todayLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date());

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <ErrorState message={error?.message} />;

  return (
    <section className="pp-page">
      <header className="pp-today-hero">
        <p className="pp-status-chip pp-status-chip-neutral">Matchday Hub</p>
        <h1 className="pp-page-title">Today Matches</h1>
        <p className="pp-muted text-sm">{todayLabel} - LaLiga live and upcoming fixtures</p>
      </header>
      <MatchList matches={data ?? []} />
    </section>
  );
}
