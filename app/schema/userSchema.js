const { body } = require("express-validator");
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
  body("numberOfWheels")
    .notEmpty()
    .withMessage("Please Choose Number of Wheels"),
  body("bookedVahicle").notEmpty().withMessage("Please Choose a Vehicle."),
  body("startDate").isDate().withMessage("Date should be in YYYY-MM-DD"),
  body("endDate").isDate().withMessage("Date should be in YYYY-MM-DD"),
];
module.exports = { userSchema: schema };
