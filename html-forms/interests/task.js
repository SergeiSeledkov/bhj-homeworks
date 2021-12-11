const checkboxAll = document.querySelectorAll('.interest__check');

for (let i = 0; i < checkboxAll.length; i++) {
    checkboxAll[i].addEventListener('click', function () {
        const checkDown = this.closest('.interest').querySelector('.interests');

        if (checkDown !== null) {
            const checkboxDown = checkDown.querySelectorAll('.interest__check');

            if (this.checked === true) {
                for (let k = 0; k < checkboxDown.length; k++) {
                    checkboxDown[k].checked = true;
                }
            } else {
                for (let k = 0; k < checkboxDown.length; k++) {
                    checkboxDown[k].checked = false;
                }
            }
        }
    });
}