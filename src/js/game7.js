const field = document.querySelector(".game7-field")

const ball = document.querySelector(".game7-ball")

let ballRotateCounter = 0;

let previousX = 0;

field.addEventListener("click", ballMoveHandler)

function ballMoveHandler(e) {
    if (e.offsetX > previousX) {
        ballRotateCounter += 45;
    } else {
        ballRotateCounter -= 45;
    }
    previousX = e.offsetX;
    ball.style.rotate = `${ballRotateCounter}deg`;

    if (e.offsetY > 170) {
        ball.style.top = `170px`;
    } else {
        ball.style.top = `${e.offsetY}px`;
    }

    if (e.offsetX > 670) {
        ball.style.left = `670px`;
    } else {
        ball.style.left = `${e.offsetX}px`;
    }


}