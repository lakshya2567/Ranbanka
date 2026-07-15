const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters."],
      maxlength: [200, "Name cannot exceed 200 characters."],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      maxlength: [100, "Location cannot exceed 100 characters"],
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

// 🔥 Indexes (performance + search)
clientSchema.index({ name: 1 });
clientSchema.index({ location: 1 });
clientSchema.index({ isActive: 1 });

// 🔥 Auto filter inactive clients
clientSchema.pre(/^find/, function () {
  this.find({ isActive: true });
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;