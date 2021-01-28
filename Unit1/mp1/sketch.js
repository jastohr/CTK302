function setup() {

  createCanvas(720, 400);
}
function draw() {
  background('#3399FF80');
  noStroke();

  fill(204);
  triangle(18, 18, 18, 360, 81, 360);

  fill(102);
  rect(477, 313, 63, 63);

  fill(204);
  //quad(477, 313, 216, 18, 216, 360, 144, 360);

  fill(255);
  //ellipse(252, 144, 72, 72);

  fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  fill('yellow');
  arc(477, 300, 280, 280, PI, TWO_PI);

 text(mouseX + ", " + mouseY, 20, 20) ;
function mouseReleased() {
    print(mouseX + ", " + mouseY) ;
}
}
