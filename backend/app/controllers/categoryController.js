const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Item = mongoose.model('Item');

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.json(categories);
  } catch (error) {
    next(error);
  }
}

exports.itemsByCategory = async (req, res, next) => {
  const categoryRequested = req.params.category.replace(/^\w/, (c) => c.toUpperCase());

  try {
    const { _id } = await Category.findOne({ name: categoryRequested });
    const itemsByCategory = await Item.find({ category: _id });
  
    return res.json(itemsByCategory);
  } catch (error) {
    next(error);
  }
}
