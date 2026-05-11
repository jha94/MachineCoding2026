const person = {
  name: "Prashant",
  address: {
    state: "bihar",
  },
};

const deepClone = (object) => {
  if (object === null || typeof object !== "object") return object;
  let result = Array.isArray(object) ? [] : {};
  for (let key in object) {
    result[key] = deepClone(object[key]);
  }
  return result;
};

const res = deepClone(person);
console.log(res);
