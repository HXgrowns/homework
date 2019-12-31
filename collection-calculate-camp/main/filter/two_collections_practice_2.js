'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var minArray = collection_a;
  var maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
  }
  var result = [];
  for (var i = 0, len = maxArray.length; i < len; i++) {
    var config = false;
    for (var j = 0; j < minArray.length; j++) {
      if (maxArray[i] === minArray[j]) {
        minArray.splice(j, 1);
        config = true;
      }
    }
    if (!config) {
      result.push(maxArray[i]);
    }
  }
  return result;
}

module.exports = choose_no_common_elements;
