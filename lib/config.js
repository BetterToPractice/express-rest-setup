const dotenv = require("dotenv")
const fs = require("fs");
const path = require("path");
const walkSync = require('walk-sync');

class Config {
  constructor() {
    this.configurations = {};
    let configurations = {}

    const envConfig = dotenv.parse(fs.readFileSync(path.join(process.cwd(), ".env")))
    for (let k in envConfig) {
      process.env[k] = envConfig[k]
    }

    let directory = path.join(process.cwd(), "config")
    walkSync(directory).forEach((file) => {
      if (fs.statSync(path.join(directory, file)).isFile()) {
        configurations[path.parse(file).name] = require(path.join(directory, file));
      }
    })
    this.configurations = configurations
  }

  get(name, defaultValue) {
    try {
      let value = eval("this.configurations." + name);  // ignore
      if (value !== undefined) {
        return this.parseValue(value);
      }
    } catch (err) { }
    return defaultValue;
  }

  parseValue(string) {
    switch (String(string).toLowerCase()) {
      case "true":
        return true;
      case "false":
        return false;
      case "null":
        return null;
      default:
        return !isNaN(string) && string !== "" ? Number(string) : string;
    }
  }
}

module.exports = new Config
