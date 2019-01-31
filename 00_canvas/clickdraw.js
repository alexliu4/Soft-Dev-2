// Alex liu
// SoftDev2 pd6
// K #00: I See a Red Door...
// 2019-01-30

// base code
var c = document.getElementById("slate");
console.log(c);
var ctx = c.getContext("2d");
ctx.fillStyle = "#008B8B";
console.log(ctx);
// creates a rectangle
ctx.fillRect( 50, 50, 100, 200);

// bind event handler to clear button
document.getElementById("clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height);
  }, false);

// bind event handler to toggle
document.getElementById("toggle").addEventListener("click", function() {
    if (mode.innerHTML == "box") {
      mode.innerHTML = "dot"
    }
    else {
      mode.innerHTML = "box"
    }
})

// editting the canvas portion according to area of mouse click
c.addEventListener('click', function(){
    var e = window.event;

    var xcor = e.clientX;
    var ycor = e.clientY;
    if (mode.innerHTML == "box") {
          ctx.fillRect(xcor, ycor, 40, 40);
    }
    else {
          ctx.fillStyle = "black";
          ctx.beginPath();
          // arc(xcor, ycor, radius, start angle, end angle)
          ctx.arc(xcor, ycor, 5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fill();

        }
} )
