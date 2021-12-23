const editor = document.getElementById('editor');
const clear = document.querySelector('.clear');

if (!localStorage.text) {
    localStorage.text = '';
}

editor.value = localStorage.text;
editor.addEventListener('keyup', function () {
    localStorage.text = this.value;
});
clear.addEventListener('click', () => {
    editor.value = '';
    /* Не понял, нужно ли очищать localstorage вместе с полем, сделал с очищением */
    localStorage.text = '';
});