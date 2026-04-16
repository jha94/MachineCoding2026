const nestObj = (objList) => {
  const nestedObj = [];
  const nest = (objList) => {
    objList.map((obj) => {
      if (!obj["parentId"]) {
        nestedObj.push({
          id: obj.id,
          name: obj.name,
          children: [],
        });
      } else {
        nestedObj.map((obj1) => {
          if (obj1.id === obj.parentId) {
            return obj1.children.push({
              id: obj.id,
              name: obj.name,
              children: [],
            });
          }
        });
      }
    });
  };
  nest(objList);
  return nestedObj;
};

const nestedObj = nestObj([
  { id: 1, name: "Parent 1", parentId: null },
  { id: 2, name: "Child 1.1", parentId: 1 },
  { id: 3, name: "Child 1.2", parentId: 1 },
  { id: 4, name: "Parent 2", parentId: null },
  { id: 5, name: "Child 2.1", parentId: 4 },
]);

console.log(nestedObj);
