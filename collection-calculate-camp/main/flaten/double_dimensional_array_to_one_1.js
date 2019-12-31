'use strict';

function double_to_one(collection) {
  var result = collection.reduce(function (a,b) {
    return a.concat(b);
  },[]);
  return result;
}

module.exports = double_to_one;
