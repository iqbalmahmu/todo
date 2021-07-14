// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Eventlistner
todoBtn.addEventListener("click", addTodo);
// Function

function addTodo(event) {
  // prevent form from submitting

  event.preventDefault();
}
