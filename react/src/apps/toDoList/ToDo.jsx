import { useState } from "react";
import "../appStyles.css";
const ToDo = () => {
  const [currentTask, setCurrentTask] = useState({});
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  const addTask = () => {
    setTaskList((prev) => [
      {
        ...prev,
        ...currentTask,
      },
    ]);
  };

  const updateTask = (id) => {
    const updated = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTaskList([...updated]);
  };

  const taskInput = () => {
    return (
      <div>
        <input
          className="commentInput"
          type="text"
          value={currentTask.task || ""}
          onChange={(e) =>
            setCurrentTask({
              id: crypto.randomUUID(),
              task: e.target.value,
              done: false,
            })
          }
        />
        <button
          aria-label="add-task"
          className="commentBtn"
          onClick={() => {
            const duplicate = taskList.filter(
              (task) => task?.task === currentTask?.task,
            );
            if (duplicate?.length) {
              window.alert("oops duplicate task");
            } else {
              addTask();
              setCurrentTask({});
            }
          }}
          disabled={!currentTask?.task?.trim().length}
        >
          Create
        </button>
      </div>
    );
  };

  const TaskItem = (props) => {
    const { id, task, done } = props.taskObj;
    return (
      <div key={id} className="task">
        <input
          type="checkbox"
          checked={done}
          onClick={() => updateTask(id)}
          aria-label="status"
        ></input>
        <p
          style={{
            textDecoration: done && "line-through",
          }}
        >
          {task}
        </p>
        <button
          aria-label="edit-task"
          onClick={() => {
            deleteTask(id);
            setCurrentTask({
              ...taskObj,
            });
          }}
        >
          ✍🏻
        </button>
        <button
          aria-label="delete-task"
          onClick={() => {
            deleteTask(id);
          }}
        >
          🗑️
        </button>
      </div>
    );
  };

  return (
    <div>
      {taskInput()}
      <div>
        {taskList.map((taskObj) => {
          return <TaskItem taskObj={taskObj} />;
        })}
      </div>
    </div>
  );
};
export default ToDo;
