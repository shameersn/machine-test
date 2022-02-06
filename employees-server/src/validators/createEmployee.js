const Joi = require("joi");
const { ErrorHandler } = require("../errorHandlers");

module.exports = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string().required(),
    employeeId: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    address: Joi.string().required(),
    age: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const message = error.details[0].message;
    throw new ErrorHandler(400, message);
  }

  next();
};
