"use strict";

// Selectors
var todoInput = document.querySelector(".todo-input");
var todoBtn = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list"); // Eventlistner

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo); // Function

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault(); // add div tag

  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); // create li element

  var todoLi = document.createElement("li"); // todoLi.classList.add("todo-item");

  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-items");
  todoDiv.appendChild(todoLi); // add checked mark button

  var checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkedBtn.classList.add("checked");
  todoDiv.appendChild(checkedBtn); // delate checkedBtn

  var delateBtn = document.createElement("button");
  delateBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delateBtn.classList.add("delated");
  todoDiv.appendChild(delateBtn); // append todoList

  todoList.appendChild(todoDiv); // clear todo values

  todoInput.value = "";
}

function removeTodo(event) {
  var item = event.target;

  if (item.classList[0] === "delated") {
    // item.remove();
    var dltI = item.parentElement;
    dltI.remove();
  } // checklist


  if (item.classList[0] === "checked") {
    var check = item.parentElement;
    check.toggle();
  }
}