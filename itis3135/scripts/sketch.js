function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(220);
    translate(width / 2, height / 2);
    rotate(frameCount);
    strokeWeight(4);
    line(0, 0, 100, 0);
  }
  