'use strict';

const io = require('socket.io-client');

const studentChannel = io.connect('http://localhost:3000/schoolRoom');

studentChannel.emit('join', 'students');

studentChannel.on('graded', payload => {
  console.log(payload, 'Graded');
});

/**
 * @function submit
 * generates random number and attaches it to a string
 */
const submit = () => {
  let number = (Math.floor(Math.random() * 100));
  studentChannel.emit('submission', `Lab ${number}`);
};

module.exports = submit;