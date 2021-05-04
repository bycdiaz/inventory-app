require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');
const async = require('async');

const {Category, Item } = require('../app/models');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const items = [];
const categories = [];

function createCategory(name, description, cb) {
  const category = new Category({ name, description });
       
  category.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Category: ' + category);
    categories.push(category);
    cb(null, category);
  });
}

function createItem(category, description, name, price, stock, cb) {
  itemDetail = { 
    description,
    name,
    price,
    stock
  }
  if (category) itemDetail.category = category
    
  const item = new Item(itemDetail);
  item.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Item: ' + item);
    items.push(item);
    cb(null, item);
  });
}

function createCategories(cb) {
  async.series([
    function(callback) {
      createCategory("Clothing", "Be ready for the summer!", callback);
    },
    function(callback) {
      createCategory("Books", "We've got the stories you love!",callback);
    },
    function(callback) {
      createCategory("Toys", "All the hottest toys!", callback);
    },
    ],
    cb);
}

function createItems(cb) {
  async.parallel([
    function(callback) {
      createItem(categories[0], 'Our most popular shirt.', 'Long Sleeve Shirt', 20, 12, callback);
    },
    function(callback) {
      createItem(categories[1], 'This book is spooky.', 'In the Shadows', 12, 4, callback);
    },
    function(callback) {
      createItem(categories[1], 'Cook like a champ.', '101 Recipies', 8, 5, callback);
    },
    function(callback) {
      createItem(categories[0], 'Nice pants.', 'Pants', 25, 9, callback);
    },
    function(callback) {
      createItem(categories[2], 'All the kids want this toy.', 'Legos', 25, 9, callback);
    },
    function(callback) {
      createItem(categories[2], 'A classic!', 'Baseball Bat', 30, 12, callback);
    },
    function(callback) {
      createItem(categories[1], 'A ton of great stories', 'Short Stories: A Collection', 14, 11, callback);
    },
    ],
    cb);
}

async.series([
    createCategories,
    createItems
  ],
  function(err, results) {
    if (err) {
      console.log('FINAL Error: ' + err);
    } else {
      console.log(results);
    }

    mongoose.connection.close();
});
