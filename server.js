var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
websocket.on('connection', socket => {
  console.log('A client just joined on', socket.id);
});

websocket.on('channel1', (data) => {
  console.log('Greetings from RN app', data);
});
websocket.on('message', (message) => {
  console.log('joined room');
  websocket.broadcast.emit('message', message);
});
