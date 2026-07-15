const express = require("express");
const {
  getServices,
  getSingleService,
  createService,
  updateServicePut,
  updateServicePatch,
  deleteServiceSoft,
  deleteServiceHard,
} = require("../controllers/serviceController.js");

const router = express.Router();

router.get("/getServices", getServices);
router.get("/getService/:id", getSingleService);

router.post("/createService", createService);
router.put("/fullUpdate/:id", updateServicePut);
router.patch("/partialUpdate/:id", updateServicePatch);
router.delete("/softDeleteService/:id", deleteServiceSoft);
router.delete("/hardDeleteService/:id/hard", deleteServiceHard);

module.exports = router;