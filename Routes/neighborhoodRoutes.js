const express = require("express");
const neighborhoodController = require("../Controllers/neighborhoodController");

const router = express.Router();

router.post("/", neighborhoodController.createNeighborhood);
router.get("/", neighborhoodController.getNeighborhoods);
router.get("/:id", neighborhoodController.getNeighborhoodById);
router.put("/:id", neighborhoodController.updateNeighborhood);
router.delete("/:id", neighborhoodController.deleteNeighborhood);

module.exports = router;
