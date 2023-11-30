const express = require("express");
const User = require("../models/User");
const router = express.Router();
const userRoutes = require("./userRoutes");


router.use("/", userRoutes);

module.exports = router;
