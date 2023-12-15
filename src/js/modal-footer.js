const closeModalBtn = document.querySelector(".modal-footer-button")

closeModalBtn.addEventListener("click", modalFooterHandler)

function modalFooterHandler() {
    document.body.classList.toggle("show-footer-modal")
}
