const navMenu = document.querySelector(".header__categories");
const navToggle = document.querySelector("#iconMenuTrigger");

function burgerToggle() {
  if (navMenu.classList.contains("header__categories-open")) {
    navMenu.classList.remove("header__categories-open");
    navMenu.classList.add("header__categories-close");

    navToggle.classList.remove("header__menu-burger-open");
    navToggle.classList.add("header__menu-burger-close");
  } else {
    navMenu.classList.add("header__categories-open");
    navMenu.classList.remove("header__categories-close");

    navToggle.classList.remove("header__menu-burger-close");
    navToggle.classList.add("header__menu-burger-open");
  }
}

navToggle.addEventListener("click", burgerToggle);