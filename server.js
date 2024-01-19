const { initApp, initDb } = require("./app");
const Config = require("./lib/config");

async function startServer() {
  await initDb();
  const app = initApp();

  app.listen(Config.get("app.port"), () => {
    console.log("Server running at port " + Config.get("app.port"));
  });
}

startServer();
