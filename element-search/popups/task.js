const popupWindowOne = document.getElementById('modal_main');
const popupWindowTwo = document.getElementById('modal_success');
const popupClose = document.querySelectorAll('.modal__close');

popupWindowOne.classList.add('modal_active');

function classRemove(index) {
    popupWindowOne.className.includes('modal_active') ? popupWindowOne.classList.remove('modal_active') : popupWindowTwo.classList.remove('modal_active');

    if (popupClose[index].className.includes('show-success')) {
        popupWindowTwo.classList.add('modal_active');
    }
}

for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].onclick = () => classRemove(i);
}
