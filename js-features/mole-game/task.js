let statusCount = '';
const getHoleById = (index) => document.getElementById(`hole${index}`);
const checkWin = (count) => {
    if (count === 10) {
        alert('Вы победили!');
    }
}
const checkLose = (count) => {
    if (count === 5) {
        alert('Вы проиграли!');
    }
}

for (let i = 1; i <= 9; i++) {
    let holeClick = getHoleById(i);
    holeClick.onclick = () => {
        if (holeClick.className.includes('hole_has-mole')) {
            statusCount = ++document.getElementById('dead').textContent;
            checkWin(statusCount);
        } else {
            statusCount = ++document.getElementById('lost').textContent;
            checkLose(statusCount);
        }
    }
}