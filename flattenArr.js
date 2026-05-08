const flattenArr = (arr, depth) => {
  let result = [];
  const flat = (arr, currentDepth) => {
    for (let element of arr) {
      if (Array.isArray(element) && currentDepth < depth) {
        flat(element, currentDepth + 1);
      } else {
        result.push(element);
      }
    }
  };
  flat(arr, 0);
  return result;
};
console.log(flattenArr([1, [2], 3, [[4, 6], 5]], 0));
