function setup() {

  createCanvas(720, 400);

}
function draw() {
  background('#3399FF80');
  //noStroke();

  fill(112, 65, 2);
  triangle(375, 250, 500, 150, 625, 250);

  fill(230, 205, 147);
  rect(400,250 , 200, 150);

  line(400, 260, 600,260);
  line(400, 270, 600,270);
  line(400, 280, 600,280);
  line(400, 290, 600,290);
  line(400, 300, 600,300);
  line(400, 310, 600,310);
  line(400, 320, 600,320);
  line(400, 330, 600,330);
  line(400, 340, 600,340);
  line(400, 350, 600,350);
  line(400, 360, 600,360);
  line(400, 370, 600,370);
  line(400, 380, 600,380);
  line(400, 390, 600,390);
  line(540,270,540,280);
  line(445, 260,445,270);
  line( 500,280,500,290);
  line(480, 290, 480, 300);
  line(575,300,575,310);
  line(450,360,450,370);

  fill('brown');
  rect( 530, 330, 40,80);

  fill(230, 247, 255);
  rect(425,310,50,50);

  fill('yellow');
  circle(705,0,200);


  fill(230, 247, 255);
  rect(538,342, 10,20);
  rect(552,342, 10,20);



  fill('brown');
  rect(90, 200, 30, 207);

  fill('green')
  circle(104,202, 125);

  fill(204);
  //quad(477, 313, 216, 18, 216, 360, 144, 360);

  fill(255);
  //ellipse(252, 144, 72, 72);

  fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  fill('yellow');
  //arc(477, 300, 280, 280, PI, TWO_PI);

 text(mouseX + ", " + mouseY, 20, 20) ;
function mouseReleased() {
    print(mouseX + ", " + mouseY) ;
}
}
