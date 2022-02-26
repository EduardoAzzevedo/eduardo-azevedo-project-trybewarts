// Variáveis
const buttonLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email-login');
const password = document.querySelector('#password');
const sendButton = document.querySelector('#submit-btn');
const checkBoxAgree = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const form = document.querySelector('#evaluation-form');
const emailInput = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const rate = document.querySelectorAll('.rate');

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

// Requisito 21
function generateParagraph(text) {
  const p = document.createElement('p');
  p.innerText = text;
  form.appendChild(p);
}

function getHouse() {
  return house.options[house.selectedIndex].value;
}

function getFamily() {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
}

function getContent() {
  const content = document.querySelectorAll('.subject');
  const arraySubjects = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked) {
      arraySubjects.push(content[i].value);
    }
  }
  return arraySubjects.join(', ');
}

function getRate() {
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      return rate[i].value;
    }
  }
}

function generateInfo() {
  form.innerHTML = '';
  generateParagraph(`Nome: ${inputName.value} ${inputLastName.value}`);
  generateParagraph(`Email: ${emailInput.value}`);
  generateParagraph(`Casa: ${getHouse()}`);
  generateParagraph(`Família: ${getFamily()}`);
  generateParagraph(`Materias: ${getContent()}`);
  generateParagraph(`Avaliação: ${getRate()}`);
  generateParagraph(`Observações: ${textarea.value}`);
}

sendButton.addEventListener('click', generateInfo);
// ultimo commit.
