const form = document.forms[0];
const userIdOnPage = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const exit = document.querySelector('.exit');

form.addEventListener('submit', event => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php", false);
    xhr.addEventListener('readystatechange', function () {
        if (this.status === 200) {
            const result = JSON.parse(xhr.response);

            if (result.success) {
                localStorage.userId = result.user_id;
                userIdOnPage.innerHTML = result.user_id;
                userIdOnPage.closest('.welcome').classList.add('welcome_active');
                signin.classList.remove('signin_active');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    });
    xhr.send(formData);

    event.preventDefault();
});

exit.addEventListener('click', () => {
    signin.classList.add('signin_active');
    userIdOnPage.closest('.welcome').classList.remove('welcome_active');
    localStorage.userId = '';
    form.reset();
});