const User = require("../models/User");

const userController = {
  allUsers: async (req, res) => {
    const users = await User.findAll();
    console.log(users);
    res.json(users);
  },
  createUser: async (req, res) => {
    const user = await User.create({
      firstName: "Ashish",
      lastName: "Sharma",
      numberOfWheels: "2",
      bookedVahicle: "asdf",
      startDate: new Date("2023-11-07"),
      endDate: new Date("2023-11-25"),
    });
    console.log("created SuccessFully", user);
  },
};
module.exports = userController;
