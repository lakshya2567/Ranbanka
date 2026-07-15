const express = require("express");

const {
  getIndustries,
  getSingleIndustry,
  createIndustry,
  updateIndustryPut,
  updateIndustryPatch,
  deleteIndustry,
} = require("../controllers/industryController.js");

const router = express.Router();

// 👤 USER + ADMIN
router.get("/getIndustries", getIndustries);
router.get("/getSingleIndustry/:id", getSingleIndustry);

// 🛠️ ADMIN
router.post("/createIndustry", createIndustry);
router.put("/fullUpdate/:id", updateIndustryPut);
router.patch("/partialUpdate/:id", updateIndustryPatch);
router.delete("/deleteIndustry/:id", deleteIndustry);

module.exports = router;