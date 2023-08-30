const express = require("express");
const MainController = require("../controllers/MainController");

module.exports = () => {
  const router = express.Router();

  router.get("/", MainController.index);

  return router;
}