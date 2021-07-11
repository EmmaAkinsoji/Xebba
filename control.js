let count = 0;

const buttonUp = document.getElementById("countUp");
const buttonDown = document.getElementById("countDown");
const num = document.getElementById("number");
num.innerHTML = count;

buttonUp.addEventListener("click", function() {
 num.innerHTML = count++;
});
  
buttonDown.addEventListener("click", function() {
num.innerHTML = --count;   
});







