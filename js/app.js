// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Eventlistner
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);
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
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-items");
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

  // clear todo values

  todoInput.value = "";
}

function removeTodo(event) {
  const item = event.target;
  if (item.classList[0] === "delated") {
    // item.remove();

    const dltI = item.parentElement;
    dltI.remove();
  }

  // checklist
  if (item.classList[0] === "checked") {
    const check = item.parentElement;
    check.toggle();
  }
}
