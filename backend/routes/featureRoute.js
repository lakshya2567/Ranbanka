const express = require("express");

const {
  getAllFeatures,
  createFeature,
  updateFeature,
  patchFeature,
  deleteFeature,
} = require("../controllers/featureController.js");

const router = express.Router();

// ✅ USER + ADMIN
router.get("/getFeatures", getAllFeatures);

// 🔐 ADMIN ONLY
router.post("/createFeature", createFeature);
router.put("/fullUpdate/:id", updateFeature);
router.patch("/partialUpdate/:id", patchFeature);
router.delete("/deleteFeature/:id", deleteFeature);

module.exports = router;