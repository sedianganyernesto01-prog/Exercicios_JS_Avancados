const usernamesExistentes = ["admin", "user1", "test"]; // nomes já "cadastrados"

const usernameInput = document.getElementById("username");
const messageDiv = document.getElementById("message");

let timeoutId = null;

usernameInput.addEventListener("input", () => {

  messageDiv.textContent = "";
  if (timeoutId) clearTimeout(timeoutId);

  const valor = usernameInput.value.trim();

  if (valor === "") return;  


  timeoutId = setTimeout(() => {
    if (usernamesExistentes.includes(valor.toLowerCase())) {
      messageDiv.textContent = "Nome já em uso";
    } else {
      messageDiv.textContent = "Nome disponível";
      messageDiv.style.color = "green";
      return;
    }
    messageDiv.style.color = "red";
  }, 2000);
});