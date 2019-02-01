// Alex liu
// SoftDev2 pd6
// K #01: ...and I want to Paint It Better
// 2019-01-30

// base code
var c = document.getElementById("slate");
console.log(c);
var ctx = c.getContext("2d");
ctx.fillStyle = "#008B8B";
console.log(ctx);
// creates a rectangle
// ctx.fillRect( 50, 50, 100, 200);

// bind event handler to clear button
document.getElementById("clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height);
  });

// bind event handler to toggle
document.getElementById("toggle").addEventListener("click", function() {
    if (mode.innerHTML == "box") {
      mode.innerHTML = "dot"
    }
    else {
      mode.innerHTML = "box"
    }
});

// editting the canvas portion according to area of mouse click
c.addEventListener('click', function(e){
    //prevents the default action of the event from happening
    e.preventDefault();

    var xcor = e.clientX - e.currentTarget.offsetLeft;
    var ycor = e.clientY - e.currentTarget.offsetTop;
    if (mode.innerHTML == "box") {
          ctx.fillStyle = "#008B8B";
          ctx.fillRect(xcor, ycor, 40, 40);
    }
    else {
          ctx.fillStyle = "black";
          //beginPath() allows you to  discard the previous path and start a new one. If you don't have beginpath(),  you'd be appending more and more to the previous path. So the clear method would only clear temporarily and once you start adding more circles, it would just add on to the circles before.
          ctx.beginPath();
          // arc(xcor, ycor, radius, start angle, end angle)
          ctx.arc(xcor, ycor, 7, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fill();

        }
} );
