const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderImage = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');
let actualImage = 0;

sliderDot[0].classList.add('slider__dot_active');

sliderArrowNext.onclick = () => changeImageArrow(1);
sliderArrowPrev.onclick = () => changeImageArrow(-1);

for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].onclick = () => changeImageDot(i);
}

function changeImageArrow(upOrDown) {
    sliderImage[actualImage].classList.remove('slider__item_active');
    sliderDot[actualImage].classList.remove('slider__dot_active');
    actualImage += upOrDown;

    if (actualImage === sliderImage.length && upOrDown === 1) {
        actualImage = 0;
    } else if (actualImage < 0 && upOrDown === -1) {
        actualImage = sliderImage.length - 1;
    }

    sliderImage[actualImage].classList.add('slider__item_active');
    sliderDot[actualImage].classList.add('slider__dot_active');
}

function changeImageDot(index) {
    sliderImage[actualImage].classList.remove('slider__item_active');
    sliderDot[actualImage].classList.remove('slider__dot_active');
    sliderImage[index].classList.add('slider__item_active');
    sliderDot[index].classList.add('slider__dot_active');
    actualImage = index;
}