class UserController {
  index(req, res) {
    res.send("user list");
  }
  show(req, res) {
    res.send("user detail");
  }
  create(req, res) {
    res.send("user create");
  }
  update(req, res) {
    res.send("user update");
  }
  destroy(req, res) {
    res.send("user destroy");
  }
}

module.exports = new UserController