console.log("Script loaded!");

const shareButton = document.querySelector(".share-article");
const previewAuthor = document.querySelector(".preview__author");
const shareMenu = document.querySelector(".share-menu");
const exitshareArticle = document.querySelector(".share-article-exit");

const cssAnimationTime = 2500;


shareButton.addEventListener('click', fadeOutAuthorInfo);
exitshareArticle.addEventListener('click', fadeOutShareMenu);



function fadeOutAuthorInfo(){
  previewAuthor.classList.remove("fade-in");
  previewAuthor.classList.add("fade-out");
  shareMenu.classList.remove("fade-out");
  shareMenu.classList.add("fade-in");
}

function fadeOutShareMenu(){
  shareMenu.classList.remove("fade-in");
  shareMenu.classList.add("fade-out");
  previewAuthor.classList.remove("fade-out");
  previewAuthor.classList.add("fade-in");
}





// unhide menu
// fade in menu

// fade out menu
// hide menu