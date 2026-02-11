const express = require("express");
const healthRoutes = require("./health.routes");
const laligaRoutes = require("./laliga.routes");
const matchesRoutes = require("./matches.routes");

const router = express.Router();

router.use(healthRoutes);
router.use(laligaRoutes);
router.use(matchesRoutes);

module.exports = router;
