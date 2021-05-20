const express = require('express');
const router = express.Router();

const item = require('../controllers/itemController');

router.get("/:id", item.byId);
router.get("/", item.allItems);

module.exports = router;
