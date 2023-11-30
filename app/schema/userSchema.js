const { body } = require("express-validator");
// user schema defined which will be passed as schema for validation in the user Routes
const schema = [
  body("firstName")
    .notEmpty()
    .withMessage("First Name is Required")
    .matches(/^[a-zA-Z]*$/)
    .withMessage("only alphabated Allowed"),
  body("lastName")
    .notEmpty()
    .withMessage("Last Name is Required")
    .matches(/^[a-zA-Z]*$/)
    .withMessage("only alphabated Allowed"),
  body("vehicleId").notEmpty().withMessage("Please Choose a Vehicle Id."),
  body("startDate").isDate().withMessage("Date should be in YYYY-MM-DD"),
  body("endDate").isDate().withMessage("Date should be in YYYY-MM-DD"),
];
module.exports = { userSchema: schema };
