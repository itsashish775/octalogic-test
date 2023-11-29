// models/VehicleTypes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VehicleTypes = sequelize.define('VehicleTypes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = VehicleTypes;
