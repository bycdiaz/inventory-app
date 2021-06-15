const express = require('express');
const router = express.Router();

const category = require('../controllers/categoryController');


router.get("/", category.getCategories);
router.put("/:category/edit", category.updateCategory);
router.get("/:category", category.itemsByCategory);

module.exports = router;
