const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
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

categorySchema.virtual('url').get(function() {
  return `/categories/category/${this._id}`;
})

const Item = mongoose.model('Vote', categorySchema);

module.exports = Item;
