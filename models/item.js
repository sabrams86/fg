var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  city: String,
  state: String,
  zip: String,
  datePurchased: String,
  condition: String,
  brand: String,
  categories: Array,
  unAvailability: Array,
  reservedDates: Array,
  imageUrl: String,
  price: Number,
  userId: String
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
