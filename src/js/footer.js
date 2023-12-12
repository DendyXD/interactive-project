const subscribeBtn = document.querySelector(".js-footer-button");

const subscribeInput = document.querySelector(".js-footer-input")

subscribeBtn.addEventListener("click", showSubscriptionModal);

function showSubscriptionModal() {
    if (subscribeInput.value.includes("@gmail")) {
        document.body.classList.add("show-modal-footer")
    }
}

