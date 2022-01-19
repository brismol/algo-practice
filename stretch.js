const _ = require('lodash');

const values = { 1: 'hello', 2: 'goodbye' };

delete values[2];

console.log(values);
