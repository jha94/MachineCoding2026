import Grid from "./Grid";

const DynamicGrid = (props) => {
  const { rows = 3, columns = 5 } = props;
  return (
    <div>
      <h2>DynamicGrid</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 50px)`,
          gap:'10px'
        }}
      >
        {new Array(rows * columns).fill(Math.random()).map((value) => {
            return <Grid key={value}/>
        })}
      </div>
    </div>
  );
};

export default DynamicGrid;
