const items = document.getElementById('items');
const loader = document.querySelector('.loader');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = "json";
xhr.addEventListener('readystatechange', function () {
    if (this.readyState === xhr.DONE && this.status === 200) {
        const valutes = this.response.response.Valute;
        let itemOnPage = '';

        for (let i in valutes) {
            itemOnPage += `
            <div class="item">
                <div class="item__code">
                    ${valutes[i].CharCode}
                </div>
                <div class="item__value">
                    ${valutes[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
            `;
        }

        loader.classList.remove('loader_active');
        items.innerHTML = itemOnPage;
    }
});
xhr.send();