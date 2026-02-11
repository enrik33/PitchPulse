function mapStandingsRow(row) {
  return {
    position: row?.position ?? null,
    team: {
      id: row?.team?.id ?? null,
      name: row?.team?.name ?? "Unknown Team",
      crestUrl: row?.team?.crest ?? row?.team?.crestUrl ?? null
    },
    played: row?.playedGames ?? row?.played ?? 0,
    gd: row?.goalDifference ?? row?.gd ?? 0,
    points: row?.points ?? 0
  };
}

module.exports = { mapStandingsRow };
