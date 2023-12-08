//*Камінь - ножиці - папір

//const select = prompt("Что хотите? Бумага , Ножницы, Камень")
const items = ['Бумага', 'Ножницы', 'Камень']

let draw = 0;
let computer = 0;
let you = 0;

let draw_node = document.getElementById('draw');
let comp_node = document.getElementById('computer');
let yuor_node = document.getElementById('you');
// if (!select) {
    //location.reload()
// } else {
    // document.write(`<p>Вы: ${select}</p>`)
// }

const computerSelection = () => {
    return items[Math.floor(Math.random()*items.length)];
};


//document.write(`<p>Робот: ${selectComputer}</p>`);

const playAgainstComputer = (userSelection) => {
    let selectComputer = computerSelection();

    // you can display selectComputer in the div 
    // or something on the screen from here 

    let gameResult = compare(userSelection.toLowerCase(), selectComputer.toLowerCase());

    switch(gameResult) {
        case "Ничья":
            draw = draw + 1;
            draw_node.innerText = draw;
            break;
        case "Вы выиграли!":
            you = you + 1;
            comp_node.innerText = computer;
            break;
        case "Вы проиграли!":
            computer = computer + 1;
            yuor_node.innerText = you;
            break;
        default:
            console.log(gameResult + " is invalid value");
    }

};

const compare = (choice1,choice2) => {
    console.log(choice1)
    console.log(choice2)
    if (choice1 === choice2) {
        return "Ничья";
    }

    if (choice1 === "камень") {
        if (choice2 === "ножницы") {
            return "Вы выиграли!";
        } else {
            return "Вы проиграли!";
        }
    }
    
    if (choice1 === "бумага") {
        if (choice2 === "камень") {
            return "Вы выиграли!";
        } else {
            return "Вы проиграли!";
        }
    }

    if (choice1 === "ножницы") {
        if (choice2 === "камень") {
            return "Вы проиграли!";
        } else {
            return "Вы выиграли";
        }
    }

    return 'Начните игру заново!'
};

