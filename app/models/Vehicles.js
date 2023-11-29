// models/Vehicles.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const VehicleModels = require("./VehicleModels");

const Vehicles = sequelize.define("Vehicles", {
  vehicleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availabilityStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  // Add other attributes as needed
});

Vehicles.belongsTo(VehicleModels, { foreignKey: "modelId" });

module.exports = Vehicles;
