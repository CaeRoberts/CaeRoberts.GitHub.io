/////////////////
// Definitions //
/////////////////
const portfolioBtn = document.getElementById("Portfolio-Btn");
const aboutBtn = document.getElementById("About-Btn");
const logoBtn = document.getElementById("Logo");
const backButton = document.getElementById("backButton");
const backButton1 = document.getElementById("backButton1");

/////////////////
// Open Events//
////////////////
const portfolioOpen = function () {
  document.getElementById("Portfolio-Section").style.display = "block";
  document.getElementById("frontpage").style.display = "none";
};

const aboutOpen = function () {
  document.getElementById("About-Section").style.display = "block";
  document.getElementById("About-Box").style.display = "block";
  document.getElementById("frontpage").style.display = "none";
};

const goBack = function () {
  document.getElementById("Portfolio-Section").style.display = "none";
  document.getElementById("About-Section").style.display = "none";
  document.getElementById("frontpage").style.display = "block";
};
/////////////////
// Button Area //
/////////////////

portfolioBtn.addEventListener("click", function () {
  console.log(`Portfolio Button Working`);
  portfolioOpen();
});

logoBtn.addEventListener("click", function () {
  console.log(`Logo Button Working`);
  goBack();
});

aboutBtn.addEventListener("click", function () {
  console.log(`About Button Working`);
  aboutOpen();
});

backButton.addEventListener("click", function () {
  console.log(`Logo Button Working`);
  goBack();
});

backButton1.addEventListener("click", function () {
  console.log(`Logo Button Working`);
  goBack();
});

// Semantic wEb

// psuedo selectors

// DIV and SPan //

// closure JS
