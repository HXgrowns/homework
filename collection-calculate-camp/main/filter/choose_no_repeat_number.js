'use strict';

function choose_no_repeat_number(collection) {
  var map = new Map();
  for (var i = 0, len = collection.length; i < len; i++) {
    map.set(collection[i], 1);
  }
  var result = [];
  for (var key of map.keys()) {
    result.push(key);
  }
  return result;
}
module.exports = choose_no_repeat_number;
