const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Feature title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    desc: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
    },

    icon: {
      type: String,
      required: [true, "Icon is required"],
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// 🔥 Indexes (performance)
featureSchema.index({ isActive: 1 });
featureSchema.index({ order: 1 });

// 🔥 Auto filter inactive features
featureSchema.pre(/^find/, function () {
  this.find({ isActive: true });
});

const Feature = mongoose.model("Feature", featureSchema);

module.exports = Feature;