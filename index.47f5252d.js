const e=document.querySelector(".js-footer-button"),t=document.querySelector(".js-footer-input");e.addEventListener("click",(function(){t.value.includes("@gmail")&&document.body.classList.add("show-modal")}));document.querySelector(".modal-footer-button").addEventListener("click",(function(){document.body.classList.toggle("show-modal")}));const o=document.querySelector(".js-game1-input"),n=document.querySelector(".js-game1-button"),u=document.querySelector(".js-game1-answer");n.addEventListener("click",(function(){Number(o.value)>=1900&&Number(o.value)<=2024?Number(o.value)%4==0&&0!==Number(o.value)?(u.style.color="#039900",u.textContent="Ви народилися у високосний рік!"):(u.style.color="#990000",u.textContent="Ви народилися не у високосний рік"):(u.textContent="Введіть рік в діапазоні від 1900 до 2024 року",u.style.color="#990000")}));document.getElementById("draw"),document.getElementById("computer"),document.getElementById("you");document.querySelector("#buttonCalculate").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#num1").value),t=parseFloat(document.querySelector("#num2").value);if(isNaN(e)||isNaN(t))return void alert("Будь ласка, введіть числа для обчислення.");let o;switch(d){case"+":o=e+t;break;case"-":o=e-t;break;case"*":o=e*t;break;case"/":if(0===t)return void alert("Ділення на нуль неможливе.");o=e/t;break;default:return void alert("Будь ласка, оберіть операцію.")}r.textContent=`${o}`}));document.querySelector("#buttonPlus").addEventListener("click",(()=>a("+"))),document.querySelector("#buttonMinus").addEventListener("click",(()=>a("-"))),document.querySelector("#buttonPomn").addEventListener("click",(()=>a("*"))),document.querySelector("#buttonPodl").addEventListener("click",(()=>a("/")));const c=document.querySelector("#num1"),l=document.querySelector("#num2"),r=document.querySelector("#result");c.addEventListener("focus",(()=>{"Введіть число"===c.value&&(c.value="")})),l.addEventListener("focus",(()=>{"Введіть число"===l.value&&(l.value="")})),c.addEventListener("blur",(()=>{""===c.value&&(c.value="Введіть число")})),l.addEventListener("blur",(()=>{""===l.value&&(l.value="Введіть число")}));let d="";function a(e){return d=e,d}const s=document.getElementById("dino");document.getElementById("cactus");document.addEventListener("click",(function(e){s.classList.add("jump"),setTimeout((()=>{s.classList.remove("jump")}),500)}));const m=document.querySelector(".game7-field"),i=document.querySelector(".game7-ball");let y=0;m.addEventListener("click",(function(e){y+=60,i.style.rotate=`${y}deg`,e.offsetY>170?i.style.top="170px":i.style.top=`${e.offsetY}px`;e.offsetX>670?i.style.left="670px":i.style.left=`${e.offsetX}px`}));document.querySelector("h");
//# sourceMappingURL=index.47f5252d.js.map