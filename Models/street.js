const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Street schema
const streetSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  length: {
    type: Number, // Length in meters or kilometers
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  neighborhood: {
    type: String,
    trim: true,
  },
  coordinates: [
    {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  ],
  type: {
    type: String,
    enum: ["residential", "commercial", "industrial", "highway", "other"],
    required: true,
  },
});

// Create the Street model
const Street = mongoose.model("Street", streetSchema);

module.exports = Street;
