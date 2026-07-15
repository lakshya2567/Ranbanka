const express = require("express");
const {
  getOffers,
  createOffer,
  updateOfferPut,
  updateOfferPatch,
  deleteOffer,
} = require("../controllers/offerController.js");

const router = express.Router();

// 👤 USER + ADMIN
router.get("/getOffers", getOffers);

// 🔐 ADMIN ONLY
router.post("/createOffer", createOffer);
router.put("/fullUpdate/:id", updateOfferPut);
router.patch("/partialUpdate/:id", updateOfferPatch);
router.delete("/deleteOffer/:id", deleteOffer);

module.exports = router;