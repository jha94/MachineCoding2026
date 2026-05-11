const person = {
  name: "Prashant",
  address: {
    state: "Bihar",
  },
  job: {
    sector: "Private",
    dept: {
      name: "Software",
    },
  },
};

const details = {
  name: "Prashant",
  address_state: "bihar",
  job_sector: "private",
  job_dept_name: "software",
};

const flattenObj = (object) => {
  let flatObj = {};
  const flat = (object, prefix) => {
    for (let [key, value] of Object.entries(object)) {
      if (typeof value === "object") {
        flat(value, prefix ? `${prefix}_${key}` : key);
      } else {
        flatObj[prefix ? `${prefix}_${key}` : key] = value;
      }
    }
  };
  flat(object, "");
  return flatObj;
};

console.log(flattenObj(person));
