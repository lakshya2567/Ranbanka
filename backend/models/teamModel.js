const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
      minlength: [2, "Role must be at least 2 characters"],
      maxlength: [100, "Role cannot exceed 100 characters"],
    },

    img: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|avif|gif|svg))$/i.test(
            value,
          );
        },
        message: "Please enter a valid image URL",
      },
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
teamSchema.index({ isActive: 1 });
teamSchema.index({ order: 1 });

// 🔥 Auto filter inactive
teamSchema.pre(/^find/, function () {
  this.find({ isActive: true });
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
