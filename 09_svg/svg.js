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
var is_clear = true;

//clear function
clear_button.addEventListener('click', function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    is_clear = true;
})

//instantiate x and y cor
var prev_x = 0;
var prev_y = 0;

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
    if(!is_clear){
	var l = document.createElementNS(
	    "http://www.w3.org/2000/svg", "line"
	);
	l.setAttribute("x1", prev_x);
  l.setAttribute("x2", e.offsetX);
	l.setAttribute("y1", prev_y);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("stroke-width", 2);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
    }
    else{
	is_clear = false;
    }
    prev_x = e.offsetX;
    prev_y = e.offsetY
})
