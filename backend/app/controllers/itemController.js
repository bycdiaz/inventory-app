const mongoose = require('mongoose');
const Category = mongoose.model("Item");

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