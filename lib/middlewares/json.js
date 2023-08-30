const express = require("express");
const Config = require("../config");

module.exports = () => {
  return express.json(Config.get("json"));
};