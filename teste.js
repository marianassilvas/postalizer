function setup(){
let can= createCanvas(685,454);
can.parent('canvas-container');
}

function draw(){
  background(100, 149, 237);
  fill(255);
  ellipse(mouseX, mouseY, 250, 250);
  rect(150, 95, 200, 250);
  line(mouseX, 0, mouseX, 100);
}
