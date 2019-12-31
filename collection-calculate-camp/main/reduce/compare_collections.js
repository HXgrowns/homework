'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length !== collection_b.length) {
    return false;
  }
  var flag;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] === collection_b[i]) {
      flag = true;
    } else {
      flag = false;
      return flag;
    }
  }
  return flag;
}

module.exports = compare_collections;


