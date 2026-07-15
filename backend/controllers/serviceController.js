const Service = require("../models/serviceModel.js");

// GET ALL SERVICES
const getServices = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const sortBy = req.query.sortBy || "order";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    const services = await Service.find()
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    if (services.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No services found",
      });
    }

    const total = await Service.countDocuments();

    res.status(200).json({
      success: true,
      count: services.length,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data: services,
    });
  } catch (error) {
    console.error("GET SERVICES ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE SERVICE
const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error("GET SINGLE SERVICE ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE SERVICE
const createService = async (req, res) => {
  try {
    const { title, desc, img, order } = req.body;

    if (!title?.trim() || !desc?.trim() || !img?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingService = await Service.findOne({
      title: { $regex: `^${title.trim()}$`, $options: "i" },
    });

    if (existingService) {
      return res.status(400).json({
        success: false,
        message: "Service already exists",
      });
    }

    const service = await Service.create({
      title: title.trim(),
      desc: desc.trim(),
      img: img.trim(),
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    console.error("CREATE SERVICE ERROR:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "A service with a similar title already exists",
      });
    }

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

// PUT (FULL UPDATE)
const updateServicePut = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service updated (PUT)",
      data: service,
    });
  } catch (error) {
    console.error("UPDATE SERVICE (PUT) ERROR:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// PATCH (PARTIAL UPDATE)
const updateServicePatch = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service updated (PATCH)",
      data: service,
    });
  } catch (error) {
    console.error("UPDATE SERVICE (PATCH) ERROR:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// SOFT DELETE
const deleteServiceSoft = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service soft deleted",
    });
  } catch (error) {
    console.error("SOFT DELETE ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// HARD DELETE
const deleteServiceHard = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service permanently deleted",
    });
  } catch (error) {
    console.error("HARD DELETE ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getServices,
  getSingleService,
  createService,
  updateServicePut,
  updateServicePatch,
  deleteServiceSoft,
  deleteServiceHard,
};