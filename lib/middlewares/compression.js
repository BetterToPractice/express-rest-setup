const compression = require("compression");

module.exports = () => {
  return compression({
    threshold: 0,
    filter: () => true,
  });
}