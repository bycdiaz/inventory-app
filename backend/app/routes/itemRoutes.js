const express = require('express');
const router = express.Router();

const item = require('../controllers/itemController');

router.get('/:id', item.byId);
router.get('/', item.allItems);

router.put('/update/:_id', item.updateItem);

router.delete('/delete/:_id', item.deleteItem);

module.exports = router;
