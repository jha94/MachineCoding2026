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

  const getFolders = (path) => {
    let folders = folderData;
    for (let key of path) {
      folders = folders.children[key];
    }
    return folders;
  };
  const folders = getFolders(path);

  return (
    <div>
      <h2>BreadCrumb</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {folderData.name}
        {path.map((pathData, index) => (
          <p onClick={() => setPath(path.slice(0, index))}>{"/" + pathData}</p>
        ))}
      </div>

      {Object.keys(folders.children)?.length
        ? Object.keys(folders.children).map((folder) => {
            return (
              <p onClick={() => setPath([...path, folder])}>
                {folders.children[folder].name}
              </p>
            );
          })
        : "No data found"}
    </div>
  );
};

export default BreadCrumb;
