let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = parseInt(document.getElementById('guess').value);
    let result = document.getElementById('result');

    if (guess === randomNumber) {
        result.textContent = 'Selamat! Tebakan Anda benar!';
        result.style.color = 'green';
    } else if (guess < randomNumber) {
        result.textContent = 'Tebakan Anda terlalu rendah!';
        result.style.color = 'red';
    } else {
        result.textContent = 'Tebakan Anda terlalu tinggi!';
        result.style.color = 'red';
    }
}
