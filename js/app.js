let countWon = 0;
let countLost = 0;
let countRemaining = 5;
let remainingCountEnd = 0;

const button = document.getElementById('submit');
button.addEventListener('click', () => {
    const input = document.getElementById('input-field');
    const inputField = parseInt(input.value);
    const errorMessage = document.getElementById('error');
    const result = document.querySelectorAll(".result-container p");

    errorMessage.innerText = '';

    if (inputField < 1 || inputField > 5) {
        errorMessage.innerText = (inputField < 1) ? 'Please enter a value greater than or equal to 1' : 'Please enter a value less than or equal to 5';
        setTimeout(() => {
            errorMessage.innerText = '';
        }, 2000);
    } else {
        const random = Math.ceil(Math.random() * 5);

        if (random === inputField) {
            countWon++;
            countRemaining--;
        } else {
            countLost++;
            countRemaining--;
            result[0].innerText = (`You have lost; the random number is ${random}`);
        }

        result[1].innerText = (`You have remaining ${countRemaining} times`);
        result[2].innerText = (`Won ${countWon} / Lost ${countLost}`);
    }

    if (countRemaining <= remainingCountEnd) {
        input.disabled = true;
        button.disabled = true;
    }else{
        input.disabled = false;
        button.disabled = false;
    }
});
