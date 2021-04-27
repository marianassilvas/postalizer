let pressed = true;
let phrase;
let words;

function setup() {

  createCanvas(1000, 600);

}

function draw() {

  background(0);
  fill(255);
  textSize(30);

  phrase = "Hello, how are you today?";
  words = RiTa.pos(phrase);

  text(phrase, 50, 100, 1000, 30);
  if (pressed) text(words, 50, 200, 30, 30);

}

function mousePressed() {

  pressed = !pressed;

}
