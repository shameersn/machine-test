const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const employeeRoute = require("./employee");
const {isAuthenticated} = require("../middleWares");
router.use("/auth", authRouter);
router.use("/employee", isAuthenticated, employeeRoute);

module.exports = router;
