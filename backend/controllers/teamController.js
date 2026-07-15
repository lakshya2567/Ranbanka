const Team = require("../models/teamModel.js");

// ===============================
// ✅ GET ALL TEAM MEMBERS
// ===============================
const getTeam = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const sortBy = req.query.sortBy || "order";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    const team = await Team.find()
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    if (team.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No team members found",
      });
    }

    const total = await Team.countDocuments({ isActive: true });

    res.status(200).json({
      success: true,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      count: team.length,
      data: team,
    });
  } catch (error) {
    console.error("Error in getTeam:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ===============================
// ✅ CREATE TEAM MEMBER (ADMIN)
// ===============================
const createTeamMember = async (req, res) => {
  try {
    const { name, role, img, order } = req.body;

    if (!name?.trim() || !role?.trim() || !img?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const member = await Team.create({
      name: name.trim(),
      role: role.trim(),
      img: img.trim(),
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      message: "Team member added",
      data: member,
    });
  } catch (error) {
    console.error("Error in createTeamMember:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ===============================
// ✅ PUT (FULL UPDATE)
// ===============================
const updateTeamPut = async (req, res) => {
  try {
    const { name, role, img, order } = req.body;

    if (!name?.trim() || !role?.trim() || !img?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields required for full update",
      });
    }

    const member = await Team.findByIdAndUpdate(
      req.params.id,
      {
        name: name.trim(),
        role: role.trim(),
        img: img.trim(),
        order: order || 0,
      },
      { new: true, runValidators: true },
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member updated",
      data: member,
    });
  } catch (error) {
    console.error("Error in updateTeamPut:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// ✅ PATCH (PARTIAL UPDATE)
// ===============================
const updateTeamPatch = async (req, res) => {
  try {
    const updates = {};

    if (req.body.name) updates.name = req.body.name.trim();
    if (req.body.role) updates.role = req.body.role.trim();
    if (req.body.img) updates.img = req.body.img.trim();
    if (req.body.order !== undefined) updates.order = req.body.order;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided",
      });
    }

    const member = await Team.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true },
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member updated",
      data: member,
    });
  } catch (error) {
    console.error("Error in updateTeamPatch:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// ✅ DELETE (SOFT DELETE)
// ===============================
const deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member deleted",
    });
  } catch (error) {
    console.error("Error in deleteTeamMember:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getTeam,
  createTeamMember,
  updateTeamPut,
  updateTeamPatch,
  deleteTeamMember,
};