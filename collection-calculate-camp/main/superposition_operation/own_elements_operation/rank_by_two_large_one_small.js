'use strict';
function rank_by_two_large_one_small(collection) {
  collection.sort((a, b) => { return a - b });
  var result = [];
  for (var i = 0; i < collection.length; i += 3) {
    if (i + 3 > collection.length) {
      result = result.concat(collection.slice(i));
      break;
    }
    var smallArray = collection.slice(i,i+3);
    smallArray.push(smallArray[0]);
    smallArray.shift();
    result = result.concat(smallArray);
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
