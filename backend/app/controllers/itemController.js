const mongoose = require('mongoose');
const Item = mongoose.model("Item");

exports.allItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    return res.json(items);
  } catch (error) {
    next(error);
  }
}

exports.byId = async (req, res, next) => {
  const requestedId = req.params.id;

  try {
    const [ responseItem ] = await Item.find({ _id: requestedId});
    const item = responseItem.toObject();
    const categoryName = await Item.getCategoryName(item.category);
    item.categoryName = categoryName

    return res.json(item);
  } catch (error) {
    next(error);
  }
}
