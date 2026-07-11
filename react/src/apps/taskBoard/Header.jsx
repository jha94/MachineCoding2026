import { memo, useState } from "react";
import "./styles.css";

const Header = (props) => {
  const { setTaskList } = props;
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // your add-task logic here
    const updatedTask = {
      ...task,
      id: new Date().getTime(),
      status: "toDo",
    };
    setTaskList((prev) => [...prev, updatedTask]);
    setTask({
      title: "",
      description: "",
    });
  };

  return (
    <form className="headWrap" onSubmit={handleSubmit}>
      <div>
        <p>Title</p>
        <input
          type="text"
          placeholder="required"
          required
          value={task.title}
          onChange={(e) => {
            setTask((task) => {
              return {
                ...task,
                title: e.target.value,
              };
            });
          }}
        />
      </div>
      <div>
        <p>Description</p>
        <input
          type="text"
          placeholder="optional"
          value={task.description}
          onChange={(e) => {
            setTask((task) => {
              return {
                ...task,
                description: e.target.value,
              };
            });
          }}
        />
      </div>
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
};

export default memo(Header);
