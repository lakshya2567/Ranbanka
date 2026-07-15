const Gallery = require("../models/GalleryModle");
const fs = require("fs");
const path = require("path");

// Create a new gallery item (with image upload)
exports.createGallery = async (req, res) => {
  try {
    const { title, text } = req.body;
    const image = req.file ? req.file.path : null; // multer stores path

    if (!image) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const newItem = new Gallery({ title, text, image });
    await newItem.save();

    // Return full URL if needed
    const imageUrl = `${req.protocol}://${req.get("host")}/${image}`;
    res.status(201).json({
      success: true,
      data: { ...newItem._doc, imageUrl },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all gallery items (with image URL)
exports.getAllGalleries = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    const itemsWithUrl = items.map((item) => ({
      ...item._doc,
      imageUrl: `${req.protocol}://${req.get("host")}/${item.image}`,
    }));
    res.status(200).json({ success: true, data: itemsWithUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single gallery item by ID
exports.getGalleryById = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/${item.image}`;
    res.status(200).json({ success: true, data: { ...item._doc, imageUrl } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update gallery item (with optional image update)
exports.updateGallery = async (req, res) => {
  try {
    const { title, text } = req.body;
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // If new image uploaded, delete old one
    if (req.file) {
      // Delete old image file
      const oldImagePath = path.join(__dirname, "..", item.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      item.image = req.file.path;
    }

    item.title = title || item.title;
    item.text = text || item.text;
    await item.save();

    const imageUrl = `${req.protocol}://${req.get("host")}/${item.image}`;
    res.status(200).json({
      success: true,
      data: { ...item._doc, imageUrl },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete gallery item (and remove image file)
exports.deleteGallery = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Delete image file
    const imagePath = path.join(__dirname, "..", item.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await item.deleteOne();
    res.status(200).json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};