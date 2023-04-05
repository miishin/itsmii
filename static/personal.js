const VELOCITY = 3;
var x, y;
var vx, vy;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.parent('content');
  frameRate(50);
  
  x = windowWidth / 2;
  y = windowHeight / 2;
  
  vx = random() < 0.5 ? VELOCITY : -VELOCITY;
  vy = random() < 0.5 ? VELOCITY : -VELOCITY;
  
  background("#F6D309");
  textSize(50);
}

function draw() {
  background("#F6D309");
  text('mii', x, y);
  x += vx;
  y += vy;
  if(x < 0 || x > windowWidth - 50) vx *= -1;
  if(y < 35 || y > windowHeight) vy *= -1;
}