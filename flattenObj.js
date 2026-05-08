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

const flattenObj = (obj) => {
  const deatils = {};
  const flat = (obj, id) => {
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === "object") {
        flat(value, `${id}_${key}`);
      } else {
        deatils[`${id}_${key}`] = value;
      }
    }
  };
  flat(obj, "person");
  return deatils;
};
console.log(flattenObj(person));
