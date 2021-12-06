const menuItem = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = () => {
        const searchSubMenu = menuItem[i].parentElement.querySelector('.menu_sub');

        function checkOtherMenuActive() {
            const searchMenuActive = menuItem[i].closest('.menu').querySelector('.menu_active');

            if (searchMenuActive !== null) {
                searchMenuActive.classList.remove('menu_active');
            }
        }

        if (searchSubMenu !== null && !searchSubMenu.className.includes('menu_active')) {
            checkOtherMenuActive();
            searchSubMenu.classList.add('menu_active');

            return false;
        } else if (searchSubMenu.className.includes('menu_active')) {
            searchSubMenu.classList.remove('menu_active');

            return false;
        }
    }
}