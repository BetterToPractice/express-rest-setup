const express = require("express")
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

module.exports = () => {
  const app = express();

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
