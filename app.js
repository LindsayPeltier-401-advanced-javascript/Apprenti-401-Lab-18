'use strict';

const assignments = require('./students/students');
/**
 * setInterval
 */
setInterval(() => {
  assignments();
}, 1000);