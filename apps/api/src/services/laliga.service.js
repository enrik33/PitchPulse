const { getTodayMatchesFromProvider, getStandingsFromProvider } = require("../providers/footballData.provider");
const { mapMatchSummary } = require("../mappers/match.mapper");
const { mapStandingsRow } = require("../mappers/standings.mapper");

async function getTodayMatches() {
  const rawMatches = await getTodayMatchesFromProvider();
  return (rawMatches || []).map(mapMatchSummary);
}

async function getStandings() {
  const rawRows = await getStandingsFromProvider();
  return (rawRows || []).map(mapStandingsRow);
}

module.exports = {
  getTodayMatches,
  getStandings
};
