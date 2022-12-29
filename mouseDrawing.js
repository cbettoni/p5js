function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  fill(0);
  stroke(255);
  strokeWeight(2);
  if (mouseIsPressed == true) {
  circle(mouseX, mouseY, 50);    
  }
}
  
function keyPressed () {
 save("export.png");
 background(0);
}