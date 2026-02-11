const { getMatchByIdFromProvider } = require("../providers/footballData.provider");
const { mapMatchSummary, mapMatchDetail } = require("../mappers/match.mapper");

async function getMatchById(matchId) {
  const raw = await getMatchByIdFromProvider(matchId);
  return mapMatchDetail ? mapMatchDetail(raw) : mapMatchSummary(raw);
}

module.exports = { getMatchById };
