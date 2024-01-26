const catalogViewButtons = document.querySelectorAll(".catalog__controls-view-button");
const cardsTilesClassName = "catalog__cards_tiles";

catalogViewButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const catalogCardsElem = document.querySelector(".catalog__cards");
    const isRowButton = event.currentTarget.classList.contains(
      "catalog__controls-view-button_rows"
    );
    const isTileButton = event.currentTarget.classList.contains(
      "catalog__controls-view-button_tiles"
    );

    if (catalogCardsElem && isRowButton) {
      catalogCardsElem.classList.remove(cardsTilesClassName);
      catalogViewButtons.forEach((button) => button.classList.remove("active"));
      event.currentTarget.classList.add("active");
    }

    if (catalogCardsElem && isTileButton) {
      catalogCardsElem.classList.add(cardsTilesClassName);
      catalogViewButtons.forEach((button) => button.classList.remove("active"));
      event.currentTarget.classList.add("active");
    }
  });
});

const catalogFilterCheckboxes = document.querySelectorAll(".catalog__filter-checkboxes");

catalogFilterCheckboxes.forEach((catalogFilterCheckboxElem) => {
  catalogFilterCheckboxElem.addEventListener("click", (event) => {
    const isToggler = event.target.classList.contains("catalog__filter-checkboxes-toggler");
    if (!isToggler) return;
    const wrapper = event.currentTarget.querySelector(".catalog__filter-checkboxes-wrap");
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = null;
      event.target.innerText = "Посмотреть все";
    } else {
      wrapper.style.maxHeight = wrapper.scrollHeight + 240 + "px";
      event.target.innerText = "Скрыть все";
    }
  });
});

const catalogControlsFilterButton = document.querySelector(".catalog__controls-filter-button");

if (catalogControlsFilterButton) {
  catalogControlsFilterButton.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    const catalogFilter = document.querySelector(".catalog__filter");
    if (catalogFilter) catalogFilter.classList.toggle("active");
  });
}
