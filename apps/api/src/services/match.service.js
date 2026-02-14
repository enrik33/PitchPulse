const { getMatchByIdFromProvider } = require("../providers/footballData.provider");
const { mapMatchDetail } = require("../mappers/match.mapper");

async function getMatchById(matchId) {
  const raw = await getMatchByIdFromProvider(matchId);
  return mapMatchDetail(raw);
}

module.exports = { getMatchById };
