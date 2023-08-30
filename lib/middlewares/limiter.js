const rateLimit = require('express-rate-limit');
const Config = require("../config");

module.exports = () => {
  return rateLimit(Config.get("rate_limit"));
}