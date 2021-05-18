const mongoose = require('mongoose');
const Item = mongoose.model("Item");

exports.byCategory = async (req, res, next) => {
  try {
    // get category ID
    // find by category ID
    // const categories = await Category.find();
    // return res.json(categories);
  } catch (error) {
    next(error);
  }
}

exports.allItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    return res.json(items);
  } catch (error) {
    next(error);
  }
}