const express = require("express");
const {
  createContact,
  getContacts,
  getSingleContact,
  updateContactStatus,
  deleteContactSoft,
  deleteContactHard,
} = require("../controllers/contactController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

// PUBLIC ROUTE — used by the Contact form
router.post("/createContact", createContact);

// ADMIN ROUTES — protected
router.get("/getContacts", protect, getContacts);
router.get("/getContact/:id", protect, getSingleContact);
router.patch("/updateStatus/:id", protect, updateContactStatus);
router.delete("/softDeleteContact/:id", protect, deleteContactSoft);
router.delete("/hardDeleteContact/:id/hard", protect, deleteContactHard);

module.exports = router;