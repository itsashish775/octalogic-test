// models/VehicleModels.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const VehicleTypes = require('./VehicleTypes');

const VehicleModels = sequelize.define('VehicleModels', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

VehicleModels.belongsTo(VehicleTypes, { foreignKey: 'vehicleTypeId' });

module.exports = VehicleModels;
