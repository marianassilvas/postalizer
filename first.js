//let pressed = true;


/*function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  cnv.size(100);
}*/

function setup() {

  let cnv = createCanvas(1000, 600);
  cnv.parent('canvas-container');
  //centerCanvas();
  noLoop();
}

function draw() {

  background(0);
  ellipse(50,50,80,80);

}

function updatePostal(m) {
  background(0);
  ellipse(100, 100, m * 2, m * 2);

}

/*function windowResized() {
  centerCanvas();
}*/


/*function mousePressed() {

  pressed = !pressed;

}*/
