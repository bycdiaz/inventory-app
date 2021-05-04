const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
  },{
    timestamps: true
  }
)

CategorySchema.virtual('url').get(function() {
  return `/categories/category/${this._id}`;
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
