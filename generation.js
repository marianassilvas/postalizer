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
  textSize(38); //podemos adicionar uma variável que dinamiza o tamanho de letra

  for (let c = 0; c <= cols; c++) {
    grid_cols[c] = c * width_canvas / cols;
  }

  for (let r = 0; r <= rows; r++) {
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

  textSize(35);
  text(r, grid_cols[3], grid_rows[16]); //remetente
  text(d, grid_cols[0], grid_rows[1]); //destinatário
  text(dt, grid_cols[4], grid_rows[1]); //data

  push();
  textSize(55);
  writeText(t);
  //text(t, grid_cols[1], grid_rows[7]);
  //let tamanho_texto;
  //tamanho_texto = textWidth(t);
  pop();

  processNRC();

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
  let column = table.getColumn('English (en)'); //array com nomes da tabela
  let textoNRC = g; //array de strings de palavras da msg
  //print(column);

  let corresponde = []; //array que vai receber palavras da msg que existem na tabela
  let linha_NRC = []; //rows correspondentes a cada palavra que existe do NRC na msg


  if (typeof(textoNRC) != 'undefined') {

    for (var i = 0; i < column.length; i++) {
      for (var h = 0; h < textoNRC.length; h++) {
        if (textoNRC[h] === column[i]) {
          corresponde.push(column[i]); //palavras que correspondem
          linha_NRC.push(table.getRow(i)); //rows correspondentes
        }
      }
    }
    console.log(linha_NRC, 'índice');
    console.log(corresponde, 'palavras');

    let corresponde_2 = []; //onde  devia vir tipo {1,0,0,0,1,0,...}

    for (var h = 0; h < linha_NRC.length; h++) {
        for (var i = 0; i < table.getColumnCount(); i++) {
          corresponde_2[h]=linha_NRC.getString(i);
          print(corresponde_2);
        }
    }

    /*  for (var i = 0; i < corresponde.length; i++) {
        linha_NRC = table.getRow(1);
        console.log(linha_NRC, 'linha correspondente');
      } */


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

function writeText(tt) {

  let break_text = tt; //texto que recebo

  let linha = [];
  let tamanho = [];
  var gt, ht, jt, kt, lt;

  var wtf = [];

  linha[0] = break_text; //vai ser as linhas. a primeira começa por ser igual ao texto que recebo

  tamanho[0] = textWidth(break_text);
  tamanho[1] = textWidth(linha[0]);

  //console.log(tamanho[1], tamanho[0]);

  if (tamanho[0] >= width_canvas) {

    var gt = 0;
    while ((tamanho[1] >= width_canvas) && (textWidth(linha[0]) > 0)) {
      linha[0] = break_text.substring(0, (textWidth(break_text) - gt));
      tamanho[1] = textWidth(linha[0]);
      gt++;
    }

    linha[1] = break_text.substring((textWidth(break_text) - (gt - 1)), textWidth(break_text)); //def. linha2
    tamanho[2] = textWidth(linha[1]);

    var ht = 0;
    while ((tamanho[2] >= width_canvas) && (textWidth(linha[1]) > 0)) {
      linha[1] = break_text.substring((textWidth(break_text) - (gt - 1)), textWidth(break_text) - ht); //NOVA LINHA2
      tamanho[2] = textWidth(linha[1]);
      ht++;
    }

    if ((linha[1].charAt(linha[1].length - 1)) != (break_text.charAt(break_text.length - 1))) {
      linha[2] = break_text.substring((textWidth(break_text) - (ht - 1)), textWidth(break_text)); //DEF. Linha3
      tamanho[3] = textWidth(linha[2]);
      wtf[0] = 1;

      var jt = 0;
      while ((tamanho[3] >= width_canvas) && (textWidth(linha[2]) > 0)) {
        linha[2] = break_text.substring((textWidth(break_text) - (ht - 1)), textWidth(break_text) - jt); //NOVA LINHA3
        tamanho[3] = textWidth(linha[2]);
        jt++;
      }

      if ((linha[2].charAt(linha[2].length - 1)) != (break_text.charAt(break_text.length - 1))) {
        linha[3] = break_text.substring((textWidth(break_text) - (jt - 1)), textWidth(break_text)); //DEF. Linha4
        tamanho[4] = textWidth(linha[3]);
        wtf[1] = 1;

        var kt = 0;
        while ((tamanho[4] >= width_canvas) && (textWidth(linha[3]) > 0)) {
          linha[3] = break_text.substring((textWidth(break_text) - (jt - 1)), textWidth(break_text) - kt); //NOVA LINHA4
          tamanho[4] = textWidth(linha[3]);
          kt++;
        }

        if ((linha[3].charAt(linha[3].length - 1)) != (break_text.charAt(break_text.length - 1))) {
          linha[4] = break_text.substring((textWidth(break_text) - (kt - 1)), textWidth(break_text)); //DEF. Linha5
          tamanho[5] = textWidth(linha[4]);
          wtf[2] = 1;

          var lt = 0;
          while ((tamanho[5] >= width_canvas) && (textWidth(linha[4]) > 0)) {
            linha[4] = break_text.substring((textWidth(break_text) - (kt - 1)), textWidth(break_text) - lt); //NOVA LINHA5
            tamanho[5] = textWidth(linha[4]);
            lt++;
          }

          if ((linha[4].charAt(linha[4].length - 1)) != (break_text.charAt(break_text.length - 1))) {
            linha[5] = break_text.substring((textWidth(break_text) - (kt - 1)), textWidth(break_text)); //DEF. Linha6
            tamanho[6] = textWidth(linha[5]);
            wtf[3] = 1;

          }
        }

      }
    }



    //------------- ESCREVER --------------------------//

    linha[0] = trim(linha[0]);
    text(linha[0], grid_cols[0], grid_rows[4]);

    if (textWidth(linha[1]) > 0) {
      linha[1] = trim(linha[1]);
      text(linha[1], grid_cols[0], grid_rows[6]);
    }

    if (wtf[0] == 1) {
      linha[2] = trim(linha[2]);
      text(linha[2], grid_cols[0], grid_rows[8]);
    }

    if (wtf[1] == 1) {
      linha[3] = trim(linha[3]);
      text(linha[3], grid_cols[0], grid_rows[10]);
    }

    if (wtf[2] == 1) {
      linha[4] = trim(linha[4]);
      text(linha[4], grid_cols[0], grid_rows[12]);
    }

    if (wtf[3] == 1) {
      linha[5] = trim(linha[5]);
      text(linha[5], grid_cols[0], grid_rows[14]);
    }


  } else {
    console.log('texto de uma linha');
  }
}
