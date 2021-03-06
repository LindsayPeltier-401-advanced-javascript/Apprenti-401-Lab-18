'use strict';
//socket.io documentation and cheatsheet
//queue server

//general connectivity
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

//Namespace Weather Channel
const weather = io.of('/weather');
weather.on('connection', (socket) => {
  console.log('WEATHER CHANNEL', socket.id);

  socket.on('rain', (payload) => {
    weather.emit('rain', payload);
  });

  socket.on('snow', (payload) => {
    weather.emit('snow', payload);
  });

});

//Emergencies - Fire and Police

const emergency = io.of('/emergency');

emergency.on('connection', (socket) => {
  console.log('EMERGENCY CHANNEL', socket.id);

  socket.on('join', (room) => {
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('crime', (payload) => {
    emergency.to('policeDeparment').emit('crime', payload);
  });

});