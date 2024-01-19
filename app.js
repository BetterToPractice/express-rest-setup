const express = require("express");
const dataSource = require("./lib/database/database");
const {
  cors,
  json,
  body ,
  helmet,
  compression,
  logger,
  limiter,
} = require("./lib/middlewares");

const MainRouter = require("./api/routes/MainRouter");
const UserRouter = require("./api/routes/UserRouter");
const path = require("path");

const initApp = () => {
  const app = express();

  // middleware
  app.use(body());
  app.use(json());
  app.use(cors());
  app.use(helmet());
  app.use(limiter());
  app.use(compression());
  app.use(logger());

  // routers
  app.use(MainRouter());
  app.use(UserRouter());

  return app
}

const initDb = async () => {
  const connection = dataSource.initialize();
  await (await connection).synchronize();
  console.log("working...");
}

module.exports = {
  initDb,
  initApp,
}
