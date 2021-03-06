var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  email: String,
  dateJoined: Date,
  interests: String,
  avatarUrl: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
})

var User = mongoose.model('User', userSchema);

module.exports = User;
