var canvas;
var points;

const NUM_POINTS = 8;
const POINT_SIZE = 8;
const PIXEL_SIZE = 8;
const FRAME_RATE = 10;

var COLORS;

class Point {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  
  randomMove() {
    //this.x += random(-1, 1) * POINT_SIZE / 2;
    //this.y += random(-1, 1) * POINT_SIZE / 2;
    if(random() < 0.5) {
      if(random() < 0.5) this.x -= PIXEL_SIZE * 2; else this.x += PIXEL_SIZE * 2;
    } else {
      if(random() < 0.5) this.y -= PIXEL_SIZE * 2; else this.y += PIXEL_SIZE * 2;
    }
    this.constrainCoordinates();
  }
  
  constrainCoordinates() {
    constrain(this.x, 0, windowWidth);
    constrain(this.y, 0, windowHeight);
  }
}

function randomColor() {
  return random(COLORS);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function roundCoordinate(num) {
  return (num / PIXEL_SIZE) * PIXEL_SIZE;
}

function setup() {
  const LIGHT_PINK = color("#fbcbc1");
  const RED = color("#D8363F");
  const YELLOW = color("#F6D309");
  const TEAL = color("#00CECA");
  const BLUE = color("#153580");
  COLORS = [LIGHT_PINK, RED, YELLOW, TEAL, BLUE];
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  points = [];
  var x, y;
  for(let i = 0; i < NUM_POINTS; i++) {
    x = roundCoordinate(random(i * (windowWidth/ NUM_POINTS), (i + 1) * (windowWidth / NUM_POINTS)));
    y = roundCoordinate(random(windowHeight));
    points.push(new Point(x, y, randomColor()));
  }
  frameRate(FRAME_RATE);
  strokeWeight(POINT_SIZE);
}

function draw() {
  points.forEach(p => {
    if(frameCount % (FRAME_RATE * 10) == 0) p.color = randomColor();
    stroke(p.color);
    p.randomMove();
    rect(p.x, p.y, PIXEL_SIZE + 1, PIXEL_SIZE + 1);
    //point(p.x, p.y);
  });
}