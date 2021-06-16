const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Item = mongoose.model('Item');

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    const byNameAscending = (a, b) => a.name[0].localeCompare(b.name[0]);
    const sortedCategories = categories.sort(byNameAscending);

    return res.json(sortedCategories);
  } catch (error) {
    next(error);
  }
}

exports.itemsByCategory = async (req, res, next) => {
  const categoryId = req.query.id;

  try {
    const itemsByCategory = await Item.find({ category: categoryId });
  
    return res.json(itemsByCategory);
  } catch (error) {
    next(error);
  }
}

exports.updateCategory = async (req, res, next) => {
  const updates = req.body;
  const categoryId = req.params.category;

  try {

    await Category.updateOne({ _id: categoryId }, updates);

    res.send({
      request: updates,
      status: 'sucess'
    }).status(200);
  } catch (error) {
    next(error);
  }
}
