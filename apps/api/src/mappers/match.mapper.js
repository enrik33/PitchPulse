function mapMatchSummary(match) {
  const score = match?.score || {};

  return {
    id: match?.id ?? null,
    utcDate: match?.utcDate ?? null,
    status: match?.status ?? "UNKNOWN",
    homeTeam: {
      id: match?.homeTeam?.id ?? null,
      name: match?.homeTeam?.name ?? "Home",
      crestUrl: match?.homeTeam?.crest ?? match?.homeTeam?.crestUrl ?? null
    },
    awayTeam: {
      id: match?.awayTeam?.id ?? null,
      name: match?.awayTeam?.name ?? "Away",
      crestUrl: match?.awayTeam?.crest ?? match?.awayTeam?.crestUrl ?? null
    },
    score: {
      home:
        score?.fullTime?.home ??
        score?.regularTime?.home ??
        score?.halfTime?.home ??
        null,
      away:
        score?.fullTime?.away ??
        score?.regularTime?.away ??
        score?.halfTime?.away ??
        null
    }
  };
}

function mapMatchDetail(match) {
  const summary = mapMatchSummary(match);
  return {
    ...summary,
    venue: match?.venue ?? null
  };
}

module.exports = {
  mapMatchSummary,
  mapMatchDetail
};
