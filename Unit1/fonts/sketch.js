
let f1 ;
let f2 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/berkahramadhan/BerkahRamadhan.ttf");
  f2 = loadFont("assets/revans/RevansMedium.ttf");
}

function draw() {
background(100) ;
textSize(48) ;
textFont(f1) ;
text("hello", width/2, height/2);

textFont(f2);
text("hola Amanda", width/2 + 100, height/2 + 100)
}
