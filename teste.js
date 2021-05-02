function setup(){
createCanvas(1300,600);
}
function draw(){
  background(100, 149, 237);
  fill(255);
  ellipse(mouseX, mouseY, 250, 250);
  rect(150, 95, 200, 250);
  line(mouseX, 0, mouseX, 100);
}
