const flatArr = (arr, depth) => {
  const res = [];
  const flat = (arr, initialDepth) => {
    arr.forEach((value) => {
      if (Array.isArray(value) && depth > initialDepth) {
        flat(value, initialDepth + 1);
      } else {
        res.push(value);
      }
    });
  };
  flat(arr, 0);
  return res;
};

console.log(flatArr([1, [2], 3, [[4, 6], 5]], 1));
