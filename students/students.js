'use strict';

const io = require('socket.io-client');
const students = io.connect('http://localhost:3000/schoolRoom');

students.emit('join', 'students');

students.on('graded', payload => {
  console.log(payload, 'Graded');
});

/**
 * @function submit
 * generates random number and attaches it to a string
 */
const submit = () => {
  let number = (Math.floor(Math.random() * 100));
  students.emit('submission', `Lab ${number}`);
};

module.exports = submit;