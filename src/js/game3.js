//*Камінь - ножиці - папір

const items = ['Папір', 'Ножиці', 'Камінь']

let computer = 0;
let you = 0;

let comp_node = document.getElementById('computer');
let yuor_node = document.getElementById('you');

const demoText = document.querySelector('.result-game3')
const resComp = document.querySelector('.comp')
document.querySelector("#rockButton").addEventListener("click", () => {playAgainstComputer("Камінь")})
document.querySelector("#paperButton").addEventListener("click", () => { playAgainstComputer("Папір") })
document.querySelector("#scissorsButton").addEventListener("click", () => {playAgainstComputer("Ножиці")})

function computerSelection() {
    return items[Math.floor(Math.random()*items.length)];
};

function playAgainstComputer(userSelection) {
    let selectComputer = computerSelection();

    let gameResult = compare(userSelection, selectComputer);

    switch(gameResult) {
        case "Нічия":
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
 return 
};

function compare(choice1,choice2) {
    resComp.textContent = choice2;

    if (choice1 === choice2) {
        return "Нічия";
    }

if (choice1 === "Камінь") {
        if (choice2 === "Ножиці") {
            return "Ви виграли!";
        } else {
            return "Ви програли!";
        }
    }
    
    if (choice1 === "Папір") {
        if (choice2 === "Камінь") {
            return "Ви виграли!";
        } else {
            return "Ви програли!";
        }
    }

    if (choice1 === "Ножиці") {
        if (choice2 === "Камінь") {
            return "Ви програли!";
        } else {
            return "Ви виграли!";
        }}

   return 'Начните игру заново!'
};