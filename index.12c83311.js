!function(){function e(){document.body.classList.remove("show-modal-header")}document.querySelector(".close").addEventListener("click",e),document.querySelector(".modal").addEventListener("keydown",(function(t){27==t.keyCode&&e()}));var t=document.querySelector(".js-footer-button"),n=document.querySelector(".js-footer-input");t.addEventListener("click",(function(){n.value.includes("@gmail")&&document.body.classList.add("show-footer-modal")})),document.querySelector(".modal-footer-button").addEventListener("click",(function(){document.body.classList.toggle("show-footer-modal")}));var o=document.querySelector(".js-game1-input"),u=document.querySelector(".js-game1-button"),c=document.querySelector(".js-game1-answer");u.addEventListener("click",(function(){Number(o.value)>=1900&&Number(o.value)<=2024?Number(o.value)%4==0&&0!==Number(o.value)?(c.style.color="#039900",c.textContent="Ви народилися у високосний рік!"):(c.style.color="#990000",c.textContent="Ви народилися не у високосний рік"):(c.textContent="Введіть рік в діапазоні від 1900 до 2024 року",c.style.color="#990000")}));document.getElementById("draw"),document.getElementById("computer"),document.getElementById("you");document.querySelector("#buttonCalculate").addEventListener("click",(function(){var e,t=parseFloat(document.querySelector("#num1").value),n=parseFloat(document.querySelector("#num2").value);if(isNaN(t)||isNaN(n))return void alert("Будь ласка, введіть числа для обчислення.");switch(a){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"/":if(0===n)return void alert("Ділення на нуль неможливе.");e=t/n;break;default:return void alert("Будь ласка, оберіть операцію.")}d.textContent="".concat(e)}));document.querySelector("#buttonPlus").addEventListener("click",(function(){return s("+")})),document.querySelector("#buttonMinus").addEventListener("click",(function(){return s("-")})),document.querySelector("#buttonPomn").addEventListener("click",(function(){return s("*")})),document.querySelector("#buttonPodl").addEventListener("click",(function(){return s("/")}));var r=document.querySelector("#num1"),l=document.querySelector("#num2"),d=document.querySelector("#result");r.addEventListener("focus",(function(){"Введіть число"===r.value&&(r.value="")})),l.addEventListener("focus",(function(){"Введіть число"===l.value&&(l.value="")})),r.addEventListener("blur",(function(){""===r.value&&(r.value="Введіть число")})),l.addEventListener("blur",(function(){""===l.value&&(l.value="Введіть число")}));var a="";function s(e){return a=e}var i=document.getElementById("dino");document.getElementById("cactus");document.addEventListener("click",(function(e){i.classList.add("jump"),setTimeout((function(){i.classList.remove("jump")}),500)}));var m=document.querySelector(".game7-field"),v=document.querySelector(".game7-ball"),f=0;m.addEventListener("click",(function(e){f+=60,v.style.rotate="".concat(f,"deg"),e.offsetY>170?v.style.top="170px":v.style.top="".concat(e.offsetY,"px");e.offsetX>670?v.style.left="670px":v.style.left="".concat(e.offsetX,"px")}));document.querySelector("h")}();
//# sourceMappingURL=index.12c83311.js.map
