const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Vehicles = require("./Vehicles");

const Booking = sequelize.define("Booking", {
  userId: {
    type: DataTypes.INTEGER,
  },
  vehicleId: {
    type: DataTypes.INTEGER,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true, // optional, to enforce that the value is a valid date
    },
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true, // optional, to enforce that the value is a valid date
    },
  },
  returnStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});
Booking.belongsTo(User, { foreignKey: "userId" });
Booking.belongsTo(Vehicles, { foreignKey: "vehicleId" });

module.exports = Booking;
