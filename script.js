/* ====================================*/
/* ====================================*/
/////////////////Definitions/////////////
/* ====================================*/
/* ====================================*/

const aboutBtn = document.getElementById("About-Btn");
const resumeBtn = document.getElementById("Resume-Btn");
const languagesBtn = document.getElementById("Languages-Btn");

/* ====================================*/
/////////////////Projects////////////////
/* ====================================*/

const flashcardsBtn = document.getElementById("Flashcards-Btn");
const linksBtn = document.getElementById("Website-Btn");
const teslaBtn = document.getElementById("Tesla-Btn");
const chatBtn = document.getElementById("Chat-Btn");
const pomodoroBtn = document.getElementById("Pomodoro-Btn");

/* ====================================*/
/////////////////Back Btns////////////////
/* ====================================*/
const backButton = document.getElementById("backButton1");
const backButton1 = document.getElementById("backButton2");

const backLogo = document.getElementById("Logo");

/* ====================================*/
/* ====================================*/
/////////////////Functions///////////////
/* ====================================*/
/* ====================================*/

const openAbout = () => {
  document.getElementById("frontpage").style.display = "none";
  document.getElementById("About-Section").style.display = "block";
  document.getElementById("About-Box").style.display = "block";
};

const openLang = () => {
  document.getElementById("Lang-Box").style.display = "block";
  document.getElementById("Lang-Section").style.display = "block";
  document.getElementById("frontpage").style.display = "none";
};

const backBtn = () => {
  document.getElementById("About-Section").style.display = "none";
  document.getElementById("About-Box").style.display = "none";
  document.getElementById("Lang-Box").style.display = "none";
  document.getElementById("Lang-Section").style.display = "none";
  document.getElementById("frontpage").style.display = "block";
};

/* ====================================*/
/* ====================================*/
/////////////////Buttons/////////////////
/* ====================================*/
/* ====================================*/

aboutBtn.addEventListener("click", function () {
  console.log(`About Button Working`);
  openAbout();
});
resumeBtn.addEventListener("click", function () {
  console.log(`Resume Button Working`);
});
languagesBtn.addEventListener("click", function () {
  console.log(`Languages Button Working`);
  openLang();
});

backButton.addEventListener("click", function () {
  console.log(`Back Button Working`);
  backBtn();
});
backButton1.addEventListener("click", function () {
  console.log(`Back Button Working`);
  backBtn();
});

backLogo.addEventListener("click", function () {
  console.log(`Back Button Working`);
  backBtn();
});

flashcardsBtn.addEventListener("click", function () {
  console.log(`Flashcards Button Working`);
});
linksBtn.addEventListener("click", function () {
  console.log(`links Button Working`);
});
teslaBtn.addEventListener("click", function () {
  console.log(`Tesla Button Working`);
});
chatBtn.addEventListener("click", function () {
  console.log(`Chat Button Working`);
});
pomodoroBtn.addEventListener("click", function () {
  console.log(`Pomodoro Button Working`);
});

// Get the modal
var pomoModal = document.getElementById("pomodoroModal");
var portModal = document.getElementById("portfolioModal");

// Get the button that opens the modal
var pomobtn = document.getElementById("PomodoroModalBtn");
var portbtn = document.getElementById("PortfolioModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
pomobtn.onclick = function () {
  pomoModal.style.display = "block";
  console.log(`pomoBtn Working`);
};
portbtn.onclick = function () {
  portModal.style.display = "block";
  console.log(`=portBtn Working`);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  pomoModal.style.display = "none";
  portModal.style.display = "none";
  console.log(`Span Working`);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == pomoModal) {
    pomoModal.style.display = "none";
    console.log(`Pomowindow Working`);
  } else if (event.target == portModal) {
    portModal.style.display = "none";
    console.log(`Portwindow Working`);
  }
};
