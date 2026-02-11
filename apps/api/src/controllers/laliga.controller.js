const { getTodayMatches, getStandings } = require("../services/laliga.service");

async function getTodayMatchesController(req, res, next) {
  try {
    const data = await getTodayMatches();
    res.status(200).json({ data, requestId: req.requestId });
  } catch (error) {
    next(error);
  }
}

async function getStandingsController(req, res, next) {
  try {
    const data = await getStandings();
    res.status(200).json({ data, requestId: req.requestId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTodayMatchesController,
  getStandingsController
};
