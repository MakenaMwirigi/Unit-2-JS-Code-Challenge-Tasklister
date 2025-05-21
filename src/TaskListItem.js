class TaskListItem {
  constructor(description, user, duration, dueDate, priority) {
    this.description = description;
    this.user = user;
    this.duration = duration;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  render(index) {
    return `
      <div class="task-item ${this.priority}" data-index="${index}">
        <strong>${this.description}</strong><br>
        User: ${this.user} | Duration: ${this.duration} hrs | Due: ${this.dueDate} | Priority: ${this.priority}<br>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
  }
}

