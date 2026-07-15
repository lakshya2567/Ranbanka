const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); // your multer config
const {
  createGallery,
  getAllGalleries,
  getGalleryById,
  updateGallery,
  deleteGallery,
} = require("../controllers/galleryController");

// Routes
router.post("/", upload.single("image"), createGallery);
router.get("/", getAllGalleries);
router.get("/:id", getGalleryById);
router.put("/:id", upload.single("image"), updateGallery);
router.delete("/:id", deleteGallery);

module.exports = router;