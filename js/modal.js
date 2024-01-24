const headerAccountButtons = document.querySelectorAll(".header__controls-button_account");

const modals = document.querySelectorAll(".modal");

headerAccountButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const authModal = document.querySelector(".modal-auth");
    if (authModal) openModal(authModal);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const authModal = document.querySelector(".modal-auth");
    const loginModal = document.querySelector(".modal-login");
    const sighInModal = document.querySelector(".modal-sign-in");
    const resetPasswordModal = document.querySelector(".modal-reset-password");

    const isCloseBtn = event.target.classList.contains("close");
    const isAuthBtn = event.target.classList.contains("modal__button_auth");
    const isLoginBtn = event.target.classList.contains("modal__button_login");
    const isSignInBtn = event.target.classList.contains("modal__button_sign-in");
    const isResetPasswordBtn = event.target.classList.contains("modal__button_reset-password");

    if (isCloseBtn) closeModal(event.currentTarget);

    if (isAuthBtn && authModal) {
      closeAllModals();
      openModal(authModal);
    }

    if (isLoginBtn && loginModal) {
      closeAllModals();
      openModal(loginModal);
    }

    if (isSignInBtn && sighInModal) {
      closeAllModals();
      openModal(sighInModal);
    }

    if (isResetPasswordBtn && resetPasswordModal) {
      closeAllModals();
      openModal(resetPasswordModal);
    }
  });
});

function closeAllModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => closeModal(modal));
}

function closeModal(modal) {
  modal.classList.remove("active");
}

function openModal(modal) {
  modal.classList.add("active");
}

function toggleModal(modal) {
  modal.classList.toggle("active");
}
