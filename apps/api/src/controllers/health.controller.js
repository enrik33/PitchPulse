function healthController(req, res) {
  res.status(200).json({
    status: "ok",
    service: "pitchpulse-api",
    timestamp: new Date().toISOString(),
    requestId: req.requestId
  });
}

module.exports = { healthController };
