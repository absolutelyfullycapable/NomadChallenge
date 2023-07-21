const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
  const deleteLi = event.target.parentElement;

  toDos = toDos.filter(item => item.id !== parseInt(deleteLi.id));
  saveToDos();
  deleteLi.remove();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = toDo.id;
  span.innerText = toDo.text;
  button.innerText = "완료!";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  const newToDo = todoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo
  }

  event.preventDefault();
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// local storage에서 toDos 가져오고 화면에 표시하기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
