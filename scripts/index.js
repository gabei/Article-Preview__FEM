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

  const screenWidth = window.innerWidth;

  if (screenWidth < 680){
    previewAuthor.classList.add("no-display");
  }
  
  shareButton.disabled = true;
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
  return window.screen.width >= 680;
}

function checkIfShareMenuIsOpen(){
  shareMenuIsOpen = !shareMenu.classList.contains('no-display');
  if(shareMenuIsOpen) addTemporaryClickListener();
  return shareMenuIsOpen;
}

function addTemporaryClickListener(){
  document.addEventListener('click', (e)=> {
    if(e.target !== shareMenu){
      console.log("closing share menu");
      fadeOutShareMenu();
    }
  }, {once: true})
}