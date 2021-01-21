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

// const portfolioBtn = document.getElementById("Portfolio-Btn");
// const aboutBtn = document.getElementById("About-Btn");
// const logoBtn = document.getElementById("Logo");
// const backButton = document.getElementById("backButton");
// const backButton1 = document.getElementById("backButton1");

// /////////////////
// // Open Events//
// ////////////////
// const portfolioOpen = function () {
//   document.getElementById("Portfolio-Section").style.display = "block";
//   document.getElementById("frontpage").style.display = "none";
// };

// const aboutOpen = function () {
//   document.getElementById("About-Section").style.display = "block";
//   document.getElementById("About-Box").style.display = "block";
//   document.getElementById("frontpage").style.display = "none";
// };

// const goBack = function () {
//   document.getElementById("Portfolio-Section").style.display = "none";
//   document.getElementById("About-Section").style.display = "none";
//   document.getElementById("frontpage").style.display = "block";
// };
// /////////////////
// // Button Area //
// /////////////////

// portfolioBtn.addEventListener("click", function () {
//   console.log(`Portfolio Button Working`);
//   portfolioOpen();
// });

// logoBtn.addEventListener("click", function () {
//   console.log(`Logo Button Working`);
//   goBack();
// });

// aboutBtn.addEventListener("click", function () {
//   console.log(`About Button Working`);
//   aboutOpen();
// });

// backButton.addEventListener("click", function () {
//   console.log(`Logo Button Working`);
//   goBack();
// });

// backButton1.addEventListener("click", function () {
//   console.log(`Back Button(A) Working`);
//   goBack();
// });

// Semantic wEb

// psuedo selectors

// DIV and SPan //

// closure JS
