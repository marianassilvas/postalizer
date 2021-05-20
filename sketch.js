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

}


function updateCard(raio, r, d, t) {

  background(220);

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      stroke(255, 0, 0);
      rect(grid_cols[c], grid_rows[r], width / cols, height / rows);
    }
  }

  text(r, grid_cols[3], grid_rows[15]);
  text(d, grid_cols[0], grid_rows[2]);

  push();

  textSize(70);
  text(t, grid_cols[0], grid_rows[4]);

  var tamanho_texto;
  tamanho_texto = textWidth(t);
  console.log(tamanho_texto);

  //tentar resolver por largura do texto
  //mas não consigo associar ponto de largura a posição
  //na string
  if(tamanho_texto >= width){
    console.log('texto grande');
    //resolver à conta dos espaços + nº carateres
    //ou seja, descobrir exatamente qual o espaço
    //antes da posição 3
    let arraystrings = split(t,' ');
    console.log(arraystrings);
  }

  //resolver com nº máximo de carateres max/linha=13
  var ncarateres = t.length;
  console.log(ncarateres);

  /*if (ncarateres>=13){

    var ultimo=charAt(13);
    var arraystrings[]=splitTokens(t,ultimo);
    console.log(arraystrings[]);

  }*/
  pop();

  push();
  fill(200,0,200);
  ellipse(100, 100, raio * 2, raio * 2);
  pop();

  /* Monoespacejada algoritmo que vai ter uma aproximação da distância de uma porção de textFont
  regra de três simples (200px 30caracteres, 15 por 15) String
  charat */

}
