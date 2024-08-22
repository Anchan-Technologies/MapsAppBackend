const Street = require("../Models/street");

// Controller for creating a new street
exports.createStreet = async (req, res) => {
  try {
    const street = new Street(req.body);
    await street.save();
    res.status(201).json(street);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Controller for getting all streets
exports.getAllStreets = async (req, res) => {
  try {
    const streets = await Street.find();
    res.status(200).json(streets);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Controller for getting a street by ID
exports.getStreetById = async (req, res) => {
  try {
    const street = await Street.findById(req.params.id);
    if (!street) {
      return res.status(404).json({ message: "Street not found" });
    }
    res.status(200).json(street);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Controller for updating a street by ID
exports.updateStreet = async (req, res) => {
  try {
    const street = await Street.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!street) {
      return res.status(404).json({ message: "Street not found" });
    }
    res.status(200).json(street);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Controller for deleting a street by ID
exports.deleteStreet = async (req, res) => {
  try {
    const street = await Street.findByIdAndDelete(req.params.id);
    if (!street) {
      return res.status(404).json({ message: "Street not found" });
    }
    res.status(200).json({ message: "Street deleted successfully" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
