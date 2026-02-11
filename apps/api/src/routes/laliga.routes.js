const express = require("express");
const {
  getTodayMatchesController,
  getStandingsController
} = require("../controllers/laliga.controller");

const router = express.Router();

router.get("/laliga/matches/today", getTodayMatchesController);
router.get("/laliga/standings", getStandingsController);

module.exports = router;
