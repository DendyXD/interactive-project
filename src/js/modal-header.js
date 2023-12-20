//modal window

// document.getElementById('close-my-modal').addEventListener('click', function() {
//     document.getElementById('my-modal').classList.remove('open')
// })

// document.querySelector('#my-modal ,modal_box').addEventListener('click', event => {
//    event._isClickWithInModal = true;
// });
// document.getElementById('my-modal').addEventListener('click',  event => {
//    if (event._isClickWithInModal) return; 
//    event.currentTarget.classList.remove('open')
   
// })

// document.getElementById('my-modal').addEventListener('click',  event => {
//     if (event.keyCode == 27) return; 
//         event.currentTarget.classList.remove('open')
// })
 



document.querySelector('.close').addEventListener("click", modalHeaderClose)

window.addEventListener('keydown',  event => {
    if (event.key === "Escape") {
        modalHeaderClose()
    }
})

function modalHeaderClose() {
    document.body.classList.remove("show-header-modal")
}