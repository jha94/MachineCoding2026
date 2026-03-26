import { useState, useCallback } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import "../appStyles.css";

const ToDo = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const deleteTask = useCallback((id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const updateTask = useCallback((id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }, []);

  const addTask = useCallback(() => {
    setTaskList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        task: currentTask,
        done: false,
      },
    ]);
  }, []);

  return (
    <div>
      <TaskInput
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        taskList={taskList}
        addTask={addTask}
      />
      <div>
        {taskList.map((taskObj) => {
          return (
            <TaskItem
              key={taskObj.id}
              taskObj={taskObj}
              updateTask={updateTask}
              deleteTask={deleteTask}
              setCurrentTask={setCurrentTask}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ToDo;
