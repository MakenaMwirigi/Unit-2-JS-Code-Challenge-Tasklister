class TaskList {
  constructor() {
    this.tasks = [];
    this.sortAscending = true;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  editTask(index, updatedTask) {
    this.tasks[index] = updatedTask;
  }

  sortTasksByPriority() {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    this.tasks.sort((a, b) => {
      return this.sortAscending
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    this.sortAscending = !this.sortAscending;
  }

  render() {
    return this.tasks.map((task, index) => task.render(index)).join('');
  }
}

