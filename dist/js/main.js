function onLoad() {
  document.getElementById("form").addEventListener("submit", submitEmail);
}

function submitEmail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let isValid = validateForm(name, email);

  if (!isValid) {
    alert("dados inválidos");
    return;
  }

  enableloader();

  saveEmail(email);

  setTimeout(function () {
    disableLoader();
  }, 1000);
}

function enableloader() {
  let div = document.createElement("div");
  div.classList.add("loader");

  let section = document.querySelector(".section-container.bg-gray");
  section.innerHTML = "";
  section.appendChild(div);
}

function saveEmail(email) {
  localStorage.setItem("email", email);
}

function disableLoader() {
  let section = document.querySelector(".section-container.bg-gray");
  section.innerHTML = "";

  let header = document.createElement("header");
  let h1 = document.createElement("H1"); // Create a <h1> element
  let text = document.createTextNode("Cadastro efetuado com sucesso!"); // Create a text node

  h1.appendChild(text);
  header.appendChild(h1);
  section.appendChild(header);
}

// regex validation email extracted from internet
function validateForm(name, email) {
  const reName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const reEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reEmail.test(email) && reName.test(name);
}

window.onload = onLoad;
