// Temporary Greatness- Alex liu, Brian Lee
// SoftDev2 pd6
// K02 -- ...Connecting the Dots
// 2019-01-30

// base code
var going = false;
var c = document.getElementById("playground");
console.log(c);
var ctx = c.getContext("2d");
console.log(ctx);

// important state variables
var requestID;
var radius;

// bind event handler to stop button
document.getElementById("stop").addEventListener("click", function(e) {
  console.log("The Stop:");
  console.log(going);
  if (going){
    // stop function
    going = false;
  }
  else {
    //prevents the default action of the event from happening
    e.preventDefault();
  }
});

// bind event handler to go button
document.getElementById("go").addEventListener("click", function(e) {
  console.log("The Go:");
  console.log(going);
  if (going){
    //prevents the default action of the event from happening
    e.preventDefault();
  }
  else {
    radius = 1;
    going = true;
  }
});


var dot = () => {
  // ctx.ellipse(x, y, 2, 2, 0, 0, 2 * Math.PI);
  // clear before
  ctx.clearRect(0, 0, c.width, c.height);

  ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
  radius++;
  ctx.fill();
  window.requestAnimationFrame(dot);
}

dot();
