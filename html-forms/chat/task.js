const chatSide = document.querySelector('.chat-widget__side-text');
const chatInput = document.querySelector('.chat-widget__input');
const chatMessagesContainer = document.querySelector('.chat-widget__messages-container');
const chatWidget = document.querySelector('.chat-widget');
const timeAutoMessage = 30000;
let timerRobotQuestion;

function addMessage(sourceMessage) {
    let textMessage;
    let time = timeNow();

    if (sourceMessage === undefined) {
        textMessage = robotMessage();
        sourceMessage = '';
    } else if (sourceMessage === 'robot_auto') {
        textMessage = 'Вы ещё здесь?';
        sourceMessage = '';
    } else {
        textMessage = chatInput.value.trim();
        sourceMessage = ` ${sourceMessage}`
    }

    chatMessagesContainer.innerHTML += `
        <div class="message${sourceMessage}">
            <div class="message__time">${time.hour}:${time.minute}</div>
            <div class="message__text">${textMessage}</div>
        </div>
    `;

    checkScroll();
}

function checkScroll() {
    if (chatMessagesContainer.scrollHeight > chatMessagesContainer.clientHeight) {
        chatMessagesContainer.scrollTo(0, chatMessagesContainer.scrollHeight);
    }
}

function timeNow() {
    const time = new Date();
    let timeHour = time.getHours();
    let timeMinute = time.getMinutes();

    if (timeHour < 10) {
        timeHour = `0${timeHour}`;
    }

    if (timeMinute < 10) {
        timeMinute = `0${timeMinute}`;
    }

    return { hour: timeHour, minute: timeMinute };
}

function robotMessage() {
    let robotMessageArray = [
        'Я робот!',
        'Кожаный мешок',
        '10100101',
        'Привет',
        'Пока',
        'Ещё сообщение',
        'Ну и хватит наверно',
    ];
    let randomIndex = Math.trunc(Math.random() * (robotMessageArray.length - 0) + 0);

    return robotMessageArray[randomIndex];
}

chatSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');

    timerRobotQuestion = setTimeout(() => {
        addMessage('robot_auto');
    }, timeAutoMessage);
});

chatInput.addEventListener('keyup', event => {
    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        addMessage('message_client');
        chatInput.value = '';
        addMessage();

        clearTimeout(timerRobotQuestion);
        timerRobotQuestion = setTimeout(() => {
            addMessage('robot_auto');
        }, timeAutoMessage);
    }
});