const TaskInput = (props) => {
  const { currentTask, setCurrentTask, taskList, addTask } = props;
  return (
    <div>
      <input
        className="commentInput"
        type="text"
        value={currentTask || ""}
        onChange={(e) => setCurrentTask(e.target.value)}
      />
      <button
        aria-label="add-task"
        className="commentBtn"
        onClick={() => {
          const duplicate = taskList.some((task) => task?.task === currentTask);
          if (duplicate) {
            window.alert("oops duplicate task");
          } else {
            addTask();
            setCurrentTask("");
          }
        }}
        disabled={!currentTask?.trim().length}
      >
        Create
      </button>
    </div>
  );
};

export default TaskInput;
