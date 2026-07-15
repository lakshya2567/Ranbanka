const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    text: {
      type: String,
      required: [true, "Text is required"],
      trim: true,
    },
    image: {
      type: String, // stores the file path (e.g., "uploads/filename.jpg")
      required: [true, "Image is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);