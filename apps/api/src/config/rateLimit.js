const rateLimit = require("express-rate-limit");

const apiRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: {
        code: "RATE_LIMITED",
        message: "Too many requests, please try again later.",
        requestId: req.requestId
      }
    });
  }
});

module.exports = { apiRateLimit };
