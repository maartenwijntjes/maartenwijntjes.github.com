// save this file as sketch.js
// Sketch One

var face = function(p){

var ims = [];
var ii = 0

// This sketch loads in images, and then displays each image in rapid succession.


  p.preload = function() {
    let images = 82
    for (let i = 1; i <= images; i++) {
      path = 'demoYaw/' + p.str(i) + '.jpg' // create a path to the image
      loaded_image = p.loadImage(path)     // load the image from the path
      ims.push(loaded_image)             // add the loaded path to ims
    }
  }

   p.setup= function()  {
    // create a canvas, with the size and height of the first image
    var myDiv = p.select('c1');
    var myWidth = myDiv.style.width;
    console.log('width: ' + myWidth);
    p.createCanvas(500, 300)
    
  }

   p.draw= function()  {
    p.background(0);
     
    let k = p.int(p.map(p.mouseX,p.width,0,0,ims.length-1,true)); 
    p.imageMode(p.CENTER);
    p.image(ims[k], p.width/2, p.height/2,200,200); // show the ii-th image in the canvas
    
  }
}
var myp5 = new p5(face,'c1')


/*var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'c1');
*/

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'c2');