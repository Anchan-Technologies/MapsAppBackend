const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: {
      type: String, // The type of the location, e.g., 'Point'
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // Array of numbers [longitude, latitude]
      required: true,
    },
  },
  boundingBox: {
    type: [[Number]], // Array of arrays for a polygon [[lng, lat], [lng, lat], ...]
  },
  population: {
    type: Number,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const City = mongoose.model("City", citySchema);

module.exports = City;
