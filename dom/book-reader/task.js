const book = document.querySelector('.book');
const bookControl = document.querySelectorAll('.book__control');
let activeSize = document.querySelector('.font-size_active');
let activeTextColor = document.querySelector('.book__control_color .color_active');
let activeBgColor = document.querySelector('.book__control_background .color_active');

for (let i = 0; i < bookControl.length; i++) {
    const buttonSettings = bookControl[i].querySelectorAll('a');

    function changeClassBook(classStr, dataAttr) {
        for (let l = 0; l < book.classList.length; l++) {
            if (book.classList[l].includes(classStr)) {
                book.classList.remove(book.classList[l]);
            }
        }

        if (dataAttr === undefined) {
            return;
        } else {
            book.classList.add(`${classStr}-${dataAttr}`);
        }
    }

    function searchActive() {
        activeSize = document.querySelector('.font-size_active');
        activeTextColor = document.querySelector('.book__control_color .color_active');
        activeBgColor = document.querySelector('.book__control_background .color_active');
    }

    function changeSettings(k) {
        if (buttonSettings[k].parentElement.classList.contains('book__control_font-size')) {
            activeSize.classList.remove('font-size_active');
            buttonSettings[k].classList.add('font-size_active');

            changeClassBook('book_fs', buttonSettings[k].dataset.size);
        }

        if (buttonSettings[k].parentElement.classList.contains('book__control_color')) {
            activeTextColor.classList.remove('color_active');
            buttonSettings[k].classList.add('color_active');

            changeClassBook('book_color', buttonSettings[k].dataset.textColor);
        }

        if (buttonSettings[k].parentElement.classList.contains('book__control_background')) {
            activeBgColor.classList.remove('color_active');
            buttonSettings[k].classList.add('color_active');

            changeClassBook('book_bg', buttonSettings[k].dataset.bgColor);
        }

        searchActive();
    }

    for (let k = 0; k < buttonSettings.length; k++) {
        buttonSettings[k].addEventListener('click', event => {
            changeSettings(k);
            event.preventDefault();
        });
    }
}