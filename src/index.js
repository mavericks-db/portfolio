import './style.scss';
import close from './assets/close-mobileModal.svg';
import live from './assets/icon-live.png';
import source from './assets/icon-source.png';
import mockAwc from './assets/img/awc2022/mock_awc.png';
import awc from './assets/img/awc2022/app_screenshot_awc.png';
import mockAwb from './assets/img/awesome_books/mock_awb.png';
import awb from './assets/img/awesome_books/app_screenshot_awb.png';
import mockTdl from './assets/img/to-do-list/mock_tdl.png';
import tdl from './assets/img/to-do-list/app_screenshot_tdl.png';
import mockLdb from './assets/img/leaderboard/mock_ldb.png';
import ldb from './assets/img/leaderboard/app_screenshot_ldb.png';
import mockApi from './assets/img/primeshows/mock_api.png';
import api from './assets/img/primeshows/app_screenshot_api.png';
import sample from './assets/desktop-details05.png';
import sample2 from './assets/projectImage05.png';

const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'AWC 2022',
    img: awc,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: mockAwc,
    imgD: mockAwc,
    name: 'Asia Web Conference 2022',
    lang: ['HTML', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone01/',
    sourceLink: 'https://github.com/mavericks-db/capstone01',
    description: 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
  },
  {
    h3: 'Awesome Books',
    img: awb,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: mockAwb,
    imgD: mockAwb,
    name: 'Awesome Books App',
    lang: ['HTML', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/awesome-books-ES6/',
    sourceLink: 'https://github.com/mavericks-db/awesome-books-ES6',
    description: 'This is an educational project to make a simple website that displays a list of books and allows you to add and remove books from that list. The goal is to make it more organized by using modules and practice the ES6 syntax.',
  },
  {
    h3: 'To-Do List',
    img: tdl,
    li: ['Webpack', 'Sass', 'JavaScript', 'Linters'],
    imgM: mockTdl,
    imgD: mockTdl,
    name: 'To-Do List App',
    lang: ['Webpack', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/todo-list/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/todo-list',
    description: 'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: ldb,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: mockLdb,
    imgD: mockLdb,
    name: 'Leaderboard App',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/leaderboard',
    description: 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Prime Shows HD',
    img: api,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: mockApi,
    imgD: mockApi,
    name: 'Prime Shows HD',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone02/dist/',
    sourceLink: 'https://github.com/mavericks-db/capstone02',
    description: 'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team). Built with API, Webpack, HTML, Sass and JavaScript.',
  },
  {
    h3: 'Multi-Post Stories Gain+Glory',
    img: sample,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: sample2,
    imgD: sample,
    name: 'Keeping track of hundreds of components',
    lang: ['Ruby on rails', 'css', 'JavScript'],
    langDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://github.com/mavericks-db',
    sourceLink: 'https://github.com/mavericks-db',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

// Create Card Items Dynamically
const gridItem = [];
const descriptionContainer = [];
const h3 = [];
const ul = [];
const li1 = [];
const li2 = [];
const li3 = [];
const li4 = [];
const button1 = [];
const button2 = [];

for (let i = 0; i < 6; i += 1) {
  gridItem[i] = document.createElement('div');
  gridItem[i].classList.add('gridItem');
  gridItem[i].style.backgroundImage = `url(${cardObj[i].img})`;
  gridItem[i].style.backgroundSize = 'contain';
  gridItem[i].style.backgroundRepeat = 'no-repeat';
  gridItem[i].style.backgroundPosition = 'top';


  descriptionContainer[i] = document.createElement('div');
  descriptionContainer[i].classList.add('descriptionContainer');

  h3[i] = document.createElement('h3');
  const h3text = document.createTextNode(cardObj[i].h3);
  h3[i].append(h3text);

  ul[i] = document.createElement('ul');
  li1[i] = document.createElement('li');
  const li1text = document.createTextNode(cardObj[i].li[0]);
  li1[i].append(li1text);

  li2[i] = document.createElement('li');
  const li2text = document.createTextNode(cardObj[i].li[1]);
  li2[i].append(li2text);

  li3[i] = document.createElement('li');
  const li3text = document.createTextNode(cardObj[i].li[2]);
  li3[i].append(li3text);

  li4[i] = document.createElement('li');
  const li4text = document.createTextNode(cardObj[i].li[3]);
  li4[i].append(li4text);

  button1[i] = document.createElement('button');
  const button1text = document.createTextNode('See Project');
  button1[i].append(button1text);
  button1[i].setAttribute('type', 'button');
  button1[i].classList.add('seeProject');
  button1[i].setAttribute('aria-label', 'See Project Button');
  button1[i].setAttribute('data-index', i);

  button2[i] = document.createElement('button');
  const button2text = document.createTextNode('See Project');
  button2[i].append(button2text);
  button2[i].setAttribute('type', 'button');
  button2[i].classList.add('seeProjectDesktop');
  button2[i].setAttribute('aria-label', 'See Project Button');
  button2[i].setAttribute('data-index', i);

  ul[i].append(li1[i], li2[i], li3[i], li4[i]);
  descriptionContainer[i].append(h3[i], ul[i], button1[i], button2[i]);
  gridItem[i].append(descriptionContainer[i]);
  gridContainer.append(gridItem[i]);
}

const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');

function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  modalContainer.style.display = 'none';
}

window.onclick = function global(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);

// Mobile Modal
const seeProject = document.querySelectorAll('.seeProject');

// Create div mobileModal dynamically
const mobileModal = [];

for (let i = 0; i < gridItem.length; i += 1) {
  mobileModal[i] = document.createElement('div');
  mobileModal[i].classList.add('mobileModal');
  gridItem[i].append(mobileModal[i]);
}

function openMobileModal(e) {
  const i = e.target.dataset.index;
  mobileModal[i].style.display = 'block';
  const div1 = document.createElement('div');
  div1.classList.add('mobileMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeMobile');
  img1.setAttribute('src', close);
  function closeMobileModal() {
    mobileModal[i].style.display = 'none';
    div1.remove();
  }
  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgMobile');
  img2.setAttribute('src', cardObj[i].imgM);
  const h2 = document.createElement('h2');
  h2.classList.add('projectName');
  h2.innerHTML = cardObj[i].name;

  const ul = document.createElement('ul');
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li0text = document.createTextNode(cardObj[i].lang[0]);
  const li1text = document.createTextNode(cardObj[i].lang[1]);
  const li2text = document.createTextNode(cardObj[i].lang[2]);
  li0.appendChild(li0text);
  li1.appendChild(li1text);
  li2.appendChild(li2text);
  ul.append(li0, li1, li2);

  const p = document.createElement('p');
  p.classList.add('projectDescription');
  p.innerText = cardObj[i].description;

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerMobile');
  const a1 = document.createElement('a');
  a1.classList.add('liveBtn');
  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = cardObj[i].liveLink;
  const imga1 = document.createElement('img');
  imga1.setAttribute('src', live);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].sourceLink;
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', source);
  a2.appendChild(imga2);

  div1.appendChild(img1);
  div1.appendChild(img2);
  div1.appendChild(h2);
  div1.appendChild(ul);
  div1.appendChild(p);
  div2.appendChild(a1);
  div2.appendChild(a2);
  div1.appendChild(div2);
  mobileModal[i].appendChild(div1);
}

seeProject.forEach((element) => {
  element.addEventListener('click', openMobileModal);
});

// Desktop Modal
const seeProjectDesktop = document.querySelectorAll('.seeProjectDesktop');
const desktopModal = document.querySelector('.desktopModal');

function openDesktopModal(e) {
  const i = e.target.dataset.index;
  desktopModal.style.display = 'block';

  const div1 = document.createElement('div');
  div1.classList.add('desktopMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeDesktop');
  img1.setAttribute('src', close);

  function closeMobileModal() {
    desktopModal.style.display = 'none';
    div1.remove();
  }

  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgDesktop');
  img2.setAttribute('src', cardObj[i].imgD);

  const div3 = document.createElement('div');
  div3.classList.add('desktopModalHeadline');

  const h2 = document.createElement('h2');
  h2.classList.add('projectNameDesktop');
  h2.innerHTML = cardObj[i].name;

  const ul = document.createElement('ul');
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li0text = document.createTextNode(cardObj[i].langDesktop[0]);
  const li1text = document.createTextNode(cardObj[i].langDesktop[1]);
  const li2text = document.createTextNode(cardObj[i].langDesktop[2]);
  const li3text = document.createTextNode(cardObj[i].langDesktop[3]);
  const li4text = document.createTextNode(cardObj[i].langDesktop[4]);
  const li5text = document.createTextNode(cardObj[i].langDesktop[5]);
  li0.appendChild(li0text);
  li1.appendChild(li1text);
  li2.appendChild(li2text);
  li3.appendChild(li3text);
  li4.appendChild(li4text);
  li5.appendChild(li5text);
  ul.append(li0, li1, li2, li3, li4, li5);

  const p = document.createElement('p');
  p.classList.add('projectDescriptionDesktop');
  p.innerText = cardObj[i].description;

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerDesktop');

  const a1 = document.createElement('a');
  a1.classList.add('liveBtnDesktop');

  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = cardObj[i].liveLink;

  const imga1 = document.createElement('img');
  imga1.setAttribute('src', live);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtnDesktop');

  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].sourceLink;

  const imga2 = document.createElement('img');
  imga2.setAttribute('src', source);
  a2.appendChild(imga2);
  div1.appendChild(img1);
  div1.appendChild(img2);
  div3.appendChild(h2);
  div1.appendChild(div3);
  div1.appendChild(ul);
  div1.appendChild(p);
  div2.appendChild(a1);
  div2.appendChild(a2);
  div3.appendChild(div2);
  desktopModal.appendChild(div1);
}

seeProjectDesktop.forEach((element) => {
  element.addEventListener('click', openDesktopModal);
});

// Form Validation - Mobile
const formMobile = document.querySelector('.formMobile');
const nameInputMobile = document.querySelector('.nameInputMobile');
const emailInputMobile = document.querySelector('.emailInputMobile');
const messageInputMobile = document.querySelector('.messageInputMobile');
const submitBtnMobile = document.querySelector('.submitBtnMobile');
let isFormValid = false;

// Local Storage - Mobile & Desktop
let formObj = {
  fullNameMobile: '',
  emailMobile: '',
  messageMobile: '',
  firstName: '',
  lastName: '',
  emailDesktop: '',
  messageDesktop: '',
};

function storeInlS() {
  localStorage.setItem('myData', JSON.stringify(formObj));
}

function validation() {
  const str = emailInputMobile.value.trim();
  const regEx = /[A-Z]/g;
  if (regEx.test(str)) {
    submitBtnMobile.setCustomValidity('Sorry, this form has not been submitted. The content of the email field has to be in lower case. \n Please check your inputs and reload the page');
    submitBtnMobile.reportValidity();
    isFormValid = false;
    storeInlS();
  } else {
    isFormValid = true;
  }
  return isFormValid;
}

formMobile.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
  if (isFormValid) {
    submitBtnMobile.setCustomValidity('The form has been submitted. \n Thank you for contacting me.');
    submitBtnMobile.reportValidity();
    formMobile.submit();
  }
});

// Form Validation - Desktop
const formDesktop = document.querySelector('.formDesktop');
const nameInputDesktop1 = document.querySelector('.nameInputDesktop1');
const nameInputDesktop2 = document.querySelector('.nameInputDesktop2');
const emailInputDesktop = document.querySelector('.emailInputDesktop');
const messageInputDesktop = document.querySelector('.messageInputDesktop');
const submitBtnDesktop = document.querySelector('.submitBtnDesktop');

function validationDesktop() {
  const str = emailInputDesktop.value.trim();
  const regEx = /[A-Z]/g;
  if (regEx.test(str)) {
    submitBtnDesktop.setCustomValidity('Sorry, this form has not been submitted. The content of the email field has to be in lower case. \n Please check your inputs and reload the page.');
    submitBtnDesktop.reportValidity();
    isFormValid = false;
    storeInlS();
  } else {
    isFormValid = true;
  }
  return isFormValid;
}

formDesktop.addEventListener('submit', (e) => {
  e.preventDefault();
  validationDesktop();
  if (isFormValid) {
    submitBtnDesktop.setCustomValidity('The form has been submitted. \n Thank you for contacting me.');
    submitBtnDesktop.reportValidity();
    formDesktop.submit();
  }
});

// Local Storage - Mobile & Desktop
const keys = Object.keys(formObj);
function storeItem(e) {
  const keyNum = keys.indexOf(e.target.name);
  formObj[keys[keyNum]] = e.target.value;
}

nameInputMobile.addEventListener('input', storeItem);
emailInputMobile.addEventListener('input', storeItem);
messageInputMobile.addEventListener('input', storeItem);
nameInputDesktop1.addEventListener('input', storeItem);
nameInputDesktop2.addEventListener('input', storeItem);
emailInputDesktop.addEventListener('input', storeItem);
messageInputDesktop.addEventListener('input', storeItem);

function placeItems() {
  nameInputMobile.value = formObj.fullNameMobile;
  emailInputMobile.value = formObj.emailMobile;
  messageInputMobile.value = formObj.messageMobile;
  nameInputDesktop1.value = formObj.firstName;
  nameInputDesktop2.value = formObj.lastName;
  emailInputDesktop.value = formObj.emailDesktop;
  messageInputDesktop.value = formObj.messageDesktop;
}

window.onload = function retrieve() {
  if (localStorage.getItem('myData')) {
    formObj = JSON.parse(localStorage.getItem('myData'));
    placeItems();
  } else {
    localStorage.clear();
  }
};
