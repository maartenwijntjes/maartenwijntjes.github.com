var image1,image2;  

var w1,w2,wString;

function setup() {
  createCanvas(512, 512);
  image1 = loadImage("meanfaceLeft.png");
  image2 = loadImage("meanfaceRight.png");
}

function draw() {
  w1=float(mouseX)/512;
  w2=1-w1;
  //wString=str(round(w1*100)/100);
  tint(255, 255, 255, 255*w2);
  image(image1, 0, 0);
  
  tint(255, 255, 255, 255*w1);
  image(image2, 0, 0);
  
}