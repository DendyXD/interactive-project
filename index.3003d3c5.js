!function(){var e=document.querySelector(".__select"),t=e.querySelector(".__select__title"),o=e.querySelectorAll(".__select__label");t.addEventListener("click",(function(){"active"===e.getAttribute("data-state")?e.setAttribute("data-state",""):e.setAttribute("data-state","active")}));for(var c=0;c<o.length;c++)o[c].addEventListener("click",(function(o){t.textContent=o.target.textContent,e.setAttribute("data-state","")}));function r(){document.body.classList.remove("show-header-modal")}document.querySelector(".close").addEventListener("click",r),window.addEventListener("keydown",(function(e){"Escape"===e.key&&r()}));var l=document.querySelector(".js-footer-button"),n=document.querySelector(".js-footer-input");l.addEventListener("click",(function(){n.value.includes("@gmail")&&document.body.classList.add("show-footer-modal")})),document.querySelector(".modal-footer-button").addEventListener("click",(function(){document.body.classList.toggle("show-footer-modal")}));var u=document.querySelector(".js-game1-input"),a=document.querySelector(".js-game1-button"),s=document.querySelector(".js-game1-answer");a.addEventListener("click",(function(){Number(u.value)>=1900&&Number(u.value)<=2024?Number(u.value)%4==0&&0!==Number(u.value)?(s.style.color="#039900",s.textContent="Ви народилися у високосний рік!"):(s.style.color="#990000",s.textContent="Ви народилися не у високосний рік"):(s.textContent="Введіть рік в діапазоні від 1900 до 2024 року",s.style.color="#990000")}));var d=document.querySelector(".js-game2-input"),y=document.querySelector(".js-game2-button"),i=document.querySelector(".js-game2-answer");y.addEventListener("click",(function(){var e=Math.floor(11*Math.random());""!==d.value?Number(d.value)===e?(i.textContent="Вітаю! Ви вгадали число. (".concat(e,")"),i.style.color="#039900"):(i.textContent="Ви програли, комп'ютер загадав ".concat(e),i.style.color="#990000"):(i.textContent="Введіть число для перевірки",i.style.color="#990000")}));document.getElementById("draw"),document.getElementById("computer"),document.getElementById("you"),document.querySelector(".text"),document.querySelector(".comp");document.querySelector("#buttonCalculate").addEventListener("click",(function(){var e,t=parseFloat(document.querySelector("#num1").value),o=parseFloat(document.querySelector("#num2").value);if(isNaN(t)||isNaN(o))return void alert("Будь ласка, введіть числа для обчислення.");switch(q){case"+":e=t+o;break;case"-":e=t-o;break;case"*":e=t*o;break;case"/":if(0===o)return void alert("Ділення на нуль неможливе.");e=t/o;break;default:return void alert("Будь ласка, оберіть операцію.")}S.textContent="".concat(e)}));document.querySelector("#buttonPlus").addEventListener("click",(function(){return b("+")})),document.querySelector("#buttonMinus").addEventListener("click",(function(){return b("-")})),document.querySelector("#buttonPomn").addEventListener("click",(function(){return b("*")})),document.querySelector("#buttonPodl").addEventListener("click",(function(){return b("/")}));var m=document.querySelector("#num1"),f=document.querySelector("#num2"),S=document.querySelector("#result");m.addEventListener("focus",(function(){"Введіть число"===m.value&&(m.value="")})),f.addEventListener("focus",(function(){"Введіть число"===f.value&&(f.value="")})),m.addEventListener("blur",(function(){""===m.value&&(m.value="Введіть число")})),f.addEventListener("blur",(function(){""===f.value&&(f.value="Введіть число")}));var q="";function b(e){return q=e}var g=document.getElementById("dino");document.getElementById("cactus");document.addEventListener("click",(function(e){g.classList.add("jump"),setTimeout((function(){g.classList.remove("jump")}),500)}));var h=document.querySelector(".game7-field"),k=document.querySelector(".game7-ball"),v=0,E=0;h.addEventListener("click",(function(e){e.offsetX>E?v+=45:v-=45;E=e.offsetX,k.style.rotate="".concat(v,"deg"),e.offsetY>170?k.style.top="170px":k.style.top="".concat(e.offsetY,"px");e.offsetX>670?k.style.left="670px":k.style.left="".concat(e.offsetX,"px")}));document.querySelector("h");var w=document.querySelectorAll("#numerical-game"),p=document.querySelectorAll("#entertainment-game"),C=document.querySelectorAll("#acquaintance-game");function x(){switch(console.log(document.querySelector(".__select__title").textContent),document.querySelector(".__select__title").textContent){case"Числовий":w.forEach((function(e){e.style.display="flex"})),p.forEach((function(e){e.style.display="none"})),C.forEach((function(e){e.style.display="none"}));break;case"Ігровий":p.forEach((function(e){e.style.display="flex",e===document.querySelector(".allrockpaperscissor")&&(e.style.display="block")})),w.forEach((function(e){e.style.display="none"})),C.forEach((function(e){e.style.display="none"}));break;case"Ознайомчий":C.forEach((function(e){e.style.display="flex"})),p.forEach((function(e){e.style.display="none"})),w.forEach((function(e){e.style.display="none"}));break;default:C.forEach((function(e){e.style.display="flex"})),p.forEach((function(e){e.style.display="flex"})),w.forEach((function(e){e.style.display="flex"}))}}document.querySelectorAll(".__select__label").forEach((function(e){e.addEventListener("click",x)}));var L=document.querySelector("#theme-toggle"),A=0;L.addEventListener("click",(function(){0===A?(A=1,document.querySelectorAll("button").forEach((function(e){e.style.backgroundColor="white",e.style.color="black"})),document.querySelectorAll(".delimiter").forEach((function(e){e.style.backgroundColor="white"})),document.querySelectorAll(".m-font").forEach((function(e){e!==document.querySelector(".js-game1-answer")&&(e.style.color="white"),e!==document.querySelector(".js-game2-answer")&&(e.style.color="white")})),document.querySelectorAll(".t-font").forEach((function(e){e.style.color="white"})),document.querySelectorAll("input").forEach((function(e){e.style.backgroundColor="white",e.style.color="black"})),document.querySelectorAll("#logo").forEach((function(e){e.src="/logo-dark.4272bff3.svg"})),document.querySelectorAll("#close-symbol").forEach((function(e){e.src="/close-symbol-dark.28d57fa5.svg"})),document.querySelectorAll("#search-icon").forEach((function(e){e.src="/search-icon-dark.950b0e0f.svg"})),document.querySelector("header").style.backgroundColor="#0e0713",document.querySelector("header").style.color="white",document.querySelectorAll(".header-buttons").forEach((function(e){e.style.color="white"})),document.querySelector("header").classList.toggle("dark-triangle"),document.querySelector(".header-greetings").style.color="white",L.style.backgroundColor="#0e0713",L.style.color="white",document.querySelector(".games-container-background").classList.toggle("games-container-background-dark"),document.querySelector(".games-container").style.backgroundColor="#0e0713",document.querySelector(".games-container-title").style.color="white",document.querySelector(".js-game1-input").style.boxShadow="0 0 0 0",document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input"),"Чи ви народилися у високосний рік?"===document.querySelector(".js-game1-answer").textContent&&(document.querySelector(".js-game1-answer").style.color="white"),document.querySelector(".comp").style.color="black",document.querySelector(".comp").style.backgroundColor="white",document.querySelectorAll(".mathSymbols").forEach((function(e){e.style.boxShadow="0 0 0 0"})),document.querySelector("#buttonCalculate").style.boxShadow="0 0 0 0",document.querySelector("#num1").style.boxShadow="0 0 0 0",document.querySelector("#num2").style.boxShadow="0 0 0 0",document.querySelector(".resultValue").style.backgroundColor="white",document.querySelector(".resultValue").style.color="black",document.querySelector("footer").style.color="white",document.querySelector("footer").style.backgroundColor="#0e0713",document.querySelector(".modal-footer").style.backgroundColor="#0e0713",document.querySelector(".modal-footer").style.color="white",document.querySelector(".modal-footer").querySelector("button").style.backgroundColor="#0e0713"):(A=0,document.querySelectorAll("button").forEach((function(e){e.style.backgroundColor="black",e.style.color="white"})),document.querySelectorAll(".delimiter").forEach((function(e){e.style.backgroundColor="black"})),document.querySelectorAll(".m-font").forEach((function(e){e!==document.querySelector(".js-game1-answer")&&(e.style.color="black"),e!==document.querySelector(".js-game2-answer")&&(e.style.color="black")})),document.querySelectorAll(".t-font").forEach((function(e){e.style.color="black"})),document.querySelectorAll("input").forEach((function(e){e.style.backgroundColor="#D7D7D7",e.style.color=""})),document.querySelectorAll("#logo").forEach((function(e){e.src="/logo.cd13699a.svg"})),document.querySelectorAll("#close-symbol").forEach((function(e){e.src="/close-symbol.28d57fa5.svg"})),document.querySelectorAll("#search-icon").forEach((function(e){e.src="/search-icon.8c15998e.svg"})),document.querySelector("header").style.backgroundColor="white",document.querySelector("header").style.color="black",document.querySelectorAll(".header-buttons").forEach((function(e){e.style.color="black"})),document.querySelector("header").classList.toggle("dark-triangle"),document.querySelector(".header-greetings").style.color="black",L.style.backgroundColor="white",L.style.color="black",document.querySelector(".games-container-background").classList.toggle("games-container-background-dark"),document.querySelector(".games-container").style.backgroundColor="white",document.querySelector(".games-container-title").style.color="black",document.querySelector(".js-game1-input").style.boxShadow="0 0 0 0",document.querySelector(".js-game1-input").classList.add("game1-dark-theme-input"),"Чи ви народилися у високосний рік?"===document.querySelector(".js-game1-answer").textContent&&(document.querySelector(".js-game1-answer").style.color="black"),document.querySelector(".comp").style.color="white",document.querySelector(".comp").style.backgroundColor="black",document.querySelectorAll(".mathSymbols").forEach((function(e){e.style.boxShadow="0 0 0 0"})),document.querySelector("#buttonCalculate").style.boxShadow="0 0 0 0",document.querySelector("#num1").style.boxShadow="0 0 0 0",document.querySelector("#num2").style.boxShadow="0 0 0 0",document.querySelector(".resultValue").style.backgroundColor="#D7D7D7",document.querySelector(".resultValue").style.color="#7E7E7E",document.querySelector("footer").style.color="black",document.querySelector("footer").style.backgroundColor="white",document.querySelector(".modal-footer").style.backgroundColor="white",document.querySelector(".modal-footer").querySelector("button").style.backgroundColor="white")}))}();
//# sourceMappingURL=index.3003d3c5.js.map
