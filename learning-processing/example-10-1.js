//http://www.learningprocessing.com/examples/chapter-10/example-10-1/

require("ringo/processing").wire(this);
var Catcher = require("./catcher").Catcher;
var catcher;

function setup() {
  size(400,400);
  catcher = new Catcher(32);
  smooth();

}

function draw() {
  background(255);
  catcher.setLocation(mouseX,mouseY);
  catcher.display(sketch);
}

run();
