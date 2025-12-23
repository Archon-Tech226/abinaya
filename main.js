const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const navOverlay = document.getElementById("nav-overlay");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navOverlay.classList.toggle("active", isOpen);
  menuBtnIcon.className = isOpen
    ? "ri-close-line"
    : "ri-menu-3-line";
});

navOverlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navOverlay.classList.remove("active");
  menuBtnIcon.className = "ri-menu-3-line";
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navOverlay.classList.remove("active");
    menuBtnIcon.className = "ri-menu-3-line";
  }
});
