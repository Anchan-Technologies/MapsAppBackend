const City = require("../models/City");

// Create a new city
exports.createCity = async (req, res) => {
  try {
    const city = new City(req.body);
    await city.save();
    res.status(201).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all cities
exports.getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single city by ID
exports.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a city by ID
exports.updateCity = async (req, res) => {
  try {
    const city = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a city by ID
exports.deleteCity = async (req, res) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);
    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json({ message: "City deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
