let mainPage = document.getElementById('main-page');
let modifiedMainPage = window.getComputedStyle(mainPage);
let firstProjectBackLink = document.getElementById('first-page');

mainPage.addEventListener('transitionend', () => {
  console.log();
  if (modifiedMainPage.opacity == 0) {
    mainPage.style.visibility = 'hidden';
  }
});

firstProjectBackLink.addEventListener('click', () => {
  mainPage.style.visibility = 'visible';
});
