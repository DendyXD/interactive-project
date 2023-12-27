!function(){var e=document.querySelector(".__select"),t=e.querySelector(".__select__title"),o=e.querySelectorAll(".__select__label"),r=document.querySelector(".name"),c=document.querySelector(".btnn"),n=document.querySelector(".header-greetings");t.addEventListener("click",(function(){"active"===e.getAttribute("data-state")?e.setAttribute("data-state",""):e.setAttribute("data-state","active")}));for(var l=0;l<o.length;l++)o[l].addEventListener("click",(function(o){t.textContent=o.target.textContent,e.setAttribute("data-state","")}));function a(){document.body.classList.remove("show-header-modal")}c.addEventListener("click",(function(){n.textContent="Вітаємо, ".concat(r.value)})),document.querySelector(".close").addEventListener("click",a),window.addEventListener("keydown",(function(e){"Escape"===e.key&&a()}));var u=document.querySelector(".js-footer-button"),s=document.querySelector(".js-footer-input");u.addEventListener("click",(function(){s.value.includes("@gmail")&&document.body.classList.add("show-footer-modal")})),document.querySelector(".modal-footer-button").addEventListener("click",(function(){document.body.classList.toggle("show-footer-modal")}));var d=document.querySelector(".js-game1-input"),i=document.querySelector(".js-game1-button"),y=document.querySelector(".js-game1-answer");i.addEventListener("click",(function(){Number(d.value)>=1900&&Number(d.value)<=2024?Number(d.value)%4==0&&0!==Number(d.value)?(y.style.color="#039900",y.textContent="Ви народилися у високосний рік!"):(y.style.color="#990000",y.textContent="Ви народилися не у високосний рік"):(y.textContent="Введіть рік в діапазоні від 1900 до 2024 року",y.style.color="#990000")}));var m=document.querySelector(".js-game2-input"),f=document.querySelector(".js-game2-button"),b=document.querySelector(".js-game2-answer");f.addEventListener("click",(function(){var e=Math.floor(11*Math.random());""!==m.value?Number(m.value)===e?(b.textContent="Вітаю! Ви вгадали число. (".concat(e,")"),b.classList.add("right-answer-game2"),b.classList.remove("false-answer-game2"),b.style.color="none"):(b.textContent="Ви програли, комп'ютер загадав ".concat(e),b.classList.add("false-answer-game2"),b.classList.remove("right-answer-game2"),b.style.color="none"):(b.textContent="Введіть число для перевірки",b.classList.add("false-answer-game2"),b.classList.remove("right-answer-game2"),b.style.color="none")}));document.getElementById("draw"),document.getElementById("computer"),document.getElementById("you"),document.querySelector(".text"),document.querySelector(".comp");document.querySelector("#buttonCalculate").addEventListener("click",(function(){var e,t=parseFloat(document.querySelector("#num1").value),o=parseFloat(document.querySelector("#num2").value);if(isNaN(t)||isNaN(o))return void alert("Будь ласка, введіть числа для обчислення.");switch(q){case"+":e=t+o;break;case"-":e=t-o;break;case"*":e=t*o;break;case"/":if(0===o)return void alert("Ділення на нуль неможливе.");e=t/o;break;default:return void alert("Будь ласка, оберіть операцію.")}h.textContent="".concat(e)}));document.querySelector("#buttonPlus").addEventListener("click",(function(){return p("+")})),document.querySelector("#buttonMinus").addEventListener("click",(function(){return p("-")})),document.querySelector("#buttonPomn").addEventListener("click",(function(){return p("*")})),document.querySelector("#buttonPodl").addEventListener("click",(function(){return p("/")}));var g=document.querySelector("#num1"),S=document.querySelector("#num2"),h=document.querySelector("#result");g.addEventListener("focus",(function(){"Введіть число"===g.value&&(g.value="")})),S.addEventListener("focus",(function(){"Введіть число"===S.value&&(S.value="")})),g.addEventListener("blur",(function(){""===g.value&&(g.value="Введіть число")})),S.addEventListener("blur",(function(){""===S.value&&(S.value="Введіть число")}));var q="";function p(e){return q=e}document.querySelector(".calculateButton-time").addEventListener("click",(function(){var e=document.querySelector(".inputTime").value,t=parseInt(e);if(isNaN(t))return void alert("Будь ласка, введіть числове значення.");if(t>=60&&t<1440){var o=Math.floor(t/60),r=t-60*o;k.textContent="".concat(o," год ").concat(r," хв"),0===r&&(k.textContent="".concat(o," год"))}else if(t>=1440){var c=Math.floor(t/1440),n=t-1440*c,l=Math.floor(n/60),a=t-(1440*c+60*l);k.textContent="".concat(c," дн ").concat(l," год ").concat(a," хв"),0===a&&0===l?k.textContent="".concat(c," дн"):0===l?k.textContent="".concat(c," дн ").concat(a," хв"):0===a&&(k.textContent="".concat(c," дн ").concat(l," год"))}else k.textContent="".concat(t," хв")}));var k=document.querySelector("#resultTime");var v=document.querySelector(".game7-field"),w=document.querySelector(".game7-ball"),E=0,x=0;v.addEventListener("click",(function(e){e.offsetX>x?E+=45:E-=45;x=e.offsetX,w.style.rotate="".concat(E,"deg"),e.offsetY>170?w.style.top="170px":w.style.top="".concat(e.offsetY,"px");e.offsetX>670?w.style.left="670px":w.style.left="".concat(e.offsetX,"px")}));document.querySelector("h");document.querySelectorAll('input[name="fact"]').forEach((function(e){e.addEventListener("change",(function(){var e,t,o;e=this.value,t=document.querySelector("#scientistList"),(o=Array.from(t.querySelectorAll(".grid-item"))).forEach((function(r){r.style.listStyleType="none";var c=parseInt(r.getAttribute("data-birth"),10),n=r.getAttribute("data-name"),l=r.getAttribute("data-surname");switch(e){case"bornIn20thCentury":r.style.display=c<1900&&c>=1800?"list-item":"none";break;case"bornInAmerica":r.style.display="Albert"===n&&"Einstein"===l?"list-item":"none";break;case"sortAlphabetically":o.sort((function(e,t){return e.getAttribute("data-name").localeCompare(t.getAttribute("data-name"))})).forEach((function(e,o){e.style.order=o,t.appendChild(e)}));break;case"startsWithC":r.style.display=l.startsWith("C")?"list-item":"none";break;case"sortByAge":o.sort((function(e,t){var o=parseInt(e.getAttribute("data-birth"),10),r=parseInt(e.getAttribute("data-death"),10),c=parseInt(t.getAttribute("data-birth"),10);return r-o-(parseInt(t.getAttribute("data-death"),10)-c)})).forEach((function(e,o){e.style.order=o,t.appendChild(e)}));break;case"removeStartsWithA":r.style.display=n.startsWith("A")?"none":"list-item";break;case"findOldest":var a=Array.from(o).reduce((function(e,t){return parseInt(t.getAttribute("data-birth"),10)>parseInt(e.getAttribute("data-birth"),10)?t:e}));o.forEach((function(e){return e.style.display=e===a?"list-item":"none"}));break;case"findMinMaxAge":var u=(new Date).getFullYear(),s=Array.from(o).reduce((function(e,t){var o=parseInt(t.getAttribute("data-birth"),10);return(parseInt(t.getAttribute("data-death"),10)||u)-o>parseInt(e.getAttribute("data-death")||u,10)-parseInt(e.getAttribute("data-birth"),10)?t:e})),d=Array.from(o).reduce((function(e,t){var o=parseInt(t.getAttribute("data-birth"),10);return(parseInt(t.getAttribute("data-death"),10)||u)-o<parseInt(e.getAttribute("data-death")||u,10)-parseInt(e.getAttribute("data-birth"),10)?t:e}));o.forEach((function(e){return e.style.display=e===s||e===d?"list-item":"none"}));break;case"sameInitials":o.forEach((function(e){return e.style.display=n.charAt(0)===l.charAt(0)?"list-item":"none"}));break;default:r.style.display="list-item",r.style.order=""}}))}))}));var A=document.querySelectorAll("#numerical-game"),C=document.querySelectorAll("#entertainment-game"),L=document.querySelectorAll("#acquaintance-game");function j(){switch(console.log(document.querySelector(".__select__title").textContent),document.querySelector(".__select__title").textContent){case"Числовий":A.forEach((function(e){e.style.display="flex"})),C.forEach((function(e){e.style.display="none"})),L.forEach((function(e){e.style.display="none"}));break;case"Ігровий":C.forEach((function(e){e.style.display="flex",e===document.querySelector(".allrockpaperscissor")&&(e.style.display="block")})),A.forEach((function(e){e.style.display="none"})),L.forEach((function(e){e.style.display="none"}));break;case"Ознайомчий":L.forEach((function(e){e.style.display="flex"})),C.forEach((function(e){e.style.display="none"})),A.forEach((function(e){e.style.display="none"}));break;default:L.forEach((function(e){e.style.display="flex"})),C.forEach((function(e){e.style.display="flex"})),A.forEach((function(e){e.style.display="flex"}))}}document.querySelectorAll(".__select__label").forEach((function(e){e.addEventListener("click",j)}));var I=document.querySelector("#theme-toggle"),_=0;I.addEventListener("click",(function(){0===_?(_=1,document.querySelectorAll("button").forEach((function(e){e!==document.querySelector(".js-game1-button")&&e!==document.querySelector(".js-game2-button")?(e.style.backgroundColor="white",e.style.color="black"):e.style.backgroundColor="#262230"})),document.querySelectorAll(".delimiter").forEach((function(e){e.style.backgroundColor="white"})),document.querySelectorAll(".m-font").forEach((function(e){e!==document.querySelector(".js-game1-answer")&&e!==document.querySelector(".js-game2-answer")&&(e.style.color="white")})),document.querySelectorAll(".t-font").forEach((function(e){e.style.color="white"})),document.querySelectorAll("input").forEach((function(e){e.style.backgroundColor="white",e.style.color="black"})),document.querySelectorAll("#logo").forEach((function(e){e.src="/logo-dark.4272bff3.svg"})),document.querySelectorAll("#close-symbol").forEach((function(e){e.src="/close-symbol-dark.28d57fa5.svg"})),document.querySelector("header").style.backgroundColor="#0e0713",document.querySelector("header").style.color="white",document.querySelectorAll(".header-buttons").forEach((function(e){e.style.color="white"})),document.querySelector("header").classList.toggle("dark-triangle"),document.querySelector(".header-greetings").style.color="white",I.style.backgroundColor="#0e0713",I.style.color="white",document.querySelector(".games-container-background").classList.toggle("games-container-background-dark"),document.querySelector(".games-container").style.backgroundColor="#0e0713",document.querySelector(".games-container-title").style.color="white",document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input"),"Чи ви народилися у високосний рік?"===document.querySelector(".js-game1-answer").textContent&&(document.querySelector(".js-game1-answer").style.color="white"),document.querySelector(".js-game2-answer").classList.contains("right-answer-game2")&&document.querySelector(".js-game2-answer").classList.contains("false-answer-game2")||(document.querySelector(".js-game2-answer").style.color="white"),document.querySelector(".comp").style.color="black",document.querySelector(".comp").style.backgroundColor="white",document.querySelector(".compyou").style.color="white",document.querySelectorAll(".mathSymbols").forEach((function(e){e.style.boxShadow="0 0 0 0"})),document.querySelector("#buttonCalculate").style.boxShadow="0 0 0 0",document.querySelector("#num1").style.boxShadow="0 0 0 0",document.querySelector("#num2").style.boxShadow="0 0 0 0",document.querySelector(".resultValue").style.backgroundColor="white",document.querySelector(".resultValue").style.color="black",document.querySelector(".dots").style.border="1px dashed white",document.querySelector("#resultTime").style.color="white",document.querySelector(".calculateButton-time").style.backgroundColor="#262230",document.querySelector(".inputTime").style.boxShadow="0 0 0 0",document.querySelector(".text-time").style.color="white",document.querySelector("footer").style.color="white",document.querySelector("footer").style.backgroundColor="#0e0713",document.querySelector(".modal-footer").style.backgroundColor="#0e0713",document.querySelector(".modal-footer").style.color="white",document.querySelector(".modal-footer").querySelector("button").style.backgroundColor="#0e0713"):(_=0,document.querySelectorAll("button").forEach((function(e){e.style.backgroundColor="black",e.style.color="white"})),document.querySelectorAll(".delimiter").forEach((function(e){e.style.backgroundColor="black"})),document.querySelectorAll(".m-font").forEach((function(e){e!==document.querySelector(".js-game1-answer")&&(e.style.color="black")})),document.querySelectorAll(".t-font").forEach((function(e){e.style.color="black"})),document.querySelectorAll("input").forEach((function(e){e.style.backgroundColor="#D7D7D7",e.style.color=""})),document.querySelectorAll("#logo").forEach((function(e){e.src="/logo.cd13699a.svg"})),document.querySelectorAll("#close-symbol").forEach((function(e){e.src="/close-symbol.28d57fa5.svg"})),document.querySelector("header").style.backgroundColor="white",document.querySelector("header").style.color="black",document.querySelectorAll(".header-buttons").forEach((function(e){e.style.color="black"})),document.querySelector("header").classList.toggle("dark-triangle"),document.querySelector(".header-greetings").style.color="black",I.style.backgroundColor="white",I.style.color="black",document.querySelector(".games-container-background").classList.toggle("games-container-background-dark"),document.querySelector(".games-container").style.backgroundColor="white",document.querySelector(".games-container-title").style.color="black",document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input"),"Чи ви народилися у високосний рік?"===document.querySelector(".js-game1-answer").textContent&&(document.querySelector(".js-game1-answer").style.color="black"),document.querySelector(".js-game2-answer").classList.contains("right-answer-game2")&&document.querySelector(".js-game2-answer").classList.contains("false-answer-game2")||(document.querySelector(".js-game2-answer").style.color="black"),document.querySelector(".comp").style.color="white",document.querySelector(".comp").style.backgroundColor="black",document.querySelector(".compyou").style.color="black",document.querySelectorAll(".mathSymbols").forEach((function(e){e.style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)"})),document.querySelector("#buttonCalculate").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector("#num1").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector("#num2").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector(".resultValue").style.backgroundColor="#D7D7D7",document.querySelector(".resultValue").style.color="#7E7E7E",document.querySelector(".dots").style.border="1px dashed black",document.querySelector("#resultTime").style.color="#7E7E7E",document.querySelector(".calculateButton-time").style.backgroundColor="black",document.querySelector(".inputTime").style.boxShadow="2px 2px 0px 1px rgba(191, 191, 191)",document.querySelector(".text-time").style.color="black",document.querySelector("footer").style.color="black",document.querySelector("footer").style.backgroundColor="white",document.querySelector(".modal-footer").style.backgroundColor="white",document.querySelector(".modal-footer").querySelector("button").style.backgroundColor="white")}))}();
//# sourceMappingURL=index.e21d9527.js.map
