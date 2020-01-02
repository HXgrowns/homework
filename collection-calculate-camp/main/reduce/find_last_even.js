'use strict';

function find_last_even(collection) {
  var even = "没找到";
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2 === 0) {
      even = collection[i];
    }
  }
  return even;
}

module.exports = find_last_even;
