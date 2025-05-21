const main = document.querySelector("#main");
const portfolio = document.querySelector("#Portfolio");
const active = document.querySelectorAll("li");
const aboutLi = document.querySelector(".li-about");
const side = document.querySelector(".side");
const homeLi = document.querySelector(".li-home");
const contactLi = document.querySelector(".li-contact");
const portfolioLi = document.querySelector(".li-Portfolio");
const hamburger = document.querySelector("#hamburger");
const svg = document.querySelectorAll(".svg");
const svgRing = document.querySelector(".svg-ring");
const img = document.querySelector(".img");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const con1 = document.querySelector(".con1");
const con2 = document.querySelector(".con2");
const con3 = document.querySelector(".con3");

radio1.addEventListener("click", () => {
  con1.style.display = "flex";
  con2.style.display = "none";
  con3.style.display = "none";
});
radio2.addEventListener("click", () => {
  con1.style.display = "none";
  con2.style.display = "flex";
  con3.style.display = "none";
});

radio3.addEventListener("click", () => {
  con1.style.display = "none";
  con2.style.display = "none";
  con3.style.display = "flex";
});

////////////////////////
active.forEach((link) => {
  link.addEventListener("click", () => {
    active.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    
    // Close mobile menu when a navigation link is clicked
    if (window.innerWidth <= 750) {
      side.style.display = "none";
      hamburger.classList.remove("is-open");
      hamburger.classList.add("is-closed");
      svg.forEach((svg) => {
        svg.style.backgroundColor = "black";
      });
      svgRing.style.stroke = "black";
    }
  });
});

//////////////////////
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-open");
  hamburger.classList.toggle("is-closed");
  if (hamburger.classList.contains("is-open")) {
    side.style.display = "flex";
    svg.forEach((svg) => {
      svg.style.background = "white";
    });
    svgRing.style.stroke = "white";
  }
  if (hamburger.classList.contains("is-closed")) {
    side.style.display = "none";
    svg.forEach((svg) => {
      svg.style.backgroundColor = "black";
    });
    svgRing.style.stroke = "black";
  }
});

homeLi.classList.add("active");
// log when scroll
window.addEventListener("scroll", () => {
console.log(window.scrollY);
  // Improved section highlighting logic
  if (window.scrollY < 1100) {
    homeLi.classList.add("active");
    aboutLi.classList.remove("active");
    portfolioLi.classList.remove("active");
    contactLi.classList.remove("active");
        side.classList.remove("side-active");
    side.classList.add("not_active");
  } else if (window.scrollY >= 1100 && window.scrollY < 2600) {
    homeLi.classList.remove("active");
    aboutLi.classList.add("active");
    portfolioLi.classList.remove("active");
    contactLi.classList.remove("active");
    side.classList.add("side-active");
    side.classList.remove("not_active");
  } else if (window.scrollY >= 2600 && window.scrollY < 3600) {
    homeLi.classList.remove("active");
    aboutLi.classList.remove("active");
    portfolioLi.classList.add("active");
    contactLi.classList.remove("active");
        side.classList.remove("side-active");
    side.classList.add("not_active");
  } else if (window.scrollY >= 2600) {
    homeLi.classList.remove("active");
    aboutLi.classList.remove("active");
    portfolioLi.classList.remove("active");
    contactLi.classList.add("active");
    side.classList.add("side-active");
    side.classList.remove("not_active");
  }

  if (
    (window.scrollY > 0 &&
      window.scrollY < 640 &&
      !hamburger.classList.contains("is-open")) ||
    (window.scrollY > 2160 &&
      window.scrollY < 3040 &&
      !hamburger.classList.contains("is-open"))
  ) {
    svg.forEach((svg) => {
      svg.style.background = "black";
    });
    svgRing.style.stroke = "black";
  } else if (
    (window.scrollY > 640 &&
      window.scrollY < 2160 &&
      !hamburger.classList.contains("is-open")) ||
    (window.scrollY > 3040 &&
      window.scrollY < 3100 &&
      !hamburger.classList.contains("is-open"))
  ) {
    svg.forEach((svg) => {
      svg.style.background = "white";
    });
    svgRing.style.stroke = "white";
  }
});
