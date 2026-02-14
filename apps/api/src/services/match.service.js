const { getMatchByIdFromProvider } = require("../providers/footballData.provider");
const { mapMatchDetail } = require("../mappers/match.mapper");
const { HttpError } = require("../utils/httpError");
const { cache } = require("../config/cache");

const LIVE_MATCH_TTL_SECONDS = 120;
const FINISHED_MATCH_TTL_SECONDS = 86400;
const FINISHED_STATUSES = new Set(["FINISHED", "POSTPONED", "SUSPENDED", "CANCELLED"]);

async function getMatchById(matchId) {
  const parsedMatchId = Number(matchId);
  if (!Number.isInteger(parsedMatchId) || parsedMatchId <= 0) {
    throw new HttpError(400, "VALIDATION_ERROR", "matchId must be a positive integer.");
  }

  const cacheKey = `laliga:match:${parsedMatchId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const raw = await getMatchByIdFromProvider(matchId);
  const normalized = mapMatchDetail(raw);
  const ttl = FINISHED_STATUSES.has(normalized.status)
    ? FINISHED_MATCH_TTL_SECONDS
    : LIVE_MATCH_TTL_SECONDS;

  cache.set(cacheKey, normalized, ttl);
  return normalized;
}

module.exports = { getMatchById };
