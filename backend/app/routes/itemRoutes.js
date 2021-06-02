const express = require('express');
const router = express.Router();

const item = require('../controllers/itemController');

router.get("/:id", item.byId);
router.get("/", item.allItems);

router.post("/update/:_id", item.updateItem);

module.exports = router;
