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
            // btn.firstChild.style.fill = "black"
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
            inp.style.color = "black"
        })


        document.querySelector(".games-container-background").classList.toggle("games-container-background-dark")

        document.querySelector(".games-container").style.backgroundColor = "#0e0713";
        document.querySelector(".games-container").style.color = "white";


        document.querySelector("footer").style.color = "white";
    } else {

    }
}

