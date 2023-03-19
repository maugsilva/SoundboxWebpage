let menuButton = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

function slider(anything) {
  document.querySelector(".one").src = anything;
}

function toggleMenu() {
  menuButton.classList.toggle("bx-x");
}

function toggleNavbar() {
  navbar.classList.toggle("open");
}

menuButton.onclick = toggleMenu;
navbar.onclick = toggleNavbar;