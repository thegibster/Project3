var io = require('socket.io')();
// var currentToken = require('currentToken');
var request = require('request');
rp = require('request-promise')
var key = require('./config/key')
var bacon;
// var currentToken ;
// console.log(currentToken)
key.new().then((token) => bacon = (JSON.parse(token).access_token))
// key.then((token) => console.log(token))
// console.log("after promise");
setTimeout(function(){console.log(bacon)},1000);
// console.log(bacon + "dammmm gurl");
io.on('connection', function (socket) {

  console.log('Client connected to socket.io!');
  console.log("server side");
  // console.log(currentToken);
  var defaultRoom = 'everyone';
  var rooms = ["Everyone", "en-es", "en-fr"];

  socket.on('winloaded',function(data){
    data=bacon;
    io.sockets.emit('winloaded',data);
  });




  socket.on('wasClicked', function(data){
    console.log("the button was clicked on the front")
    // data=bacon;

    rp({
      method: "GET",
      uri: "http://api.microsofttranslator.com/V2/Ajax.svc/Translate",
      qs: {
        appId: "Bearer" + " " + "http%3a%2f%2fschemas.xmlsoap.org%2fws%2f2005%2f05%2fidentity%2fclaims%2fnameidentifier=9WdP3&http%3a%2f%2fschemas.microsoft.com%2faccesscontrolservice%2f2010%2f07%2fclaims%2fidentityprovider=https%3a%2f%2fdatamarket.accesscontrol.windows.net%2f&Audience=http%3a%2f%2fapi.microsofttranslator.com&ExpiresOn=1462400339&Issuer=https%3a%2f%2fdatamarket.accesscontrol.windows.net%2f&HMACSHA256=h90VSsVx7eNZLP5QZqm0isGyAs7N9NTpy8319QCkFHg%3d",
        from: "en", //chnage to actual values not jquery backside
        to: "es",
        text: data
      }
    })
    // .then(response => console.log(response))
    .then(response => io.sockets.emit('back2Front',response))
    .catch(err => console.log(err))
    // io.sockets.emit('back2Front',data);
  });







  //Emit the rooms array
  socket.emit('setup', {
    rooms: rooms
  });

  socket.on('new user', function(data) {
    data.room = defaultRoom;
    //New user joins the default room
    socket.join(defaultRoom);
    //Tell all those in the room that a new user joined
    io.in(defaultRoom).emit('user joined', data);
  });

    //Listens for switch room
    socket.on('switch room', function(data) {
    //Handles joining and leaving rooms
    //console.log(data);
    socket.leave(data.oldRoom);
    socket.join(data.newRoom);
    io.in(data.oldRoom).emit('user left', data);
    io.in(data.newRoom).emit('user joined', data);

  });

    socket.on('new message', function(data) {
    //Create message
    var newMsg = new Chat({
      username: data.username,
      content: data.message,
      room: data.room.toLowerCase(),
      created: new Date()
    });
    //Save it to database
    newMsg.save(function(err, msg){
      //Send message to those connected in the room
      io.in(msg.room).emit('message created', msg);
    });
  });
//   socket.on('add-circle', function(data){
//     io.emit('add-circle', data);
//   });
// // Use maybe for sendign to a specific client group chat !!! :)
//   socket.on('clear-it', function(data){
//     io.emit('clear-it',data);
//   });
console.log("io is running");
// console.log(io.sockets.adapter.rooms);
// In Socket.IO 0.7 you have a clients method on the namespaces, this returns a array of all connected sockets.
// console.log(io.sockets.clients());
// console.log(io.engine.clientsCount);
// console.log(io.socket);
// console.log(io.sockets);
// console.log(io.of('/') );
});

module.exports = io;
