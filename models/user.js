var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  created: { type: Date, default: Date.now }
});

// 3. Add methods to the schema
userSchema.methods.sayHello = function() {
  console.log("Hi " + this.first_name);
};

var User = mongoose.model('User', userSchema);

module.exports = User;

