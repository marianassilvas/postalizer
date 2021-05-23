let cols = 6,
  rows = 16;


let grid_rows = [];
let grid_cols = [];

let r, g, b;

let table;

var p1, p2, p3, p4, p5;

var positive = [];
var positive_int = [];
var positive_soma = [];

var negative = [];
var negative_int = [];
var negative_soma = [];

var anger = [];
var anger_int = [];
var anger_soma = [];

var antecipation = [];
var antecipation_int = [];
var antecipation_soma = [];

var disgust = [];
var disgust_int = [];
var disgust_soma = [];

var fear = [];
var fear_int = [];
var fear_soma = [];

var joy = [];
var joy_int = [];
var joy_soma = [];

var sadness = [];
var sadness_int = [];
var sadness_soma = [];

var surprise = [];
var surprise_int = [];
var surprise_soma = [];

var trust = [];
var trust_int = [];
var trust_soma = [];


function setup() {

}

function draw() {}

function preload() {
  table = loadTable('assets/NRC_Word_Emotion.csv', 'csv', 'header');
}


function updateCard(r, d, t, dt, epoca) {

  background(220);
  noStroke();

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      push();
      //stroke(255, 0, 0);
      noStroke();
      rect(grid_cols[c], grid_rows[r], width / cols, height / rows);
      pop();
    }
  }

  strokeWeight(2);
  desenhaFormas(p1, p2, p3, p4, p5);

  textSize(35);
  text(r, grid_cols[3], grid_rows[16]); //remetente
  text(d, grid_cols[0], grid_rows[1]); //destinatário
  text(dt, grid_cols[4], grid_rows[1]); //data

  push();
  textSize(55);
  writeText(t);
  pop();

  processNRC();

  let cor = processColor(epoca);

  for (let a = 0; a < 2; a++) {
    push();
    fill(cor[0], cor[1], cor[2]);
    ellipse(random(10, width_canvas - 10 * 2), random(10, height_canvas - 10 * 2), 10 * 2, 10 * 2);
    pop();
  }

}

function processNRC(g) {
  //print(t);
  let column = table.getColumn('English (en)'); //array com nomes da tabela
  let textoNRC = g; //array de strings de palavras da msg
  //print(column);

  let corresponde_palavras = []; //array que vai receber palavras da msg que existem na tabela
  let row_corresponde = []; //rows correspondentes a cada palavra que existe do NRC na msg


  if (typeof(textoNRC) != 'undefined') {

    for (var i = 0; i < column.length; i++) {
      for (var h = 0; h < textoNRC.length; h++) {
        if (textoNRC[h] === column[i]) {
          corresponde_palavras.push(column[i]); //palavras que correspondem
          row_corresponde.push(table.getRow(i)); //rows correspondentes
        }
      }
    }
    //console.log(row_corresponde, 'índice');
    console.log(corresponde_palavras, 'palavras');

    let allRows_corresponde = [];

    for (var h = 0; h < row_corresponde.length; h++) {
      for (var i = 1; i < table.getColumnCount(); i++) {
        allRows_corresponde.push(row_corresponde[h].getString(i));
      }
    }

    let corresponde_emotions = [];

    for (var i = 0; i < corresponde_palavras.length; i++) {

      corresponde_emotions[i] = allRows_corresponde.splice(0, 10);
      //console.log('por cada palavra', corresponde_emotions);
    }

    console.log('primeira palavra:', corresponde_emotions[0]);
    console.log('segunda palavra:', corresponde_emotions[1]);

    let leftovers; //tolerância do sistema



    //var somaMarota =  0;
    for (var i = 0; i < corresponde_palavras.length; i++) { //palavra a palavra

      positive.push(corresponde_emotions[i][0]);
      positive_int.push(parseInt(positive[i]));
      positive_soma = positive_int.reduce(getSum);

      negative.push(corresponde_emotions[i][1]);
      negative_int.push(parseInt(negative[i]));
      negative_soma = negative_int.reduce(getSum);

      anger.push(corresponde_emotions[i][2]);
      anger_int.push(parseInt(anger[i]));
      anger_soma = anger_int.reduce(getSum);

      antecipation.push(corresponde_emotions[i][3]);
      antecipation_int.push(parseInt(antecipation[i]));
      antecipation_soma = antecipation_int.reduce(getSum);

      disgust.push(corresponde_emotions[i][4]);
      disgust_int.push(parseInt(disgust[i]));
      disgust_soma = disgust_int.reduce(getSum);

      fear.push(corresponde_emotions[i][5]);
      fear_int.push(parseInt(fear[i]));
      fear_soma = fear_int.reduce(getSum);

      joy.push(corresponde_emotions[i][6]);
      joy_int.push(parseInt(joy[i]));
      joy_soma = joy_int.reduce(getSum);

      sadness.push(corresponde_emotions[i][7]);
      sadness_int.push(parseInt(sadness[i]));
      sadness_soma = sadness_int.reduce(getSum);

      surprise.push(corresponde_emotions[i][8]);
      surprise_int.push(parseInt(surprise[i]));
      surprise_soma = surprise_int.reduce(getSum);

      trust.push(corresponde_emotions[i][9]);
      trust_int.push(parseInt(trust[i]));
      trust_soma = trust_int.reduce(getSum);

    }

    print('valores', positive_int, disgust_int, anger_int, trust_int);
    print('soma', positive_soma, disgust_soma, anger_soma, trust_soma);

    p1 = max(positive_soma, negative_soma);
    p2 = max(anger_soma, fear_soma);
    p3 = max(disgust_soma, antecipation_soma);
    p4 = max(joy_soma, sadness_soma);
    p5 = max(surprise_soma, trust_soma);



    print(p1, 'P1 CRL!');
    print(p2, 'P2 CRL!');
    print(p3, 'P3 CRL!');
    print(p4, 'P4 CRL!');
    print(p5, 'P5 CRL!');

  }

}

function getSum(total, num) {
  return total + num;
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
    text(break_text, grid_cols[0], grid_rows[6]);
  }
}

function desenhaFormas(p1_, p2_, p3_, p4_, p5_) {

  let p1__ = p1_;
  let p2__ = p2_;
  let p3__ = p3_;
  let p4__ = p4_;
  let p5__ = p5_;

  if (typeof(p1__) != 'undefined') {
    if (p1__ == negative_soma && p1__ > 0) { //desenho negativo

      let xline = random(width);
      let yline = random(height);

      for (var i = 0; i < negative_soma; i++) {
        push();
        let jump = random(10, 30);
        stroke(random(100, 255), 0, 0);
        strokeWeight(2);
        line(xline, yline + jump * i, (xline + 260), yline + jump * i);
        pop();
      }
    } else if (p1__ == positive_soma && p1__ > 0) { //desenho positivo

      for (var i = 0; i < p1__; i++) {

        var numpontas = 4;
        var x, y, px, py;
        x = random(raio, width - raio);
        y = random(raio, height - raio);
        var raio = random(20, 50);

        for (var j = 0; j < numpontas; j++) {
          push();
          px = x + raio * cos(j * (2 * PI / numpontas));
          py = y + raio * sin(j * (2 * PI / numpontas));
          stroke(0, random(100, 255), 0);
          strokeWeight(2);
          line(x, y, px, py);
          pop();
        }

      }

    }

    if (p2__ == anger_soma && p2__ > 0) { //desenho anger

      var numpontos = p2__ + 3;
      var x, y, px, py;
      var raio1 = 50;
      var raio2 = 10;
      x = random(width);
      y = random(height);

      beginShape();
      for (var i = 0; i < numpontos; i++) {
        if (i % 2 == 0) {
          px = x + raio1 * cos(i * (2 * PI / numpontos));
          py = y + raio1 * sin(i * (2 * PI / numpontos));
        } else {
          px = x + raio2 * cos(i * (2 * PI / numpontos));
          py = y + raio2 * sin(i * (2 * PI / numpontos));
        }
        push();
        stroke(random(100, 255), 0, 0);
        vertex(px, py);
        pop();
      }
      endShape(CLOSE);

    } else if (p2__ == fear_soma && p2__ > 0) { //desenho fear

      var numpontos = p2__ + 3;
      var x, y, px, py;
      var raio1 = 50;
      var raio2 = 10;
      x = random(width);
      y = random(height);

      push();
      fill(0);
      ellipse(x, y, raio1 * 2, raio1 * 2);
      pop();

      beginShape();
      for (var i = 0; i < numpontos; i++) {
        if (i % 2 == 0) {
          px = x + raio1 * cos(i * (2 * PI / numpontos));
          py = y + raio1 * sin(i * (2 * PI / numpontos));
        } else {
          px = x + raio2 * cos(i * (2 * PI / numpontos));
          py = y + raio2 * sin(i * (2 * PI / numpontos));
        }
        vertex(px, py);
      }
      endShape(CLOSE);

    }

    if (p3__ == disgust_soma && p3__ > 0) { //desenho disgust

      for (var i = 0; i < p3__; i++) {
        push();
        noFill();
        strokeWeight(13);
        var x = random(width);
        var y = random(height);
        var raio = random(40, 90);
        ellipse(x, y, raio * 2, raio * 2);
        pop();

      }


    } else if (p3__ == antecipation_soma && p3__ > 0) { //desenho antecipation

      var x, y;
      var l1 = 50;
      var l2 = 20;
      x = random(width);
      y = random(height);

      for (var i = 0; i < p3__; i++) {

        line(x, y, x + l1, y - l2);
        line(x + l1, y - l2, x + l1 * 2, y + l2);
        line(x + l1 * 2, y + l2, x + l1 * 3, y - l2);
        line(x + l1 * 3, y - l2, x + l1 * 4, y + l2);
        line(x + l1 * 4, y + l2, x + l1 * 5, y - l2);
        line(x + l1 * 5, y - l2, x + l1 * 6, y + l2);

      }

    }


    if (p4__ == joy_soma && p4__ > 0) { //desenho joy

      for (var i = 0; i < p4__; i++) {

        push();
        noStroke();
        fill(162, 42, 42);

        x = random(raio, width - raio);
        y = random(raio, height - raio);
        var raio = random(20, 50);

        arc(x, y, raio * 2, raio * 2, 0, PI, PIE);

        pop();
      }


    } else if (p4__ == sadness_soma && p4__ > 0) { //desenho sadness

      for (var i = 0; i < p4__; i++) {

        push();
        noStroke();
        fill(0, 0, 255);

        x = random(raio, width - raio);
        y = random(raio, height - raio);
        var raio = random(20, 50);

        arc(x, y, raio * 2, raio * 2, PI, 2 * PI, PIE);
        pop();

      }

    }


    if (p5__ == surprise_soma && p5__ > 0) { //desenho surprise

      var numpontos = p5__ + 3;
      var x, y, px, py;
      x = random(width);
      y = random(height);
      var raio = random(20, 50);

      for (var i = 0; i < numpontos; i++) {

        px = x + raio * cos(i * (2 * PI / numpontos));
        py = y + raio * sin(i * (2 * PI / numpontos));
        stroke(0, random(100, 255), random(100, 255));
        line(x, y, px, py);
      }


    } else if (p5__ == trust_soma && p5__ > 0) { //desenho trust

      var numpontos = p5__ + 3;
      var x, y, px, py;
      var raio = random(20, 50);
      x = random(raio, width - raio);
      y = random(raio, height - raio);

      beginShape();
      for (var i = 0; i < numpontos; i++) {
        px = x + raio * cos(i * (2 * PI / numpontos));
        py = y + raio * sin(i * (2 * PI / numpontos));
        push();
        fill(random(100, 255), random(100, 255), 0);
        vertex(px, py);
        pop();
      }
      endShape(CLOSE);
    }



  }


}
