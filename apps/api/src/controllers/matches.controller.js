const { getMatchById } = require("../services/match.service");

async function getMatchByIdController(req, res, next) {
  try {
    const data = await getMatchById(req.params.matchId);
    res.status(200).json({ data, requestId: req.requestId });
  } catch (error) {
    next(error);
  }
}

module.exports = { getMatchByIdController };
