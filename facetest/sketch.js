
var image1,image2;  

var w1,w2,wString;

function setup() {
  createCanvas(400, 400);
  canvas.parent('sketch-holder');
  image1 = loadImage("facetest/meanfaceLeft.png");
  image2 = loadImage("facetest/meanfaceRight.png");
}

function draw() {
  w1=float(mouseX)/800;
  w2=1-w1;
  //wString=str(round(w1*100)/100);
  tint(255, 255, 255, 255*w2);
  image(image1, 0, 0,400,400);
  
  tint(255, 255, 255, 255*w1);
  image(image2, 0, 0,400,400);
  
}
