const { getMatchByIdFromProvider } = require("../providers/footballData.provider");
const { mapMatchDetail } = require("../mappers/match.mapper");
const { HttpError } = require("../utils/httpError");

async function getMatchById(matchId) {
  const parsedMatchId = Number(matchId);
  if (!Number.isInteger(parsedMatchId) || parsedMatchId <= 0) {
    throw new HttpError(400, "VALIDATION_ERROR", "matchId must be a positive integer.");
  }

  const raw = await getMatchByIdFromProvider(matchId);
  return mapMatchDetail(raw);
}

module.exports = { getMatchById };
