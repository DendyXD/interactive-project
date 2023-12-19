//*Камінь - ножиці - папір
const items = ['папір', 'ножиці', 'Камінь']

let draw = 0;
let computer = 0;
let you = 0;

let draw_node = document.getElementById('draw');
let comp_node = document.getElementById('computer');
let yuor_node = document.getElementById('you');
const demoText = document.querySelector('.text')
const resComp = document.querySelector('.comp')


const computerSelection = () => {
    return items[Math.floor(Math.random()*items.length)];
};


//document.write(`<p>Робот: ${selectComputer}</p>`);

const playAgainstComputer = (userSelection) => {
    let selectComputer = computerSelection();
 

    let gameResult = compare(userSelection.toLowerCase(), selectComputer.toLowerCase());

    switch(gameResult) {
        case "Нічья":
            draw = draw + 1;
            draw_node.textContent = draw;
            demoText.textContent = "Нічья";
            break;
        case "Вы выиграли!":
            you = you + 1;
            comp_node.textContent = computer;
            demoText.textContent = "Вы выиграли!";
            break;
        case "Вы проиграли!":
            computer = computer + 1;
            yuor_node.textContent = you;
            demoText.textContent = "Вы проиграли!";
            break;
        default:
            console.log(gameResult + " is invalid value");

           demoText.textContent =  gameResult
    }

};

const compare = (choice1,choice2) => {
    console.log(choice1)
    console.log(choice2)
    resComp.textContent = choice2;

    if (choice1 === choice2) {
        return "Нічья";
    }

    if (choice1 === "камень") {
        if (choice2 === "ножницы") {
            return "Ви виграли!";
        } else {
            return "Ви програли!";
        }
    }
    
    if (choice1 === "бумага") {
        if (choice2 === "камень") {
            return "Ви виграли!";
        } else {
            return "Ви програли!";
        }
    }

    if (choice1 === "ножницы") {
        if (choice2 === "камень") {
            return "Ви програли!";
        } else {
            return "Ви виграли!";
        }
    }

    return 'Начните игру заново!'
};