function errorHandlerMiddleware(error, req, res, _next) {
  let status = Number(error?.statusCode || error?.status || 500);
  let code = error?.code || "INTERNAL_ERROR";
  let message = error?.message || "Unexpected server error";
  const requestId = req.requestId || null;

  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    status = 400;
    code = "INVALID_JSON";
    message = "Request body contains invalid JSON.";
  }

  res.status(status).json({
    error: {
      code,
      message,
      requestId
    }
  });
}

module.exports = { errorHandlerMiddleware };
