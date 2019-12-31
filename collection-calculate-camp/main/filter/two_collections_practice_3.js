'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var minArray = collection_a;
  var maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
  }
  var result = [];
  for (var i = 0, len = maxArray.length; i < len; i++) {
    for (var j = 0; j < minArray.length; j++) {
      if (!(maxArray[i] % minArray[j])) {
        result.push(maxArray[i]);
      }
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
