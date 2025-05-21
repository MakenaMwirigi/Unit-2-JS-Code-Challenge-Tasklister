document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const listContainer = document.getElementById("list");
  const form = document.getElementById("create-task-form");
  const sortBtn = document.getElementById("sort-btn");

  const renderApp = () => {
    listContainer.innerHTML = taskList.render();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = document.getElementById("new-task-description").value;
    const user = document.getElementById("user").value;
    const duration = document.getElementById("duration").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const task = new TaskListItem(description, user, duration, dueDate, priority);
    taskList.addTask(task);
    renderApp();
    form.reset();
  });

  listContainer.addEventListener("click", (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains("delete-btn")) {
      taskList.deleteTask(index);
      renderApp();
    }

    if (e.target.classList.contains("edit-btn")) {
      const task = taskList.tasks[index];
      document.getElementById("new-task-description").value = task.description;
      document.getElementById("user").value = task.user;
      document.getElementById("duration").value = task.duration;
      document.getElementById("due-date").value = task.dueDate;
      document.getElementById("priority").value = task.priority;

      taskList.deleteTask(index);
      renderApp();
    }
  });

  sortBtn.addEventListener("click", () => {
    taskList.sortTasksByPriority();
    renderApp();
  });

  renderApp();
});

