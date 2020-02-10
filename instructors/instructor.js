'use strict';

const io = require('socket.io-client');

const schoolChannel = io.connect('http://localhost:3000/schoolRoom');

schoolChannel.emit('join', 'instructors');

schoolChannel.on('submission', payload => {
  console.log(payload);
  gradeAssignment(payload);
});

const grade = number => `Grade: ${number}`;
/**
 * 
 * @param {*} payload 
 */
const gradeAssignment = payload => {
  const graded = {
    assignment: payload,
    grade: grade(Math.floor(Math.random() * 10)),
  };

  schoolChannel.emit('grade', graded);
};