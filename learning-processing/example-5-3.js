//http://www.learningprocessing.com/examples/chapter-5/example-5-3/

require("ringo/processing").wire(this);

function setup() {
    size(200, 200);
}

function draw() {
  
  background(255);
  stroke(0);
  line(100,0,100,200);
  line(0,100,200,100);
  
  // Fill a black color
  noStroke();
  fill(0);

  // Depending on the mouse location, a different rectangle is displayed.    
  if (mouseX < 100 && mouseY < 100) {
    rect(0,0,100,100);
  } else if (mouseX > 100 && mouseY < 100) {
    rect(100,0,100,100);
  } else if (mouseX < 100 && mouseY > 100) {
    rect(0,100,100,100);
  } else if (mouseX > 100 && mouseY > 100) {
    rect(100,100,100,100);
  }

}

run();
