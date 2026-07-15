const mongoose = require("mongoose");
const Gallery = require("./models/GalleryModle"); // Ensure path is correct
require("dotenv").config();

const seedData = [
  {
    title: "Security Operations – Surveillance",
    text: "Advanced surveillance systems for 24/7 monitoring and threat detection.",
    image: "uploads/9.jpeg"  // Added "uploads/" prefix
  },
  {
    title: "Industrial Protection",
    text: "Dedicated security personnel safeguarding industrial facilities and assets.",
    image: "uploads/11.jpeg"
  },
  {
    title: "Event Management Security",
    text: "Professional crowd control and event safety management services.",
    image: "uploads/13.jpg"
  },
  {
    title: "Rapid Response Team",
    text: "Quick-response units trained for emergency situations and crisis management.",
    image: "uploads/15.jpeg"
  },
  {
    title: "Perimeter Security",
    text: "State-of-the-art perimeter protection systems and access control.",
    image: "uploads/17.jpeg"
  },
  {
    title: "Training & Drills",
    text: "Regular training sessions to maintain high readiness and professional skills.",
    image: "uploads/21.jpeg"
  },
  {
    title: "VIP Protection",
    text: "Close protection and executive security for high-profile individuals.",
    image: "uploads/22.jpeg"
  },
  {
    title: "Fire Safety & Prevention",
    text: "Comprehensive fire safety audits, equipment, and emergency protocols.",
    image: "uploads/23.jpeg"
  },
  {
    title: "Security Control Room",
    text: "Centralized monitoring hub coordinating all security operations.",
    image: "uploads/24.jpeg"
  },
  {
    title: "Patrol & Reconnaissance",
    text: "Regular patrols and reconnaissance to ensure site security and safety.",
    image: "uploads/25.jpeg"
  },
  {
    title: "Corporate Security",
    text: "Tailored security solutions for corporate offices and business environments.",
    image: "uploads/26.jpeg"
  },
  
  {
    "title": "Fire Extinguisher Demonstration",
    "text": "Practical demonstrations on the proper use of fire extinguishers, helping personnel respond effectively during fire emergencies.",
    "image": "uploads/securityAlert3.jpeg"
  },
  {
    "title": "Emergency Response Drills",
    "text": "Regular emergency drills are conducted to prepare security personnel for emergency situations.",
    "image": "uploads/securityAlert2.jpeg"
  },
  {
    "title": "Safety Awareness Program",
    "text": "Comprehensive safety awareness sessions focused on fire prevention and emergency preparedness.",
    "image": "uploads/securityAlert.jpeg"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await Gallery.deleteMany({});
    console.log("🗑️ Old data removed");

    await Gallery.insertMany(seedData);
    console.log("✅ Gallery seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDB();