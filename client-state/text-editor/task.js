const editor = document.getElementById('editor');
const clear = document.querySelector('.clear');

editor.value = localStorage.getItem('text');

editor.addEventListener('keyup', function () {
    localStorage.text = this.value;
});
clear.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');
});