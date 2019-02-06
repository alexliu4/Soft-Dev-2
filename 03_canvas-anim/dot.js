// Temporary Greatness- Alex liu, Brian Lee
// SoftDev2 pd6
// K03 -- They Lock Us In the Tower Whenever We Get Caught
// 2019-02-05

// base code
var c = document.getElementById("playground");
console.log(c);
var ctx = c.getContext("2d");
console.log(ctx);

// important state variables
var requestID;
var radius = 0;
var radius_change = 1;

// bind event handler to stop button
document.getElementById("stop").addEventListener("click", function(e) {
  window.cancelAnimationFrame(requestID);
});

// bind event handler to go button
document.getElementById("go").addEventListener("click", function(e) {
  dot();
  going = true;
});


var dot = () => {
  // clear before
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  // starting to shrink now
  if (radius > c.width / 2 || radius > c.height / 2) {
      radius_change = -1;
  }
  // the growing
  else if (radius <= 0) {
      radius_change = 1;
      radius = 0;
  }
  // creates the circles
  ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
  radius += radius_change;
  ctx.fill();
  ctx.stroke();
  requestID = window.requestAnimationFrame(dot);
}

// formatting of the circle created
ctx.strokeStyle = "#336600";
ctx.lineWidth = 5;
ctx.fillStyle = "#d9ffb3";
