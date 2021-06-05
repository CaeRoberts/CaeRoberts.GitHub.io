/* ====================================*/
/* ====================================*/
/////////////////Definitions/////////////
/* ====================================*/
/* ====================================*/
const aboutBtn = document.getElementById("About-Btn");
const portfolioBtn = document.getElementById("Portfolio-Btn");
const numberGameBtn = document.getElementById("NumberGame-Btn");
const linksBtn = document.getElementById("LinksPage-Btn");
const pomodoroBtn = document.getElementById("Pomodoro-Btn");
const ImageSearchBtn = document.getElementById("ImageSearch-Btn");

const backLogo = document.getElementById("Logo");
const contentArea = document.getElementById("contentArea");
const aboutSection = document.getElementById("about");
const hirePortfolioBtn = document.getElementById("hire-portfolio");

const portfolioEl = document.getElementById("portfolio");
const portfolio0 = document.getElementById("portfolio0");
const portfolio1 = document.getElementById("portfolio1");
const portfolio2 = document.getElementById("portfolio2");
const portfolio3 = document.getElementById("portfolio3");
const portfolioLink = document.getElementById("portfolioHomeLink");
const scrollUp = document.getElementById("scrollUp");
const scrollUp2 = document.getElementById("scrollUp2");
const scrollUp3 = document.getElementById("scrollUp3");
const footerAbt = document.getElementById("footerAbt");
const footerPort = document.getElementById("footerPort");
/* ====================================*/
/* ====================================*/
/////////////////Functions///////////////
/* ====================================*/
/* ====================================*/
activateAbout = () => {
  aboutSection.style.display = "inline-block";
  portfolioEl.style.display = "none";
};

activatePortfolio = () => {
  aboutSection.style.display = "none";
  portfolioEl.style.display = "inline-block";
};


/* ====================================*/
/* ====================================*/
/////////////////Buttons/////////////////
/* ====================================*/
/* ====================================*/


aboutBtn.addEventListener("click", function () {
  activateAbout();
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

portfolioBtn.addEventListener("click", function () {
  activatePortfolio();
  portfolio0.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});


portfolioLink.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});
scrollUp.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});
scrollUp2.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});
scrollUp3.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});

footerAbt.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
  setTimeout(function () {
    activateAbout();
    aboutSection.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  }, 1000);
});
footerPort.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
  setTimeout(function () {
    activatePortfolio();
    portfolio0.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  }, 1000);
});
ImageSearchBtn.addEventListener("click", function () {
  activatePortfolio();
});

linksBtn.addEventListener("click", function () {
  activatePortfolio();
});

pomodoroBtn.addEventListener("click", function () {
  activatePortfolio();
});

numberGameBtn.addEventListener("click", function () {
  activatePortfolio();
});
