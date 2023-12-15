const themeToggleBtn = document.querySelector(".header-toggler-button");

let togglerCounter = 0;

themeToggleBtn.addEventListener("click", themeTogglerHandler);

function themeTogglerHandler() {
    if (togglerCounter === 0) {
        togglerCounter = 1;

        document.body.style.backgroundColor = "#0e0713";
        document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "white"
            btn.style.color = "black"
        })
        document.querySelectorAll(".delimiter").forEach((delim) => {
            delim.style.backgroundColor = "white"
        })
        document.querySelectorAll(".m-font").forEach((font) => {
            font.style.color = "white"
        })
        document.querySelectorAll(".t-font").forEach((font) => {
            font.style.color = "white"
        })
        document.querySelectorAll("input").forEach((inp) => {
            inp.style.backgroundColor = "white";
            inp.style.color = "black";
        })
        document.querySelectorAll("#logo").forEach((logo) => {
            logo.src = "/logo-dark.4272bff3.svg";
            console.log(logo.src);
        })

    // Header


    // Main
        document.querySelector(".games-container-background").classList.toggle("games-container-background-dark")
        document.querySelector(".games-container").style.backgroundColor = "#0e0713";
        document.querySelector(".games-container").style.color = "white";

    // Leap Year Test (game1)
        document.querySelector(".js-game1-input").style.boxShadow = "0 0 0 0";
        document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input")
    // Calculator (game4)
        document.querySelectorAll(".mathSymbols").forEach((symb) => {
            symb.style.boxShadow = "0 0 0 0";
        })
        document.querySelector("#buttonCalculate").style.boxShadow = "0 0 0 0";
        document.querySelector("#num1").style.boxShadow = "0 0 0 0";
        document.querySelector("#num2").style.boxShadow = "0 0 0 0";

    // Footer
        document.querySelector("footer").style.color = "white";
        document.querySelector("footer").style.backgroundColor = "#0e0713";
    
    // Modal Footer
        document.querySelector(".modal-footer").style.backgroundColor = "#0e0713";
        document.querySelector(".modal-footer").style.color = "white";
        document.querySelector(".modal-footer").querySelector("button").style.backgroundColor = "#0e0713";
    } else {

    }
}

