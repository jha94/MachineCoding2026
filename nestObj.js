const nestObj = (flatObjectArr) => {
  let nestedObjArr = [];
  const nest = (flatObjectArr) => {
    flatObjectArr.map((flatObj) => {
      if (!flatObj["parentId"]) {
        nestedObjArr.push({
          id: flatObj.id,
          name: flatObj.name,
          children: [],
        });
      } else {
        nestedObjArr.map((nestedObj) => {
          if (nestedObj.id === flatObj.parentId) {
            nestedObj.children.push({
              id: flatObj.id,
              name: flatObj.name,
            });
          }
        });
      }
    });
  };
  nest(flatObjectArr);
  return nestedObjArr;
};

const nestedObj = nestObj([
  { id: 1, name: "Parent 1", parentId: null },
  { id: 2, name: "Child 1.1", parentId: 1 },
  { id: 3, name: "Child 1.2", parentId: 1 },
  { id: 4, name: "Parent 2", parentId: null },
  { id: 5, name: "Child 2.1", parentId: 4 },
]);

console.log(nestedObj);
