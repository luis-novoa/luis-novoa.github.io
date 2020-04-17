let mainPage = document.getElementById('main-page');
let firstProject = document.getElementById('first-project');
let secondProject = document.getElementById('second-project');
let hideMainPage = document.getElementById('hide-main-page');
let showMainPage = document.getElementById('show-main-page');
let hideFirstProject = document.getElementById('hide-first-project');
let showFirstProject = document.getElementById('show-first-project');

hideMainPage.addEventListener('click', () => {
  mainPage.style.opacity = 0;
  mainPage.style.visibility = 'hidden';
});

showMainPage.addEventListener('click', () => {
  mainPage.style.opacity = 1;
  mainPage.style.visibility = 'visible';
});

hideFirstProject.addEventListener('click', () => {
  firstProject.style.opacity = 0;
  firstProject.style.visibility = 'hidden';
});

showFirstProject.addEventListener('click', () => {
  firstProject.style.opacity = 1;
  firstProject.style.visibility = 'visible';
});