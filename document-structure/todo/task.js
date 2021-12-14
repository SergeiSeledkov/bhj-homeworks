const taskAdd = document.querySelector('.tasks__add');
const taskInput = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

taskAdd.addEventListener('click', event => {
    const element = document.createElement('div');
    const taskInputValue = taskInput.value.trim();

    element.classList.add('task');

    if (taskInputValue !== '') {
        taskList.appendChild(element);
        element.innerHTML = `
                <div class="task__title">${taskInputValue}</div>
                <a href="#" class="task__remove">&times;</a>
        `;

        const taskRemove = element.querySelector('.task__remove');

        taskRemove.addEventListener('click', function () {
            this.closest('.task').remove();
        });
    }

    event.preventDefault();
});