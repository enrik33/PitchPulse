const { mapMatchSummary, mapMatchDetail } = require("../src/mappers/match.mapper");
const { mapStandingsRow } = require("../src/mappers/standings.mapper");

describe("match mapper", () => {
  it("maps MatchSummary with normalized score and teams", () => {
    const raw = {
      id: 42,
      utcDate: "2026-02-16T20:00:00Z",
      status: "FINISHED",
      homeTeam: { id: 1, name: "Home FC", crest: "home.png" },
      awayTeam: { id: 2, name: "Away FC", crestUrl: "away.png" },
      score: {
        fullTime: { home: 2, away: 1 }
      }
    };

    expect(mapMatchSummary(raw)).toEqual({
      id: 42,
      utcDate: "2026-02-16T20:00:00Z",
      status: "FINISHED",
      homeTeam: { id: 1, name: "Home FC", crestUrl: "home.png" },
      awayTeam: { id: 2, name: "Away FC", crestUrl: "away.png" },
      score: { home: 2, away: 1 }
    });
  });

  it("maps MatchDetail and preserves optional venue safely", () => {
    expect(mapMatchDetail({ id: 10, venue: null })).toMatchObject({
      id: 10,
      venue: null
    });
  });
});

describe("standings mapper", () => {
  it("maps standings row with normalized fields and fallbacks", () => {
    const raw = {
      position: 3,
      team: { id: 99, name: "Test United", crest: "crest.png" },
      playedGames: 24,
      goalDifference: 13,
      points: 50
    };

    expect(mapStandingsRow(raw)).toEqual({
      position: 3,
      team: { id: 99, name: "Test United", crestUrl: "crest.png" },
      played: 24,
      gd: 13,
      points: 50
    });
  });
});
