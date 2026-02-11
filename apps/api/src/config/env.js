const dotenv = require("dotenv");

dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 4000),
  X_AUTH_TOKEN: process.env.X_AUTH_TOKEN || ""
};

module.exports = { env };
