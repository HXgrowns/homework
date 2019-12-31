'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;
  for (var i = 0, len = collection_a.length; i < len; i++) {
    for (var j = 0, len2 = collection_b.length; j < len2; j++) {
      if (collection_a[i] === collection_b[j]) {
        collection_b.splice(j,1);
      }
    }
  }
  result = result.concat(collection_b);
  return result;
}

module.exports = get_union;

