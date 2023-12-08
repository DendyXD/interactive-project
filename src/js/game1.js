const game1Input = document.querySelector(".js-game1-input");

const game1Button = document.querySelector(".js-game1-button");

const game1Answer = document.querySelector(".js-game1-answer");

game1Button.addEventListener("click", showAnswer);

function showAnswer() {
    if (Number(game1Input.value) >= 1900 && Number(game1Input.value) <= 2024) {
        if (Number(game1Input.value) % 4 === 0 && Number(game1Input.value) !== 0) {
            game1Answer.style.color = "#039900";
            game1Answer.textContent = "Ви народилися у високосний рік!";

        } else {
            game1Answer.style.color = "#990000";
            game1Answer.textContent = "Ви народилися не у високосний рік";
        }
    } else {
        game1Answer.textContent = "Введіть рік в діапазоні від 1900 до 2024 року";
        game1Answer.style.color = "#990000";
    }
}