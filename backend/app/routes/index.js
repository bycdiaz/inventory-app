const express = require('express');
const router = express.Router();

const categoryRoutes = require("./categoryRoutes");
const itemRoutes = require('./categoryRoutes');

router.use('/categories', categoryRoutes);
router.use('/categories/items', itemRoutes);

module.exports = router;
