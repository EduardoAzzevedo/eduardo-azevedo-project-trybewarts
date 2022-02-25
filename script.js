// Variáveis
const buttonLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email-login');
const password = document.querySelector('#password');

function alertLogin() {
  if(email.value === "tryber@teste.com" && password.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

buttonLogin.addEventListener('click', alertLogin);