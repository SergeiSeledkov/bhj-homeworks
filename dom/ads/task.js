setInterval(() => {
    const rotatorCaseActive = document.querySelectorAll('.rotator__case_active');

    for (let i = 0; i < rotatorCaseActive.length; i++) {

        if (rotatorCaseActive[i].nextElementSibling !== null) {
            rotatorCaseActive[i].classList.remove('rotator__case_active');
            rotatorCaseActive[i].nextElementSibling.classList.add('rotator__case_active');
        } else {
            const firstRotatorCase = rotatorCaseActive[i].parentElement.firstElementChild;

            rotatorCaseActive[i].classList.remove('rotator__case_active');
            firstRotatorCase.classList.add('rotator__case_active');
        }

    }
}, 1000);