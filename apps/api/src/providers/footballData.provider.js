const axios = require("axios");
const { env } = require("../config/env");
const { HttpError } = require("../utils/httpError");

const footballDataClient = axios.create({
  baseURL: "https://api.football-data.org/v4",
  timeout: 10000,
  headers: {
    "X-Auth-Token": env.X_AUTH_TOKEN
  }
});

function assertAuthToken() {
  if (!env.X_AUTH_TOKEN) {
    throw new HttpError(
      500,
      "CONFIG_ERROR",
      "Missing X_AUTH_TOKEN configuration for football-data provider."
    );
  }
}

function mapAxiosError(error) {
  if (error?.response) {
    const status = error.response.status;
    const upstreamMessage =
      error.response.data?.message || "football-data.org request failed.";
    return new HttpError(status, "UPSTREAM_ERROR", upstreamMessage);
  }

  if (error?.request) {
    return new HttpError(502, "UPSTREAM_UNAVAILABLE", "No response from football-data.org.");
  }

  return new HttpError(500, "UPSTREAM_ERROR", error?.message || "Unknown upstream error.");
}

function getMadridDateString() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

async function getTodayMatchesFromProvider() {
  assertAuthToken();

  try {
    const today = getMadridDateString();
    const { data } = await footballDataClient.get("/competitions/PD/matches", {
      params: {
        dateFrom: today,
        dateTo: today
      }
    });

    return Array.isArray(data?.matches) ? data.matches : [];
  } catch (error) {
    throw mapAxiosError(error);
  }
}

async function getStandingsFromProvider() {
  assertAuthToken();

  try {
    const { data } = await footballDataClient.get("/competitions/PD/standings");
    const standings = Array.isArray(data?.standings) ? data.standings : [];
    const totalTable =
      standings.find((entry) => entry?.type === "TOTAL") || standings[0] || null;
    return Array.isArray(totalTable?.table) ? totalTable.table : [];
  } catch (error) {
    throw mapAxiosError(error);
  }
}

async function getMatchByIdFromProvider(matchId) {
  assertAuthToken();

  try {
    const { data } = await footballDataClient.get(`/matches/${matchId}`);
    return data || {};
  } catch (error) {
    throw mapAxiosError(error);
  }
}

module.exports = {
  footballDataClient,
  getTodayMatchesFromProvider,
  getStandingsFromProvider,
  getMatchByIdFromProvider
};
