let width_canvas = 685;
let height_canvas = 454;

const epoca = season(new Date(), seasons);

let dt = new Date();
let time = dt.getDate() + " / " +
  (dt.getMonth() + 1) + " / " +
  dt.getFullYear();


function setup() {

  let can2 = createCanvas(width_canvas, height_canvas);
  can2.parent('#canvas_container2');
  if (pathToNewImage != 0) {
    push();
    loadImage(pathToNewImage, img => {
      image(img, 0, 0, 685, 454);
      pop();
    });
  }
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
let rem2 = "";
let dest2 = "";
let texto2 = "";


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
  rem2 = $("#rem2").val();
  dest2 = $("#dest2").val();
  texto2 = $("#texto2").val();

  console.log(texto2, rem2, dest2, time, epoca);
  processMsg('from ' + rem2, 'dear ' + dest2, texto2);
  updateCard(rem2, dest2, texto2, time, epoca);
});

//quando se carrega no RUN AGAIN
$("#runagainpostal2").click(function() {
  $('#canvas_container2').css("display", "flex");
  console.log(texto2, rem2, dest2, time, epoca);
  updateCard(rem2, dest2, texto2, time, epoca);

});


// function updateCard(raio2, r, d) {
//   //background(255);
//
//
//   push();
//   fill(200, 0, 200);
//   ellipse(random(raio2, width - raio2), random(raio2, height - raio2), raio2 * 2, raio2 * 2);
//   pop();
//
//   textSize(40);
//   text(r, 0, 20);
//   text(d, 0, 50);
//
//   if (pathToNewImage != 0) {
//     loadImage(pathToNewImage, img => {
//       image(img, 0, 0, 685, 454);
//     });
//
//   }
//
// }
