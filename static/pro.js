//https://happycoding.io/tutorials/p5js/animation/bouncing-line
const FRAME_RATE = 50;
const COLOR_VELOCITY = 25;
const VELOCITY = 5;
const VELOCITY_CHANGE = 1;
const MAX_VELOCITY = 10;

var r, g, b;
var x1, y1, x2, y2;
var dx1, dy1, dx2, dy2;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function incrementColor() {
  r = constrain(r + random(-COLOR_VELOCITY, COLOR_VELOCITY), 0, 255);
  g = constrain(g + random(-COLOR_VELOCITY, COLOR_VELOCITY), 0, 255);
  b = constrain(b + random(-COLOR_VELOCITY, COLOR_VELOCITY), 0, 255);
  stroke(r, g, b, 170);
}

function setup() {
  r = 0;
  g = 206;
  b = 202;
  stroke(r, g, b, 170);
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.parent('content');
  
  frameRate(FRAME_RATE);
  
  x1 = random(windowWidth);
  x2 = random(windowWidth);
  y1 = 0;
  y2 = windowHeight;
  
  dx1 = random(-VELOCITY, VELOCITY);
  dx2 = random(-VELOCITY, VELOCITY);
  dy1 = random(-VELOCITY, VELOCITY);
  dy2 = random(-VELOCITY, VELOCITY);
}


function moveLine(){
  x1 += dx1;
  if(x1 < 0) dx1 = -1 * constrain(dx1 - VELOCITY_CHANGE, -MAX_VELOCITY, 0);
  if(x1 > windowWidth) dx1 = -1 * constrain(dx1 + VELOCITY_CHANGE, 0, MAX_VELOCITY);
  //if(x1 < 0 || x1 > windowWidth) dx1 = -1 * (dx1 + random(-VELOCITY, VELOCITY));
  x2 += dx2;
  if(x2 < 0) dx2 = -1 * constrain(dx2 - VELOCITY_CHANGE, -MAX_VELOCITY, 0);
  if(x2 > windowWidth) dx2 = -1 * constrain(dx2 + VELOCITY_CHANGE, 0, MAX_VELOCITY);
  //if(x2 < 0 || x2 > windowWidth) dx2 = -1 * (dx2 + random(-VELOCITY, VELOCITY));
  y1 += dy1;
  if(y1 < 0) dy1 = -1 * constrain(dy1 - VELOCITY_CHANGE, -MAX_VELOCITY, 0);
  if(y1 > windowHeight) dy1 = -1 * constrain(dy1 + VELOCITY_CHANGE, 0, MAX_VELOCITY);
  //if(y1 < 0 || y1 > windowHeight) dy1 = -1 * (dy1 + random(-VELOCITY, VELOCITY));
  y2 += dy2;
  if(y2 < 0) dy2 = -1 * constrain(dy2 - VELOCITY_CHANGE, -MAX_VELOCITY, 0);
  if(y2 > windowHeight) dy2 = -1 * constrain(dy2 + VELOCITY_CHANGE, 0, MAX_VELOCITY);
  //if(y2 < 0 || y2 > windowHeight) dy2 = -1 * (dy2 + random(-VELOCITY, VELOCITY));
}

function draw() {
  if(frameCount == 1234) noLoop();
  incrementColor();
  moveLine();
  line(x1, y1, x2, y2);
}