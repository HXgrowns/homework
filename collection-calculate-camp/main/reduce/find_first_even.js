'use strict';

function find_first_even(collection) {
  var even = "没找到";
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      even = collection[i];
      return even;
    }
  }
  return even;
}

module.exports = find_first_even;

