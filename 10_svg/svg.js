// Alex Liu
// SoftDev2 pd6
// K10 -- Ask Circles [Change || Die]
// 2019-03-13

// get image
var pic=document.getElementById("vimage");

// var c = document.createElementNS(
// "http://www.w3.org/2000/svg", "circle");

//                  CLEAR SECTION
// get the clear button
var clear_button = document.getElementById("clear");

// create var for clearing
var cleared = true;

var clear = function(e){
    while (pic.lastChild) {
	     pic.removeChild(pic.lastChild);
    }
    cleared = true;
}

// clear function
clear_button.addEventListener('click', clear );

//                  DOT SECTION
// reates the dot
var add_dot = function(e){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  // checks to see if color change is needed
  pic.addEventListener('click', colorchange);
  if (e.target['nodeName'] == 'circle') { return }

  if (e.target['nodeName'] == 'circle') {
    pic.addEventListener('click', colorchange);
    return;
  }

  // if nott draw normal blue dot
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", "10");
  c.setAttribute("stroke", "green");
  c.setAttribute("fill", "blue");
  pic.appendChild(c);
}

// changes the dot color
var colorchange = function(e){
  if (e.target.getAttribute("fill") == "blue"){
    e.target.setAttribute("fill", "black");
  } else {
    e.target.setAttribute("fill", "blue");
    e.target.setAttribute("cx", Math.random() * pic.clientWidth);
    e.target.setAttribute("cy", Math.random() * pic.clientHeight);
  }
}

pic.addEventListener('click', add_dot);
