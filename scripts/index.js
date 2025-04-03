console.log("Script loaded!");

const shareButton = document.querySelector(".share-article");
const previewAuthor = document.querySelector(".preview__author");
const shareMenu = document.querySelector(".share-menu");
const exitshareArticle = document.querySelector(".share-article-exit");

const cssAnimationTime = 250;


shareButton.addEventListener('click', fadeInshareMenu);
exitshareArticle.addEventListener('click', fadeOutShareMenu);


function fadeInshareMenu(){
  setTimeout(() => {
    exitshareArticle.disabled = false;
  },500);

  shareButton.disabled = true;
  if(!screenIsTabletSize()) previewAuthor.classList.add("no-display");
  shareMenu.classList.remove("no-display");
}

function fadeOutShareMenu(){
  setTimeout(() => {
    shareButton.disabled = false;
  },500);

  exitshareArticle.disabled = true;
  shareMenu.classList.add("no-display");
  previewAuthor.classList.remove("no-display");
}

function screenIsTabletSize(){
  console.log("Checking screenw width");
  console.log(window.screen.width >= 680);
  return window.screen.width >= 680;
}
