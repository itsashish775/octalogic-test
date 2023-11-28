const User = require("../models/User");
const FourWheeler = require("../models/fourWheeler");
const TwoWheeler = require("../models/twoWheeler");

const staticDataController = {
  twoWheelerList: async (req, res) => {
    const twoWheelers = await TwoWheeler.findAll();
    console.log(JSON.stringify({ twoWheelers }, null, 2));
    res.json(twoWheelers);
  },
  fourWheelerList: async (req, res) => {
    const fourWheelers = await FourWheeler.findAll();
    console.log(JSON.stringify({ fourWheelers }, null, 2));
    res.json(fourWheelers);
  },
};
module.exports = staticDataController;
