const Industry = require("../models/industryModel.js");

// 🔥 GET ALL INDUSTRIES (USER + ADMIN)
const getIndustries = async (req, res) => {
  try {
    // 🔹 Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // 🔹 Sorting
    const sortBy = req.query.sortBy || "order";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    const industries = await Industry.find()
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    if (industries.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No industries found",
      });
    }

    // 🔹 Total count
    const total = await Industry.countDocuments({ isActive: true });

    res.status(200).json({
      success: true,
      count: industries.length,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data: industries,
    });
  } catch (error) {
    console.error("Error in getIndustries:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// 🔥 GET SINGLE INDUSTRY
const getSingleIndustry = async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: industry,
    });
  } catch (error) {
    console.error("Error in getSingleIndustry:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// 🔥 CREATE INDUSTRY (ADMIN)
 const createIndustry = async (req, res) => {
  try {
    const { name, order } = req.body;

    // 🔹 Validation
    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Industry name is required",
      });
    }

    // 🔹 Duplicate check (case-insensitive)
    const existingIndustry = await Industry.findOne({
      name: { $regex: `^${name.trim()}$`, $options: "i" },
    });

    if (existingIndustry) {
      return res.status(400).json({
        success: false,
        message: "Industry already exists",
      });
    }

    const industry = await Industry.create({
      name: name.trim(),
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      message: "Industry created successfully",
      data: industry,
    });
  } catch (error) {
    console.error("Error in createIndustry:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// 🔥 PUT (FULL UPDATE)
 const updateIndustryPut = async (req, res) => {
  try {
    const { name, order } = req.body;

    // 🔹 Validation
    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Industry name is required for full update",
      });
    }

    const industry = await Industry.findByIdAndUpdate(
      req.params.id,
      {
        name: name.trim(),
        order: order || 0,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Industry updated (PUT)",
      data: industry,
    });
  } catch (error) {
    console.error("Error in updateIndustryPut:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 🔥 PATCH (PARTIAL UPDATE)
 const updateIndustryPatch = async (req, res) => {
  try {
    const updates = {};

    if (req.body.name) updates.name = req.body.name.trim();
    if (req.body.order !== undefined) updates.order = req.body.order;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    const industry = await Industry.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Industry updated (PATCH)",
      data: industry,
    });
  } catch (error) {
    console.error("Error in updateIndustryPatch:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 🔥 SOFT DELETE
 const deleteIndustry = async (req, res) => {
  try {
    const industry = await Industry.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Industry deleted (soft)",
    });
  } catch (error) {
    console.error("Error in deleteIndustry:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getIndustries,
  getSingleIndustry,
  createIndustry,
  updateIndustryPut,
  updateIndustryPatch,
  deleteIndustry,
};