'use strict';

function collect_all_even(collection) {
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    if (i % 2 === 0 && i !== 0) {
      result.push(i);
    }
  }
  return result;
}

module.exports = collect_all_even;
