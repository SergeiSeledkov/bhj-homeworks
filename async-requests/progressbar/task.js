const progressbar = document.getElementById('progress');
const buttonSend = document.getElementById('send');
const xhr = new XMLHttpRequest();

buttonSend.addEventListener('click', event => {
    const formData = new FormData(form);

    xhr.upload.onprogress = event => {
        let progressPercent = (event.loaded / event.total).toFixed(2);

        progressbar.value = progressPercent;
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
    event.preventDefault();
});