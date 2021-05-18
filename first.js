let pressed = true;
var phrase ;
let words;


var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {

  cnv = createCanvas(1000, 600);
  centerCanvas();
  background(255, 0, 200);

}

function windowResized() {
  centerCanvas();
}

function draw() {

  background(0);
  fill(255);
  textSize(30);


  phrase =  "<? php echo json_encode($message) ?>" ;
  words = RiTa.pos(phrase);

  text(phrase, 50, 100, 1000, 30);
  if (pressed) text(words, 50, 200, 30, 30);

}

function mousePressed() {

  pressed = !pressed;

}
