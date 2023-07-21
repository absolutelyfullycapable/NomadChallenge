const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingName = document.querySelector("#greeting span");

const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  const typedUserName = loginInput.value;

  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, typedUserName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintingGreeting(typedUserName);
}

function paintingGreeting(userName) {
  greetingName.innerText = userName;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#todo-wrap").classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintingGreeting(savedUserName);
}
