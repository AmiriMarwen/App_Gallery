module.exports.login_post = (req, res) => {
  res.send("POST -- login");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = (req, res) => {
  res.send("POST -- signup");
};

module.exports.signup_get = (req, res) => {
  res.send("GET -- signup");
};
