const game2Input = document.querySelector(".js-game2-input");

const game2Button = document.querySelector(".js-game2-button");

const game2Answer = document.querySelector(".js-game2-answer");

game2Button.addEventListener("click", showGuessedNumber);

function showGuessedNumber() {
    let guessedNum = Math.floor(Math.random() * 11)
    if (game2Input.value !== "") {
        if (Number(game2Input.value) === guessedNum) {
            game2Answer.textContent = `Вітаю! Ви вгадали число. (${guessedNum})`;
            game2Answer.classList.add("right-answer-game2")
            game2Answer.classList.remove("false-answer-game2")
            game2Answer.style.color = "none";
        } else {
            game2Answer.textContent = `Ви програли, комп'ютер загадав ${guessedNum}`;
            game2Answer.classList.add("false-answer-game2")
            game2Answer.classList.remove("right-answer-game2")
            game2Answer.style.color = "none";

        }
    } else {
        game2Answer.textContent = `Введіть число для перевірки`;
        game2Answer.classList.add("false-answer-game2")
        game2Answer.classList.remove("right-answer-game2")
        game2Answer.style.color = "none";

    }

}
