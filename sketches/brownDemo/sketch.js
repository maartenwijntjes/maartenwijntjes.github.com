var start = 1;
var finish = 9;
var imgs = [];
var testim;
var k=0;

function preload() {
  testim=loadImage("brownian/brownian 9.jpg");
  for (var i = start; i<=finish; i++) {
    imgs[i-start]=loadImage("brownian/brownian "+str(i)+".jpg");
  }
}

function setup() {
  var canvas=createCanvas(400, 266);
  canvas.parent('brownianDemo');
}

function draw() {
  background(220);
  k=x2int(mouseX);
  image(imgs[k],0,0);
}

function x2int(x){
  return round(x/width*finish)
}

