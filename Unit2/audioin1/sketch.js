var mic;
var vol;
var c = 'green' ;
var x = 0;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();  // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);
  //fill(random(255), random(255), random(255));
  rect(vol*100,200,75,50);
  rect(vol*200,250,75,50);
  rect(vol*300,300,75,50);

  x = map(vol,0,.2,0,width);
  rect(x,350,75,50);
  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something
  //c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color

  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
