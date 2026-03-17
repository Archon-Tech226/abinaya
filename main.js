// NAVIGATION ELEMENTS
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navOverlay = document.getElementById("nav-overlay");
const navItems = document.querySelectorAll(".nav__links a");

// TOGGLE MENU
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navOverlay.classList.toggle("active");
});

// CLOSE NAV (LINK CLICK)
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navOverlay.classList.remove("active");
  });
});

// CLOSE NAV (OVERLAY CLICK)
navOverlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navOverlay.classList.remove("active");
});

// ==============================
// 🔥 ACTIVE NAV LINK ON SCROLL
// ==============================
const sections = document.querySelectorAll("section, header");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ==============================
// ✨ STICKY NAVBAR SHADOW ON SCROLL
// ==============================
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ==============================
// 🚀 SMOOTH SCROLL (BETTER UX)
// ==============================
navItems.forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ==============================
// 💎 SCROLL REVEAL (PREMIUM ANIMATION)
// ==============================
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1200,
    easing: "ease-in-out",
    reset: false
  });

  // HEADER
  sr.reveal(".profile-img", { origin: "top", delay: 200 });
  sr.reveal(".header__content h1", { origin: "bottom", delay: 300 });
  sr.reveal(".header__content p", { origin: "bottom", delay: 500 });
  sr.reveal(".header__content .btn", { origin: "bottom", delay: 700 });

  // ABOUT
  sr.reveal(".about__content", { origin: "bottom", delay: 300 });

  // SERVICES
  sr.reveal(".service__card", { interval: 200, origin: "bottom" });

  // ACHIEVEMENTS
  sr.reveal(".achievement__card", { interval: 200, origin: "bottom" });

  // PROJECTS
  sr.reveal(".portfolio__card", { interval: 200, origin: "bottom" });

  // CONTACT
  sr.reveal("#contact form", { origin: "bottom", delay: 300 });
}
