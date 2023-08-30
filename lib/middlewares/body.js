const Config = require("../config");
const express = require("express");

module.exports = () => {
  return express.urlencoded(Config.get("body"));
};