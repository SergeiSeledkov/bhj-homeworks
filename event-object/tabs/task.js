const tab = document.querySelectorAll('.tab');

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function () {
        if (!this.className.includes('tab_active')) {
            const tabParent = this.closest('.tabs');

            tabParent.querySelector('.tab_active').classList.remove('tab_active');
            tabParent.querySelector('.tab__content_active').classList.remove('tab__content_active');

            this.classList.add('tab_active');
            document.querySelectorAll('.tab__content')[i].classList.add('tab__content_active');
        }
    });
}