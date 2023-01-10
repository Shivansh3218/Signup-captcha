const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.querySelector('.sun').classList.toggle('active')
  document.querySelector('.moon').classList.toggle('active')
  document.querySelector('.form').classList.toggle('black')
})
let submitButton = document.getElementById("submit");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

//Generate Text
const captcha = () => {
let generatedText = "";
/* String.fromCharCode gives ASCII value from a given number */
// total 6 letters hence loop of 2
for (let i = 0; i <=1; i++) {
  //65-90 numbers are capital letters
  generatedText += String.fromCharCode(randomNumber(65, 90));
  //97-122 are small letters
  generatedText += String.fromCharCode(randomNumber(97, 122));
  //48-57 are numbers from 0-9
  generatedText += String.fromCharCode(randomNumber(48, 57));
}
console.log(generatedText, 'captcha generated')
return generatedText;
};

//Generate random numbers between a given range
const randomNumber = (min, max) =>
Math.floor(Math.random() * (max - min + 1) + min);
//Canvas part
function drawStringOnCanvas(captchaText) {
//The getContext() function returns the drawing context that has all the drawing properties and functions needed to draw on canvas
let ctx = canvas.getContext("2d");
//clear canvas
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

const textColor = "chartreuse";
//space between letters
const letterSpace = 30;
//loop through captcha 
for (let i = 0; i < captchaText.length; i++) {
  //Define initial space on X axis
  const xInitialSpace = 25;
  //Set font for canvas element
  ctx.font = "2rem Roboto Mono";
  //set text color
  ctx.fillStyle = textColor;
  ctx.fillText(
    //filling text inside the captcha container
    captchaText[i],
    xInitialSpace + i * letterSpace,
    randomNumber(25, 40)
  );
}
}

function triggerFunction() {
userInput.value = "";
captchaValue = captcha();
drawStringOnCanvas(captchaValue);
}

reloadButton.addEventListener("click",(e)=>{
   e.preventDefault()
    triggerFunction()
} );

window.onload = () => triggerFunction();

submitButton.addEventListener("click", () => {

if (userInput.value === captchaValue) {
  alert("Sign UP Success ");
} else {
  alert("Incorrect Captcha Try Again");
  triggerFunction();
}
});
