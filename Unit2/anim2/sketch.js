let x = 0;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  avatar();
  push();
  translate(x,0);
  pop();
  x+=10;
}
function avatar(){
  if (mouseIsPressed) {
    background(255, 102, 0);
  } else {

    background('blue');
  }

  fill(0, 102, 0);
  rect(0, 200, 400, 400);

  fill('brown');
  rect(45, 160, 20, 40)
  if(mouseIsPressed){

  }else{
  fill('green');
  circle(55, 155, 40);
  }


  //car seat
  fill(9255, 204, 102);
  quad(125, 221, 125, 284, 248, 284, 246, 221);
  fill(9255, 204, 102);
  rect(125, 110, 121, 115, 4);
  rect(125, 285, 123, 20, 4);
  rect(155, 74, 60, 50, 4);

  //neck and chest
  fill('black');
  rect(172, 98, 26, 50);
  fill('yellow');
  rect(145, 120, 85, 110);
  line(185, 140, 185, 160);
  line(158, 160, 212, 160);

  //leg area
  ellipse(150, 250, 45, 75);
  ellipse(150, 325, 35, 80);

  ellipse(220, 250, 45, 75);
  ellipse(220, 325, 35, 80);

  fill('black');
  circle(150, 290, 25);
  circle(220, 290, 25);

  if (mouseIsPressed) {
    //here down is right arm
    fill('yellow');
    rect(50, 130, 23, 75, 5);
    ellipse(62, 223, 25, 50);
    rect(52, 242, 20, 20, 3);
    ellipse(77, 250, 12, 5);
    ellipse(69, 269, 4, 15);
    ellipse(62, 269, 4, 15);
    ellipse(54, 269, 4, 15);
    circle(70, 90, 35);
  } else {
    //here down is right arm
    fill('yellow');
    rect(130, 130, 23, 75, 5);
    ellipse(142, 223, 25, 50);
    rect(132, 242, 20, 20, 3);
    ellipse(157, 250, 12, 5);
    ellipse(149, 269, 4, 15);
    ellipse(142, 269, 4, 15);
    ellipse(134, 269, 4, 15);
    circle(140, 120, 35);
  }

  //here down is left arm
  rect(218, 130, 23, 75, 5);
  ellipse(230, 223, 25, 50);
  rect(219, 242, 20, 20, 3);
  ellipse(213, 250, 12, 5);
  ellipse(221, 269, 4, 15);
  ellipse(229, 269, 4, 15);
  ellipse(236, 269, 4, 15);
  circle(230, 120, 35);


  if (mouseIsPressed) {
    //head
    fill('yellow');
    ellipse(135, 80, 50, 58);
    fill('red');
    ellipse(126, 78, 12, 5);
    ellipse(144, 78, 12, 5);
    circle(135, 98, 6);

    //head symbol
    fill('white');
    arc(135, 64, 10, 10, 0, HALF_PI);
    arc(135, 64, 10, 10, PI, HALF_PI);
    fill("black");
    arc(135, 64, 10, 10, HALF_PI, PI);
    arc(135, 64, 10, 10, PI + HALF_PI, TWO_PI);
  } else {
    //head
    fill('yellow');
    ellipse(185, 80, 50, 58);
    fill('black');
    ellipse(176, 78, 12, 5);
    ellipse(194, 78, 12, 5);
    circle(185, 98, 6);

    //head symbol
    fill('white');
    arc(185, 64, 10, 10, 0, HALF_PI);
    arc(185, 64, 10, 10, PI, HALF_PI);
    fill("black");
    arc(185, 64, 10, 10, HALF_PI, PI);
    arc(185, 64, 10, 10, PI + HALF_PI, TWO_PI);
  }

  //chest symbol
  fill('white');
  arc(185, 140, 20, 20, 0, HALF_PI);
  arc(185, 140, 20, 20, PI, HALF_PI);
  fill("black");
  arc(185, 140, 20, 20, HALF_PI, PI);
  arc(185, 140, 20, 20, PI + HALF_PI, TWO_PI);
  //feet
  fill('yellow');
  ellipse(148, 372, 30, 25);
  ellipse(220, 372, 30, 25);




  if (mouseIsPressed) {
    //mushroom cloud
    fill(209, 209, 224);
    rect(284, 112, 50, 88);
    fill('grey');
    rect(282, 112, 50, 88);
    fill(204, 41, 0);
    circle(275, 114, 40);
    fill('grey');
    circle(285, 114, 40);
    fill(209, 209, 224);
    circle(304, 80, 40);
    fill('grey');
    circle(330, 83, 40);
    fill(209, 209, 224);
    circle(308, 114, 40);
    fill('grey');
    circle(283, 96, 40);
    fill(204, 41, 0);
    circle(300, 100, 40);
    fill(209, 209, 224);
    circle(340, 109, 40);
    fill('grey');
    circle(322, 95, 40);
    fill('grey');
    circle(334, 110, 40);
    fill('grey');
    circle(312, 114, 40);
  }
}
