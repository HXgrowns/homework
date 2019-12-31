function collect_same_elements(collection_a, object_b) {
  var arrayA = [];
  for (var i = 0; i < collection_a.length; i++) {
    arrayA.push(collection_a[i].key);
  }
  var collection_b = object_b.value;
  var minArray = arrayA;
  var maxArray = collection_b;
  if (arrayA.length > collection_b.length) {
    minArray = collection_b;
    maxArray = arrayA;
  }
  var result = [];
  for (var i = 0, len = maxArray.length; i < len; i++) {
    for (var j = 0; j < minArray.length; j++) {
      if (maxArray[i] === minArray[j]) {
        result.push(maxArray[i]);
        minArray.splice(j,1);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
