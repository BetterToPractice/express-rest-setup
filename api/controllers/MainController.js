class MainController {
  index(req, res) {
    return res.send({
      "message": "OK",
    })
  }
}

module.exports = new MainController