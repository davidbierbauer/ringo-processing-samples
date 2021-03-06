//http://www.learningprocessing.com/examples/chapter-13/example-13-3-probabilities/

require("ringo/processing").wire(this);

function setup() {
    size(200, 200);
    background(255);
    smooth();
    noStroke();
}

function draw() {
  // Probabilities for 3 different cases
  // These need to add up to 100%!
  var red_prob = 0.60;   // 60% chance of red color
  var green_prob = 0.10; // 10% chance of green color
  var blue_prob = 0.30;  // 30% chance of blue color
  
  // Pick a random number between 0 and 1
  var num = random(1);  
  
  // If random number is less than .6
  if (num < red_prob) {
    fill(255,53,2,150);
  // If random number is between .6 and .7
  } else if (num < green_prob + red_prob) {
    fill(156,255,28,150);
  // All other cases (i.e. between .7 and 1.0)
  } else {
    fill(10,52,178,150);
  }
  
  // Draw ellipse
  ellipse(random(width),random(height),64,64);

}

run();
