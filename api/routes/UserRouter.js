const express = require("express");
const UserController = require("../controllers/UserController");


module.exports = module.exports = () => {
  const router = express.Router();

  router.get("/users", UserController.index);
  router.post("/users", UserController.create);
  router.get("/users/:username", UserController.show);
  router.patch("/users/:username", UserController.update);
  router.delete("/users/:username", UserController.destroy);

  return router;
}