const Logger = require("morgan");
const path = require('path');
const fs = require('fs');

module.exports = () => {
  return process.env.NODE_ENV !== 'production' ?
    Logger("dev") : Logger(
      "combined",
      {stream: fs.createWriteStream(path.join(process.cwd(), 'storage/logs/access.log'))}
    );
}