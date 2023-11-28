// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FourWheeler = sequelize.define("fourWheeler", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = FourWheeler;
