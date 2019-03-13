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

//instantiate x and y cor
var lastx = 0;
var lasty = 0;

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
    pic.appendChild(d);

    // draw line between circles
    if(!cleared){
	var l = document.createElementNS(
	    "http://www.w3.org/2000/svg", "line"
	);
	l.setAttribute("x1", lastx);
  l.setAttribute("x2", e.offsetX);
	l.setAttribute("y1", lasty);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("stroke-width", 3);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
    }
    else{
	cleared = false;
    }
    lastx = e.offsetX;
    lasty = e.offsetY
})
