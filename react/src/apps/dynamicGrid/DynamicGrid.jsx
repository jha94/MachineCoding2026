import Grid from "./Grid";

const DymanicGrid = (props) => {
  const { rows = 3, columns = 4 } = props;
  return (
    <div>
      <h2>DymanicGrid</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 50px)`,
          gap: "5px",
        }}
      >
        {new Array(rows * columns).fill(Math.random()).map((value) => {
          return <Grid key={value} />;
        })}
      </div>
    </div>
  );
};

export default DymanicGrid;
