let mainPage = document.getElementById('main-page');
let firstProject = document.getElementById('first-project');
let secondProject = document.getElementById('second-project');
let thirdProject = document.getElementById('third-project');
let fourthProject = document.getElementById('fourth-project');
let projectSection = document.getElementById('projects');
let hideMainPage = document.getElementById('hide-main-page');
let showMainPage = document.getElementById('show-main-page');
let hideFirstProject = document.getElementById('hide-first-project');
let showFirstProject = document.getElementById('show-first-project');
let hideSecondProject = document.getElementById('hide-second-project');
let showSecondProject = document.getElementById('show-second-project');
let hideThirdProject = document.getElementById('hide-third-project');
let showThirdProject = document.getElementById('show-third-project');
let hideFourthProject = document.getElementById('hide-fourth-project');
let showFourthProject = document.getElementById('show-fourth-project');
let hideProjectSection = document.getElementById('hide-project-section');
let showProjectSection = document.getElementById('show-project-section');

function hide(button, target) {
  button.addEventListener('click', () => {
    target.style.opacity = 0;
    target.style.visibility = 'hidden';
  });
}

function show(button, target) {
  button.addEventListener('click', () => {
    target.style.opacity = 1;
    target.style.visibility = 'visible';
  });
}

hide(hideMainPage, mainPage);
show(showMainPage, mainPage);

hide(hideFirstProject, firstProject);
show(showFirstProject, firstProject);

hide(hideSecondProject, secondProject);
show(showSecondProject, secondProject);

hide(hideThirdProject, thirdProject);
show(showThirdProject, thirdProject);

hide(hideFourthProject, fourthProject);
show(showFourthProject, fourthProject);

hide(hideProjectSection, projectSection);
show(showProjectSection, projectSection);