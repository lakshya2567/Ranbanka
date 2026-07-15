// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// const teamRoutes = require("./routes/teamRoute.js");
// const serviceRoutes = require("./routes/serviceRoute.js");
// const contactRoutes = require("./routes/contactRoute.js");
// const authRoutes = require("./routes/authRoute.js");

// app.use("/api/team", teamRoutes);
// app.use("/api/services", serviceRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Backend is running...");
// });

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//     process.exit(1);
//   });
  

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
const teamRoutes = require("./routes/teamRoute.js");
const serviceRoutes = require("./routes/serviceRoute.js");
const contactRoutes = require("./routes/contactRoute.js");
const authRoutes = require("./routes/authRoute.js");
const galleryRoutes = require("./routes/galleryRoutes.js");

app.use("/api/team", teamRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);

// Optional: just a health check endpoint
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// ... mongoose connection and server start

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
  