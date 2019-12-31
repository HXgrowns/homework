'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  for (var i of collection) {
    result.push(i * 4 + 1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
