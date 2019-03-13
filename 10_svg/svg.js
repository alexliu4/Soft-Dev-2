// Alex Liu
// SoftDev2 pd6
// K09 -- Connect the Dots
// 2019-03-13

// get image
var pic=document.getElementById("vimage");

// var c = document.createElementNS(
// "http://www.w3.org/2000/svg", "circle");

// get the clear button
var clear_button = document.getElementById("clear");

// create var for clearing
var cleared = true;

//clear function
clear_button.addEventListener('click', function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    cleared = true;
})

//connect dots when pic is clicked
pic.addEventListener('click', function(e){
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"
    );
    // draw circle
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "10");
    c.setAttribute("stroke", "green");
    c.setAttribute("fill", "blue");
    pic.appendChild(c);

})

var movement = function() {
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

document.getElementById("move").addEventListener("click", movement);
