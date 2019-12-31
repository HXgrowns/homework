function collect_same_elements(collection_a, object_b) {
  var collection_b = object_b.value;
  var minArray = collection_a;
  var maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
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
