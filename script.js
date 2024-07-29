// Button Color Picker
const button = document.querySelector("button");
button.addEventListener("click", function() {
  const startTime = new Date().getTime();
  setInterval(function() {
    if(new Date().getTime() -startTime > 500) {
      clearInterval;
      return;
    }
    acakWarna();
  },60);
});

function acakWarna() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + r +"," + g + "," + b + ")";
}

// Reset Button
const reset = document.querySelector(".desc");
reset.addEventListener("click", function() {
  document.body.style.backgroundColor = "rgb(42, 42, 42)";
});
