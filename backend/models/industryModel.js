const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Industry name is required"],
      trim: true,
      unique: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
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

// 🔥 Indexes
industrySchema.index({ isActive: 1 });

// 🔥 Auto filter inactive industries
industrySchema.pre(/^find/, function () {
  this.find({ isActive: true });
});

const Industry = mongoose.model("Industry", industrySchema);

module.exports = Industry;