let mainPage = document.getElementById('main-page');
let firstProject = document.getElementById('first-project');
let secondProject = document.getElementById('second-project');
let thirdProject = document.getElementById('third-project');
let projectSection = document.getElementById('projects');
let hideMainPage = document.getElementById('hide-main-page');
let showMainPage = document.getElementById('show-main-page');
let hideFirstProject = document.getElementById('hide-first-project');
let showFirstProject = document.getElementById('show-first-project');
let hideSecondProject = document.getElementById('hide-second-project');
let showSecondProject = document.getElementById('show-second-project');
let hideThirdProject = document.getElementById('hide-third-project');
let showThirdProject = document.getElementById('show-third-project');

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

hideSecondProject.addEventListener('click', () => {
  secondProject.style.opacity = 0;
  secondProject.style.visibility = 'hidden';
});

showSecondProject.addEventListener('click', () => {
  secondProject.style.opacity = 1;
  secondProject.style.visibility = 'visible';
});

hideThirdProject.addEventListener('click', () => {
  projectSection.style.opacity = 0;
  projectSection.style.visibility = 'hidden';
});

showThirdProject.addEventListener('click', () => {
  projectSection.style.opacity = 1;
  projectSection.style.visibility = 'visible';
});