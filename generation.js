//https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
let cols = 6,
  rows = 16;

let width = 685;
let height = 454;

var grid_rows = [];
var grid_cols = [];

let r, g, b;

let table;


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
}

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

  textSize(60);
  text(t, grid_cols[1], grid_rows[7]);

  var tamanho_texto;
  tamanho_texto = textWidth(t);
  console.log(tamanho_texto);

  //tentar resolver por largura do texto
  //mas não consigo associar ponto de largura a posição
  //na string
  if (tamanho_texto >= width) {
    console.log('texto grande');
    //resolver à conta dos espaços + nº carateres
    //ou seja, descobrir exatamente qual o espaço
    //antes da posição 3
    let arraystrings = split(t, ' ');
    console.log(arraystrings);
  }

  //resolver com nº máximo de carateres max/linha=13
  /*var ncarateres = t.length;
  console.log(ncarateres);*/

  /*if (ncarateres>=13){

    var ultimo=charAt(13);
    var arraystrings[]=splitTokens(t,ultimo);
    console.log(arraystrings[]);

  }*/
  pop();

  let cor = processColor(epoca);

  console.log(processColor(epoca));

  for (let a = 0; a < 4; a++) {
    push();
    fill(cor[0], cor[1], cor[2]);
    ellipse(random(0, width - raio * 2), random(0, height - raio * 2), raio * 2, raio * 2);
    pop();
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
