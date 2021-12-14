// TASK 1

/*const linkAll = document.querySelectorAll('.has-tooltip');
const tooltipAll = document.querySelectorAll('.tooltip');

for (let i of linkAll) {
    i.addEventListener('click', function (event) {
        const positionElement = this.getBoundingClientRect();

        function addTooltip(left, top, title) {
            i.insertAdjacentHTML('afterend', `
                <div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">
                    ${title}
                </div>
            `);
        }

        if (this.nextElementSibling === null) {
            addTooltip(positionElement.left, positionElement.top + positionElement.height, this.title);
        } else if (!this.nextElementSibling.classList.contains('tooltip')) {
            addTooltip(positionElement.left, positionElement.top + positionElement.height, this.title);
        } else {
            this.nextElementSibling.remove();
        }

        event.preventDefault();
    });
}*/

// TASK 2

const linkAll = document.querySelectorAll('.has-tooltip');
linkAll[0].insertAdjacentHTML('afterend', `
    <div class="tooltip" style="left: 0; top: 0"></div>
`);
const tooltip = document.querySelector('.tooltip');
let previousClick;

function changeTooltip(left, top, title) {
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.textContent = title;
}

for (let i of linkAll) {
    i.addEventListener('click', function (event) {
        const positionElement = this.getBoundingClientRect();
        const left = positionElement.left;
        const top = positionElement.top + positionElement.height;
        const title = this.title;

        if (tooltip.classList.contains('tooltip_active') && previousClick === this) {
            tooltip.classList.remove('tooltip_active');
        } else if (tooltip.classList.contains('tooltip_active') && previousClick !== this) {
            changeTooltip(left, top, title);
        } else {
            changeTooltip(left, top, title);
            tooltip.classList.add('tooltip_active');
        }

        previousClick = this;
        event.preventDefault();
    });
}