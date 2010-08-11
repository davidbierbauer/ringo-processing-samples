//http://www.learningprocessing.com/examples/chapter-15/example-15-15/

require("ringo/processing").wire(this);

var img;       // The source image
var cellsize = 2; // Dimensions of each cell in the grid
var cols, rows;   // Number of columns and rows in our system


function setup() {
  size(200,200,P3D);
  img = loadImage( "World-of-Warcraft-Dragon-1920x1080.jpg" ); // Load the image
  cols = width/cellsize;              // Calculate # of columns
  rows = height/cellsize;             // Calculate # of rows

}

function draw() {
  background(255);
  img.loadPixels();

  // Begin loop for columns
  for (var i = 0; i < cols; i++ ) {
    // Begin loop for rows
    for (var j = 0; j < rows; j++ ) {
      var x = i*cellsize + cellsize/2; // x position
      var y = j*cellsize + cellsize/2; // y position
      var loc = x + y*width;           // Pixel array location
      var c = img.pixels[loc];       // Grab the color

      // Calculate a z position as a function of mouseX and pixel brightness
      var z = (mouseX/width) * brightness(img.pixels[loc])- 100.0;

      // Translate to the location, set fill and stroke, and draw the rect
      pushMatrix();
      translate(x,y,z); 
      fill(c);
      noStroke();
      rectMode(CENTER);
      rect(0,0,cellsize,cellsize);
      popMatrix();
    }
  }
}

run();
