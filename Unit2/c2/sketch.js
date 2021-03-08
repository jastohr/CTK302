let state = -1
let mic;
let vol;
let timer = 0

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn();  // what does "new" mean?
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(2);


switch(state) {

 case -1;
 background(100);
 text("click to start",width/2, height/2);
 break ;

case 0 :
background(100);
text("SHHHHHHHHH", width/2, height/2);
if(vol > .2);
state = 1;
break;

case 1 :
background(100);
text("Quiet Down!!!",width/2,height/2);
if (timer >3*60){
  state = 0;
  timer = 0; 
}
break;
}
}
function mouseReleased(){
if (state ==-1){
state=0
}
function touchstarted(){

}

}
