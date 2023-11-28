// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TwoWheeler = sequelize.define("twoWheeler", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TwoWheeler;
