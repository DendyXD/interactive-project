!function(){var e=document.querySelector(".__select"),t=e.querySelector(".__select__title"),n=e.querySelectorAll(".__select__label");t.addEventListener("click",(function(){"active"===e.getAttribute("data-state")?e.setAttribute("data-state",""):e.setAttribute("data-state","active")}));for(var o=0;o<n.length;o++)n[o].addEventListener("click",(function(n){t.textContent=n.target.textContent,e.setAttribute("data-state","")}));function u(){document.body.classList.remove("show-header-modal")}document.querySelector(".close").addEventListener("click",u),document.querySelector(".modal").addEventListener("keydown",(function(e){27==e.keyCode&&u()}));var c=document.querySelector(".js-footer-button"),r=document.querySelector(".js-footer-input");c.addEventListener("click",(function(){r.value.includes("@gmail")&&document.body.classList.add("show-footer-modal")})),document.querySelector(".modal-footer-button").addEventListener("click",(function(){document.body.classList.toggle("show-footer-modal")}));var l=document.querySelector(".js-game1-input"),a=document.querySelector(".js-game1-button"),d=document.querySelector(".js-game1-answer");a.addEventListener("click",(function(){Number(l.value)>=1900&&Number(l.value)<=2024?Number(l.value)%4==0&&0!==Number(l.value)?(d.style.color="#039900",d.textContent="Ви народилися у високосний рік!"):(d.style.color="#990000",d.textContent="Ви народилися не у високосний рік"):(d.textContent="Введіть рік в діапазоні від 1900 до 2024 року",d.style.color="#990000")}));document.getElementById("draw"),document.getElementById("computer"),document.getElementById("you");document.querySelector("#buttonCalculate").addEventListener("click",(function(){var e,t=parseFloat(document.querySelector("#num1").value),n=parseFloat(document.querySelector("#num2").value);if(isNaN(t)||isNaN(n))return void alert("Будь ласка, введіть числа для обчислення.");switch(v){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"/":if(0===n)return void alert("Ділення на нуль неможливе.");e=t/n;break;default:return void alert("Будь ласка, оберіть операцію.")}m.textContent="".concat(e)}));document.querySelector("#buttonPlus").addEventListener("click",(function(){return f("+")})),document.querySelector("#buttonMinus").addEventListener("click",(function(){return f("-")})),document.querySelector("#buttonPomn").addEventListener("click",(function(){return f("*")})),document.querySelector("#buttonPodl").addEventListener("click",(function(){return f("/")}));var s=document.querySelector("#num1"),i=document.querySelector("#num2"),m=document.querySelector("#result");s.addEventListener("focus",(function(){"Введіть число"===s.value&&(s.value="")})),i.addEventListener("focus",(function(){"Введіть число"===i.value&&(i.value="")})),s.addEventListener("blur",(function(){""===s.value&&(s.value="Введіть число")})),i.addEventListener("blur",(function(){""===i.value&&(i.value="Введіть число")}));var v="";function f(e){return v=e}var y=document.getElementById("dino");document.getElementById("cactus");document.addEventListener("click",(function(e){y.classList.add("jump"),setTimeout((function(){y.classList.remove("jump")}),500)}));var b=document.querySelector(".game7-field"),q=document.querySelector(".game7-ball"),S=0;b.addEventListener("click",(function(e){S+=60,q.style.rotate="".concat(S,"deg"),e.offsetY>170?q.style.top="170px":q.style.top="".concat(e.offsetY,"px");e.offsetX>670?q.style.left="670px":q.style.left="".concat(e.offsetX,"px")}));document.querySelector("h")}();
//# sourceMappingURL=index.e9586dbb.js.map
