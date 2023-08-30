const Cors = require("cors");
const Config = require("../config");

module.exports = () => {
  return Cors(Config.get("cors"));
}