const helmet = require("helmet");
const Config = require("../config");

module.exports = () => {
  return helmet(Config.get("helmet"));
}