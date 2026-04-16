const person = {
  name: "Prashant",
  address: {
    state: "bihar",
  },
};
const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const res = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    res[key] = deepClone(obj[key]);
  }
  return res;
};
const res = deepClone(person);
console.log(res);
