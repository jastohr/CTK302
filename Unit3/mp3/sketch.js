var cars = [];
var frogPos ;
var myState = 0;
var timer = 0 ;
var pick;
var guitar;

let mouse ;
let cat ;
let house ;
let f1 ;
var song ;

function preload() {
  song = loadSound("assets/song1.mp3");
}

function setup() {


    house = loadImage("assets/house.jpg") ;
    background = loadImage
  createCanvas(800, 800);
  for (var i = 0; i < 20; i++) {
      cars.push(new Car());
  }
  frogPos = createVector(width/2, height-100);
  cat = loadImage("assets/catimage.png") ;
  mouse = loadImage("assets/mouseimage.png") ;
  f1 = loadFont("assets/berkahramadhan/BerkahRamadhan.ttf") ;
  song.play();

  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);

}

function draw() {
  switch (myState) {
    case 0:
    image(house, width/2, height/2, width, height);
    //background
      textSize(40);
      textFont(f1) ;
      fill('white') ;
      text("Help Jim the cat catch all the mice!", width/2, height/2);
      text("click the mouse to begin", 400, 650) ;
      break;

    case 1:
      game();
      timer++;
      if (timer >= 10 * 60){
        myState = 3; //oof
      }

      break;

    case 2:

      textSize(60);
      image(house, width/2, height/2, witdh, height);

      fill('white')
      text("Jim is FULL!!!",width/2, height/2)

      break;

    case 3:
      textSize(24);
      image(house, width/2, height/2, width, height);
      //background here
      fill('white')
      text("Jim didn't get them all.", width/2, height/2);


      break;

  }

}

function game(){
  background('lightBlue');
    image(house, width/2, height/2, width, height);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

  if  (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1) ;
    }
    //if no cars you winnnn
  if (cars.length == 0) {
    myState = 2;
    }

  }
  //frog
  fill('white');
  image(cat, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();

}
function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: // they won!
      resetTheGame();
      myState = 0;
      break;

    case 3: // they lost!
      resetTheGame();
      myState = 0;
      break;

  }

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }
  timer = 0;

}



function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)||keyIsDown(keyCode = 65)) frogPos.x -=8;
  if (keyIsDown(RIGHT_ARROW)||keyIsDown(keyCode = 68)) frogPos.x +=8;
  if (keyIsDown(UP_ARROW)||keyIsDown(keyCode = 87)) frogPos.y -=8;
  if (keyIsDown(DOWN_ARROW)||keyIsDown(keyCode = 83)) frogPos.y +=8;
}

//car class
function Car() {
// attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-10,10), random(-10,10));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


// methods
this.display = function() {
  image(mouse, this.pos.x, this.pos.y, 50, 50) ;

}
this.drive = function(){
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
  }

}
