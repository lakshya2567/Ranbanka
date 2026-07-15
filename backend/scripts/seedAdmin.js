// const mongoose = require("mongoose");
// require("dotenv").config();
// const Admin = require("../models/adminModel.js");

// const seedAdmin = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     const existing = await Admin.findOne({ email: "rajkumawat111@gmail.com" });

//     if (existing) {
//       console.log("⚠️ Admin already exists:", existing.email);
//       process.exit(0);
//     }

//     const admin = await Admin.create({
//       name: "Raj Kumawat",
//       email: "123pgis@gmail.com",
//       password: "pgis123@",
//     });

//     console.log("✅ Admin created:", admin.email);
//     process.exit(0);
//   } catch (error) {
//     console.error("❌ Seed error:", error);
//     process.exit(1);
//   }
// };

// seedAdmin();