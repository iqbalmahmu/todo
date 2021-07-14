"use strict";

// Selectors
var todoInput = document.querySelector(".todo-input");
var todoBtn = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list"); // Eventlistner

todoBtn.addEventListener("click", addTodo); // Function

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
}