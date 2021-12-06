const popupWindow = document.querySelectorAll('.modal');
const popupClose = document.querySelectorAll('.modal__close');
let popupWindowIndex = 0;

popupWindow[popupWindowIndex].classList.add('modal_active');

for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].onclick = function classRemove() {
        const parentElementPopup = this.closest('.modal');

        parentElementPopup.classList.remove('modal_active');

        if (this.className.includes('show-success')) {
            ++popupWindowIndex;
            popupWindow[popupWindowIndex].classList.add('modal_active');
        }
    };
}
