let input = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTask");

let currentTask = "";
let taskList = [];

function markCompletedTask(id) {
  taskList = taskList.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return task;
  });
  showList(taskList);
}

function deleteTask(id) {
  taskList = taskList.filter((task) => task.id !== id);
  showList(taskList);
}

function editTask(id) {
  let taskToBeEdited = taskList.find((task) => task.id === id);
  input.value = taskToBeEdited.name;
  deleteTask(id);
}

function createTaskElement(task) {
  const div = document.createElement("div");
  div.className = "task";
  div.innerHTML = `
    <input type="checkbox" id="task-${task.id}" />
    <p class="${task.isCompleted && "textStrike"}" >${task.name}</p>
    <button>Edit</button>
    <button>Delete</button>
  `;

  div.querySelector("input:nth-child(1)").addEventListener("change", () => {
    markCompletedTask(task.id);
  });

  div.querySelector("button:nth-child(3)").addEventListener("click", () => {
    editTask(task.id);
  });

  div.querySelector("button:nth-child(4)").addEventListener("click", () => {
    deleteTask(task.id);
  });
  return div;
}

function showList(taskList) {
  let section = document.getElementById("taskList");
  const fragment = document.createDocumentFragment();
  taskList.forEach((task) => {
    let taskDiv = createTaskElement(task);
    section.classList.add("shown");
    fragment.appendChild(taskDiv);
  });
  section.innerHTML = "";
  section.appendChild(fragment);
}

function handleInputChange(e) {
  currentTask = e.target.value;
}

function handleClick() {
  if (currentTask) {
    taskList.push({
      id: taskList.length,
      name: currentTask,
      isCompleted: false,
    });
    input.value = "";
    if (taskList.length) {
      showList(taskList);
    }
  } else {
    alert("Oops!! please enter a task");
  }
}

(() => {
  input.addEventListener("input", handleInputChange);
  addTaskBtn.addEventListener("click", handleClick);
})();
