//*dino2

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('click', function(event){
    jump();
});

function jump () {
    dino.classList.add('jump')
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 500);

    // 1000 = 1 second
    // 500 = 0.5 second
}