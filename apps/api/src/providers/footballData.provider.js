const axios = require("axios");
const { env } = require("../config/env");

const footballDataClient = axios.create({
  baseURL: "https://api.football-data.org/v4",
  timeout: 10000,
  headers: {
    "X-Auth-Token": env.X_AUTH_TOKEN
  }
});

async function getTodayMatchesFromProvider() {
  // Placeholder until date filtering and caching logic is implemented.
  return [];
}

async function getStandingsFromProvider() {
  // Placeholder until upstream integration is completed.
  return [];
}

async function getMatchByIdFromProvider(matchId) {
  // Placeholder shape for early frontend wiring.
  return {
    id: Number(matchId),
    utcDate: null,
    status: "SCHEDULED",
    homeTeam: null,
    awayTeam: null,
    score: {}
  };
}

module.exports = {
  footballDataClient,
  getTodayMatchesFromProvider,
  getStandingsFromProvider,
  getMatchByIdFromProvider
};
