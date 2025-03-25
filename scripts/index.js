console.log("Script loaded!");

const shareButton = document.querySelector(".share-article");
const previewAuthor = document.querySelector(".preview__author");
const shareMenu = document.querySelector(".share-menu");
const exitshareArticle = document.querySelector(".share-article-exit");


shareButton.addEventListener('click', function() {
  previewAuthor.classList.toggle('hide-menu');
  shareMenu.classList.toggle('hide-menu');


})




// unhide menu
// fade in menu

// fade out menu
// hide menu