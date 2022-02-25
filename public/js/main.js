// const backdrop = document.querySelector('.backdrop');
// const sideDrawer = document.querySelector('.mobile-nav');
// const menuToggle = document.querySelector('#side-menu-toggle');

// function backdropClickHandler() {
//   backdrop.style.display = 'none';
//   sideDrawer.classList.remove('open');
// }

// function menuToggleClickHandler() {
//   backdrop.style.display = 'block';
//   sideDrawer.classList.add('open');
// }

// backdrop.addEventListener('click', backdropClickHandler);
// menuToggle.addEventListener('click', menuToggleClickHandler);

var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-nav");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = "Close";
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML = "Menu";
  }
});
