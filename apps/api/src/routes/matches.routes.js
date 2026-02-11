const express = require("express");
const { getMatchByIdController } = require("../controllers/matches.controller");

const router = express.Router();

router.get("/matches/:matchId", getMatchByIdController);

module.exports = router;
