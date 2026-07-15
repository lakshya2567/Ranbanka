// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       minlength: [2, "Name must be at least 2 characters"],
//     },

//     phone: {
//       type: String,
//       required: [true, "Phone number is required"],
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       trim: true,
//       lowercase: true,
//     },

//     subject: {
//       type: String,
//       required: [true, "Subject is required"],
//       trim: true,
//     },

//     message: {
//       type: String,
//       required: [true, "Message is required"],
//       trim: true,
//       minlength: [10, "Message must be at least 10 characters"],
//     },

//     isRead: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// const Contact = mongoose.model("Contact", contactSchema);

// module.exports = Contact;

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return /^[0-9+\-\s()]{7,20}$/.test(value);
        },
        message: "Please enter a valid phone number",
      },
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Please enter a valid email address",
      },
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [150, "Subject cannot exceed 150 characters"],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
    },

    status: {
      type: String,
      enum: ["new", "seen", "resolved"],
      default: "new",
    },

    isActive: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });

// AUTO FILTER OUT SOFT-DELETED ENTRIES
contactSchema.pre("find", function () {
  this.where({ isActive: true });
});

contactSchema.pre("findOne", function () {
  this.where({ isActive: true });
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;