let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  switch(state){

  case 0:
  background('red');
  text("This is my timer",width/2,height/2);
  break;

  case 1:
  background('green');
  text("See! You waited and \nit's now on a different screen.", width/2,height/2);
  break;

  case 2:
  background('blue');
  text("AHHHHH! \n Another Screen.", width/2, height/2);
  }
  timer++ ;
  if(timer>3*60){
    state++ ;
    timer = 0;
  if(state>2){
    state = 0;
  }
  }
}
