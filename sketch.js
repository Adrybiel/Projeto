let cor

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(145, 0, 255);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
}

// função de desenhar

function draw() {
  if(mouseIsPressed)
    circle(mouseX, mouseY, 10, 10)
    fill(0)
}
