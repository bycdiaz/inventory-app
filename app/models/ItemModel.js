const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  },{
    timestamps: true
  }
)

ItemSchema.virtual('url').get(function() {
  return `/inventory/items/${this._id}`;
})

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
