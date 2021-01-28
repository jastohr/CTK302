let i1, i2, i3;


function setup() {
  createCanvas(800, 800);
  i1 = loadImage("assets/kingsofleon.jpg");
  i2 = loadImage("assets/marinelife.jpg");
  i3 = loadImage("assets/galaxy.jpg");

  imageMode(CENTER)
}

function draw() {
background('white');
image(i2, width/2, height/2, 200, 200);
image(i1, width/2, height/2 - 200, 200, 200);
image(i3, width/2, height/2 + 200, 200, 200);
}
