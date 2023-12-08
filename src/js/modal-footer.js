const closeModalBtn = document.querySelector(".modal-footer-button")

closeModalBtn.addEventListener("click", modalHandler)

function modalHandler() {
    document.body.classList.toggle("show-modal")
}
