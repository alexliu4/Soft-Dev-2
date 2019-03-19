// Alex Liu
// SoftDev2 pd6
// K10 -- Ask Circles [Change || Die]
// 2019-03-13

// get image
var pic=document.getElementById("vimage");

var requestID;
// speed of movement
var xVel = 1;
var yVel = 1;

//                  CLEAR SECTION
// get the clear button
var clear_button = document.getElementById("clear");

// create var for clearing
var cleared = true;

var clear = function(e){
  window.cancelAnimationFrame(requestID)
  while (pic.lastChild) {
    // console.log(pic.lastChild);
    pic.removeChild(pic.lastChild);
  }
  cleared = true;
}

// clear function
clear_button.addEventListener('click', clear );

//                  DOT SECTION
// creates the dot
var add_dot = function(x,y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  // window.cancelAnimationFrame(requestID);

  // if not draw normal blue dot
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "10");
  c.setAttribute("stroke", "green");
  c.setAttribute("fill", "blue");
  c.setAttribute("xVel", 1);
  c.setAttribute("yVel", 1);
  pic.appendChild(c)

  // changes the dot color
  c.addEventListener('click', function(e){
    if (e.target.getAttribute("fill") == "blue"){
      e.target.setAttribute("fill", "black");
    } else {
      e.target.setAttribute("fill", "blue");
      e.target.setAttribute("cx", Math.random() * (pic.clientWidth - 10));
      e.target.setAttribute("cy", Math.random() * (pic.clientHeight- 10));
    }
    e.stopPropagation();
  })

  // requestID = window.requestAnimationFrame(add_dot);

}


pic.addEventListener('click', function(e){
    add_dot(e.offsetX, e.offsetY);
})

//                  MOVING DOT SECTION

var movement = function() {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  window.cancelAnimationFrame(requestID);

  var rectWidth = parseInt(pic.clientWidth);
  var rectHeight = parseInt(pic.clientHeight);

  var redraw = function() {
    // addition or bounce depending
    requestID = window.requestAnimationFrame(redraw);

    var child = pic.children;
    var i;
    for (i = 0; i < child.length; i++) {
      var child = pic.children;


      var rectX = parseInt(child[i].getAttributeNode("cx").value);
      xVel = parseInt(child[i].getAttribute("xVel"));
      // console.log(child[i].getAttributeNode("cx").value);

      var rectY = parseInt(child[i].getAttributeNode("cy").value);
      yVel = parseInt(child[i].getAttribute("yVel"));
      // console.log(child[i].getAttributeNode("cy").value);

      // add to xcor or ycor (or subtract to bounce)
      // rectX += xVel; rectY += yVel;
      if (rectX + 10 >= rectWidth || rectX - 10 <= 0) {
        xVel *= -1;
        // console.log(xVel);
      }
      if (rectY + 10  >= rectHeight || rectY - 10 <= 0) {
        yVel *= -1;
        // console.log(yVel);
      }

      child[i].setAttribute("xVel", xVel);
      child[i].setAttribute("yVel", yVel);

      child[i].setAttribute("cx", rectX + xVel);
      // console.log(rectX.toString());
      child[i].setAttribute("cy", rectY + yVel);
      // console.log(rectY.toString());
    }

  }
  redraw();
}

var together = function() {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  window.cancelAnimationFrame(requestID);

  var rectWidth = parseInt(pic.clientWidth);
  var rectHeight = parseInt(pic.clientHeight);

  var redraw = function() {
    // addition or bounce depending
    requestID = window.requestAnimationFrame(redraw);
    var child = pic.children;
    var i;
    for (i = 0; i < child.length; i++) {
      var child = pic.children;

      var rectX = parseInt(child[i].getAttributeNode("cx").value);
      var rectY = parseInt(child[i].getAttributeNode("cy").value);

      // add to xcor or ycor (or subtract to bounce)
      rectX += xVel; rectY += yVel;
      if (rectX + 10 >= rectWidth || rectX - 10 <= 0) {
        xVel *= -1;
      }
      if (rectY + 10  >= rectHeight || rectY - 10 <= 0) {
        yVel *= -1;
      }

      child[i].setAttribute("cx", rectX.toString());
      child[i].setAttribute("cy", rectY.toString());
    }

  }
  redraw();
}

var disco = function() {
  window.cancelAnimationFrame(requestID);
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  var rectWidth = parseInt(pic.clientWidth);
  var rectHeight = parseInt(pic.clientHeight);

  var recolor = function() {
    // addition or bounce depending
    requestID = window.requestAnimationFrame(recolor);

    var child = pic.children;
    var i;
    for (i = 0; i < child.length; i++) {
      var child = pic.children;

      var rectX = parseInt(child[i].getAttributeNode("cx").value);
      xVel = parseInt(child[i].getAttribute("xVel"));
      // console.log(child[i].getAttributeNode("cx").value);

      var rectY = parseInt(child[i].getAttributeNode("cy").value);
      yVel = parseInt(child[i].getAttribute("yVel"));
      // console.log(child[i].getAttributeNode("cy").value);

      // add to xcor or ycor (or subtract to bounce)
      // rectX += xVel; rectY += yVel;
      if (rectX + 10 >= rectWidth || rectX - 10 <= 0) {
        xVel *= -1;
        // console.log(xVel);
      }
      if (rectY + 10  >= rectHeight || rectY - 10 <= 0) {
        yVel *= -1;
        // console.log(yVel);
      }

      child[i].setAttribute("xVel", xVel);
      child[i].setAttribute("yVel", yVel);

      child[i].setAttribute("cx", rectX + xVel);
      // console.log(rectX.toString());
      child[i].setAttribute("cy", rectY + yVel);
      // console.log(rectY.toString());

      child[i].setAttribute("fill", '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
    }

  }
  recolor();
}

document.getElementById("move").addEventListener("click", movement);

document.getElementById("together").addEventListener("click", together);

document.getElementById("disco").addEventListener("click", disco);

document.getElementById("stop").addEventListener("click", function() {
    window.cancelAnimationFrame(requestID)
});
