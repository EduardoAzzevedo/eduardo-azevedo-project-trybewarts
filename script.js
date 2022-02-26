// Variáveis
const buttonLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email-login');
const password = document.querySelector('#password');
const sendButton = document.querySelector('#submit-btn');
const checkBoxAgree = document.querySelector('#agreement');
sendButton.disabled = true;

function alertLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', alertLogin);

function disabled(_event) {
  if (checkBoxAgree.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

checkBoxAgree.addEventListener('click', disabled);
