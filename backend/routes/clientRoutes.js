const express = require("express");

const {
  getClients,
  createClient,
  updateClientPut,
  updateClientPatch,
  deleteClientSoft,
  deleteClientHard
} = require("../controllers/clientController.js");

const router = express.Router();

// 👤 USER + ADMIN
router.get("/getClients", getClients);

// 🛠️ ADMIN
router.post("/createClient", createClient);
router.put("/fullUpdate/:id", updateClientPut);
router.patch("/partialUpdate/:id", updateClientPatch);
router.delete("/softDelete/:id", deleteClientSoft);
router.delete("/hardDelete/:id", deleteClientHard);

module.exports = router;