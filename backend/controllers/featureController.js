const Feature = require("../models/featureModel.js");

// ===============================
// ✅ GET ALL FEATURES (USER + ADMIN)
// ===============================

const getAllFeatures = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const sortBy = req.query.sortBy || "order";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    const skip = (page - 1) * limit;

    const features = await Feature.find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);

    const total = await Feature.countDocuments();

    res.status(200).json({
      success: true,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: features,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching features",
      error: error.message,
    });
  }
};

// ===============================
// ✅ CREATE FEATURE (ADMIN)
// ===============================
const createFeature = async (req, res) => {
  try {
    const { title, desc, icon, order } = req.body;

    if (!title?.trim() || !desc?.trim() || !icon?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🔥 Duplicate check (title same)
    const existingFeature = await Feature.findOne({
      title: { $regex: `^${title.trim()}$`, $options: "i" },
    });

    if (existingFeature) {
      return res.status(400).json({
        success: false,
        message: "Feature already exists",
      });
    }

    const feature = await Feature.create({
      title: title.trim(),
      desc: desc.trim(),
      icon: icon.trim(),
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      message: "Feature created successfully",
      data: feature,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating feature",
      error: error.message,
    });
  }
};

// ===============================
// ✅ UPDATE FEATURE (PUT - FULL)
// ===============================
const updateFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, icon, order } = req.body;

    if (!title?.trim() || !desc?.trim() || !icon?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required for full update",
      });
    }

    const feature = await Feature.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        desc: desc.trim(),
        icon: icon.trim(),
        order: order || 0,
      },
      { new: true, runValidators: true },
    );

    if (!feature) {
      return res.status(404).json({
        success: false,
        message: "Feature not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Feature updated successfully",
      data: feature,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating feature",
      error: error.message,
    });
  }
};

// ===============================
// ✅ PATCH FEATURE (PARTIAL)
// ===============================
const patchFeature = async (req, res) => {
  try {
    const { id } = req.params;

    const updates = {};

    if (req.body.title) updates.title = req.body.title.trim();
    if (req.body.desc) updates.desc = req.body.desc.trim();
    if (req.body.icon) updates.icon = req.body.icon.trim();
    if (req.body.order !== undefined) updates.order = req.body.order;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided to update",
      });
    }

    const feature = await Feature.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!feature) {
      return res.status(404).json({
        success: false,
        message: "Feature not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Feature updated successfully",
      data: feature,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating feature",
      error: error.message,
    });
  }
};

// ===============================
// ✅ DELETE FEATURE (SOFT DELETE)
// ===============================
const deleteFeature = async (req, res) => {
  try {
    const { id } = req.params;

    const feature = await Feature.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true },
    );

    if (!feature) {
      return res.status(404).json({
        success: false,
        message: "Feature not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Feature deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting feature",
      error: error.message,
    });
  }
};

module.exports = {
  getAllFeatures,
  createFeature,
  updateFeature,
  patchFeature,
  deleteFeature,
};