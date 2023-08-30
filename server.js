const app = require("./app")()
const Config = require("./lib/config")

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(Config.get("app.port"), () => {
  console.log("Server running at port " + Config.get("app.port"))
})