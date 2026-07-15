const mongoose = require("mongoose");
require("./serviceModel.js");

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Offer title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
    },

    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
      validate: {
        validator: function (value) {
        //   return /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|avif|gif|svg))$/i.test(
        //     value,
        //   );

        return /^(https?:\/\/.*)$/i.test(value);
        },
        message: "Please enter a valid image URL",
      },
    },

    // 🔥 OPTIONAL (future ke liye powerful)
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
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
offerSchema.index({ isActive: 1 });
offerSchema.index({ order: 1 });

// 🔥 Auto filter inactive offers
offerSchema.pre(/^find/, function () {
  this.find({ isActive: true });
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;