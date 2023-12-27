const e=document.querySelector(".__select"),t=e.querySelector(".__select__title"),o=e.querySelectorAll(".__select__label");t.addEventListener("click",(()=>{"active"===e.getAttribute("data-state")?e.setAttribute("data-state",""):e.setAttribute("data-state","active")}));for(let r=0;r<o.length;r++)o[r].addEventListener("click",(o=>{t.textContent=o.target.textContent,e.setAttribute("data-state","")}));function r(){document.body.classList.remove("show-header-modal")}document.querySelector(".close").addEventListener("click",r),window.addEventListener("keydown",(e=>{"Escape"===e.key&&r()}));const l=document.querySelector(".js-footer-button"),c=document.querySelector(".js-footer-input");l.addEventListener("click",(function(){c.value.includes("@gmail")&&document.body.classList.add("show-footer-modal")}));document.querySelector(".modal-footer-button").addEventListener("click",(function(){document.body.classList.toggle("show-footer-modal")}));const n=document.querySelector(".js-game1-input"),u=document.querySelector(".js-game1-button"),a=document.querySelector(".js-game1-answer");u.addEventListener("click",(function(){Number(n.value)>=1900&&Number(n.value)<=2024?Number(n.value)%4==0&&0!==Number(n.value)?(a.style.color="#039900",a.textContent="Ви народилися у високосний рік!"):(a.style.color="#990000",a.textContent="Ви народилися не у високосний рік"):(a.textContent="Введіть рік в діапазоні від 1900 до 2024 року",a.style.color="#990000")}));const s=document.querySelector(".js-game2-input"),d=document.querySelector(".js-game2-button"),y=document.querySelector(".js-game2-answer");d.addEventListener("click",(function(){let e=Math.floor(11*Math.random());""!==s.value?Number(s.value)===e?(y.textContent=`Вітаю! Ви вгадали число. (${e})`,y.classList.add("right-answer-game2"),y.classList.remove("false-answer-game2"),y.style.color="none"):(y.textContent=`Ви програли, комп'ютер загадав ${e}`,y.classList.add("false-answer-game2"),y.classList.remove("right-answer-game2"),y.style.color="none"):(y.textContent="Введіть число для перевірки",y.classList.add("false-answer-game2"),y.classList.remove("right-answer-game2"),y.style.color="none")}));document.getElementById("draw"),document.getElementById("computer"),document.getElementById("you");document.querySelector(".text"),document.querySelector(".comp");document.querySelector("#buttonCalculate").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#num1").value),t=parseFloat(document.querySelector("#num2").value);if(isNaN(e)||isNaN(t))return void alert("Будь ласка, введіть числа для обчислення.");let o;switch(q){case"+":o=e+t;break;case"-":o=e-t;break;case"*":o=e*t;break;case"/":if(0===t)return void alert("Ділення на нуль неможливе.");o=e/t;break;default:return void alert("Будь ласка, оберіть операцію.")}S.textContent=`${o}`}));document.querySelector("#buttonPlus").addEventListener("click",(()=>g("+"))),document.querySelector("#buttonMinus").addEventListener("click",(()=>g("-"))),document.querySelector("#buttonPomn").addEventListener("click",(()=>g("*"))),document.querySelector("#buttonPodl").addEventListener("click",(()=>g("/")));const m=document.querySelector("#num1"),i=document.querySelector("#num2"),S=document.querySelector("#result");m.addEventListener("focus",(()=>{"Введіть число"===m.value&&(m.value="")})),i.addEventListener("focus",(()=>{"Введіть число"===i.value&&(i.value="")})),m.addEventListener("blur",(()=>{""===m.value&&(m.value="Введіть число")})),i.addEventListener("blur",(()=>{""===i.value&&(i.value="Введіть число")}));let q="";function g(e){return q=e,q}document.querySelector(".calculateButton-time").addEventListener("click",(function(){const e=document.querySelector(".inputTime").value,t=parseInt(e);if(isNaN(t))return void alert("Будь ласка, введіть числове значення.");if(t>=60&&t<1440){const e=Math.floor(t/60),o=t-60*e;b.textContent=`${e} год ${o} хв`,0===o&&(b.textContent=`${e} год`)}else if(t>=1440){const e=Math.floor(t/1440),o=t-1440*e,r=Math.floor(o/60),l=t-(1440*e+60*r);b.textContent=`${e} дн ${r} год ${l} хв`,0===l&&0===r?b.textContent=`${e} дн`:0===r?b.textContent=`${e} дн ${l} хв`:0===l&&(b.textContent=`${e} дн ${r} год`)}else b.textContent=`${t} хв`}));const b=document.querySelector("#resultTime");const f=document.querySelector(".game7-field"),h=document.querySelector(".game7-ball");let k=0,w=0;f.addEventListener("click",(function(e){e.offsetX>w?k+=45:k-=45;w=e.offsetX,h.style.rotate=`${k}deg`,e.offsetY>170?h.style.top="170px":h.style.top=`${e.offsetY}px`;e.offsetX>670?h.style.left="670px":h.style.left=`${e.offsetX}px`}));document.querySelector("h");const p=document.querySelectorAll("#numerical-game"),x=document.querySelectorAll("#entertainment-game"),E=document.querySelectorAll("#acquaintance-game");function v(){switch(console.log(document.querySelector(".__select__title").textContent),document.querySelector(".__select__title").textContent){case"Числовий":p.forEach((e=>{e.style.display="flex"})),x.forEach((e=>{e.style.display="none"})),E.forEach((e=>{e.style.display="none"}));break;case"Ігровий":x.forEach((e=>{e.style.display="flex",e===document.querySelector(".allrockpaperscissor")&&(e.style.display="block")})),p.forEach((e=>{e.style.display="none"})),E.forEach((e=>{e.style.display="none"}));break;case"Ознайомчий":E.forEach((e=>{e.style.display="flex"})),x.forEach((e=>{e.style.display="none"})),p.forEach((e=>{e.style.display="none"}));break;default:E.forEach((e=>{e.style.display="flex"})),x.forEach((e=>{e.style.display="flex"})),p.forEach((e=>{e.style.display="flex"}))}}document.querySelectorAll(".__select__label").forEach((e=>{e.addEventListener("click",v)}));const C=document.querySelector("#theme-toggle");let L=0;C.addEventListener("click",(function(){0===L?(L=1,document.querySelectorAll("button").forEach((e=>{e!==document.querySelector(".js-game1-button")&&e!==document.querySelector(".js-game2-button")?(e.style.backgroundColor="white",e.style.color="black"):e.style.backgroundColor="#262230"})),document.querySelectorAll(".delimiter").forEach((e=>{e.style.backgroundColor="white"})),document.querySelectorAll(".m-font").forEach((e=>{e!==document.querySelector(".js-game1-answer")&&e!==document.querySelector(".js-game2-answer")&&(e.style.color="white")})),document.querySelectorAll(".t-font").forEach((e=>{e.style.color="white"})),document.querySelectorAll("input").forEach((e=>{e.style.backgroundColor="white",e.style.color="black"})),document.querySelectorAll("#logo").forEach((e=>{e.src="/logo-dark.4272bff3.svg"})),document.querySelectorAll("#close-symbol").forEach((e=>{e.src="/close-symbol-dark.28d57fa5.svg"})),document.querySelector("header").style.backgroundColor="#0e0713",document.querySelector("header").style.color="white",document.querySelectorAll(".header-buttons").forEach((e=>{e.style.color="white"})),document.querySelector("header").classList.toggle("dark-triangle"),document.querySelector(".header-greetings").style.color="white",C.style.backgroundColor="#0e0713",C.style.color="white",document.querySelector(".games-container-background").classList.toggle("games-container-background-dark"),document.querySelector(".games-container").style.backgroundColor="#0e0713",document.querySelector(".games-container-title").style.color="white",document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input"),"Чи ви народилися у високосний рік?"===document.querySelector(".js-game1-answer").textContent&&(document.querySelector(".js-game1-answer").style.color="white"),document.querySelector(".js-game2-answer").classList.contains("right-answer-game2")&&document.querySelector(".js-game2-answer").classList.contains("false-answer-game2")||(document.querySelector(".js-game2-answer").style.color="white"),document.querySelector(".comp").style.color="black",document.querySelector(".comp").style.backgroundColor="white",document.querySelector(".compyou").style.color="white",document.querySelectorAll(".mathSymbols").forEach((e=>{e.style.boxShadow="0 0 0 0"})),document.querySelector("#buttonCalculate").style.boxShadow="0 0 0 0",document.querySelector("#num1").style.boxShadow="0 0 0 0",document.querySelector("#num2").style.boxShadow="0 0 0 0",document.querySelector(".resultValue").style.backgroundColor="white",document.querySelector(".resultValue").style.color="black",document.querySelector(".dots").style.border="1px dashed white",document.querySelector("#resultTime").style.color="white",document.querySelector(".calculateButton-time").style.backgroundColor="#262230",document.querySelector(".inputTime").style.boxShadow="0 0 0 0",document.querySelector(".text-time").style.color="white",document.querySelector("footer").style.color="white",document.querySelector("footer").style.backgroundColor="#0e0713",document.querySelector(".modal-footer").style.backgroundColor="#0e0713",document.querySelector(".modal-footer").style.color="white",document.querySelector(".modal-footer").querySelector("button").style.backgroundColor="#0e0713"):(L=0,document.querySelectorAll("button").forEach((e=>{e.style.backgroundColor="black",e.style.color="white"})),document.querySelectorAll(".delimiter").forEach((e=>{e.style.backgroundColor="black"})),document.querySelectorAll(".m-font").forEach((e=>{e!==document.querySelector(".js-game1-answer")&&(e.style.color="black")})),document.querySelectorAll(".t-font").forEach((e=>{e.style.color="black"})),document.querySelectorAll("input").forEach((e=>{e.style.backgroundColor="#D7D7D7",e.style.color=""})),document.querySelectorAll("#logo").forEach((e=>{e.src="/logo.cd13699a.svg"})),document.querySelectorAll("#close-symbol").forEach((e=>{e.src="/close-symbol.28d57fa5.svg"})),document.querySelector("header").style.backgroundColor="white",document.querySelector("header").style.color="black",document.querySelectorAll(".header-buttons").forEach((e=>{e.style.color="black"})),document.querySelector("header").classList.toggle("dark-triangle"),document.querySelector(".header-greetings").style.color="black",C.style.backgroundColor="white",C.style.color="black",document.querySelector(".games-container-background").classList.toggle("games-container-background-dark"),document.querySelector(".games-container").style.backgroundColor="white",document.querySelector(".games-container-title").style.color="black",document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input"),"Чи ви народилися у високосний рік?"===document.querySelector(".js-game1-answer").textContent&&(document.querySelector(".js-game1-answer").style.color="black"),document.querySelector(".js-game2-answer").classList.contains("right-answer-game2")&&document.querySelector(".js-game2-answer").classList.contains("false-answer-game2")||(document.querySelector(".js-game2-answer").style.color="black"),document.querySelector(".comp").style.color="white",document.querySelector(".comp").style.backgroundColor="black",document.querySelectorAll(".mathSymbols").forEach((e=>{e.style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)"})),document.querySelector("#buttonCalculate").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector("#num1").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector("#num2").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector(".resultValue").style.backgroundColor="#D7D7D7",document.querySelector(".resultValue").style.color="#7E7E7E",document.querySelector(".dots").style.border="1px dashed black",document.querySelector("#resultTime").style.color="#7E7E7E",document.querySelector(".calculateButton-time").style.backgroundColor="black",document.querySelector(".inputTime").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector(".text-time").style.color="black",document.querySelector("footer").style.color="black",document.querySelector("footer").style.backgroundColor="white",document.querySelector(".modal-footer").style.backgroundColor="white",document.querySelector(".modal-footer").querySelector("button").style.backgroundColor="white")}));
//# sourceMappingURL=index.1cdb5894.js.map
