'use strict';
//socket.io documentation and cheatsheet
//queue server

const io = require('socket.io')(3000);
io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  socket.on('sunrise', (payload) => {
    io.emit('sunrise', payload);
  });
  socket.on('sunset', (payload) => {
    io.emit('sunset', payload);
  });

});