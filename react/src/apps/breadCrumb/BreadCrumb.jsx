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

  const getCurrentPath = (path) => {
    let node = folderData;
    for (let key of path) {
      node = node.children[key];
    }
    return node;
  };
  const currentPath = getCurrentPath(path);

  return (
    <div>
      <h2>BreadCrumb</h2>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {folderData.name}
        {path.map((value, index) => (
          <p
            onClick={() => {
              setPath(path.slice(0, index));
            }}
          >
            \ {`${value}`}
          </p>
        ))}
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {Object.keys(currentPath.children).length ? (
          Object.keys(currentPath.children).map((value) => {
            return (
              <p
                onClick={() => {
                  setPath([...path, value]);
                }}
              >
                {" "}
                {currentPath.children[value].name}
              </p>
            );
          })
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
