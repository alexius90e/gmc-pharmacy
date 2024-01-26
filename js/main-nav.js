const navItemElements = document.querySelectorAll(".main-nav__menu-item");

const burgerButton = document.querySelector(".header__controls-button_burger");

const mainNav = document.querySelector(".main-nav");

if (burgerButton && mainNav) {
  burgerButton.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
      event.currentTarget.classList.remove("active");
      burgerButton.classList.remove("active");
    }
  });
}

navItemElements.forEach((navItemElement) => {
  const navItemTextElement = navItemElement.querySelector(".main-nav__menu-item-text");
  const submenuWrapper = navItemElement.querySelector(".main-nav__menu-submenu-wrapper");
  if (submenuWrapper) {
    navItemTextElement.classList.add("main-nav__menu-item-text_with-submenu");
    navItemTextElement.addEventListener("click", (event) => {
      closeAllNavItems(event.currentTarget.parentNode);
      event.currentTarget.classList.toggle("active");
      submenuWrapper.classList.toggle("active");
    });
  }
});

function closeAllNavItems(currentElement) {
  navItemElements.forEach((element) => {
    if (element === currentElement) return;
    const navItemTextElement = element.querySelector(".main-nav__menu-item-text");
    const submenuWrapper = element.querySelector(".main-nav__menu-submenu-wrapper");
    if (navItemTextElement) navItemTextElement.classList.remove("active");
    if (submenuWrapper) submenuWrapper.classList.remove("active");
  });
}
