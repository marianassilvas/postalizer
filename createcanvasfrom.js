let width_canvas2 = 685;
let height_canvas2 = 454;

const epoca = season(new Date(), seasons);

let dt = new Date();
let time = dt.getDate() + " / " +
  (dt.getMonth() + 1) + " / " +
  dt.getFullYear();


function setup() {

  let can2 = createCanvas(width_canvas2, height_canvas2);
  can2.parent('#canvas_container2');

  loadFont('assets/blackout_midnight-webfont.ttf', updateCard);
  textFont('blackout');
  textSize(38); //podemos adicionar uma variável que dinamiza o tamanho de letra


  for (let c = 0; c <= cols; c++) {
    grid_cols[c] = ((c * 670) / cols) + 6.5; //-20 margin
  }

  for (let r = 0; r <= rows; r++) {
    grid_rows[r] = ((r * 439) / rows) + 6.5;
  }


  noLoop();
}

function draw() {
  //updateCard(re, re, de);
}

//mensagem crate new processamento
let rem = "";
let dest = "";
let texto = "";


function processRita(t) {
  let rt = RiTa.tokenize(t);
  return rt;
}


function processMsg(r, d, t, ) {
  //call rita
  processRita(t);
  //processLemma();

  let split_text = splitTokens(t, [',', ' ', '.', '!', '?']);
  processNRC(split_text);

  processColor(epoca, r, g, b);
  updateCard(r, d, t, time, epoca);

  /*$('#canvas-container').css("display","block");*/
  $('#canvas_container2').css("opacity", 1);

}

function saveMyCanvas() {
  saveCanvas("#canvas_container2", ["jpg"], ["jpg"]);
}

function resetMyCanvas() {}

//quando se carrega no CREATE
$("#btncreate2").click(function() {
  $('#canvas_container2').css("display", "flex");
  rem = $("#from2").val();
  dest = $("#to2").val();
  texto = $("#raio2").val();

  console.log(texto, rem, dest, time, epoca);
  processMsg('from ' + rem, 'dear ' + dest, texto);
  updateCard(rem, dest, texto, time, epoca);
});

//quando se carrega no RUN AGAIN
$("#runagainpostal2").click(function() {
  $('#canvas_container2').css("display", "flex");
  updateCard(rem, dest, texto, time, epoca);
});


function updateCard(raio2, r, d) {
  //background(255);
  if (pathToNewImage != 0) {
    loadImage(pathToNewImage, img => {
      image(img, 0, 0, 685, 454);
    });

  }

  push();
  fill(200, 0, 200);
  ellipse(random(raio2, width - raio2), random(raio2, height - raio2), raio2 * 2, raio2 * 2);
  pop();

  textSize(40);
  text(r, 0, 20);
  text(d, 0, 50);

}
