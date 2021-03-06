// Alex liu
// SoftDev2 pd6
// K02 -- ...Connecting the Dots
// 2019-01-30

// base code
var bool = new Boolean(true);
var c = document.getElementById("playground");
console.log(c);
var ctx = c.getContext("2d");
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
var xcor = 0;
var ycor = 0;

// bind event handler to clear button
document.getElementById("clear").addEventListener("click", function(e) {
  console.log(bool);
  if (bool){
    //prevents the default action of the event from happening
    e.preventDefault();
    bool = false;
  }
  else {
    ctx.clearRect(0, 0, c.width, c.height);
    bool = true;
  }
});

// editting the canvas portion according to area of mouse click
c.addEventListener('click', function(e){

  ctx.fillStyle = "#008B8B";
  //beginPath() allows you to  discard the previous path and start a new one. If you don't have beginpath(),  you'd be appending more and more to the previous path. So the clear method would only clear temporarily and once you start adding more circles, it would just add on to the circles before.
  ctx.beginPath();
  dot(e.offsetX, e.offsetY);

  if (bool){
    xcor = e.offsetX;
    ycor = e.offsetY;
  }
  else {
    ctx.beginPath();
    ctx.moveTo(xcor,ycor);
    xcor = e.offsetX;
    ycor = e.offsetY;
    ctx.lineTo(xcor, ycor);
    ctx.stroke();
  }
  bool = false;

} );

var line = (x,y) => {
  // move to that pos and draw the line
  ctx.moveTo(x,y);
  // makes line visible
  ctx.stroke();
}

var dot = (x,y) => {
  // ctx.ellipse(x, y, 2, 2, 0, 0, 2 * Math.PI);
  ctx.arc(x, y, 7, 0, Math.PI * 2);

  ctx.fill();
}
