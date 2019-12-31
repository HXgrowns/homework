'use strict';
var rank_asc = function(collection){
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0, len = collection.length - i -1; j < len; j++) {
      if (collection[j] < collection[j+1]) {
        var temp = collection[j+1];
        collection[j+1] = collection[j];
        collection[j] = temp;
      }
    }
  }
  return collection;
};

module.exports = rank_asc;
