let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {

switch(state){

  case 0:
  background('grey');
  text("This is my state machine",width/2,height/2);
  break;

  case 1:
  background('yellow');
  text("It's been 30 days since the \n zoom video was made so it's not there", width/2,height/2);
  break;

  case 2:
  background('red');
  text("Trying my best to catch back up in this class!", width/2,height/2);
  break;

  case 3:
  background('blue');
  text("I hope that this is somewhat \n what I am supposed to do.", width/2,height/2);
  break;

  case 4:
  background('orange');
  text("Hi Amanda. This is a state machine.", width/2,height/2);
  break;

  case 5:
  background('green');
  text("This is the last screen.\n Sorry I'm doing this so late. "
  , width/2,height/2);
  break;
  }

  }
  function mouseReleased(){
    state++ ;
    if (state> 5){
      state = 0
    }
}
