const Neighborhood = require("../models/Neighborhood");

// Create a new neighborhood
exports.createNeighborhood = async (req, res) => {
  try {
    const neighborhood = new Neighborhood(req.body);
    await neighborhood.save();
    res.status(201).json(neighborhood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all neighborhoods
exports.getNeighborhoods = async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find().populate("city");
    res.status(200).json(neighborhoods);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single neighborhood by ID
exports.getNeighborhoodById = async (req, res) => {
  try {
    const neighborhood = await Neighborhood.findById(req.params.id).populate(
      "city"
    );
    if (!neighborhood) {
      return res.status(404).json({ error: "Neighborhood not found" });
    }
    res.status(200).json(neighborhood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a neighborhood by ID
exports.updateNeighborhood = async (req, res) => {
  try {
    const neighborhood = await Neighborhood.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("city");
    if (!neighborhood) {
      return res.status(404).json({ error: "Neighborhood not found" });
    }
    res.status(200).json(neighborhood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a neighborhood by ID
exports.deleteNeighborhood = async (req, res) => {
  try {
    const neighborhood = await Neighborhood.findByIdAndDelete(req.params.id);
    if (!neighborhood) {
      return res.status(404).json({ error: "Neighborhood not found" });
    }
    res.status(200).json({ message: "Neighborhood deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
