let user = {
  name: "John",
  address: {
    country: "India",
    state: "India",
    education: {
      school: "APS",
      year: 2021,
    },
  },
};

function flattenObject(object, prefix) {
  let flatobj = {};
  const flat = (object, prefix) => {
    for(let [key, value] of Object.entries(object)){
      if(typeof value!=='object'){
        flatobj[ `${prefix}.${key}`] = value
      } else{
        flat(value, `${prefix}.${key}`)
      }
    }
  };
  flat(object, prefix);
  return flatobj;
}

console.log(flattenObject(user, "user"));
// {
//   'user.name': 'John',
//   'user.address.country': 'India',
//   'user.address.state': 'India',
//   'user.address.education.school': 'APS',
//   'user.address.education.year': 2021
// }
