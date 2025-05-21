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

// Portfolio projects arrays for EN and AR
const portfolioProjectsEN = [
  {
    src: './images/restaurant.gif',
    title: 'Restaurant Website',
    desc: 'In this project I built a website for a restaurant using MERN stack (MongoDB, Express, React, Node.js)',
    link: 'https://mern-restaurant.onrender.com/',

  },
  {
    src: './images/player.gif',
    title: 'Video Player',
    desc: 'A custom video player application with playback controls and responsive design',
    link: 'https://abdullaalwaki.github.io/videoplyer/',

  },
  {
    src: './images/Ramadantimer.gif',
    title: 'Ramadan Timer',
    desc: 'An interactive timer application for tracking Ramadan prayer and meal times',
    link: 'https://abdullaalwaki.github.io/RamadanTimer/',

  }
];

function renderPortfolioCards() {
  const container = document.querySelector('.portfolio_card');
  if (!container) return;
  container.innerHTML = portfolioProjectsEN.map(proj => `
    <div class="project-card">
      <img class="img" src="${proj.src}" alt="${proj.title}" />
      <div class="text">
        <h2>${proj.title}</h2>
        <p>${proj.desc}</p>
        <a href="${proj.link}";" target="_blank">View Project</a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioCards();
});

// Move About and Portfolio section HTML into JS and inject on DOMContentLoaded
// Portfolio content as array
const portfolioProjects = [
  {
    type: 'iframe',
    src: 'https://mern-restaurant.onrender.com/',
    title: 'Restaurant Website',
    desc: 'In this project I built a website for a restaurant using MERN stack (MongoDB, Express, React, Node.js)',
    link: 'https://mern-restaurant.onrender.com/',
    color: 'rgb(0, 64, 255)',
    style: ''
  },
  {
    type: 'iframe',
    src: 'https://abdullaalwaki.github.io/videoplyer/',
    title: 'Video Player',
    desc: 'A custom video player application with playback controls and responsive design',
    link: 'https://abdullaalwaki.github.io/videoplyer/',
    color: 'rgb(0, 153, 255)',
    style: 'background: red;'
  },
  {
    type: 'img',
    src: './images/Ramadantimer.gif',
    title: 'Ramadan Timer',
    desc: 'An interactive timer application for tracking Ramadan prayer and meal times',
    link: 'https://abdullaalwaki.github.io/RamadanTimer/',
    color: 'rgb(0, 102, 255)',
    style: ''
  }
];
