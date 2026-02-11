const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { requestIdMiddleware } = require("./middlewares/requestId.middleware");
const { requestLoggerMiddleware } = require("./middlewares/requestLogger.middleware");
const { apiRateLimit } = require("./config/rateLimit");
const { notFoundMiddleware } = require("./middlewares/notFound.middleware");
const { errorHandlerMiddleware } = require("./middlewares/errorHandler.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestIdMiddleware);
app.use(requestLoggerMiddleware);
app.use("/api", apiRateLimit);
app.use("/api", routes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = { app };
