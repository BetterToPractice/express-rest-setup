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

module.exports = () => {
  const app = express();

  app.use(body());
  app.use(json());
  app.use(cors());
  app.use(helmet());
  app.use(limiter());
  app.use(compression());
  app.use(logger());

  return app
}
