const { getTodayMatchesFromProvider, getStandingsFromProvider } = require("../providers/footballData.provider");
const { mapMatchSummary } = require("../mappers/match.mapper");
const { mapStandingsRow } = require("../mappers/standings.mapper");
const { cache } = require("../config/cache");

const TODAY_MATCHES_CACHE_KEY = "laliga:matches:today";
const STANDINGS_CACHE_KEY = "laliga:standings";
const TODAY_MATCHES_TTL_SECONDS = 120;
const STANDINGS_TTL_SECONDS = 900;

async function getTodayMatches() {
  const cached = cache.get(TODAY_MATCHES_CACHE_KEY);
  if (cached) return cached;

  const rawMatches = await getTodayMatchesFromProvider();
  const normalized = (rawMatches || []).map(mapMatchSummary);
  cache.set(TODAY_MATCHES_CACHE_KEY, normalized, TODAY_MATCHES_TTL_SECONDS);
  return normalized;
}

async function getStandings() {
  const cached = cache.get(STANDINGS_CACHE_KEY);
  if (cached) return cached;

  const rawRows = await getStandingsFromProvider();
  const normalized = (rawRows || []).map(mapStandingsRow);
  cache.set(STANDINGS_CACHE_KEY, normalized, STANDINGS_TTL_SECONDS);
  return normalized;
}

module.exports = {
  getTodayMatches,
  getStandings
};
