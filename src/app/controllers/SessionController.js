const jwt = require("jsonwebtoken");
const User = require("../models/User");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const validPassword = await user.checkPassword(password);
    if (!validPassword)
      return res.status(400).json({ error: "Invalid email or password" });

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: user.generateAuthToken()
    });
  }
}

module.exports = new SessionController();
