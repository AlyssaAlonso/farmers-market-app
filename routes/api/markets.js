const express = require('express');
const router = express.Router();
const marketsCtrl = require('../../controllers/api/markets');

// GET /api/markets
router.get('/', marketsCtrl.index);
// GET /api/markets/:id
router.get('/:id', marketsCtrl.show);

module.exports = router;
