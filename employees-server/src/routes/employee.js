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

router
  .get("/", catchErrors(getEmployees))
  .post("/", catchErrors(createEmployee))
  .put("/:employeeId", catchErrors(updateEmployee))
  .get("/:employeeId", catchErrors(getEmployee))
  .delete("/:employeeId", catchErrors(deleteEmployee));

module.exports = router;
