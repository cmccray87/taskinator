var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.classname = "task-item";
    listItemEl.textContent = "this is a new task.";
    tasksToDoEl.appendChild(listItemEl);

});