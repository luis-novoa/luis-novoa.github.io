let mainPage = document.getElementById('main-page');
let modifiedMainPage = window.getComputedStyle(mainPage);
let hideMainPage = document.getElementById('hide-main-page');
let showMainPage = document.getElementById('show-main-page');

hideMainPage.addEventListener('click', () => {
  mainPage.style.opacity = 0;
  mainPage.style.visibility = 'hidden';
});

showMainPage.addEventListener('click', () => {
  mainPage.style.opacity = 1;
  mainPage.style.visibility = 'visible';
});