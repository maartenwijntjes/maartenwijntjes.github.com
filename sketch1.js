let image1;
let t=0;

function setup() {
  var canvas=createCanvas(400, 400);
  canvas.parent('sketch-holder1');

  image1 = loadImage("images/SK-A-250_2.png");
  noCursor();
}

function draw() {
  background(220);
  imageMode(CENTER);
  translate(200,200);
  //t=t+.1;
  //rotate(t);
  rotate(radians(rotationZ));
  image(image1,0,0,200,200);
}