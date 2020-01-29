'use strict';
//client server

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.emit('sunrise');
socket.emit('sunset');

