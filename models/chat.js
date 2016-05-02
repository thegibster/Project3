var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
  content: String,
  room_id: String,
  user_id: String,
  created: { type: Date, default: Date.now }
});

var Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
