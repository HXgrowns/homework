'use strict';

function getEvenArray(collection) {
  var evenArray = [];
  for (var i = 0; i < collection.length; i += 2) {
    evenArray.push(collection[i]);
  }
  return evenArray;
}

var is_exist_element = function (collection, element) {
  var evenArray = getEvenArray(collection);
  for (var i = 0; i < evenArray.length; i++) {
    if (evenArray[i] === element) {
      return true;
    }
  }
  return false;
};
module.exports = is_exist_element;
