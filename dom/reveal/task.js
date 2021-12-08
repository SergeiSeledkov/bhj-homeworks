const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    for (let i = 0; i < reveal.length; i++) {
        if (reveal[i].getBoundingClientRect().top <= window.innerHeight && reveal[i].getBoundingClientRect().top > 0 - reveal[i].offsetHeight) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
    }
});