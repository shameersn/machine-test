const express = require("express");
const router = express.Router();

const { catchErrors } = require("../errorHandlers");
const {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controller/employee.controller");
const createEmployeeValidator = require("../validators/createEmployee");

router
  .get("/", catchErrors(getEmployees))
  .post("/", createEmployeeValidator, catchErrors(createEmployee))
  .put("/:employeeId", catchErrors(updateEmployee))
  .get("/:employeeId", catchErrors(getEmployee))
  .delete("/:employeeId", catchErrors(deleteEmployee));

module.exports = router;
