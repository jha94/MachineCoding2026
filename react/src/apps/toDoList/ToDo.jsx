import { useState } from "react";
import "../appStyles.css";
const ToDo = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList([...updatedTaskList]);
  };

  const addTask = () => {
    setTaskList((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        task: currentTask,
        done: false,
      },
    ]);
  };

  return (
    <div>
      <div>
        <input
          className="commentInput"
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button
          className="commentBtn"
          onClick={() => {
            addTask();
            setCurrentTask("");
          }}
        >
          Create
        </button>
      </div>
      <div>
        {taskList.map((taskObj) => {
          const { id, task, done } = taskObj;
          return (
            <div key={id} className="task">
              <input type="checkbox" checked={done}></input>
              <p>{task}</p>
              <button
                onClick={() => {
                  deleteTask(id);
                  setCurrentTask(task);
                }}
              >
                ✍🏻
              </button>
              <button
                onClick={() => {
                  deleteTask(id);
                }}
              >
                🗑️
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDo;
