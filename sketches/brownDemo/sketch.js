//check maarten... 1

var start = 1;
var finish = 9;
var imgs = [];
var testim;
var k=0;
var canvaswidth=400;
var rotation;

function preload() {
  for (var i = start; i<=finish; i++) {
    imgs[i-start]=loadImage("sketches/brownDemo/brownian/brownian "+str(i)+".jpg");
  }
}

function setup() {
	if(windowWidth<400){
		canvaswidth=windowWidth*0.8;
	}

  var canvasss=createCanvas(canvaswidth, canvaswidth/1.5);
  canvasss.parent('brownianDemo');
}

function draw() {
  background(220);
  image(imgs[k],0,0,canvaswidth, canvaswidth/1.5);

  
  
  if(rotationY!=0){
  	stroke(255,128,128);
  	text(rotationY,30,30);
  	rotation=constrain(rotationY,-20,20);
  	text(rotation,30,60);
  	k=x2int(map(rotation,-20,20,0,canvaswidth));
  	text(k,30,90);
  	text(canvas.width,30,120);
  	text(canvaswidth,30,150);
  } else{
  	k=x2int(constrain(mouseX,0,canvaswidth));
  }

  
  //text(rotationY,30,30);
}

function x2int(x){
  return round(x/canvas.width*finish);
}

