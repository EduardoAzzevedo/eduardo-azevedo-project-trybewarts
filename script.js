// Variáveis
const buttonLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email-login');
const password = document.querySelector('#password');
const sendButton = document.querySelector('#submit-btn');
const checkBoxAgree = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
sendButton.disabled = true;
counter.innerHTML = `Máximo de caracteres: ${500}`;

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

// Referência: https://www.youtube.com/watch?v=LiQcxaC2Ek4&ab_channel=WebdesignemFoco
function textareaCounter(event) {
  const sub = event.target.maxLength - event.target.textLength;
  counter.innerHTML = `Máximo de caracteres: ${sub}`;
}

textarea.addEventListener('keyup', textareaCounter);
