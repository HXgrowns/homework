function create_updated_collection(collection_a, object_b) {
  for (let i = 0, len = collection_a.length; i < len; i++) {
    for (let j = 0, len2 = object_b.value.length; j < len2; j++) {
      if (collection_a[i].key === object_b.value[j]) {
        collection_a[i].count--;
        break;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
