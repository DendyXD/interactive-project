const themeToggleBtn = document.querySelector("#theme-toggle");

let togglerCounter = 0;

themeToggleBtn.addEventListener("click", themeTogglerHandler);

function themeTogglerHandler() {
    if (togglerCounter === 0) {
        togglerCounter = 1;

        document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "white"
            btn.style.color = "black"
        })
        document.querySelectorAll(".delimiter").forEach((delim) => {
            delim.style.backgroundColor = "white"
        })
        document.querySelectorAll(".m-font").forEach((font) => {
            if (font !== document.querySelector(".js-game1-answer")) {
                font.style.color = "white";
            }
            if (font !== document.querySelector(".js-game2-answer")) {
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
            logo.src = "/logo-dark.4272bff3.svg";
        })
        document.querySelectorAll("#close-symbol").forEach((symb) => {
            symb.src = "/close-symbol-dark.28d57fa5.svg";
        })
        document.querySelectorAll("#search-icon").forEach((icon) => {
            icon.src = "/search-icon-dark.950b0e0f.svg";
        })

    // Header
        document.querySelector("header").style.backgroundColor = "#0e0713";
        document.querySelector("header").style.color = "white";
        // document.querySelector("header").style.boxShadow = "100px 100px 10px 110px rgba(255, 255, 255, 0.3)";
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
        document.querySelector(".js-game1-input").style.boxShadow = "0 0 0 0";
        document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input")
        if (document.querySelector(".js-game1-answer").textContent === "Чи ви народилися у високосний рік?") {
            document.querySelector(".js-game1-answer").style.color = "white";
        }

    // Guess Number (game2)
        // if (document.querySelector(".js-game2-answer").style.color === "black") {
        //     document.querySelector(".js-game2-answer").style.color = "white";
        // }
        
    // Rock Paper Scissors (game3)
        document.querySelector(".comp").style.color = "black";
        document.querySelector(".comp").style.backgroundColor = "white";

        
    // Calculator (game4)
        document.querySelectorAll(".mathSymbols").forEach((symb) => {
            symb.style.boxShadow = "0 0 0 0";
        })
        document.querySelector("#buttonCalculate").style.boxShadow = "0 0 0 0";
        document.querySelector("#num1").style.boxShadow = "0 0 0 0";
        document.querySelector("#num2").style.boxShadow = "0 0 0 0";
        document.querySelector(".resultValue").style.backgroundColor = "white";
        document.querySelector(".resultValue").style.color = "black";

    // Footer
        document.querySelector("footer").style.color = "white";
        document.querySelector("footer").style.backgroundColor = "#0e0713";
    
    // Modal Footer
        document.querySelector(".modal-footer").style.backgroundColor = "#0e0713";
        document.querySelector(".modal-footer").style.color = "white";
        document.querySelector(".modal-footer").querySelector("button").style.backgroundColor = "#0e0713";
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
            if (font !== document.querySelector(".js-game1-answer")) {
                font.style.color = "black";
            }
            if (font !== document.querySelector(".js-game2-answer")) {
                font.style.color = "black"
            }
        })
        document.querySelectorAll(".t-font").forEach((font) => {
            font.style.color = "black"
        })
        document.querySelectorAll("input").forEach((inp) => {
            inp.style.backgroundColor = "#D7D7D7";
            inp.style.color = "";
        })
        document.querySelectorAll("#logo").forEach((logo) => {
            logo.src = "/logo.cd13699a.svg";
        })
        document.querySelectorAll("#close-symbol").forEach((symb) => {
            symb.src = "/close-symbol.28d57fa5.svg";
        })
        document.querySelectorAll("#search-icon").forEach((icon) => {
            icon.src = "/search-icon.8c15998e.svg";
        })


    // Header
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
        document.querySelector(".js-game1-input").style.boxShadow = "0 0 0 0";
        document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input")
        if (document.querySelector(".js-game1-answer").textContent === "Чи ви народилися у високосний рік?") {
            document.querySelector(".js-game1-answer").style.color = "black";
        }

    // Rock Paper Scissors (game3)
        document.querySelector(".comp").style.color = "white";
        document.querySelector(".comp").style.backgroundColor = "black";

        
    // Calculator (game4)
        document.querySelectorAll(".mathSymbols").forEach((symb) => {
            symb.style.boxShadow = "0 0 0 0";
        })
        document.querySelector("#buttonCalculate").style.boxShadow = "0 0 0 0";
        document.querySelector("#num1").style.boxShadow = "0 0 0 0";
        document.querySelector("#num2").style.boxShadow = "0 0 0 0";
        document.querySelector(".resultValue").style.backgroundColor = "#D7D7D7";
        document.querySelector(".resultValue").style.color = "#7E7E7E";

    // Footer
        document.querySelector("footer").style.color = "black";
        document.querySelector("footer").style.backgroundColor = "white";
    
    // Modal Footer
        document.querySelector(".modal-footer").style.backgroundColor = "white";
        document.querySelector(".modal-footer").querySelector("button").style.backgroundColor = "white";

    }
}

