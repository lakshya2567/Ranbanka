const Offer = require("../models/offerModel.js");

// ===============================
// ✅ GET ALL OFFERS (USER + ADMIN)
// ===============================
const getOffers = async (req, res) => {
try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const sortBy = req.query.sortBy || "order";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    const skip = (page - 1) * limit;

    const offers = await Offer.find()
    .populate("service") // 🔥 linked service
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);

    if (offers.length === 0) {
    return res.status(404).json({
        success: false,
        message: "No offers found",
    });
    }

    const total = await Offer.countDocuments({ isActive: true });

    res.status(200).json({
    success: true,
    total,
    page,
    totalPages: Math.ceil(total / limit),
    count: offers.length,
    data: offers,
    });
} catch (error) {
    console.error("Error in getOffers:", error);

    res.status(500).json({
    success: false,
    message: "Internal Server Error",
    });
}
};

// ===============================
// ✅ CREATE OFFER (ADMIN)
// ===============================
const createOffer = async (req, res) => {
try {
    const { title, description, image, service, order } = req.body;

    // 🔹 Validation
    if (!title?.trim() || !description?.trim() || !image?.trim()) {
    return res.status(400).json({
        success: false,
        message: "All fields are required",
    });
    }

    // 🔹 Duplicate check
    const existingOffer = await Offer.findOne({
    title: { $regex: `^${title.trim()}$`, $options: "i" },
    });

    if (existingOffer) {
    return res.status(400).json({
        success: false,
        message: "Offer already exists",
    });
    }

    const offer = await Offer.create({
    title: title.trim(),
    description: description.trim(),
    image: image.trim(),
    service: service || null,
    order: order || 0,
    });

    res.status(201).json({
    success: true,
    message: "Offer created successfully",
    data: offer,
    });
} catch (error) {
    console.error("Error in createOffer:", error);

    res.status(500).json({
    success: false,
    message: "Internal Server Error",
    });
}
};

// ===============================
// ✅ PUT (FULL UPDATE)
// ===============================
const updateOfferPut = async (req, res) => {
try {
    const { title, description, image, service, order } = req.body;

    if (!title?.trim() || !description?.trim() || !image?.trim()) {
    return res.status(400).json({
        success: false,
        message: "All fields are required for full update",
    });
    }

    const offer = await Offer.findByIdAndUpdate(
    req.params.id,
    {
        title: title.trim(),
        description: description.trim(),
        image: image.trim(),
        service: service || null,
        order: order || 0,
    },
    {
        new: true,
        runValidators: true,
    },
    );

    if (!offer) {
    return res.status(404).json({
        success: false,
        message: "Offer not found",
    });
    }

    res.status(200).json({
    success: true,
    message: "Offer updated (PUT)",
    data: offer,
    });
} catch (error) {
    console.error("Error in updateOfferPut:", error);

    res.status(400).json({
    success: false,
    message: error.message,
    });
}
};

// ===============================
// ✅ PATCH (PARTIAL UPDATE)
// ===============================
const updateOfferPatch = async (req, res) => {
try {
    const updates = {};

    if (req.body.title) updates.title = req.body.title.trim();
    if (req.body.description) updates.description = req.body.description.trim();
    if (req.body.image) updates.image = req.body.image.trim();
    if (req.body.service !== undefined) updates.service = req.body.service;
    if (req.body.order !== undefined) updates.order = req.body.order;

    if (Object.keys(updates).length === 0) {
    return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
    });
    }

    const offer = await Offer.findByIdAndUpdate(
    req.params.id,
    { $set: updates },
    {
        new: true,
        runValidators: true,
    },
    );

    if (!offer) {
    return res.status(404).json({
        success: false,
        message: "Offer not found",
    });
    }

    res.status(200).json({
    success: true,
    message: "Offer updated (PATCH)",
    data: offer,
    });
} catch (error) {
    console.error("Error in updateOfferPatch:", error);

    res.status(400).json({
    success: false,
    message: error.message,
    });
}
};

// ===============================
// ✅ DELETE (SOFT DELETE)
// ===============================
const deleteOffer = async (req, res) => {
try {
    const offer = await Offer.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true },
    );

    if (!offer) {
    return res.status(404).json({
        success: false,
        message: "Offer not found",
    });
    }

    res.status(200).json({
    success: true,
    message: "Offer deleted (soft)",
    });
} catch (error) {
    console.error("Error in deleteOffer:", error);

    res.status(500).json({
    success: false,
    message: "Internal Server Error",
    });
}
};

module.exports = {
getOffers,
createOffer,
updateOfferPut,
updateOfferPatch,
deleteOffer,
};