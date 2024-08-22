const express = require("express");
const poiController = require("../Controllers/poiController");

const router = express.Router();

router.post("/", poiController.createPOI);
router.get("/", poiController.getPOIs);
router.get("/:id", poiController.getPOIById);
router.put("/:id", poiController.updatePOI);
router.delete("/:id", poiController.deletePOI);

module.exports = router;
