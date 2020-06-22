var x = 0;

function setup() {
  createCanvas(320, 240);
}

// Add comment
function draw() {
  //console.log(x);
  background(0);
  ellipse(x, 50, 16, 16)
  
  x = x+1;
  if(x>width){
    x = 0;
  }
}