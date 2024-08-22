const POI = require("../models/poi");

// Create a new POI
exports.createPOI = async (req, res) => {
  try {
    const poi = new POI(req.body);
    await poi.save();
    res.status(201).json(poi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all POIs
exports.getPOIs = async (req, res) => {
  try {
    const pois = await POI.find().populate("city neighborhood");
    res.status(200).json(pois);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single POI by ID
exports.getPOIById = async (req, res) => {
  try {
    const poi = await POI.findById(req.params.id).populate("city neighborhood");
    if (!poi) {
      return res.status(404).json({ error: "POI not found" });
    }
    res.status(200).json(poi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a POI by ID
exports.updatePOI = async (req, res) => {
  try {
    const poi = await POI.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("city neighborhood");
    if (!poi) {
      return res.status(404).json({ error: "POI not found" });
    }
    res.status(200).json(poi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a POI by ID
exports.deletePOI = async (req, res) => {
  try {
    const poi = await POI.findByIdAndDelete(req.params.id);
    if (!poi) {
      return res.status(404).json({ error: "POI not found" });
    }
    res.status(200).json({ message: "POI deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
