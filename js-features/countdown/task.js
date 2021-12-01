// TASK 1
/*
const timeOnPage = document.getElementById('timer');

const timerInterval = setInterval(() => {
    if (timeOnPage.textContent > 0) {
        timeOnPage.textContent = --timeOnPage.textContent;
    } else {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}, 1000);
*/

// TASK 2

const timerInterval = setInterval(() => {
    const timeOnPage = document.getElementById('timer');
    const timeArr = timeOnPage.textContent.split(':');

    function changeTimeOnPage() {
        if (timeArr[2] < 10) {
            timeArr[2] = `0${+timeArr[2]}`;
        }

        if (timeArr[1] < 10) {
            timeArr[1] = `0${+timeArr[1]}`;
        }

        if (timeArr[0] < 10) {
            timeArr[0] = `0${+timeArr[0]}`;
        }

        timeOnPage.textContent = `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
    }

    if (timeArr[2] > 0) {
        timeArr[2] = --timeArr[2];
        changeTimeOnPage();
    } else if (timeArr[1] > 0) {
        timeArr[1] = --timeArr[1];
        timeArr[2] = 59;
        changeTimeOnPage();
    } else if (timeArr[0] > 0) {
        timeArr[0] = --timeArr[0];
        timeArr[1] = 59;
        timeArr[2] = 59;
        changeTimeOnPage();
    } else {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}, 1000);