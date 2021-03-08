let x = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);
textSize(100);
text("EMERGENCY",x, height/2);

//velocity
x = x + 10;
//x++ is the same thing as x = x +1
if (x > width){
  x = -100;
}
}
