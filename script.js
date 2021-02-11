/* ====================================*/
/* ====================================*/
/////////////////Definitions/////////////
/* ====================================*/
/* ====================================*/
const hireBtn = document.getElementById("banner");
const aboutBtn = document.getElementById("About-Btn");
const portfolioBtn = document.getElementById("Portfolio-Btn");
const numberGameBtn = document.getElementById("NumberGame-Btn");
const linksBtn = document.getElementById("LinksPage-Btn");
const pomodoroBtn = document.getElementById("Pomodoro-Btn");

const backLogo = document.getElementById("Logo");

const aboutSection = document.getElementById("about");
const hirePortfolioBtn = document.getElementById("hire-portfolio");

const portfolioEl = document.getElementById("portfolio");
const hireEl = document.getElementById("hire");
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
  hireEl.style.display = "none";
};

activatePortfolio = () => {
  aboutSection.style.display = "none";
  portfolioEl.style.display = "inline-block";
  hireEl.style.display = "none";
};
activateHire = () => {
  hireEl.style.display = "inline-block";
  aboutSection.style.display = "none";
  portfolioEl.style.display = "none";
};

/* ====================================*/
/* ====================================*/
/////////////////Buttons/////////////////
/* ====================================*/
/* ====================================*/
hireBtn.addEventListener("click", function () {
  console.log(`Hire Button Working`);
  activateHire();
  hireEl.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});

aboutBtn.addEventListener("click", function () {
  console.log(`About Button Working`);
  activateAbout();
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

portfolioBtn.addEventListener("click", function () {
  console.log(`Portfolio Button Working`);
  activatePortfolio();
  portfolio1.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});

hirePortfolioBtn.addEventListener("click", function () {
  hireBtn.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
  setTimeout(function () {
    activatePortfolio();
    portfolio1.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  }, 1000);
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
    portfolio1.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  }, 1000);
});

linksBtn.addEventListener("click", function () {
  console.log(`Flashcards Button Working`);
  portfolio1.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});

pomodoroBtn.addEventListener("click", function () {
  console.log(`Pomodoro Button Working`);
  portfolio2.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});

numberGameBtn.addEventListener("click", function () {
  console.log(`Flashcards Button Working`);
  portfolio3.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
});
