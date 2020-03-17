const answer = document.querySelector('#answer');
const button = document.querySelector('#btn');

function isThatNumberWang() {
    let numberWang = (Math.floor(Math.random() * 10));
    if (numberWang === 5) {
        answer.innerHTML = 'Thats NumberWang!';
    } else {
        answer.innerHTML = 'Thats not NumberWang.';
    }
}

button.addEventListener('click', isThatNumberWang)




