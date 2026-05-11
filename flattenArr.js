const flattenArr = (arr, depth) => {
  let flatArr = [];
  const flat = (arr, depth) => {
    for (let element of arr) {
      if (Array.isArray(element) && depth) {
        flat(element, depth - 1);
      } else {
        flatArr.push(element);
      }
    }
  };
  flat(arr, depth);
  return flatArr;
};

console.log(flattenArr([1, [2], 3, [[4, 6], 5]], 6));
