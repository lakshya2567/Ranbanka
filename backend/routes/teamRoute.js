const express = require("express");

const {
  getTeam,
  createTeamMember,
  updateTeamPut,
  updateTeamPatch,
  deleteTeamMember,
} = require("../controllers/teamController.js");

const router = express.Router();

// 👤 USER + ADMIN
router.get("/getTeam", getTeam);

// 🔐 ADMIN
router.post("/createTeam", createTeamMember);
router.put("/fullUpdate/:id", updateTeamPut);
router.patch("/partialUpdate/:id", updateTeamPatch);
router.delete("/deleteMember/:id", deleteTeamMember);

module.exports = router;