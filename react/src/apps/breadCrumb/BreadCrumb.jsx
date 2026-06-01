const folderData = {
  name: "Root",
  children: {
    documents: {
      name: "Documents",
      children: {
        projects: { name: "Projects", children: {} },
        work: { name: "Work", children: {} },
      },
    },
    downloads: {
      name: "Downloads",
      children: {
        images: { name: "Images", children: {} },
        videos: { name: "Videos", children: {} },
      },
    },
  },
};

import { useState } from "react";

const BreadCrumb = () => {
  const [path, setPath] = useState([]);

  const getCurrentNode = (path) => {
    let node = folderData;
    for (let value of path) {
      node = node.children[value];
    }
    return node;
  };

  const currentNode = getCurrentNode(path);

  return (
    <div>
      <h2>BreadCrumb</h2>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {folderData.name}
        {path.map((value, index) => {
          return (
            <p onClick={() => setPath(() => path.slice(0, index))}>
              \ {`${value}`}
            </p>
          );
        })}
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {currentNode?.children && Object.keys(currentNode.children).length
          ? Object.keys(currentNode.children).map((val) => {
              return (
                <p
                  onClick={() => {
                    setPath((prev) => [...prev, val]);
                  }}
                >
                  {currentNode.children[val].name}
                </p>
              );
            })
          : "No Data Found"}
      </div>
    </div>
  );
};

export default memo(BreadCrumb);
