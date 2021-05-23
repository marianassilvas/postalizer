let width_canvas = 685;
let height_canvas = 454;

const epoca = season(new Date(), seasons);

let dt = new Date();
let time = dt.getDate() + " / " +
  (dt.getMonth() + 1) + " / " +
  dt.getFullYear();


function setup() {



  let can = createCanvas(width_canvas, height_canvas);
  can.parent('#canvas-container');


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

function draw() {

  // updateCard(ra, r, d, time, epoca);
}

//mensagem crate new processamento
let rem = "";
let dest = "";
let texto = "";


function processRita(t) {
  //divide é um array? como diz no inspect?
  let rt = RiTa.tokenize(t);
  return rt;
}

function processMsg(r, d, t) {
  //call rita
  processRita(t);
  //processLemma();

  let split_text = splitTokens(t, [',', ' ', '.', '!', '?']);
  processNRC(split_text);

  processColor(epoca, r, g, b);
  updateCard(r, d, t, time, epoca);

  /*$('#canvas-container').css("display","block");*/
  $('#canvas-container').css("opacity", 1);

}


function saveMyCanvas() {
  saveCanvas("#canvas-container", ["jpg"], ["jpg"]);
}

function resetMyCanvas() {
  //resetCanvas("#canvas-container");
}

//quando se carrega no CREATE
$("#btncreate").click(function() {
  $('#canvas-container').css("display", "flex");
  rem = $("#rem").val();
  dest = $("#dest").val();
  texto = $("#texto").val();

  console.log(texto, rem, dest, time, epoca);
  processMsg('from ' + rem, 'dear ' + dest, texto);
  updateCard(rem, dest, texto, time, epoca);
});

//quando se carrega no RUN AGAIN
$("#runagainpostal").click(function() {
  $('#canvas-container').css("display", "flex");
  rem = $("#rem").val();
  dest = $("#dest").val();
  texto = $("#texto").val();

  console.log(texto, rem, dest, time, epoca);
  processMsg('from ' + rem, 'dear ' + dest, texto);
  updateCard(rem, dest, texto, time, epoca);
});


// function updateCard(t, r, d) {
//   background(255);
//   // push();
//   // fill(200,0,200);
//   // // ellipse(random(raio,width-raio), random(raio,height-raio), raio * 2, raio * 2);
//   // pop();
//
//   textSize(40);
//   text(r, 0, 20);
//   text(d, 0, 50);
// }
