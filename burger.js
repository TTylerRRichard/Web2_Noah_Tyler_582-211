document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Optional: Close the menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove("show");
    }
  });
});