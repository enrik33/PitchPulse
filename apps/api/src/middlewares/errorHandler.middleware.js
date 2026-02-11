function errorHandlerMiddleware(error, req, res, _next) {
  const status = Number(error?.statusCode || error?.status || 500);

  res.status(status).json({
    error: {
      code: error?.code || "INTERNAL_ERROR",
      message: error?.message || "Unexpected server error",
      requestId: req.requestId
    }
  });
}

module.exports = { errorHandlerMiddleware };
