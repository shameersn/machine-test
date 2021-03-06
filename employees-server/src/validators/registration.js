const Joi = require("joi");
const { ErrorHandler } = require("../errorHandlers");

module.exports = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string()
      .min(3)
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const message = error.details[0].message;
    throw new ErrorHandler(400, message);
  }

  next();
};
