console.log("Script loaded!");

const shareButton = document.querySelector(".share-article");
const previewAuthor = document.querySelector(".preview__author");
const shareMenu = document.querySelector(".share-menu");
const exitshareArticle = document.querySelector(".share-article-exit");


shareButton.addEventListener('click', function() {
  previewAuthor.classList.remove("fade-in");
  previewAuthor.classList.add("fade-out");
  shareMenu.classList.remove("fade-out");
  shareMenu.classList.add("fade-in");
});

exitshareArticle.addEventListener('click', function() {
  shareMenu.classList.remove("fade-in");
  shareMenu.classList.add("fade-out");
  previewAuthor.classList.remove("fade-out");
  previewAuthor.classList.add("fade-in");
});





// unhide menu
// fade in menu

// fade out menu
// hide menu