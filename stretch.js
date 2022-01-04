const _ = require('lodash');

const arr = [
  [1, 2],
  [4, 'asdf'],
  [6, 09],
  [22, 123],
];

console.log(
  _.sortedIndexOf(arr, 22, function (x) {
    x[0];
  })
);
