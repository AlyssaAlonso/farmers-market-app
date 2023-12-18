const express = require("express");
const router = express.Router();
const vendorsCtrl = require("../../controllers/api/vendors");

// GET /api/vendors
router.get("/", vendorsCtrl.index);
// GET /api/vendors/:id
router.get("/:id", vendorsCtrl.show);

module.exports = router;
