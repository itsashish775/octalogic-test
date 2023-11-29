const VehicleModels = require("../models/VehicleModels");
const VehicleTypes = require("../models/VehicleTypes");
const FourWheeler = require("../models/fourWheeler");
const TwoWheeler = require("../models/twoWheeler");

const staticDataController = {
  // for listing all the two wheeler list.
  twoWheelerList: async (req, res) => {
    try {
      const twoWheelers = await TwoWheeler.findAll();
      console.log(JSON.stringify({ twoWheelers }, null, 2));
      res.status(200).json({ message: "All Two Wheelers", data: twoWheelers });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },

  // for listing all the four wheeler list.
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
  fourWheelerList: async (req, res) => {
    try {
      const fourWheelers = await FourWheeler.findAll();
      console.log(JSON.stringify({ fourWheelers }, null, 2));
      res
        .status(200)
        .json({ message: "All Four Wheelers", data: fourWheelers });
    } catch (error) {
      res.status(400).json({
        message: "Some Error came between the execution",
        error: error,
      });
    }
  },
};
module.exports = staticDataController;
