//https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
let cols = 6,
  rows = 16;

let width = 685;
let height = 454;

var grid_rows = [];
var grid_cols = [];

function setup() {

  let cnv = createCanvas(width, height);
  cnv.parent('canvas-container');

  loadFont('assets/blackout_midnight-webfont.ttf', updateCard);
  textFont('blackout');
  textSize(35); //podemos adicionar uma variável que dinamiza o tamanho de letra

  for (var c = 0; c < cols; c++) {
    grid_cols[c] = c * width / cols;
  }

  for (var r = 0; r < rows; r++) {
    grid_rows[r] = r * height / rows;
  }

  noLoop();
}

function draw() {
  background(220);
  ellipse(50, 50, 80, 80);
}


function updateCard(raio, r, d, t) {

  background(220);

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      stroke(255, 0, 0);
      /*noStroke();*/
      rect(grid_cols[c], grid_rows[r], width / cols, height / rows);
    }
  }

  text(r, grid_cols[3], grid_rows[15]);
  text(d, grid_cols[0], grid_rows[2]);

  push();
  textSize(140);
  text(t, grid_cols[0], grid_rows[10]);
  pop();

  push();
  fill(200,0,200);
  ellipse(100, 100, raio * 2, raio * 2);
  pop();

  /* Monoespacejada algoritmo que vai ter uma aproximação da distância de uma porção de textFont
  regra de três simples (200px 30caracteres, 15 por 15) String*/

}
