import { useReducer } from "react";

let initialCount = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </>
  );
};

export default Count;
