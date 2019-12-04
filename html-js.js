(function () {
    function getFilterButtons() {
        let filterButton = document.querySelectorAll('.promo-filter__button');
        for (let i = 0; i < filterButton.length; i++) {
            filterElements(filterButton, filterButton[i], filterButton[i].dataset.filter);
        }
    }
    function filterElements(allButtons, button, filterData) {
        let allElements = document.querySelectorAll('.promo-material__item');
        button.addEventListener('click', () => {
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove('promo-filter__button--active');
            }
            button.classList.add('promo-filter__button--active');
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.add('visually-hidden');
                if (allElements[i].classList.contains(filterData)) {
                    allElements[i].classList.remove('visually-hidden');
                }
            }
        })
    }
    getFilterButtons();
})();