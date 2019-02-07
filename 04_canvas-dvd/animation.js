// Temporary Greatness- Alex Liu, Brian Lee
// SoftDev2 pd6
// K04 - What is it saving the screen from?
// 2019-02-05

// base code
var c = document.getElementById("playground");
// console.log(c);
var ctx = c.getContext("2d");
// console.log(ctx);

// important state variables
var requestID;
var radius = 0;
var radius_change = 1;

var drawCircle = function() {
  ctx.strokeStyle = "#336600";
  ctx.lineWidth = 5;
  ctx.fillStyle = "#d9ffb3";
  window.cancelAnimationFrame(requestID);
  // clear before
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  if (radius > c.width / 2 || radius > c.height / 2) {
    radius_change = -1;
  }
  else if (radius <= 0) {
    radius_change = 1;
  }
  ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
  radius += radius_change;
  ctx.fill();
  ctx.stroke();
  requestID = window.requestAnimationFrame(drawCircle);
}

var dvdLogoSetup = function() {
  ctx.clearRect(0, 0, c.width, c.height);
  window.cancelAnimationFrame(requestID);

  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor(Math.random() * (c.width - rectWidth));
  var rectY = Math.floor(Math.random() * (c.height - rectHeight));

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  var dvdLogo = function() {
    requestID = window.requestAnimationFrame(dvdLogo);
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    rectX += xVel; rectY += yVel;
    if (rectX + rectWidth >= c.width || rectX <= 0) {
      xVel *= -1;
    }
    if (rectY + rectHeight >= c.height || rectY <= 0) {
      yVel *= -1;
    }
  }
  dvdLogo();
}

document.getElementById("circle").addEventListener("click", drawCircle);
document.getElementById("dvd").addEventListener("click", dvdLogoSetup);
document.getElementById("stop").addEventListener("click", function() {
    window.cancelAnimationFrame(requestID)
});
