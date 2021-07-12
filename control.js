let digit = 0;
const buttonUp = document.getElementById("countUp");
const buttonDown = document.getElementById("countDown");
const num = document.getElementById("number");
num.innerHTML = digit;

buttonUp.addEventListener("click", function() {
 num.innerHTML = digit++;
});
  
buttonDown.addEventListener("click", function() {
num.innerHTML = --digit;   
});








