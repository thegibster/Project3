var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  imageUrl: String,
  created: { type: Date, default: Date.now }
});


var User = mongoose.model('User', userSchema);

module.exports = User;

