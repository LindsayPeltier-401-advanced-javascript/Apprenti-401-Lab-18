'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log('You are connected', socket.id);
});

const schoolRoom = io.of('/schoolRoom');

schoolRoom.on('connection', socket => {

  console.log('School', socket.id);

  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('submission', payload => {
    schoolRoom.to('instructors').emit('submission', payload);
  });

  socket.on('graded', payload => {
    schoolRoom.to('students').emit('graded', payload);
  });

});