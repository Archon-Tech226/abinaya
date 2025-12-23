// NAVIGATION TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navOverlay = document.getElementById("nav-overlay");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navOverlay.classList.toggle("active");
});

// CLOSE NAV WHEN LINK CLICKED
const navLinkItems = navLinks.querySelectorAll("a");
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navOverlay.classList.remove("active");
  });
});

// CLOSE NAV WHEN OVERLAY CLICKED
navOverlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navOverlay.classList.remove("active");
});

// SCROLL REVEAL EFFECT (Optional)
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: false
  });

  // HEADER
  sr.reveal('.header__content h1', { origin: 'left' });
  sr.reveal('.header__content p', { origin: 'left', delay: 300 });
  sr.reveal('.header__content .btn', { origin: 'left', delay: 600 });

  // ABOUT
  sr.reveal('.about__image', { origin: 'left', delay: 200 });
  sr.reveal('.about__content', { origin: 'right', delay: 400 });

  // SERVICES
  sr.reveal('.service__card', { interval: 200 });

  // ACHIEVEMENTS
  sr.reveal('.achievement__card', { interval: 200 });

  // PROJECTS
  sr.reveal('.portfolio__card', { interval: 200 });

  // CONTACT
  sr.reveal('#contact form', { origin: 'bottom', delay: 200 });
}
