//* Enter 3 numbers

document.querySelectorAll(".num").forEach((inp) => {
  inp.addEventListener("input", foundMaxNum)
})

const result = document.querySelector('#result-game8');

let num1 = 0;
let num2 = 0;
let num3 = 0;

function foundMaxNum() {
    // Отримання значень з полів введення
    num1 = parseFloat(document.getElementById('number1').value);
    num2 = parseFloat(document.getElementById('number2').value);
    num3 = parseFloat(document.getElementById('number3').value);
    if (isNaN(num1)) {
      num1 = 0;
    }
    if (isNaN(num2)) {
      num2 = 0;
    }
    if (isNaN(num3)) {
      num3 = 0;
    }

    // Знаходження та виведення найбільшого числа
    let maxNum = Math.max(num1, num2, num3);
    result.textContent = `Максимальне число, яке ви ввели: ${maxNum}`;
  }