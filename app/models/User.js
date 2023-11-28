const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  numberOfWheels: {
    type: DataTypes.ENUM("2", "4"), // Use string values here
  },
  bookedVahicle: {
    type: DataTypes.STRING,
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
});

module.exports = User;
