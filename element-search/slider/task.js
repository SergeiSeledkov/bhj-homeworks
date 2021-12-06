const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderImage = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');
let actualImage = 0;

sliderDot[0].classList.add('slider__dot_active');

sliderArrowNext.onclick = () => clickArrow(1);
sliderArrowPrev.onclick = () => clickArrow(-1);

for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].onclick = () => clickDot(i);
}

function clickArrow(upOrDown) {
    if (actualImage + upOrDown === sliderImage.length && upOrDown === 1) {
        changeImage(0);
    } else if (actualImage + upOrDown < 0 && upOrDown === -1) {
        changeImage(sliderImage.length - 1);
    } else {
        changeImage(actualImage + upOrDown);
    }
}

function clickDot(index) {
    changeImage(index);
}

function changeImage(index) {
    sliderImage[actualImage].classList.remove('slider__item_active');
    sliderDot[actualImage].classList.remove('slider__dot_active');
    sliderImage[index].classList.add('slider__item_active');
    sliderDot[index].classList.add('slider__dot_active');
    actualImage = index;
}