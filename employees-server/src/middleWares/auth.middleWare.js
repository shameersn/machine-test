const { ErrorHandler } = require("../errorHandlers");

module.exports = (req, res, next) => {
  const token =  req.headers["x-auth"];
  if(!token) {
    throw new ErrorHandler(401, "Un authorized");
  }
  next()
}
