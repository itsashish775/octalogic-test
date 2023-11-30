const Booking = require("../models/Booking");
const User = require("../models/User");
const Vehicles = require("../models/Vehicles");

const userController = {
  // for listing al the user
  allUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      console.log(users);
      res
        .status(200)
        .json({ message: "All Registered User are here.", data: users });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },

  // for creating the user
  createUser: async (req, res) => {
    try {
      console.log(req.body);
      const { firstName, lastName, vehicleId, startDate, endDate } = req.body;
      const user = await User.create({
        firstName,
        lastName,
      });
      // console.log(user.id);
      await Vehicles.update(
        { availabilityStatus: 0 },
        {
          where: {
            id: vehicleId,
          },
        }
      );
      const booking = await Booking.create({
        userId: user.id,
        vehicleId: vehicleId,
        startDate,
        endDate,
      });
      // console.log("created SuccessFully", user);
      res.status(200).json({ message: "User Registered Successful." });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },
};
module.exports = userController;
