import { useState } from "react";

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

export default function BreadcrumbFolderApp() {
  const [currentPath, setCurrentPath] = useState([]);

  const getCurrentNode = (path) => {
    let node = folderData;
    for (const key of path) {
      if (node.children && node.children[key]) {
        node = node.children[key];
      }
    }
    return node;
  };

  const currentNode = getCurrentNode(currentPath);

  const handleBreadcrumbClick = (index) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  const handleFolderClick = (key) => {
    setCurrentPath([...currentPath, key]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <nav style={{ marginBottom: "20px", fontSize: "16px" }}>
        <span
          onClick={() => handleBreadcrumbClick(-1)}
          style={{
            cursor: "pointer",
            color: currentPath.length === 0 ? "#333" : "#0066cc",
            fontWeight: currentPath.length === 0 ? "bold" : "normal",
          }}
        >
          {folderData.name}
        </span>

        {currentPath.map((key, index) => {
          const tempNode = getCurrentNode(currentPath.slice(0, index + 1));
          const isLast = index === currentPath.length - 1;

          return (
            <span key={index}>
              <span style={{ margin: "0 8px", color: "#999" }}>/</span>
              <span
                onClick={() => !isLast && handleBreadcrumbClick(index)}
                style={{
                  cursor: isLast ? "default" : "pointer",
                  color: isLast ? "#333" : "#0066cc",
                  fontWeight: isLast ? "bold" : "normal",
                }}
              >
                {tempNode.name}
              </span>
            </span>
          );
        })}
      </nav>

      <hr />

      <h3>Content of {currentNode.name}</h3>
      <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
        {currentNode.children &&
        Object.keys(currentNode.children).length > 0 ? (
          Object.keys(currentNode.children).map((key) => (
            <button
              key={key}
              onClick={() => handleFolderClick(key)}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              📁 {currentNode.children[key].name}
            </button>
          ))
        ) : (
          <p style={{ color: "#666", fontStyle: "italic" }}>
            This folder is empty.
          </p>
        )}
      </div>
    </div>
  );
}
