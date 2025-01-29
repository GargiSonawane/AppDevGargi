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
    const li = document.createElement("li");
    li.innerHTML = document.createElement("input")
}