const numericalGames = document.querySelectorAll("#numerical-game");

const entertainmentGames = document.querySelectorAll("#entertainment-game");

const acquaintanceGames = document.querySelectorAll("#acquaintance-game");

document.querySelectorAll(".__select__label").forEach((category) => {
    category.addEventListener("click", gamesFilter);
})

function gamesFilter() {
    console.log(document.querySelector(".__select__title").textContent);
    switch (document.querySelector(".__select__title").textContent) {
        case "Числовий":
            numericalGames.forEach((game) => {
                game.style.display = "flex";
            })
            entertainmentGames.forEach((game) => {
                game.style.display = "none";
            })
            acquaintanceGames.forEach((game) => {
                game.style.display = "none";
            })
        break;
        
        case "Ігровий":
            entertainmentGames.forEach((game) => {
                game.style.display = "flex";
                if (game === document.querySelector(".allrockpaperscissor")) {
                    // game.style.alignItems = "center";
                    // game.style.justifyContent = "center";
                    // game.style.flexDirection = "column";
                    game.style.display = "block";
                }
            })
            numericalGames.forEach((game) => {
                game.style.display = "none";
            })
            acquaintanceGames.forEach((game) => {
                game.style.display = "none";
            })
        break;
        
        case "Ознайомчий":
            acquaintanceGames.forEach((game) => {
                game.style.display = "flex";
            })
            entertainmentGames.forEach((game) => {
                game.style.display = "none";
            })
            numericalGames.forEach((game) => {
                game.style.display = "none";
            })
        break;
    
        default:
            acquaintanceGames.forEach((game) => {
                game.style.display = "flex";
            })
            entertainmentGames.forEach((game) => {
                game.style.display = "flex";
            })
            numericalGames.forEach((game) => {
                game.style.display = "flex";
            })
        break;
    }
}