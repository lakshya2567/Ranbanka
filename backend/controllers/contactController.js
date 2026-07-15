const Contact = require("../models/contactModel.js");

// CREATE NEW CONTACT MESSAGE (PUBLIC — from the form)
const createContact = async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (
      !name?.trim() ||
      !phone?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been received. We will contact you soon.",
      data: contact,
    });
  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL CONTACT MESSAGES (ADMIN)
const getContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status; // optional filter: new/seen/resolved

    const filter = status ? { status } : {};

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    if (contacts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No contact messages found",
      });
    }

    const total = await Contact.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data: contacts,
    });
  } catch (error) {
    console.error("GET CONTACTS ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE CONTACT MESSAGE (ADMIN)
const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("GET SINGLE CONTACT ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE STATUS (ADMIN) — e.g. mark as "seen" or "resolved"
const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["new", "seen", "resolved"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be one of: new, seen, resolved",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated",
      data: contact,
    });
  } catch (error) {
    console.error("UPDATE CONTACT STATUS ERROR:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// SOFT DELETE (ADMIN)
const deleteContactSoft = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact message soft deleted",
    });
  } catch (error) {
    console.error("SOFT DELETE CONTACT ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// HARD DELETE (ADMIN)
const deleteContactHard = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact message permanently deleted",
    });
  } catch (error) {
    console.error("HARD DELETE CONTACT ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createContact,
  getContacts,
  getSingleContact,
  updateContactStatus,
  deleteContactSoft,
  deleteContactHard,
};