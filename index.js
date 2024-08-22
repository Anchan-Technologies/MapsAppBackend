const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

require("dotenv").config();
// Importing Of Routes Goes Here:
const streetRoutes = require("./Routes/streetRoutes");

app.use(bodyParser.json());

// Routes Goes Here:
app.use("/api", streetRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(process.env.MONGODB_SECRET_KEY)
  .then((result) => {
    console.log("db connected, listing to 8080");
    app.listen(8080);
  })
  .catch((err) => console.log(err));
