

function setup(){

let width=685;
let height=454;
let can2 = createCanvas(width, height);
can2.parent('#canvas_container2');
}

function draw(){
  updateCard(re, re, de);
}

//mensagem crate new processamento
 var raio2 = "";
 var from2 = "";
 var to2 = "";

 function processMsg(re, re, de,) {
   updateCard(re, re, de);

 }
 function saveMyCanvas(){
   saveCanvas("#canvas_container2",["jpg"], ["jpg"]);
 }
 function resetMyCanvas(){
   //resetCanvas("#canvas-container");
 }

//quando se carrega no CREATE
 $("#btncreate2").click(function() {
 $('#canvas_container2').css("display", "flex");
   raio2 = $("#raio2").val();
   from2 = $("#from2").val();
   to2 = $("#to2").val();

   console.log(raio2, from2, to2);
   processMsg(raio2, 'from ' + from2, 'dear ' + to2);
   updateCard(raio2, from2, to2);
 });

//quando se carrega no RUN AGAIN
 $("#runagainpostal2").click(function() {
 $('#canvas_container2').css("display", "flex");
   raio2 = $("#raio2").val();
   from2 = $("#from2").val();
   to2 = $("#to2").val();

   console.log(raio2, from2, to2);
   processMsg(raio2, 'from ' + from, 'dear ' + to2);
   updateCard(raio2, from2, to2);
 });


 function updateCard(raio2, r, d) {
   background(255);
   push();
   fill(200,0,200);
   ellipse(random(raio2,width-raio2), random(raio2,height-raio2), raio2 * 2, raio2 * 2);
   pop();

   textSize(40);
   text(r,0,20);
   text(d, 0, 50);

 }
