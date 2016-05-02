var io = require('socket.io')();

io.on('connection', function (socket) {
  console.log('Client connected to socket.io!');

//   socket.on('add-circle', function(data){
//     io.emit('add-circle', data);
//   });
// // Use maybe for sendign to a specific client group chat !!! :)
//   socket.on('clear-it', function(data){
//     io.emit('clear-it',data);
//   });
});

module.exports = io;
