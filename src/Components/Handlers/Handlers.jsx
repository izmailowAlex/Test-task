const BODY = document.querySelector('#root').parentElement;

export const toggleBurgerMenu = () => {
  const BTN_BURGER = document.querySelector("#burger");
  BTN_BURGER.classList.toggle('burger-menu__active');
}

export const toggleBurgerMenuNav = () => {
  const NAV = document.querySelector('#nav');
  NAV.classList.toggle('activated');
}

export const bodyHidden = () => {
  BODY.classList.toggle("hidden");
  const MAIN = document.querySelector(".main");
  MAIN.classList.toggle("block");
}