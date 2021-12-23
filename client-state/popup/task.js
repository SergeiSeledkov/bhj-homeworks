const popupWindow = document.querySelector('.modal');
const popupClose = document.querySelector('.modal__close');
const getCookie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

if (!getCookie('popupClose')) {
    popupWindow.classList.add('modal_active');
}

popupClose.onclick = function classRemove() {
    popupWindow.classList.remove('modal_active');
    document.cookie = 'popupClose=true';
};