const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const staticDataController = require("../controllers/staticDataController");

router.get("/users", userController.allUsers);
router.get("/createUser", userController.createUser);
router.get("/twoWheelerList", staticDataController.twoWheelerList);
router.get("/fourWheelerList", staticDataController.fourWheelerList);

module.exports = router;
