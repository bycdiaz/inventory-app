const mongoose = require('mongoose');
const { create } = require('../models/ItemModel');
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

exports.createItem = async (req, res, next) => {
  const newItem = req.body;

  try {
    const createdItem = await Item.create(newItem);
    await createdItem.save();

    res.send(createdItem);
  } catch (error) {
    next(error);
  }
}

exports.deleteItem = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Item.deleteOne({ _id });

    res.send('Item Deleted').status(200);
  } catch (error) {
    next(error);
  }
}

exports.updateItem = async (req, res, next) => {
  const updates = req.body;
  const { _id } = req.params;

  try {
    await Item.updateOne({ _id }, updates);

    res.send({
      request: updates,
      status: 'sucess'
    }).status(200);
  } catch (error) {
    next(error);
  }
}