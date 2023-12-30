const themeToggleBtn = document.querySelector("#theme-toggle");

let togglerCounter = 0;

const listOfSymbolsSrcs = [
    document.querySelector('[alt="sword"]').src,
    document.querySelector('[alt="g-console"]').src,
    document.querySelector('[alt="puzzle"]').src,
    document.querySelector('[alt="ttt"]').src
]

const listOfDarkSymbolsSrcs = [
    document.querySelector('[alt="sword dark"]').src,
    document.querySelector('[alt="g-console dark"]').src,
    document.querySelector('[alt="puzzle dark"]').src,
    document.querySelector('[alt="ttt dark"]').src
]

themeToggleBtn.addEventListener("click", themeTogglerHandler);

function themeTogglerHandler() {
    if (togglerCounter === 0) {
        togglerCounter = 1;

        document.querySelectorAll("button").forEach((btn) => {
            if (btn !== document.querySelector(".js-game1-button") && btn !== document.querySelector(".js-game2-button")) {
                btn.style.backgroundColor = "white";
                btn.style.color = "black";
            } else {
                btn.style.backgroundColor = "#262230";
            }
        })
        document.querySelectorAll(".delimiter").forEach((delim) => {
            delim.style.backgroundColor = "white"
        })
        document.querySelectorAll(".m-font").forEach((font) => {
            if (font !== document.querySelector(".js-game1-answer") && font !== document.querySelector(".js-game2-answer")) { // 
                font.style.color = "white";
            }
        })
        document.querySelectorAll(".t-font").forEach((font) => {
            font.style.color = "white";
        })
        document.querySelectorAll("input").forEach((inp) => {
            inp.style.backgroundColor = "white";
            inp.style.color = "black";
        })
        document.querySelectorAll("#logo").forEach((logo) => {
            logo.src = document.querySelector('[alt="default logo dark"]').src;
        })
        document.querySelectorAll("#close-symbol").forEach((symb) => {
            symb.src = document.querySelector('[alt="default close dark"]').src;
        })

    // Header
        document.querySelector("header").classList.toggle("dark-select");
        document.querySelector("header").style.backgroundColor = "#0e0713";
        document.querySelector("header").style.color = "white";
        document.querySelectorAll(".header-buttons").forEach((button) => {
            button.style.color = "white";
        })
        document.querySelector("header").classList.toggle("dark-triangle")
        document.querySelector(".header-greetings").style.color = "white";
        themeToggleBtn.style.backgroundColor = "#0e0713";
        themeToggleBtn.style.color = "white";

    // Main
        document.querySelector(".games-container-background").classList.toggle("games-container-background-dark")
        document.querySelector(".games-container").style.backgroundColor = "#0e0713";
        document.querySelector(".games-container-title").style.color = "white";

    // Leap Year Test (game1)
        document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input")
        if (document.querySelector(".js-game1-answer").textContent === "Чи ви народилися у високосний рік?") {
            document.querySelector(".js-game1-answer").style.color = "white";
        }

    // Guess Number (game2)
        if (!document.querySelector(".js-game2-answer").classList.contains("right-answer-game2") || !document.querySelector(".js-game2-answer").classList.contains("false-answer-game2")) {
            document.querySelector(".js-game2-answer").style.color = "white";
        }
        
    // Rock Paper Scissors (game3)
        document.querySelector(".comp").style.color = "black";
        document.querySelector(".comp").style.backgroundColor = "white";
        document.querySelector(".compyou").style.color = "white";
        
    // Calculator (game4)
        document.querySelectorAll(".mathSymbols").forEach((symb) => {
            symb.style.boxShadow = "0 0 0 0";
        })
        document.querySelector("#buttonCalculate").style.boxShadow = "0 0 0 0";
        document.querySelector("#num1").style.boxShadow = "0 0 0 0";
        document.querySelector("#num2").style.boxShadow = "0 0 0 0";
        document.querySelector(".resultValue").style.backgroundColor = "white";
        document.querySelector(".resultValue").style.color = "black";
        document.querySelector(".text-main-calc").style.color = "white";

    // Time Calculator (game5)
        document.querySelector(".dots").style.border = "1px dashed white";
        document.querySelector("#resultTime").style.color = "white";
        document.querySelector(".calculateButton-time").style.backgroundColor = "#262230";
        document.querySelector(".inputTime").style.boxShadow = "0 0 0 0";
        document.querySelector(".text-time").style.color = "white";

    // Find Max Number (game8)
        document.querySelector(".h").style.color = "white";
        [...document.querySelector(".inp").children].forEach((inp) => {
            inp.style.backgroundColor = "white";
            inp.style.color = "black";
        })

    // Scientists (game9)
        document.querySelector(".text-game9").style.color = "white";
        [...document.querySelector("#factContainer").children].forEach((label) => {
            label.style.color = "black";
            label.style.backgroundColor = "white";
        })

    // Footer
        document.querySelector("footer").style.color = "white";
        document.querySelector("footer").style.backgroundColor = "#0e0713";
    
    // Modal Footer
        document.querySelector(".modal-footer").style.backgroundColor = "#0e0713";
        document.querySelector(".modal-footer").style.color = "white";
        document.querySelector(".modal-footer").querySelector("button").style.backgroundColor = "#0e0713";
        document.querySelector("#symb1").src = listOfDarkSymbolsSrcs[0];
        document.querySelector("#symb2").src = listOfDarkSymbolsSrcs[1];
        document.querySelector("#symb3").src = listOfDarkSymbolsSrcs[2];
        document.querySelector("#symb4").src = listOfDarkSymbolsSrcs[3];

    } else {
     //    _________________________________________________
    // <<-------------------==WHITE THEME==------------------->>

        togglerCounter = 0;

        document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "black"
            btn.style.color = "white"
        })
        document.querySelectorAll(".delimiter").forEach((delim) => {
            delim.style.backgroundColor = "black"
        })
        document.querySelectorAll(".m-font").forEach((font) => {
            if (font !== document.querySelector(".js-game1-answer")) { // && font !== document.querySelector(".js-game2-answer")
                font.style.color = "black";
            }
        })
        document.querySelectorAll(".t-font").forEach((font) => {
            font.style.color = "black"
        })
        document.querySelectorAll("input").forEach((inp) => {
            inp.style.backgroundColor = "#D7D7D7";
        })
        document.querySelectorAll("#logo").forEach((logo) => {
            logo.src = document.querySelector('[alt="default logo"]').src;
        })
        document.querySelectorAll("#close-symbol").forEach((symb) => {
            symb.src = document.querySelector('[alt="default close"]').src;
        })


    // Header
        document.querySelector("header").classList.toggle("dark-select");
        document.querySelector("header").style.backgroundColor = "white";
        document.querySelector("header").style.color = "black";

        document.querySelectorAll(".header-buttons").forEach((button) => {
            button.style.color = "black";
        })
        document.querySelector("header").classList.toggle("dark-triangle")
        document.querySelector(".header-greetings").style.color = "black";
        themeToggleBtn.style.backgroundColor = "white";
        themeToggleBtn.style.color = "black";

    // Main
        document.querySelector(".games-container-background").classList.toggle("games-container-background-dark")
        document.querySelector(".games-container").style.backgroundColor = "white";
        document.querySelector(".games-container-title").style.color = "black";

    // Leap Year Test (game1)
        document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input")
        if (document.querySelector(".js-game1-answer").textContent === "Чи ви народилися у високосний рік?") {
            document.querySelector(".js-game1-answer").style.color = "black";
        }

    // Guess Number (game2)
        if (!document.querySelector(".js-game2-answer").classList.contains("right-answer-game2") || !document.querySelector(".js-game2-answer").classList.contains("false-answer-game2")) {
            document.querySelector(".js-game2-answer").style.color = "black";
        }

    // Rock Paper Scissors (game3)
        document.querySelector(".comp").style.color = "white";
        document.querySelector(".comp").style.backgroundColor = "black";
        document.querySelector(".compyou").style.color = "black";
        
    // Calculator (game4)
        document.querySelectorAll(".mathSymbols").forEach((symb) => {
            symb.style.boxShadow = "2px 2px 0px 1px rgba(191, 191, 191)";
        })
        document.querySelector("#buttonCalculate").style.boxShadow = "2px 2px 0px 1px rgba(191, 191, 191)";
        document.querySelector("#num1").style.boxShadow = "2px 2px 0px 1px rgba(191, 191, 191)";
        document.querySelector("#num2").style.boxShadow = "2px 2px 0px 1px rgba(191, 191, 191)";
        document.querySelector(".resultValue").style.backgroundColor = "#D7D7D7";
        document.querySelector(".resultValue").style.color = "#7E7E7E";
        document.querySelector(".text-main-calc").style.color = "black";

    // Time Calculator (game5)
        document.querySelector(".dots").style.border = "1px dashed black";
        document.querySelector("#resultTime").style.color = "#7E7E7E";
        document.querySelector(".calculateButton-time").style.backgroundColor = "black";
        document.querySelector(".inputTime").style.boxShadow = "2px 2px 0px 1px rgba(191, 191, 191)";
        document.querySelector(".text-time").style.color = "black";

    // Scientists (game9)
        document.querySelector(".text-game9").style.color = "black";
        [...document.querySelector("#factContainer").children].forEach((label) => {
            label.style.color = "white";
            label.style.backgroundColor = "black";
        })

    // Find Max Number (game8)
        document.querySelector(".h").style.color = "black";
        [...document.querySelector(".inp").children].forEach((inp) => {
            inp.style.color = "#7E7E7E";
        })

    // Footer
        document.querySelector("footer").style.color = "black";
        document.querySelector("footer").style.backgroundColor = "white";
    
    // Modal Footer
        document.querySelector(".modal-footer").style.backgroundColor = "white";
        document.querySelector(".modal-footer").style.color = "black";
        document.querySelector(".modal-footer").querySelector("button").style.backgroundColor = "white";
        document.querySelector("#symb1").src = listOfSymbolsSrcs[0];
        document.querySelector("#symb2").src = listOfSymbolsSrcs[1];
        document.querySelector("#symb3").src = listOfSymbolsSrcs[2];
        document.querySelector("#symb4").src = listOfSymbolsSrcs[3];

    }
}

