window.addEventListener("load", change);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function change() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomColor() {
  var min = Math.ceil(100000);
  var max = Math.floor(500000);
  var randomNumber1 = Math.floor(Math.random() * (max - min) + min);
  var randomNumber2 = Math.floor(Math.random() * (max - min) + min);

  color1.value = "#" + randomNumber1;
  color2.value = "#" + randomNumber2;

  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// /////////// Event Listeners ///////////////////

random.addEventListener("click", randomColor);

color1.addEventListener("input", change);

color2.addEventListener("input", change);
