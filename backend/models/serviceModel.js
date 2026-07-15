const mongoose = require("mongoose");
const slugify = require("slugify");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Service title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    desc: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
    },

    img: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|avif|gif|svg))(\?.*)?$/i.test(
            value
          );
        },
        message: "Please enter a valid image URL",
      },
    },

    isActive: {
      type: Boolean,
      default: true,
      select: false,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

serviceSchema.index({ isActive: 1 });

// SLUG GENERATION
serviceSchema.pre("save", function () {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    });
  }
});

// AUTO FILTER INACTIVE ON FIND QUERIES
serviceSchema.pre("find", function () {
  this.where({ isActive: true });
});

serviceSchema.pre("findOne", function () {
  this.where({ isActive: true });
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;