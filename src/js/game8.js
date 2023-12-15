//* Enter 3 numbers

const hText = document.querySelector('h')

function foundMaxNum() {
    // Отримання значень з полів введення
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    const result  = document.getElementById('result');

    // Перевірка, чи введено коректні числа
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
      alert('Будь ласка, введіть коректні числа.');
      return;
    }

    // Знаходження та виведення найбільшого числа
    const maxNum = Math.max(number1, number2, number3);
    result.innerText = maxNum;
  }