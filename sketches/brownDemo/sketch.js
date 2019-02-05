//check maarten... 1

var start = 1;
var finish = 9;
var imgs = [];
var testim;
var k=0;
var canvaswidth=400;

function preload() {
  for (var i = start; i<=finish; i++) {
    imgs[i-start]=loadImage("sketches/brownDemo/brownian/brownian "+str(i)+".jpg");
  }
}

function setup() {
	if(windowWidth<400){
		canvaswidth=windowWidth;
	}

  var canvas=createCanvas(canvaswidth, canvaswidth/1.5);
  canvas.parent('brownianDemo');
}

function draw() {
  background(220);
  k=x2int(constrain(mouseX,0,canvas.width));
  image(imgs[k],0,0);
  stroke(255,128,128);
  text(rotationY,30,30);
}

function x2int(x){
  return round(x/canvas.width*finish);
}

