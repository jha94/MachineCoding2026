import { memo } from "react";
import "./styles.css";

const Board = (props) => {
  const { taskList, setTaskList } = props;

  const renderTasks = (currentStatus, nextStatus) => {
    return taskList.map((task) => {
      if (task.status === currentStatus) {
        return (
          <div className="taskWrap">
            <div>
              <p>{task.title}</p>
              <p>{task.description}</p>
            </div>
            {currentStatus !== "done" && (
              <button
                onClick={() => {
                  setTaskList(
                    taskList.map((taskItem) => {
                      if (taskItem.id === task.id) {
                        return {
                          ...taskItem,
                          status: nextStatus,
                        };
                      } else {
                        return taskItem;
                      }
                    }),
                  );
                }}
              >
                Move
              </button>
            )}
          </div>
        );
      }
    });
  };
  return (
    <div className="board">
      <div>
        <h3>To Do</h3>
        {renderTasks("toDo", "inProgress")}
      </div>
      <div>
        <h3>In Progress</h3>
        {renderTasks("inProgress", "done")}
      </div>
      <div>
        <h3>Completed</h3>
        {renderTasks("done")}
      </div>
    </div>
  );
};

export default memo(Board);
