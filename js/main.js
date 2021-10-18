// Toggling Side Menu
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav__links");
const linkItems = document.querySelectorAll(".nav__links li");
const links = document.querySelectorAll("a");

// prevent the links from going to the top of the page
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// stop the event bubbling
navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("open");
  burgerMenu.classList.toggle("active-burger");
});

linkItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    burgerMenu.classList.remove("active-burger");
  });
});
// close the side menu when clicking the body
document.addEventListener("click", () => {
  navLinks.classList.remove("open");
  burgerMenu.classList.remove("active-burger");
});
// ==================== //
