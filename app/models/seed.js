// seed.js
// seeding file in for predata load to db
require("dotenv").config();
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const VehicleType = require("./VehicleTypes");
const VehicleModels = require("./VehicleModels");
const Vehicles = require("./Vehicles");

const seed = async () => {
  try {
    // Sync the model with the database
    await sequelize.sync({ force: true });

    // Create sample users
    await VehicleType.bulkCreate([
      { name: "2 Wheeler" },
      { name: "4 Wheeler" },
    ]);
    await VehicleModels.bulkCreate([
      { name: "cruiser", vehicleTypeId: "1" },
      { name: "sports", vehicleTypeId: "1" },
      { name: "hatchback", vehicleTypeId: "2" },
      { name: "suv", vehicleTypeId: "2" },
      { name: "sedan", vehicleTypeId: "2" },
    ]);
    await Vehicles.bulkCreate([
      { vehicleName: "Retrospec Chatham", modelId: "1" },
      { vehicleName: "Sixthreezero EVRYjourney", modelId: "1" },
      { vehicleName: "Electra Loft 7D", modelId: "1" },
      { vehicleName: "Yamaha YZF-R7", modelId: "2" },
      { vehicleName: "Aprilia RS660", modelId: "2" },
      { vehicleName: "Ducati Panigale V4S", modelId: "2" },
      { vehicleName: "Honda Civic Type R", modelId: "3" },
      { vehicleName: "Hyundai Elantra N", modelId: "3" },
      { vehicleName: "Toyota GR Corolla", modelId: "3" },
      { vehicleName: "Honda CR-V", modelId: "4" },
      { vehicleName: "Ford Expedition", modelId: "4" },
      { vehicleName: "Kia Telluride", modelId: "4" },
      { vehicleName: "Honda Civic", modelId: "5" },
      { vehicleName: "Hyundai Sonata", modelId: "5" },
      { vehicleName: "Toyota Crown", modelId: "5" },
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
