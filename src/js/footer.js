const subscribeBtn = document.querySelector(".js-footer-button");

const body = document.body

subscribeBtn.addEventListener("click", showModal);

function showModal() {
    body.classList.add("show-modal")
}