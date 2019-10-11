const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Access denied. No token provided" });

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, "73f304ed16b64d9cf22c9404283dc5ac");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};
