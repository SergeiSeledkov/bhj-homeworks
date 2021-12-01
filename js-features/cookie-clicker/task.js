const cookieImage = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let lastDate = 0;

cookieImage.onclick = () => {
    ++clickerCounter.textContent;

    if (lastDate === 0) {
        lastDate = Date.now();
    } else {
        let differenceDate = Date.now() - lastDate;
        differenceDate /= 1000
        lastDate = Date.now();
        clickerSpeed.textContent = (1 / differenceDate).toFixed(2);
    }

    if (clickerCounter.textContent % 2 === 1) {
        cookieImage.width = '220';
        cookieImage.height = '148';
    } else {
        cookieImage.width = '200';
        cookieImage.height = '128';
    }
}