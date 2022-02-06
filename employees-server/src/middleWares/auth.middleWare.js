const { ErrorHandler } = require("../errorHandlers");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config");

module.exports = (req, res, next) => {
  const token =  req.headers["x-auth"];
  if (!token) {
    throw new ErrorHandler(403, "A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, jwt_secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  next()
}
