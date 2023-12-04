document.querySelector('#buttonCalculate').addEventListener('click', calculate);
const buttonP = document.querySelector('#buttonPlus').addEventListener('click', () => setOperation('+'));
const buttonM = document.querySelector('#buttonMinus').addEventListener('click', () => setOperation('-'));
const buttonPom = document.querySelector('#buttonPomn').addEventListener('click', () => setOperation('*'));
const buttonPod = document.querySelector('#buttonPodl').addEventListener('click', () => setOperation('/'));
const firstNumberInput = document.querySelector('#num1');
const secondNumberInput = document.querySelector('#num2');
const resultValue = document.querySelector('#result');

firstNumberInput.addEventListener("focus", () => {
  if (firstNumberInput.value === "Введіть число") {
    firstNumberInput.value = "";
  }
});
secondNumberInput.addEventListener("focus", () => {
  if (secondNumberInput.value === "Введіть число") {
    secondNumberInput.value = "";
  }
});
firstNumberInput.addEventListener("blur", () => {
  if (firstNumberInput.value === "") {
    firstNumberInput.value = "Введіть число";
  }
});
secondNumberInput.addEventListener("blur", () => {
  if (secondNumberInput.value === "") {
    secondNumberInput.value = "Введіть число";
  }
});






let operation = '';

function setOperation(op) {
  operation = op;
  return operation;
};

function resetText() {
    firstNumberInput.textContent   = '';
};

function calculate() {
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Будь ласка, введіть числа для обчислення.');
      return;
    };

    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert('Ділення на нуль неможливе.');
          return;
        };
        result = num1 / num2;
        break;
      default:
        alert('Будь ласка, оберіть операцію.');
        return;
    };

    resultValue.textContent = `${result}`;
};