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
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
};

const val = deepClone(person);
val.address = "test";
console.log(val);
console.log(person);
