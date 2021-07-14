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
  // add div tag

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li element

  const todoLi = document.createElement("li");
  // todoLi.classList.add("todo-item");
  // todoLi.innerText = "my name is khan";
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);

  // add checked mark button

  const checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkedBtn.classList.add("checked");
  todoDiv.appendChild(checkedBtn);

  // delate checkedBtn

  const delateBtn = document.createElement("button");
  delateBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delateBtn.classList.add("delated");
  todoDiv.appendChild(delateBtn);
  // append todoList
  todoList.appendChild(todoDiv);
}
