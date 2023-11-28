// seed.js
require("dotenv").config({ path: "../../.env" });
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const TwoWheeler = require("./twoWheeler");
const FourWheeler = require("./fourWheeler");

const seed = async () => {
  try {
    // Sync the model with the database
    await sequelize.sync({ force: true });

    // Create sample users
    await TwoWheeler.bulkCreate([{ name: "cruiser" }, { name: "sports" }]);
    await FourWheeler.bulkCreate([
      { name: "hatchback" },
      { name: "suv" },
      { name: "sedan" },
    ]);

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
};

seed();
