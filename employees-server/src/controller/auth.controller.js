const jwt = require("jsonwebtoken");

const { User } = require("../models");
const { jwt_secret } = require("../config/config");
const { ErrorHandler } = require("../errorHandlers");

const ONE_WEEK = 7 * 24 * 60 * 60;

async function register(req, res) {

  const existingUser = await User.findOne({
    where: {
      email: req.body.email
    }
  });

  if (existingUser) {
    throw new ErrorHandler(400, "User exists with same email");
  }

  const user = await User.create(req.body);
  res.send(user);


}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email
    }
  });

  if (!user) {
    throw new ErrorHandler(400, "Unable to find a user");
  }

  const match = await user.comparePassword(password);
  if (!match) {
    throw new ErrorHandler(400, "Unable to find a user");
  }

  const token = jwt.sign(user.toJSON(), jwt_secret, { expiresIn: ONE_WEEK });
  const userObj = user.toJSON()
  delete userObj.password;
  res.send({ user: userObj, token });
}

module.exports = {
  register,
  login
};
