//https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('canvas-container');
  noLoop();
}

function draw() {
  background(220);
  ellipse(50,50,80,80);
}

function updateCard(r) {
  background(220);
  ellipse(100,100,r*2,r*2);
}
