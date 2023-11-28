const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3333;

// Require your database.js file to establish the MongoDB connection
const sequelize = require("./app/config/database");
// Middleware and routes setup
app.use(express.json());

// Define and use your routes
const routes = require("./app/routes");
app.use("/", routes);

// Start the server
sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
