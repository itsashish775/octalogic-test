const Booking = require("../models/Booking");
const VehicleModels = require("../models/VehicleModels");
const VehicleTypes = require("../models/VehicleTypes");
const Vehicles = require("../models/Vehicles");

const staticDataController = {
  // api for the vehicle when a Model is selected if vehicle is available.
  getVehicles: async (req, res) => {
    try {
      console.log(req.params);
      const vehicleTypes = await Vehicles.findAll({
        where: {
          modelId: req.params.modelId,
          availabilityStatus: true,
        },
      });
      res
        .status(200)
        .json({ message: "Vehicle Type Fetched", data: vehicleTypes });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },

  // api for the vehicle model when a vehicletype is selected.
  getVehicleModels: async (req, res) => {
    try {
      console.log(req.params);
      const vehicleTypes = await VehicleModels.findAll({
        where: {
          vehicleTypeId: req.params.vehicleTypeId,
        },
      });
      res
        .status(200)
        .json({ message: "Vehicle Type Fetched", data: vehicleTypes });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },
  // for listing of all the vehicle Types for front-end User.
  getvehicleTypes: async (req, res) => {
    try {
      const vehicleTypes = await VehicleTypes.findAll();
      res
        .status(200)
        .json({ message: "Vehicle Type Fetched", data: vehicleTypes });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },

  // booking return for the vehicle
  returnBooking: async (req, res) => {
    try {
      await Booking.update(
        { returnStatus: 1 },
        {
          where: {
            id: req.params.bookingId,
          },
        }
      );
      const booking = await Booking.findOne({
        where: {
          id: req.params.bookingId,
        },
      });
      await Vehicles.update(
        { availabilityStatus: 1 },
        {
          where: {
            id: booking.vehicleId,
          },
        }
      );
      res.status(200).json({ message: "Vehicle Return Successfully" });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },
};
module.exports = staticDataController;
