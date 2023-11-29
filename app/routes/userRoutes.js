const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const staticDataController = require("../controllers/staticDataController");
const { userSchema } = require("../schema/userSchema");
const {
  userSchemaValidation,
} = require("../middleware/schemaValidator/userSchemaValidation");

router.get("/users", userController.allUsers);
router.post(
  "/createUser",
  userSchema,
  userSchemaValidation,
  userController.createUser
);
router.get("/twoWheelerList", staticDataController.twoWheelerList);
// get Vehicle Types API for the FrontEnd User
router.get("/vehicleTypes", staticDataController.getvehicleTypes);
router.get("/fourWheelerList", staticDataController.fourWheelerList);

module.exports = router;
