const express = require("express");
const router = express.Router();
const streetController = require("../Controllers/streetController");

// Endpoint to create a new street
router.post("/street/create", streetController.createStreet);

// Endpoint to get all streets
router.get("/streets", streetController.getAllStreets);

// Endpoint to get a street by ID
router.get("/streets/:id", streetController.getStreetById);

// Endpoint to update a street by ID
router.put("/streets/:id", streetController.updateStreet);

// Endpoint to delete a street by ID
router.delete("/streets/:id", streetController.deleteStreet);

module.exports = router;
