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
    grid_cols[c] = c * width_canvas / cols;
  }

  for (let r = 0; r < rows; r++) {
    grid_rows[r] = r * height_canvas / rows;
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

  text(r, grid_cols[3], grid_rows[15]); //remetente
  text(d, grid_cols[0], grid_rows[2]); //destinatário
  text(dt, grid_cols[4], grid_rows[2]); //data

  push();

  processNRC();

  textSize(60);
  //text(t, grid_cols[1], grid_rows[7]);
  //let tamanho_texto;
  //tamanho_texto = textWidth(t);

  writeText(t);

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

function processColor(c) { //cores consoante a estação do ano

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

function writeText(tt){

  let texto=tt;
  let linha1=texto;
  let linha2, linha3, linha4, linha5, linha6;
  let tamanho, tamanho1, tamanho2, tamanho3, tamanho4, tamanho5, tamanho6;
  let l3,l4,l5,l6;

  tamanho=textWidth(texto);
  tamanho1=textWidth(linha1);

  if(tamanho>=width_canvas){
    let g=0;
    while((tamanho1>=width_canvas)&&(linha1.length()>0)){
      linha1=texto.substring(0,(texto.length()-g));
      tamanho1=textWidth(linha1);
      g++;
    }

    linha2=texto.substring((texto.length()-(g-1)),texto.length()); //def. linha2
    tamanho2=textWidth(linha2);

    let h=0;
    while((tamanho2>=width_canvas)&&(linha2.length()>0)){
      linha2=texto.substring((texto.length()-(g-1)),texto.length()-h); //NOVA LINHA2
      tamanho2=textWidth(linha2);
      h++;
    }

    if((linha2.charAt(linha2.length()-1))!=(texto.charAt(texto.length()-1))){
      linha3=texto.substring((texto.length()-(h-1)), texto-length); //def. linha3
      tamanho3=textWidth(linha3);
      l3=1;

      int j=0;
      while((tamanho3>=width_canvas)&&(linha3.length()>0)){
        linha3=texto.substring((texto.length()-(h-1)), texto.length()-j); //NOVA LINHA3
        tamanho3=textWidth(linha3);
        j++;
      }

      if(linha3.charAt(linha3.length()-1)!=texto.charAt(texto.length()-1)){
        linha4=texto.substring(texto.length()-(j-1),texto.length()); //def.linha4
        tamanho4=textWidth(linha4);
        l4=1;

        let k=0;
        while((tamanho4>=width_canvas)&&(linha4.length()>0)){
          linha4=texto.substring((texto.length()-(j-1)),texto.length()-k); //NOVA LINHA4
          tamanho4=textWidth(linha4);
          k++;
        }

        if((linha4.charAt(linha4.length()-1))!=(texto.charAt(texto.length()-1))){
          linha5=texto.substring((texto.length()-(k-1)),texto.length());
          tamanho5=textWidth(linha5);
          l5=1;

          int l=0;
          while((tamanho5>=width_canvas)&&(linha5.length()>0)){
            linha5=texto.substring(texto.length()-(k-1),texto.length()-l); //NOVA LINHA5
            tamanho5=textWidth(linha5);
            l++;
          }

          if((linha5.charAt(linha5.length()-1))!=(texto.charAt(texto.length()-1))){
            linha6=texto.substring((texto.length()-(l-1)), texto-length()); //def.linha6
            tamanho6=textWidth(linha6);
            l6=1;
          }
        }
      }
    }

    //desenhar texto + trim
    linha1=trim(linha1);
    text(linha1, grid_cols[0], grid_rows[4]);

    if(linha2.length()>0){
      linha2=trim(linha2);
      text(linha2, grid_cols[0], grid_rows[6]);
    }

    if(l3==1){
      linha3=trim(linha3);
      text(linha3, grid_cols[0], grid_rows[8]);
    }

    if(l4==1){
      linha4=trim(linha4);
      text(linha4, grid_cols[0], grid_rows[10]);
    }

    if(l5==1){
      linha5=trim(linha5);
      text(linha5, grid_cols[0], grid_rows[12]);
    }

    if(l6==1){
      linha6=trim(linha6);
      text(linha6, grid_cols[0], grid_rows[14]);
    }


  }else{
    text(texto, grid_cols[0], grid_rows[6]);
  }

}
