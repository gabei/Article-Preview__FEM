console.log("Script loaded!");

const shareButton = document.querySelector(".share-article");
const previewAuthor = document.querySelector(".preview__author");
const shareMenu = document.querySelector(".share-menu");
const exitshareArticle = document.querySelector(".share-article-exit");

const cssAnimationTime = 250;


shareButton.addEventListener('click', fadeInshareMenu);
exitshareArticle.addEventListener('click', fadeOutShareMenu);


function fadeInshareMenu(){
  shareMenu.classList.remove("fade-out");
  shareMenu.classList.add("fade-in");
}

function fadeOutShareMenu(){
  shareMenu.classList.remove("fade-in");
  shareMenu.classList.add("fade-out");
}