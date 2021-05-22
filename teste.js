function setup(){

let width=685;
let height=454;

let can = createCanvas(width, height);
can.parent('#canvas-container');
}

function draw(){
  // background(100, 149, 237);
  // fill(255);
  // ellipse(mouseX, mouseY, 250, 250);
  // rect(150, 95, 200, 250);
  // line(mouseX, 0, mouseX, 100);

  updateCard(ra, r, d);
}



//mensagem crate new processamento
 var raio = "";
 var from = "";
 var to = "";

 function processMsg(ra, r, d,) {
   updateCard(ra, r, d);

 }


 $("#btncreate").click(function() {
 $('#canvas-container').css("display", "flex");
   raio = $("#raio").val();
   from = $("#from").val();
   to = $("#to").val();

   console.log(raio, from, to);
   processMsg(raio, 'from ' + from, 'dear ' + to);
   updateCard(raio, from, to);
 });


 function updateCard(raio, r, d) {

   push();
   fill(200,0,200);
   ellipse(random(raio,width-raio), random(raio,height-raio), raio * 2, raio * 2);
   pop();

   textSize(40);
   text(r,0,20);
   text(d, 0, 50);

 }
