//*Камінь - ножиці - папір

const items = ['Папір', 'Ножиці', 'Камінь']

let draw = 0;
let computer = 0;
let you = 0;

let draw_node = document.getElementById('draw');
let comp_node = document.getElementById('computer');
let yuor_node = document.getElementById('you');

const demoText = document.querySelector('.text')
const resComp = document.querySelector('.comp')
// document.querySelector("#rockButton").addEventListener("click", playAgainstComputer("Камінь"))
// document.querySelector("#paperButton").addEventListener("click", playAgainstComputer("Папір"))
// document.querySelector("#scissorButton").addEventListener("click", playAgainstComputer("Ножиці"))

function computerSelection() {
    return items[Math.floor(Math.random()*items.length)];
};

let playAgainsuserSelection;
function playAgainstComputer(userSelection) {
    let selectComputer = computerSelection();

    let gameResult = compare(userSelection.toLowerCase(), selectComputer.toLowerCase());
    console.log(gameResult);

    switch(gameResult) {
        case "Нічия":
            draw = draw += 1;
            draw_node.textContent = draw;
            demoText.textContent = "Нічия";
            break;
        case "Ви виграли!":
            you = you += 1;
            comp_node.textContent = computer;
            demoText.textContent = "Ви виграли!";
            break;
        case "Ви програли!":
            computer = computer + 1;
            yuor_node.textContent = you;
            demoText.textContent = "Ви програли!";
            break;
        default:
            console.log(gameResult + " is invalid value");

           demoText.textContent =  gameResult;
    }

};

function compare(choice1,choice2) {
    console.log(choice1)
    console.log(choice2)
    resComp.textContent = choice2;

    if (choice1 === choice2) {
        return "Нічия";
    }

if (choice1 === "камінь") {
        if (choice2 === "ножиці") {
            return "Ви виграли!";
        } else {
            return "Ви програли!";
        }
    }
    
    if (choice1 === "папір") {
        if (choice2 === "камінь") {
            return "Ви виграли!";
        } else {
            return "Ви програли!";
        }
    }

    if (choice1 === "ножиці") {
        if (choice2 === "камінь") {
            return "Ви програли!";
        } else {
            return "Ви виграли!";
        }}

   return 'Начните игру заново!'
};