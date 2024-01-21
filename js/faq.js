const faqButtonsElems = document.querySelectorAll(".faq__buttons");

faqButtonsElems.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) return;
    const faqItemId = event.target.dataset.itemid;
    const targetFaqItem = document.getElementById(faqItemId);
    if (!targetFaqItem) return;
    const faqItems = document.querySelectorAll(".faq__content-item");
    const faqButtons = element.querySelectorAll(".faq__buttons .button");
    [...faqButtons, ...faqItems].forEach((element) => element.classList.remove("active"));
    event.target.classList.add("active");
    targetFaqItem.classList.add("active");
  });
});
