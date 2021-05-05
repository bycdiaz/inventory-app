const mongoose = require('mongoose');
const Category = mongoose.model("Category");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.json(categories);
  } catch (error) {
    next(error);
  }
}