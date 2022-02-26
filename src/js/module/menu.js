const menu = document?.querySelector(".menu");
const close = document?.querySelector(".menu__close");
const gamb = document?.querySelector(".gamb");

const ACTIVE_CLASS = "header__menu_active";

gamb.addEventListener("click", () => {
  menu.classList.add(ACTIVE_CLASS);
});

close.addEventListener("click", () => {
  menu.classList.remove(ACTIVE_CLASS);
});
