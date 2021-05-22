//https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
let cols = 6,
  rows = 16;

let width_canvas = 685;
let height_canvas = 454;

let grid_rows = [];
let grid_cols = [];

let r, g, b;

let table;


function setup() {

  let cnv = createCanvas(width_canvas, height_canvas);
  cnv.parent('canvas-container');

  loadFont('assets/blackout_midnight-webfont.ttf', updateCard);
  textFont('blackout');
  textSize(35); //podemos adicionar uma variável que dinamiza o tamanho de letra

  for (let c = 0; c < cols; c++) {
    grid_cols[c] = c * width / cols;
  }

  for (let r = 0; r < rows; r++) {
    grid_rows[r] = r * height / rows;
  }


  noLoop();
}

function draw() {}

function preload() {
  table = loadTable('assets/NRC-Word-Emotion.csv', 'csv', 'header');
}


function updateCard(raio, r, d, t, dt, epoca) {

  background(220);
  noStroke();

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      push();
      stroke(255, 0, 0);
      rect(grid_cols[c], grid_rows[r], width / cols, height / rows);
      pop();
    }
  }

  text(r, grid_cols[3], grid_rows[15]);
  text(d, grid_cols[0], grid_rows[2]);
  text(dt, grid_cols[4], grid_rows[2]); //data

  push();

  processNRC();

  textSize(60);
  text(t, grid_cols[1], grid_rows[7]);

  let tamanho_texto;
  tamanho_texto = textWidth(t);

  pop();

  let cor = processColor(epoca);

  for (let a = 0; a < 4; a++) {
    push();
    fill(cor[0], cor[1], cor[2]);
    ellipse(random(raio, width_canvas - raio * 2), random(raio, height_canvas - raio * 2), raio * 2, raio * 2);
    pop();
  }
}

function processNRC(g) {
  //print(t);
  let column = table.getColumn('English (en)');
  //print(column);
  let textoNRC = g;

  if (typeof(textoNRC) != 'undefined') {

    for (var i = 0; i < column.length; i++) {
      for (var h = 0; h < textoNRC.length; h++) {
        if (textoNRC[h] === column[i]) console.log(textoNRC[h]);
      }
    }

  }
}

function processColor(c) {

  let cor = [];

  if (c == 'spring') {
    cor[0] = random(0, 200);
    cor[1] = random(150, 255);
    cor[2] = random(0, 60);
  } else if (c == 'summer') {
    cor[1] = 242;
    cor[2] = 203;
    cor[3] = 5;
  } else if (c == 'winter') {
    cor[1] = 3;
    cor[2] = 45;
    cor[3] = 168;
  } else {
    cor[1] = 176;
    cor[2] = 94;
    cor[3] = 34;
  }

  return cor;

}
