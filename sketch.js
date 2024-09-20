let texto = "T    T"
let texto2 = "_____"
let texto3 = "Não aperte em nada"
let texto4 = "'-'"
let texto5 = "não sei oque fazer"

function setup() {
  createCanvas(400, 400);  
}

function draw() {
  fill("white");
  background("black");
  circle(200, 200, 400);
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  text(texto, 200, 200);
  text(texto2, 200, 220);
  textSize(32);
  text(texto3, 200, 300);
  text(texto5, 200, 100)
  
//AI
  
//console.log(mouseIsPressed);
  fill("white");
  rect(mouseX, mouseY, 5, 5);
  if(mouseIsPressed) {
    fill("white");
    circle(200, 200, 400);
    fill("black");
    textSize(64);
    text(texto4, 200, 200);
  }
}