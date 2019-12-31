function create_updated_collection(collection_a, object_b) {
  var result = [];
  for (var i = 0, len = collection_a.length; i < len; i++) {
    var obj = {};
    obj.key = collection_a[i].match(/[a-z]/g)[0];
    for (var j = 0; j < result.length; j++) {
      if (result[j].key === obj.key) {
        result[j].count += parseInt(collection_a[i].match(/[0-9]*/g)[2]) || 1;
        obj.count = result[j].count;
        break;
      }
    }
    if (!obj.count) {
      obj.count = parseInt(collection_a[i].match(/[0-9]*/g)[2]) || 1;
      result.push(obj);
    }
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      if (result[i].key === object_b.value[j]) {
        result[i].count -= Math.floor(result[i].count / 3);
        break;
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
