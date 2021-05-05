const express = require('express');
const router = express.Router();

const item = require('../controllers/itemController');

router.get("/", item.byCategory);

module.exports = router;
