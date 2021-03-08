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
text("I invented a new word!",width/2,height/2);
break;

case 1:
background('yellow');
text("Plagiarism...XD", width/2,height/2);
break;
}

}
function mouseReleased(){
  state++ ;
  if (state> 1){
    state = 0
  }

}
