// save this file as sketch.js
// Sketch One

https://stackoverflow.com/questions/37083287/how-to-set-canvas-width-height-using-parent-divs-attributes

var face = function(p){

var ims = [];
var ii = 0
let t=0;

// This sketch loads in images, and then displays each image in rapid succession.

// some notes with respect to responsiveness.... these are the boundaries (64em and 16em, em means times fontsize wich seems to be 16)
// 64*16=1024; 42*16=672; 


  p.preload = function() {
    let images = 82
    let horizontalPosition=0;
    
    
    //let marginPadding=(2+6)*emSize;
    

    for (let i = 1; i <= images; i++) {
      path = 'demoYaw/' + p.str(i) + '.jpg' // create a path to the image
      loaded_image = p.loadImage(path)     // load the image from the path
      ims.push(loaded_image)             // add the loaded path to ims
    }
  }

   p.setup = function()  {
    // create a canvas, with the size and height of the first image
    let widthMax=1024;
    let widthMedium=672;
    let emSize=16;
    let padding=2*6;
    let pwid=widthMax-emSize*padding;
    p.createCanvas(pwid, 400)
    
  }

   p.draw = function()  {
    t++;
    p.background(0);
    p.fill(255);
    p.text("Move mouse left-right",20,20)
    p.text("t = " + t,20,40)
    
    
    if(p.mouseY<p.height&&p.mouseY>0){
      let k = p.int(p.map(p.mouseX,p.width,0,0,ims.length-1,true)); 
    }else{
      let k = p.int(p.map(p.sin(t),-1,1,0,ims.length-1));
    }
    p.imageMode(p.CENTER);
    p.image(ims[k], p.width/2, p.height/2,200,200); // show the ii-th image in the canvas
    
  }

  p.windowResized = function() {
    if(p.windowWidth<672){
    //padding = 2em on both left and right side, em  = 16 so.... 
    p.resizeCanvas(p.windowWidth-4*16, 300);
  }
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

