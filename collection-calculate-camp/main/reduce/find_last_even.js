'use strict';

function find_last_even(collection) {
  var even = "没找到";
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      even = collection[i];
    }
  }
  return even;
}

module.exports = find_last_even;
