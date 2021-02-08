let f1 ;

function preload(){
  f1 = loadSound("assets/elevatormusic.mp3");
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
background(100);
}

function mouseReleased(){
  if (f1.isPlaying()){
  f1.pause();
} else{
  f1.loop()
}
}


// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
