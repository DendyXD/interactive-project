 //*dino2

// const dino = document.querySelector('.dino');
// const cactus = document.querySelector('.cactus');

// document.addEventListener('click', function(event){
//     jump();
// });

// function jump () {
//     if(dino.classList != 'jump'){
//         dino.classList.add('jump')
//     }
//     setTimeout(function() {
//         dino.classList.remove('jump')
//     },300);
// }

// let isAlive = setInterval(function () {
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

//     function jump() {
//         dino.classList.add('jump')
//         setTimeout(() => {
//             dino.classList.remove('jump')
//         }, 1000);

//         // 1000 = 1 second
//         // 500 = 0.5 second
//     }
// })




const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const gameWindow = document.querySelector(".dinogame");
let btnCooldown = true;

if (btnCooldown) {
    gameWindow.addEventListener("click", ()=> {
        gameStart()
        jump();
        btnCooldown = false
    })
    setTimeout(()=> {
        btnCooldown = true;
    }, 300)
}

function gameStart () {
    cactus.classList.add("cactusMove");
    dino.classList.add("dinoMove");
    dino.classList.remove("dinoDead")
}

function endGame () {
    cactus.classList.remove("cactusMove");
    dino.classList.remove("dinoMove");
    dino.classList.add("dinoDead")
}

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (()=> {
        dino.classList.remove("jump")
    }, 750)
}

let isAlive = setInterval(() => {
     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 90) {
        endGame()
    }
}, 10)