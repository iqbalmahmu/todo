"use strict";

// Selectors
var todoInput = document.querySelector(".todo-input");
var todoBtn = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list"); // Eventlistner

todoBtn.addEventListener("click", addTodo); // Function

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault(); // add div tag

  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); // create li element

  var todoLi = document.createElement("li"); // todoLi.classList.add("todo-item");
  // todoLi.innerText = "my name is khan";

  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi); // add checked mark button

  var checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkedBtn.classList.add("checked");
  todoDiv.appendChild(checkedBtn); // delate checkedBtn

  var delateBtn = document.createElement("button");
  delateBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delateBtn.classList.add("delated");
  todoDiv.appendChild(delateBtn); // append todoList

  todoList.appendChild(todoDiv);
}