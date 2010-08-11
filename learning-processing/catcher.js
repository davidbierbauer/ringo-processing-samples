
exports.Catcher=function(r){
 
  var x=0;
  var y=0;; // location
  
  this.setLocation=function(tempX,tempY) {
    x = tempX;
    y = tempY;
  }
  
  this.display=function(sketch) {
    sketch.stroke(0);
    sketch.fill(175);
    sketch.ellipse(x,y,r*2,r*2);
  }
}
