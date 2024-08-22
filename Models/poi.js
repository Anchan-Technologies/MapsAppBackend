const mongoose = require("mongoose");

const poiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  neighborhood: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Neighborhood",
  },
  location: {
    type: {
      type: String, // The type of the location, e.g., 'Point'
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // Array of coordinates [longitude, latitude]
      required: true,
    },
  },
  type: {
    type: String,
    enum: ["Park", "Landmark", "Restaurant", "Other"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const POI = mongoose.model("POI", poiSchema);

module.exports = POI;
