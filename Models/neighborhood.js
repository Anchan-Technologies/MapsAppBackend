const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  location: {
    type: {
      type: String, // The type of the location, e.g., 'Polygon'
      enum: ["Polygon"],
      required: true,
    },
    coordinates: {
      type: [[[Number]]], // Multi-dimensional array for Polygon [[lng, lat], [lng, lat], ...]
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);

module.exports = Neighborhood;
