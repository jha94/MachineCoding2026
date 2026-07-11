import { useState } from "react";
import Header from "./Header";
import Board from "./Board";

const TaskBoard = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <h2>TaskBoard</h2>
      <Header setTaskList={setTaskList} />
      <Board taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskBoard;
