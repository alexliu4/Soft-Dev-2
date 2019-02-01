// Alex liu
// SoftDev2 pd6
// K #02: I See a Red Door...
// 2019-01-30

// base code
var bool = new Boolean(true);
var c = document.getElementById("playground");
console.log(c);
var ctx = c.getContext("2d");
ctx.fillStyle = "#008B8B";
console.log(ctx);
// // Reset the current path
// ctx.beginPath();
// // Staring point (10,45)
// ctx.moveTo(10,45);
// // End point (180,47)
// ctx.lineTo(180,47);
// // Make the line visible
// ctx.stroke();
// creates a rectangle
// ctx.fillRect( 50, 50, 100, 200);

// bind event handler to clear button
document.getElementById("clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height);
  bool = true;
});

// editting the canvas portion according to area of mouse click
c.addEventListener('click', function(e){
  //prevents the default action of the event from happening
  e.preventDefault();

  var xcor = e.clientX - e.currentTarget.offsetLeft;
  var ycor = e.clientY - e.currentTarget.offsetTop;
  ctx.fillStyle = "#008B8B";
  //beginPath() allows you to  discard the previous path and start a new one. If you don't have beginpath(),  you'd be appending more and more to the previous path. So the clear method would only clear temporarily and once you start adding more circles, it would just add on to the circles before.
  ctx.beginPath();
  // arc(xcor, ycor, radius, start angle, end angle)
  console.log(bool);
  if (bool){
    bool = false;
    ctx.moveTo(xcor,ycor);
  } else {
    console.log("SHOULD BE PRINTING LINES");
    ctx.lineTo(xcor, ycor);
    ctx.stroke();
  }
  ctx.arc(xcor, ycor, 7, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();

} );
