'use strict';
//client server

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');
const weather = io.connect('http://localhost:3000/weather');

socket.emit('sunrise', 'sunrise');
socket.emit('sunset', 'sunset');


weather.emit('rain', 'rain');
weather.emit('snow', 'snow');
