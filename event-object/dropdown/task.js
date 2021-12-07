const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownLink = document.querySelectorAll('.dropdown__link');

for (let k = 0; k < dropdownValue.length; k++) {
    dropdownValue[k].addEventListener('click', function () {
        const thisDropdownList = this.closest('.dropdown').querySelector('.dropdown__list');

        thisDropdownList.className.includes('dropdown__list_active') ? thisDropdownList.classList.remove('dropdown__list_active') : thisDropdownList.classList.add('dropdown__list_active');
    });
}

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', function (event) {
        const thisDropdownValue = this.closest('.dropdown').querySelector('.dropdown__value');

        this.closest('.dropdown__list').classList.remove('dropdown__list_active');
        thisDropdownValue.textContent = this.textContent;
        event.preventDefault();
    });
}