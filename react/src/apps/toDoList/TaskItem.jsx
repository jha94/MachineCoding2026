import { memo } from "react";
const TaskItem = memo((props) => {
  const {
    taskObj: { id, task, done },
    updateTask,
    deleteTask,
    setCurrentTask,
  } = props;
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={done}
        onChange={() => updateTask(id)}
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
          setCurrentTask(task);
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
});

export default TaskItem;
