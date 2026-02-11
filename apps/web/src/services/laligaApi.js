import { apiGet } from "./apiClient";

export async function getTodayMatches() {
  const data = await apiGet("/laliga/matches/today");
  return data?.data ?? data ?? [];
}

export async function getStandings() {
  const data = await apiGet("/laliga/standings");
  return data?.data ?? data ?? [];
}

export async function getMatch(matchId) {
  const data = await apiGet(`/matches/${matchId}`);
  return data?.data ?? data ?? null;
}
