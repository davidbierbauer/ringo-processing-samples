//http://www.learningprocessing.com/examples/chapter-13/example-13-1/

require("ringo/processing").wire(this);


// 4 random numbers
var randoms = [];
// Which number are we using
var index = 0; 

function setup() {
  
  size(200,200);
  
  // Fill array with random values
  for (var i = 0; i < randoms.length; i ++ ) {
    randoms[i] = random(0,256);
  }
  
  frameRate(1); //setting the framerate (fps) doesn't work with js

}

function draw() {
 // Every frame we access one element of the array
  background(randoms[index]);
  
  // And then go on to the next one
  index = (index + 1) % randoms.length; 
  // Using the modulo operator to cycle a counter back to 0.

}

run();
