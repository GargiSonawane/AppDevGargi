var task =[];
function TaskObject(name, complete, priority) {
    this.name = name;
    this.complete = complete;
    this.priority = priority;
  }
var newTaskInput = document.getElementById("new-task");
var addTaskBts = document.getElementById("add-task-btn");
var taskList = document.getElementById("task-list");

function addTaskElement(){
    const li = document.createElement("<li>");
    li.classList.add('task-item');
    li.innerHTML = `
      <input type="checkbox" class="task-checkbox" ${task.complete ? 'checked' : ''}>
      <span class="task-name">${task.name}</span>
      <button class="delete-btn">Delete</button>
      <button class="priority-btn">${task.priority ? 'High Priority' : 'Low Priority'}</button>
    `;

    const checkbox = li.querySelector('.task-checkbox');
    const delete = li.querySelector('.delete-btn');
    const priority = li.querySelector('.priority-btn');

    checkbox.addEventListener('change', () => {
      task.complete = checkbox.checked;
      li.classList.toggle('completed', task.complete);
    });

    priority.addEventListener('click', () => {
      task.priority = !task.priority;
      reorderTasks();
      priority.textContent = task.priority ? 'High Priority' : 'Low Priority';
    });

    delete.addEventListener('click', ()=> {
      tasks = tasks.filter(t=> t !== task);
      li.remove();
    });

    const taskList = document.querySelector('.task-list');
    taskList.appendChild(li);
}
function addTaskBtnClicked(){
  const newTaskName = 
}
function reorderTasks();
