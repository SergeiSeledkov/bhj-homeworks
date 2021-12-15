const question = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.addEventListener('readystatechange', function () {
    if (this.readyState === xhr.DONE && this.status === 200) {
        const responseData = this.response.data;
        let answersElement = '';

        for (let i in responseData.answers) {
            answersElement += `
                <button class="poll__answer">
                    ${responseData.answers[i]}
                </button>
            `;
        }

        question.innerHTML = responseData.title;
        answers.innerHTML = answersElement;
        addClickMessage(this.response.id);
    }
});
xhr.send();

function addClickMessage(id) {
    const answersCollection = document.querySelectorAll('.poll__answer');

    for (let k = 0; k < answersCollection.length; k++) {
        answersCollection[k].addEventListener('click', () => {
            const xhrStatistics = new XMLHttpRequest();

            xhrStatistics.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            xhrStatistics.responseType = 'json';
            xhrStatistics.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhrStatistics.addEventListener('readystatechange', function () {
                if (this.readyState === xhr.DONE && this.status === 200) {
                    const responseStat = this.response.stat;
                    let totalVotes = 0;
                    let statisticsElement = '';

                    for (let l in responseStat) {
                        totalVotes += responseStat[l].votes;
                    }

                    for (let m in responseStat) {
                        const votePercent = (responseStat[m].votes / totalVotes * 100).toFixed(2);
                        statisticsElement += `
                            <div>
                                ${responseStat[m].answer}: голосов - ${responseStat[m].votes}, (${votePercent}%)
                            </div>
                        `;
                    }

                    answers.innerHTML = statisticsElement;
                }
            });
            xhrStatistics.send(`vote=${id}&answer=${k}`);

            alert('Спасибо, ваш голос засчитан!');
        });
    }
}