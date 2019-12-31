'use strict';
function map_to_even(collection){
  var result = [];
  for (var i of collection) {
    result.push(i * 2);
  }
  return result;
}
module.exports = map_to_even;
