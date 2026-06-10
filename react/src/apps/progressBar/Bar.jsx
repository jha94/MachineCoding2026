import { memo } from "react";

const Bar = (props) => {
  const { progress = 0 } = props;
  return (
    <div
      style={{
        height: "20px",
        width: "300px",
        border: "1px solid grey",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 10}%`,
          backgroundColor: "lightgreen",
          borderRadius: "10px",
          transition: "width 1s linear",
        }}
      ></div>
    </div>
  );
};

export default memo(Bar);
